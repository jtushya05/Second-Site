'use client';

import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container py-10 px-5"> {/* changed padding to py-10 and px-5 */}
        <div className="grid gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">EA Global</h3>
            <p className="text-sm">Your trusted partner in international education and test preparation.</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white">
                <Facebook size={20} />
              </Link>
              <Link href="https://instagram.com/eaglobaledu" className="hover:text-white">
                <Instagram size={20} />
              </Link>
              <Link href="https://www.linkedin.com/in/darshana-englisharena" className="hover:text-white">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/destinations" className="hover:text-white">Study Abroad</Link></li>
              <li><Link href="/test-prep" className="hover:text-white">Test Preparation</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <MapPin size={16} />
                127A Brikkiln Road,
                <br></br>Chennai, Tamil Nadu 600040
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} />
                +91 98940 18848
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} />
                info@englisharenaglobal.com
              </p>
            </div>
          </div>

          {/* Office Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Office Hours</h4>
            <ul className="space-y-2 text-sm">
              <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
              <li>Saturday: 9:00 AM - 2:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 py-4">
        <div className="container text-center text-sm">
          © {new Date().getFullYear()} EA Global. All rights reserved.
        </div>
      </div>
    </footer>
  );
}