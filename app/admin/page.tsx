'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { stringify } from 'csv-stringify/browser/esm/sync';
import * as XLSX from 'xlsx';
import { Container } from '@/components/ui/container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { 
  Users, 
  UserCheck, 
  UserX, 
  Eye, 
  Edit,
  CheckCircle,
  XCircle,
  Clock,
  TrendingUp,
  Share2,
  Target,
  DollarSign,
  Mail,
  Phone,
  MapPin,
  Building,
  Calendar,
  ExternalLink,
  Download,
  FileText,
  Plus,
  Search
} from 'lucide-react';
import { toast } from 'sonner';
import BaseNavigation from '@/components/navigation/BaseNavigation';
import { 
  getAdminStats, 
  getAllAmbassadorRegistrations, 
  getAllCampusGuideRegistrations,
  updateAmbassadorStatus,
  updateCampusGuideStatus,
  getAllReferralCodes,
  getAllReferralTracking,
  getAllConversions,
  createConversion,
  updateConversion,
  deleteConversion,
  exportAllData,
  getAllAmbassadors,
  getAllCampusGuides
} from '@/lib/database';

interface AmbassadorRegistration {
  id: string;
  user_id: string;
  referral_code: string;
  current_occupation: string | null;
  connection_to_ea_global: string | null;
  additional_info: string | null;
  approval_status: 'pending' | 'approved' | 'rejected';
  referral_link: string;
  created_at: string;
  updated_at: string;
  users: {
    full_name: string;
    email: string;
    whatsapp_number: string | null;
    city: string | null;
    linkedin_profile: string | null;
  };
}

interface CampusGuideRegistration {
  id: string;
  user_id: string;
  referral_code: string;
  university: string;
  year_of_study: string;
  course_of_study: string | null;
  previous_leadership_experience: string | null;
  additional_info: string | null;
  approval_status: 'pending' | 'approved' | 'rejected';
  referral_link: string;
  created_at: string;
  updated_at: string;
  users: {
    full_name: string;
    email: string;
    whatsapp_number: string | null;
    city: string | null;
    linkedin_profile: string | null;
  };
}

interface ReferralCode {
  id: string;
  code: string;
  type: string;
  created_at: string;
  is_active: boolean;
  users: {
    full_name: string;
    email: string;
  };
}

interface Conversion {
  id: string;
  referral_code: string;
  ambassador_id?: string;
  campus_guide_id?: string;
  customer_name: string;
  customer_email: string;
  customer_phone?: string;
  service_type: string;
  service_amount?: number;
  conversion_date: string;
  notes?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  created_at: string;
  updated_at: string;
  ambassador?: {
    full_name: string;
    email: string;
  };
  campus_guide?: {
    full_name: string;
    email: string;
  };
}

interface AmbassadorSearchResult {
  id: string;
  full_name: string;
  email: string;
  phone?: string;
  referral_code?: string;
  type: 'ambassador' | 'campus_guide';
}

interface AdminStats {
  totalAmbassadors: number;
  totalCampusGuides: number;
  pendingApprovals: number;
  totalReferralCodes: number;
  totalReferralClicks: number;
  conversionRate: number;
}

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const [activeTab, setActiveTab] = useState('overview');
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [ambassadors, setAmbassadors] = useState<AmbassadorRegistration[]>([]);
  const [campusGuides, setCampusGuides] = useState<CampusGuideRegistration[]>([]);
  const [referralCodes, setReferralCodes] = useState<ReferralCode[]>([]);
  const [conversions, setConversions] = useState<Conversion[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [statusUpdate, setStatusUpdate] = useState({
    status: '',
    notes: ''
  });
  const [newConversion, setNewConversion] = useState({
    referral_code: '',
    customer_name: '',
    customer_email: '',
    customer_phone: '',
    service_type: '',
    service_amount: '',
    conversion_date: new Date().toISOString().split('T')[0],
    notes: ''
  });
  const [showAddConversion, setShowAddConversion] = useState(false);
  const [exportLoading, setExportLoading] = useState(false);
  const [ambassadorSearch, setAmbassadorSearch] = useState('');
  const [ambassadorSearchResults, setAmbassadorSearchResults] = useState<AmbassadorSearchResult[]>([]);
  const [selectedAmbassador, setSelectedAmbassador] = useState<AmbassadorSearchResult | null>(null);

  useEffect(() => {
    if (session?.user?.email) {
      loadAdminData();
    }
  }, [session]);

  // Search ambassadors and campus guides
  useEffect(() => {
    if (ambassadorSearch.length > 0) {
      const searchResults: AmbassadorSearchResult[] = [];
      
      // Search ambassadors
      ambassadors.forEach(amb => {
        const searchTerm = ambassadorSearch.toLowerCase();
        if (
          amb.users.full_name.toLowerCase().includes(searchTerm) ||
          amb.users.email.toLowerCase().includes(searchTerm) ||
          amb.users.whatsapp_number?.toLowerCase().includes(searchTerm) ||
          amb.referral_code.toLowerCase().includes(searchTerm)
        ) {
          searchResults.push({
            id: amb.id,
            full_name: amb.users.full_name,
            email: amb.users.email,
            phone: amb.users.whatsapp_number || undefined,
            referral_code: amb.referral_code,
            type: 'ambassador'
          });
        }
      });

      // Search campus guides
      campusGuides.forEach(guide => {
        const searchTerm = ambassadorSearch.toLowerCase();
        if (
          guide.users.full_name.toLowerCase().includes(searchTerm) ||
          guide.users.email.toLowerCase().includes(searchTerm) ||
          guide.users.whatsapp_number?.toLowerCase().includes(searchTerm) ||
          guide.referral_code.toLowerCase().includes(searchTerm)
        ) {
          searchResults.push({
            id: guide.id,
            full_name: guide.users.full_name,
            email: guide.users.email,
            phone: guide.users.whatsapp_number || undefined,
            referral_code: guide.referral_code,
            type: 'campus_guide'
          });
        }
      });

      setAmbassadorSearchResults(searchResults);
    } else {
      setAmbassadorSearchResults([]);
    }
  }, [ambassadorSearch, ambassadors, campusGuides]);

  const loadAdminData = async () => {
    try {
      setLoading(true);
      const [statsData, ambassadorData, campusGuideData, referralCodeData, conversionsData] = await Promise.all([
        getAdminStats(),
        getAllAmbassadorRegistrations(),
        getAllCampusGuideRegistrations(),
        getAllReferralCodes(),
        getAllConversions()
      ]);
      
      setStats(statsData);
      setAmbassadors(ambassadorData);
      setCampusGuides(campusGuideData);
      setReferralCodes(referralCodeData);
      setConversions(conversionsData);
    } catch (error) {
      console.error('Error loading admin data:', error);
      toast.error('Failed to load admin data');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (id: string, type: 'ambassador' | 'campus_guide') => {
    try {
      if (type === 'ambassador') {
        await updateAmbassadorStatus(id, statusUpdate.status as any, statusUpdate.notes, session?.user?.email || '');
      } else {
        await updateCampusGuideStatus(id, statusUpdate.status as any, statusUpdate.notes, session?.user?.email || '');
      }
      
      toast.success('Status updated successfully');
      setSelectedUser(null);
      setStatusUpdate({ status: '', notes: '' });
      loadAdminData();
    } catch (error) {
      console.error('Error updating status:', error);
      toast.error('Failed to update status');
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return <Badge className="bg-green-100 text-green-800"><CheckCircle className="h-3 w-3 mr-1" />Approved</Badge>;
      case 'rejected':
        return <Badge className="bg-red-100 text-red-800"><XCircle className="h-3 w-3 mr-1" />Rejected</Badge>;
      default:
        return <Badge className="bg-yellow-100 text-yellow-800"><Clock className="h-3 w-3 mr-1" />Pending</Badge>;
    }
  };

  const getConversionStatusBadge = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <Badge className="bg-green-100 text-green-800"><CheckCircle className="h-3 w-3 mr-1" />Confirmed</Badge>;
      case 'cancelled':
        return <Badge className="bg-red-100 text-red-800"><XCircle className="h-3 w-3 mr-1" />Cancelled</Badge>;
      default:
        return <Badge className="bg-yellow-100 text-yellow-800"><Clock className="h-3 w-3 mr-1" />Pending</Badge>;
    }
  };

  const handleExportData = async (format: 'json' | 'csv' | 'excel') => {
    try {
      setExportLoading(true);
      const data = await exportAllData();
      const timestamp = new Date().toISOString().split('T')[0];
      
      if (format === 'json') {
        // Create and download JSON file
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `ea-global-data-export-${timestamp}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      } else if (format === 'csv') {
        // Create CSV files for each data type
        const csvFiles = [
          { name: 'users', data: data.users },
          { name: 'ambassadors', data: data.ambassadors },
          { name: 'campus-guides', data: data.campusGuides },
          { name: 'referral-codes', data: data.referralTracking },
          { name: 'conversions', data: data.conversions }
        ];

        // Create a zip-like approach by downloading multiple CSV files
        for (const file of csvFiles) {
          if (file.data && file.data.length > 0) {
            const csvContent = stringify(file.data, { header: true });
            const blob = new Blob([csvContent], { type: 'text/csv' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `ea-global-${file.name}-${timestamp}.csv`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            // Small delay between downloads
            await new Promise(resolve => setTimeout(resolve, 100));
          }
        }
      } else if (format === 'excel') {
        // Create Excel workbook with multiple sheets
        const workbook = XLSX.utils.book_new();
        
        // Add each data type as a separate sheet
        if (data.users && data.users.length > 0) {
          const usersSheet = XLSX.utils.json_to_sheet(data.users);
          XLSX.utils.book_append_sheet(workbook, usersSheet, 'Users');
        }
        
        if (data.ambassadors && data.ambassadors.length > 0) {
          const ambassadorsSheet = XLSX.utils.json_to_sheet(data.ambassadors);
          XLSX.utils.book_append_sheet(workbook, ambassadorsSheet, 'Ambassadors');
        }
        
        if (data.campusGuides && data.campusGuides.length > 0) {
          const campusGuidesSheet = XLSX.utils.json_to_sheet(data.campusGuides);
          XLSX.utils.book_append_sheet(workbook, campusGuidesSheet, 'Campus Guides');
        }
        
        if (data.referralTracking && data.referralTracking.length > 0) {
          const referralSheet = XLSX.utils.json_to_sheet(data.referralTracking);
          XLSX.utils.book_append_sheet(workbook, referralSheet, 'Referral Tracking');
        }
        
        if (data.conversions && data.conversions.length > 0) {
          const conversionsSheet = XLSX.utils.json_to_sheet(data.conversions);
          XLSX.utils.book_append_sheet(workbook, conversionsSheet, 'Conversions');
        }
        
        // Write the workbook and download
        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `ea-global-data-export-${timestamp}.xlsx`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }
      
      toast.success(`Data exported successfully as ${format.toUpperCase()}`);
    } catch (error) {
      console.error('Error exporting data:', error);
      toast.error('Failed to export data');
    } finally {
      setExportLoading(false);
    }
  };

  const handleAddConversion = async () => {
    try {
      if (!newConversion.referral_code || !newConversion.customer_name || !newConversion.customer_email || !newConversion.service_type) {
        toast.error('Please fill in all required fields');
        return;
      }

      const conversionData = {
        referral_code: newConversion.referral_code,
        customer_name: newConversion.customer_name,
        customer_email: newConversion.customer_email,
        customer_phone: newConversion.customer_phone || undefined,
        service_type: newConversion.service_type,
        service_amount: newConversion.service_amount ? parseFloat(newConversion.service_amount) : undefined,
        conversion_date: newConversion.conversion_date,
        notes: newConversion.notes || undefined,
        created_by: session?.user?.email || ''
      };

      const result = await createConversion(conversionData);
      
      if (result.success) {
        toast.success('Conversion added successfully');
        setShowAddConversion(false);
        setNewConversion({
          referral_code: '',
          customer_name: '',
          customer_email: '',
          customer_phone: '',
          service_type: '',
          service_amount: '',
          conversion_date: new Date().toISOString().split('T')[0],
          notes: ''
        });
        setSelectedAmbassador(null);
        setAmbassadorSearch('');
        loadAdminData();
      } else {
        toast.error('Failed to add conversion: ' + result.error);
      }
    } catch (error) {
      console.error('Error adding conversion:', error);
      toast.error('Failed to add conversion');
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <Container className="py-16">
          <div className="text-center">
            <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
            <p>Loading admin dashboard...</p>
          </div>
        </Container>
      </div>
    );
  }

  if (!session?.user?.email) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <Container className="py-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h1>
            <p className="text-gray-600">Please sign in to access the admin dashboard.</p>
          </div>
        </Container>
      </div>
    );
  }

  // Check if user is an authorized admin
  const adminEmails = process.env.NEXT_PUBLIC_ADMIN_EMAILS?.split(',').map(email => email.trim()) || [];
  const isAuthorizedAdmin = adminEmails.includes(session.user.email);

  if (!isAuthorizedAdmin) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <Container className="py-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h1>
            <p className="text-gray-600">You are not authorized to access the admin dashboard.</p>
            <p className="text-sm text-gray-500 mt-2">Your email: {session.user.email}</p>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <>
      <BaseNavigation variant="solid" />
      <div className="min-h-screen bg-gray-50 pt-20">
        <Container className="py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
            <p className="text-gray-600">Manage ambassadors, campus guides, and referral system</p>
          </div>

          {/* Navigation Tabs */}
          <div className="mb-8">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                {[
                  { id: 'overview', label: 'Overview', icon: TrendingUp },
                  { id: 'ambassadors', label: 'Ambassadors', icon: Users },
                  { id: 'campus-guides', label: 'Campus Guides', icon: UserCheck },
                  { id: 'referrals', label: 'Referral Codes', icon: Share2 },
                  { id: 'conversions', label: 'Conversions', icon: Target },
                  { id: 'export', label: 'Export Data', icon: Download }
                ].map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center py-2 px-1 border-b-2 font-medium text-sm ${
                        activeTab === tab.id
                          ? 'border-primary text-primary'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      <Icon className="h-4 w-4 mr-2" />
                      {tab.label}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Overview Tab */}
          {activeTab === 'overview' && stats && (
            <div className="space-y-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Ambassadors</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stats.totalAmbassadors}</div>
                    <p className="text-xs text-muted-foreground">
                      Registered ambassador applications
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Campus Guides</CardTitle>
                    <UserCheck className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stats.totalCampusGuides}</div>
                    <p className="text-xs text-muted-foreground">
                      Campus guide registrations
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Pending Approvals</CardTitle>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stats.pendingApprovals}</div>
                    <p className="text-xs text-muted-foreground">
                      Awaiting review
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Referral Codes</CardTitle>
                    <Share2 className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stats.totalReferralCodes}</div>
                    <p className="text-xs text-muted-foreground">
                      Active referral codes
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Clicks</CardTitle>
                    <Target className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stats.totalReferralClicks}</div>
                    <p className="text-xs text-muted-foreground">
                      Referral link clicks
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stats.conversionRate.toFixed(1)}%</div>
                    <p className="text-xs text-muted-foreground">
                      Click to conversion rate
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Ambassadors Tab */}
          {activeTab === 'ambassadors' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Ambassador Registrations</h2>
                <Button onClick={loadAdminData} variant="outline">Refresh</Button>
              </div>
              
              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Occupation</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Registered</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {ambassadors.map((ambassador) => (
                        <TableRow key={ambassador.id}>
                          <TableCell className="font-medium">{ambassador.users.full_name}</TableCell>
                          <TableCell>{ambassador.users.email}</TableCell>
                          <TableCell>{ambassador.current_occupation || 'Not specified'}</TableCell>
                          <TableCell>{getStatusBadge(ambassador.approval_status)}</TableCell>
                          <TableCell>{formatDate(ambassador.created_at)}</TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => setSelectedUser(ambassador)}
                                  >
                                    <Eye className="h-4 w-4" />
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-2xl">
                                  <DialogHeader>
                                    <DialogTitle>Ambassador Details</DialogTitle>
                                  </DialogHeader>
                                  {selectedUser && (
                                    <div className="space-y-4">
                                      <div className="grid grid-cols-2 gap-4">
                                        <div>
                                          <label className="text-sm font-medium">Full Name</label>
                                          <p className="text-sm text-gray-600">{selectedUser.users.full_name}</p>
                                        </div>
                                        <div>
                                          <label className="text-sm font-medium">Email</label>
                                          <p className="text-sm text-gray-600">{selectedUser.users.email}</p>
                                        </div>
                                        <div>
                                          <label className="text-sm font-medium">WhatsApp</label>
                                          <p className="text-sm text-gray-600">{selectedUser.users.whatsapp_number || 'Not provided'}</p>
                                        </div>
                                        <div>
                                          <label className="text-sm font-medium">City</label>
                                          <p className="text-sm text-gray-600">{selectedUser.users.city || 'Not provided'}</p>
                                        </div>
                                        <div>
                                          <label className="text-sm font-medium">Current Occupation</label>
                                          <p className="text-sm text-gray-600">{selectedUser.current_occupation || 'Not specified'}</p>
                                        </div>
                                        <div>
                                          <label className="text-sm font-medium">Referral Code</label>
                                          <p className="text-sm text-gray-600 font-mono">{selectedUser.referral_code}</p>
                                        </div>
                                      </div>
                                      
                                      <div>
                                        <label className="text-sm font-medium">Connection to EA Global</label>
                                        <p className="text-sm text-gray-600">{selectedUser.connection_to_ea_global || 'Not specified'}</p>
                                      </div>
                                      
                                      {selectedUser.additional_info && (
                                        <div>
                                          <label className="text-sm font-medium">Additional Information</label>
                                          <p className="text-sm text-gray-600">{selectedUser.additional_info}</p>
                                        </div>
                                      )}
                                      
                                      <div className="border-t pt-4">
                                        <label className="text-sm font-medium">Update Status</label>
                                        <div className="mt-2 space-y-3">
                                          <Select onValueChange={(value) => setStatusUpdate(prev => ({ ...prev, status: value }))}>
                                            <SelectTrigger>
                                              <SelectValue placeholder="Select new status" />
                                            </SelectTrigger>
                                            <SelectContent>
                                              <SelectItem value="pending">Pending</SelectItem>
                                              <SelectItem value="approved">Approved</SelectItem>
                                              <SelectItem value="rejected">Rejected</SelectItem>
                                            </SelectContent>
                                          </Select>
                                          <Textarea
                                            placeholder="Add notes about this status change..."
                                            value={statusUpdate.notes}
                                            onChange={(e) => setStatusUpdate(prev => ({ ...prev, notes: e.target.value }))}
                                          />
                                          <Button
                                            onClick={() => handleStatusUpdate(selectedUser.id, 'ambassador')}
                                            disabled={!statusUpdate.status}
                                            className="w-full"
                                          >
                                            Update Status
                                          </Button>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </DialogContent>
                              </Dialog>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Campus Guides Tab */}
          {activeTab === 'campus-guides' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Campus Guide Registrations</h2>
                <Button onClick={loadAdminData} variant="outline">Refresh</Button>
              </div>
              
              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>University</TableHead>
                        <TableHead>Year</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Registered</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {campusGuides.map((guide) => (
                        <TableRow key={guide.id}>
                          <TableCell className="font-medium">{guide.users.full_name}</TableCell>
                          <TableCell>{guide.users.email}</TableCell>
                          <TableCell>{guide.university}</TableCell>
                          <TableCell>{guide.year_of_study}</TableCell>
                          <TableCell>{getStatusBadge(guide.approval_status)}</TableCell>
                          <TableCell>{formatDate(guide.created_at)}</TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => setSelectedUser(guide)}
                                  >
                                    <Eye className="h-4 w-4" />
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-2xl">
                                  <DialogHeader>
                                    <DialogTitle>Campus Guide Details</DialogTitle>
                                  </DialogHeader>
                                  {selectedUser && (
                                    <div className="space-y-4">
                                      <div className="grid grid-cols-2 gap-4">
                                        <div>
                                          <label className="text-sm font-medium">Full Name</label>
                                          <p className="text-sm text-gray-600">{selectedUser.users.full_name}</p>
                                        </div>
                                        <div>
                                          <label className="text-sm font-medium">Email</label>
                                          <p className="text-sm text-gray-600">{selectedUser.users.email}</p>
                                        </div>
                                        <div>
                                          <label className="text-sm font-medium">WhatsApp</label>
                                          <p className="text-sm text-gray-600">{selectedUser.users.whatsapp_number || 'Not provided'}</p>
                                        </div>
                                        <div>
                                          <label className="text-sm font-medium">City</label>
                                          <p className="text-sm text-gray-600">{selectedUser.users.city || 'Not provided'}</p>
                                        </div>
                                        <div>
                                          <label className="text-sm font-medium">University</label>
                                          <p className="text-sm text-gray-600">{selectedUser.university}</p>
                                        </div>
                                        <div>
                                          <label className="text-sm font-medium">Year of Study</label>
                                          <p className="text-sm text-gray-600">{selectedUser.year_of_study}</p>
                                        </div>
                                        <div>
                                          <label className="text-sm font-medium">Course</label>
                                          <p className="text-sm text-gray-600">{selectedUser.course_of_study || 'Not specified'}</p>
                                        </div>
                                        <div>
                                          <label className="text-sm font-medium">Referral Code</label>
                                          <p className="text-sm text-gray-600 font-mono">{selectedUser.referral_code}</p>
                                        </div>
                                      </div>
                                      
                                      {selectedUser.previous_leadership_experience && (
                                        <div>
                                          <label className="text-sm font-medium">Leadership Experience</label>
                                          <p className="text-sm text-gray-600">{selectedUser.previous_leadership_experience}</p>
                                        </div>
                                      )}
                                      
                                      {selectedUser.additional_info && (
                                        <div>
                                          <label className="text-sm font-medium">Additional Information</label>
                                          <p className="text-sm text-gray-600">{selectedUser.additional_info}</p>
                                        </div>
                                      )}
                                      
                                      <div className="border-t pt-4">
                                        <label className="text-sm font-medium">Update Status</label>
                                        <div className="mt-2 space-y-3">
                                          <Select onValueChange={(value) => setStatusUpdate(prev => ({ ...prev, status: value }))}>
                                            <SelectTrigger>
                                              <SelectValue placeholder="Select new status" />
                                            </SelectTrigger>
                                            <SelectContent>
                                              <SelectItem value="pending">Pending</SelectItem>
                                              <SelectItem value="approved">Approved</SelectItem>
                                              <SelectItem value="rejected">Rejected</SelectItem>
                                            </SelectContent>
                                          </Select>
                                          <Textarea
                                            placeholder="Add notes about this status change..."
                                            value={statusUpdate.notes}
                                            onChange={(e) => setStatusUpdate(prev => ({ ...prev, notes: e.target.value }))}
                                          />
                                          <Button
                                            onClick={() => handleStatusUpdate(selectedUser.id, 'campus_guide')}
                                            disabled={!statusUpdate.status}
                                            className="w-full"
                                          >
                                            Update Status
                                          </Button>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </DialogContent>
                              </Dialog>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Referral Codes Tab */}
          {activeTab === 'referrals' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Referral Codes</h2>
                <Button onClick={loadAdminData} variant="outline">Refresh</Button>
              </div>
              
              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Code</TableHead>
                        <TableHead>Owner</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Created</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {referralCodes.map((code) => (
                        <TableRow key={code.id}>
                          <TableCell className="font-mono font-medium">{code.code}</TableCell>
                          <TableCell>{code.users.full_name}</TableCell>
                          <TableCell>
                            <Badge variant="outline">
                              {code.type.replace('_', ' ').toUpperCase()}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            {code.is_active ? (
                              <Badge className="bg-green-100 text-green-800">Active</Badge>
                            ) : (
                              <Badge className="bg-gray-100 text-gray-800">Inactive</Badge>
                            )}
                          </TableCell>
                          <TableCell>{formatDate(code.created_at)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Conversions Tab with improved form */}
          {activeTab === 'conversions' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Conversions</h2>
                  <p className="text-gray-600">Track and manage successful referral conversions</p>
                </div>
                <Button onClick={() => setShowAddConversion(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Conversion
                </Button>
              </div>

              {/* Conversion Summary Cards */}
              <div className="grid gap-6 md:grid-cols-3">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Conversions</CardTitle>
                    <Target className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{conversions.length}</div>
                    <p className="text-xs text-muted-foreground">
                      All time conversions
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Confirmed Conversions</CardTitle>
                    <CheckCircle className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {conversions.filter(c => c.status === 'confirmed').length}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Confirmed conversions
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      ${conversions
                        .filter(c => c.status === 'confirmed' && c.service_amount)
                        .reduce((sum, c) => sum + (c.service_amount || 0), 0)
                        .toLocaleString()}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      From confirmed conversions
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Conversions Table */}
              <Card>
                <CardHeader>
                  <CardTitle>All Conversions</CardTitle>
                  <p className="text-sm text-gray-600">Complete list of referral conversions</p>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Customer</TableHead>
                        <TableHead>Referral Code</TableHead>
                        <TableHead>Referred By</TableHead>
                        <TableHead>Service</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {conversions.map((conversion) => (
                        <TableRow key={conversion.id}>
                          <TableCell>
                            <div>
                              <div className="font-medium">{conversion.customer_name}</div>
                              <div className="text-sm text-gray-500">{conversion.customer_email}</div>
                              {conversion.customer_phone && (
                                <div className="text-sm text-gray-500">{conversion.customer_phone}</div>
                              )}
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline">{conversion.referral_code}</Badge>
                          </TableCell>
                          <TableCell>
                            {conversion.ambassador && (
                              <div>
                                <div className="font-medium">{conversion.ambassador.full_name}</div>
                                <div className="text-sm text-gray-500">Ambassador</div>
                              </div>
                            )}
                            {conversion.campus_guide && (
                              <div>
                                <div className="font-medium">{conversion.campus_guide.full_name}</div>
                                <div className="text-sm text-gray-500">Campus Guide</div>
                              </div>
                            )}
                          </TableCell>
                          <TableCell>{conversion.service_type}</TableCell>
                          <TableCell>
                            {conversion.service_amount ? `$${conversion.service_amount.toLocaleString()}` : '-'}
                          </TableCell>
                          <TableCell>{getConversionStatusBadge(conversion.status)}</TableCell>
                          <TableCell>{formatDate(conversion.conversion_date)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Export Tab */}
          {activeTab === 'export' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Export Data</h2>
                <p className="text-gray-600">Download all system data for backup or analysis</p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Export All Data</CardTitle>
                  <p className="text-sm text-gray-600">
                    Export all users, ambassadors, campus guides, referral codes, tracking data, 
                    lead captures, and conversions in your preferred format.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex items-center space-x-2">
                          <Users className="h-8 w-8 text-blue-500" />
                          <div>
                            <h3 className="font-semibold">User Data</h3>
                            <p className="text-sm text-gray-600">All registered users and their profiles</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex items-center space-x-2">
                          <UserCheck className="h-8 w-8 text-green-500" />
                          <div>
                            <h3 className="font-semibold">Registrations</h3>
                            <p className="text-sm text-gray-600">Ambassador and campus guide applications</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex items-center space-x-2">
                          <Share2 className="h-8 w-8 text-purple-500" />
                          <div>
                            <h3 className="font-semibold">Referral Data</h3>
                            <p className="text-sm text-gray-600">Codes, tracking, and performance metrics</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex items-center space-x-2">
                          <Target className="h-8 w-8 text-orange-500" />
                          <div>
                            <h3 className="font-semibold">Conversions</h3>
                            <p className="text-sm text-gray-600">Successful referral conversions and revenue</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h3 className="text-lg font-semibold mb-4">Choose Export Format</h3>
                    <div className="grid gap-3 md:grid-cols-3">
                      <Button 
                        onClick={() => handleExportData('json')} 
                        disabled={exportLoading}
                        variant="outline"
                        className="flex-col h-auto py-4"
                      >
                        {exportLoading ? (
                          <div className="animate-spin h-4 w-4 border-2 border-primary border-t-transparent rounded-full mb-2"></div>
                        ) : (
                          <FileText className="h-6 w-6 mb-2" />
                        )}
                        <span className="font-medium">JSON</span>
                        <span className="text-xs text-gray-500">Complete data structure</span>
                      </Button>
                      
                      <Button 
                        onClick={() => handleExportData('csv')} 
                        disabled={exportLoading}
                        variant="outline"
                        className="flex-col h-auto py-4"
                      >
                        {exportLoading ? (
                          <div className="animate-spin h-4 w-4 border-2 border-primary border-t-transparent rounded-full mb-2"></div>
                        ) : (
                          <FileText className="h-6 w-6 mb-2" />
                        )}
                        <span className="font-medium">CSV</span>
                        <span className="text-xs text-gray-500">Separate files per table</span>
                      </Button>
                      
                      <Button 
                        onClick={() => handleExportData('excel')} 
                        disabled={exportLoading}
                        variant="outline"
                        className="flex-col h-auto py-4"
                      >
                        {exportLoading ? (
                          <div className="animate-spin h-4 w-4 border-2 border-primary border-t-transparent rounded-full mb-2"></div>
                        ) : (
                          <Download className="h-6 w-6 mb-2" />
                        )}
                        <span className="font-medium">Excel</span>
                        <span className="text-xs text-gray-500">Multiple sheets workbook</span>
                      </Button>
                    </div>
                    
                    <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600">
                        <strong>Export includes:</strong> User profiles, Ambassador registrations, Campus Guide registrations, 
                        Referral codes & tracking, Lead captures, and Conversion data with revenue details.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Add Conversion Dialog with Ambassador Search */}
          <Dialog open={showAddConversion} onOpenChange={setShowAddConversion}>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Add New Conversion</DialogTitle>
                <DialogDescription>
                  Record a new successful referral conversion.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-6">
                {/* Ambassador Search */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Search Ambassador/Campus Guide</label>
                  <div className="relative">
                    <Input
                      placeholder="Search by name, email, phone, or referral code..."
                      value={ambassadorSearch}
                      onChange={(e) => setAmbassadorSearch(e.target.value)}
                      className="w-full"
                    />
                    {ambassadorSearch && ambassadorSearchResults.length > 0 && (
                      <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
                        {ambassadorSearchResults.map((result) => (
                          <div
                            key={result.id}
                            onClick={() => {
                              setSelectedAmbassador(result);
                              setNewConversion(prev => ({
                                ...prev,
                                referral_code: result.referral_code || ''
                              }));
                              setAmbassadorSearch('');
                            }}
                            className="p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                          >
                            <div className="flex flex-col">
                              <span className="font-medium text-gray-900">{result.full_name}</span>
                              <span className="text-sm text-gray-500">{result.email}</span>
                              <div className="flex items-center justify-between mt-1">
                                <span className="text-xs text-gray-400">
                                  {result.type === 'ambassador' ? 'Ambassador' : 'Campus Guide'} | {result.referral_code}
                                </span>
                                {result.phone && (
                                  <span className="text-xs text-gray-400">{result.phone}</span>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    {ambassadorSearch && ambassadorSearchResults.length === 0 && (
                      <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg p-3">
                        <span className="text-sm text-gray-500">No ambassadors or campus guides found</span>
                      </div>
                    )}
                  </div>
                  {selectedAmbassador && (
                    <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded">
                      <p><strong>Selected:</strong> {selectedAmbassador.full_name}</p>
                      <p><strong>Type:</strong> {selectedAmbassador.type === 'ambassador' ? 'Ambassador' : 'Campus Guide'}</p>
                      <p><strong>Referral Code:</strong> {selectedAmbassador.referral_code}</p>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setSelectedAmbassador(null);
                          setNewConversion(prev => ({ ...prev, referral_code: '' }));
                        }}
                        className="mt-2"
                      >
                        Clear Selection
                      </Button>
                    </div>
                  )}
                </div>

                {/* Manual Referral Code Entry */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Referral Code *</label>
                  <Input
                    value={newConversion.referral_code}
                    onChange={(e) => setNewConversion(prev => ({ ...prev, referral_code: e.target.value }))}
                    placeholder="Enter referral code manually if not selected above"
                  />
                </div>

                {/* Customer Details */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Customer Name *</label>
                    <Input
                      value={newConversion.customer_name}
                      onChange={(e) => setNewConversion(prev => ({ ...prev, customer_name: e.target.value }))}
                      placeholder="Customer full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Customer Email *</label>
                    <Input
                      type="email"
                      value={newConversion.customer_email}
                      onChange={(e) => setNewConversion(prev => ({ ...prev, customer_email: e.target.value }))}
                      placeholder="customer@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Customer Phone</label>
                    <Input
                      value={newConversion.customer_phone}
                      onChange={(e) => setNewConversion(prev => ({ ...prev, customer_phone: e.target.value }))}
                      placeholder="Phone number"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Conversion Date *</label>
                    <Input
                      type="date"
                      value={newConversion.conversion_date}
                      onChange={(e) => setNewConversion(prev => ({ ...prev, conversion_date: e.target.value }))}
                    />
                  </div>
                </div>

                {/* Service Details */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Service Type *</label>
                    <Select 
                      value={newConversion.service_type} 
                      onValueChange={(value) => setNewConversion(prev => ({ ...prev, service_type: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select service type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="study-abroad-consultation">Study Abroad Consultation</SelectItem>
                        <SelectItem value="visa-assistance">Visa Assistance</SelectItem>
                        <SelectItem value="test-preparation">Test Preparation</SelectItem>
                        <SelectItem value="university-application">University Application</SelectItem>
                        <SelectItem value="scholarship-guidance">Scholarship Guidance</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Service Amount ($)</label>
                    <Input
                      type="number"
                      value={newConversion.service_amount}
                      onChange={(e) => setNewConversion(prev => ({ ...prev, service_amount: e.target.value }))}
                      placeholder="0.00"
                      min="0"
                      step="0.01"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Notes</label>
                  <Textarea
                    value={newConversion.notes}
                    onChange={(e) => setNewConversion(prev => ({ ...prev, notes: e.target.value }))}
                    placeholder="Additional notes about this conversion"
                    rows={3}
                  />
                </div>
              </div>
              <DialogFooter className="pt-6">
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setShowAddConversion(false);
                    setSelectedAmbassador(null);
                    setAmbassadorSearch('');
                    setNewConversion({
                      referral_code: '',
                      customer_name: '',
                      customer_email: '',
                      customer_phone: '',
                      service_type: '',
                      service_amount: '',
                      conversion_date: new Date().toISOString().split('T')[0],
                      notes: ''
                    });
                  }}
                >
                  Cancel
                </Button>
                <Button onClick={handleAddConversion}>
                  Add Conversion
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </Container>
      </div>
    </>
  );
}
