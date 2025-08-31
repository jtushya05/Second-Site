'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart3, 
  BookOpen, 
  Clock, 
  Eye, 
  Highlighter, 
  MessageCircle, 
  Search,
  Users,
  TrendingUp,
  Calendar,
  Filter
} from 'lucide-react';
import { getUserAnalytics } from '@/lib/ebook-tracking';

interface AnalyticsSummary {
  totalSessions: number;
  totalReadingTime: number;
  booksAccessed: number;
  averageCompletion: number;
  user: any;
  sessions: any[];
  books: any[];
}

interface EbookAnalyticsDashboardProps {
  className?: string;
}

export const EbookAnalyticsDashboard: React.FC<EbookAnalyticsDashboardProps> = ({ className }) => {
  const [analytics, setAnalytics] = useState<AnalyticsSummary | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [timeframe, setTimeframe] = useState<'day' | 'week' | 'month' | 'all'>('week');

  useEffect(() => {
    loadAnalytics();
  }, []);

  const loadAnalytics = async () => {
    try {
      setLoading(true);
      const data = await getUserAnalytics();
      setAnalytics(data);
      setError(null);
    } catch (err) {
      setError('Failed to load analytics data');
      console.error('Analytics error:', err);
    } finally {
      setLoading(false);
    }
  };

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes}m`;
  };

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getRecentSessions = () => {
    if (!analytics?.sessions) return [];
    
    const now = new Date();
    const timeframes = {
      day: 24 * 60 * 60 * 1000,
      week: 7 * 24 * 60 * 60 * 1000,
      month: 30 * 24 * 60 * 60 * 1000,
      all: Infinity
    };
    
    const cutoff = now.getTime() - timeframes[timeframe];
    
    return analytics.sessions
      .filter(session => new Date(session.created_at).getTime() > cutoff)
      .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
      .slice(0, 10);
  };

  const getMostReadBooks = () => {
    if (!analytics?.books) return [];
    
    return analytics.books
      .sort((a, b) => b.total_time_spent - a.total_time_spent)
      .slice(0, 5);
  };

  if (loading) {
    return (
      <div className={`p-6 ${className}`}>
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/3"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-32 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`p-6 ${className}`}>
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2 text-red-700">
              <TrendingUp className="h-5 w-5" />
              <span>Analytics Error</span>
            </div>
            <p className="mt-2 text-red-600">{error}</p>
            <Button 
              onClick={loadAnalytics} 
              variant="outline" 
              size="sm" 
              className="mt-4"
            >
              Retry
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!analytics) {
    return (
      <div className={`p-6 ${className}`}>
        <Card>
          <CardContent className="p-6 text-center">
            <BookOpen className="h-12 w-12 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No Reading Data</h3>
            <p className="text-gray-600">Start reading to see your analytics!</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const recentSessions = getRecentSessions();
  const mostReadBooks = getMostReadBooks();

  return (
    <div className={`p-6 space-y-6 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Reading Analytics</h2>
          <p className="text-gray-600">Track your digital library usage and progress</p>
        </div>
        
        <div className="flex items-center space-x-2">
          <Filter className="h-4 w-4 text-gray-500" />
          <select
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value as any)}
            className="border border-gray-200 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="day">Last 24 hours</option>
            <option value="week">Last week</option>
            <option value="month">Last month</option>
            <option value="all">All time</option>
          </select>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Sessions</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics.totalSessions}</div>
            <p className="text-xs text-muted-foreground">
              Reading sessions
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Reading Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatTime(analytics.totalReadingTime)}</div>
            <p className="text-xs text-muted-foreground">
              Total time spent reading
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Books Accessed</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics.booksAccessed}</div>
            <p className="text-xs text-muted-foreground">
              Unique books read
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Completion</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Math.round(analytics.averageCompletion)}%</div>
            <p className="text-xs text-muted-foreground">
              Average book completion
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Sessions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="h-5 w-5" />
            <span>Recent Reading Sessions</span>
          </CardTitle>
          <CardDescription>Your latest reading activity</CardDescription>
        </CardHeader>
        <CardContent>
          {recentSessions.length === 0 ? (
            <p className="text-gray-500 text-center py-8">No recent sessions in this timeframe</p>
          ) : (
            <div className="space-y-3">
              {recentSessions.map((session, index) => (
                <div key={session.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full">
                      <span className="text-sm font-medium text-blue-800">{index + 1}</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">{formatDate(session.created_at)}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <span className="flex items-center space-x-1">
                          <Eye className="h-3 w-3" />
                          <span>{session.pages_viewed} pages</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Highlighter className="h-3 w-3" />
                          <span>{session.highlights_created} highlights</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <MessageCircle className="h-3 w-3" />
                          <span>{session.comments_created} comments</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{formatTime(session.total_reading_time)}</p>
                    <p className="text-xs text-gray-500">{session.books_accessed?.length || 0} books</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Most Read Books */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="h-5 w-5" />
            <span>Most Read Books</span>
          </CardTitle>
          <CardDescription>Books you've spent the most time reading</CardDescription>
        </CardHeader>
        <CardContent>
          {mostReadBooks.length === 0 ? (
            <p className="text-gray-500 text-center py-8">No books read yet</p>
          ) : (
            <div className="space-y-3">
              {mostReadBooks.map((book, index) => (
                <div key={book.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
                      <span className="text-sm font-medium text-green-800">{index + 1}</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">{book.book_id}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <span>{book.pages_read} pages read</span>
                        <span>{book.highlights_count} highlights</span>
                        <span>{book.comments_count} comments</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{formatTime(book.total_time_spent)}</p>
                    <Badge variant={book.completion_percentage > 80 ? 'default' : 'secondary'} className="text-xs">
                      {Math.round(book.completion_percentage)}% complete
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* User Info */}
      {analytics.user && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>Reader Profile</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-gray-500">First Visit</p>
                <p className="font-medium">{formatDate(analytics.user.first_visit)}</p>
              </div>
              <div>
                <p className="text-gray-500">Last Visit</p>
                <p className="font-medium">{formatDate(analytics.user.last_visit)}</p>
              </div>
              <div>
                <p className="text-gray-500">User ID</p>
                <p className="font-mono text-xs">{analytics.user.id.substring(0, 8)}...</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
