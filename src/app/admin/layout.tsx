/**
 * Admin Layout with Authentication
 */

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Admin Dashboard | Schmitter',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/admin/analytics" className="flex items-center">
                <svg className="w-8 h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span className="text-xl font-bold text-gray-900">Schmitter Admin</span>
              </Link>
            </div>

            <nav className="flex items-center space-x-6">
              <Link 
                href="/admin/analytics" 
                className="text-gray-600 hover:text-blue-600 font-semibold transition"
              >
                📊 Analytics
              </Link>
              <Link 
                href="/" 
                target="_blank"
                className="text-gray-600 hover:text-blue-600 font-semibold transition"
              >
                🌐 Website
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>
    </div>
  );
}

