/**
 * Next.js Middleware - Admin Authentication
 */

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Protect /admin routes with Basic Auth
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const authHeader = request.headers.get('authorization');

    if (!authHeader) {
      return new NextResponse('Authentication required', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Admin Area"',
        },
      });
    }

    // Parse Basic Auth
    const auth = authHeader.split(' ')[1];
    const [user, password] = Buffer.from(auth, 'base64').toString().split(':');

    // Check credentials (In production, use environment variables!)
    const validUser = process.env.ADMIN_USER || 'admin';
    const validPassword = process.env.ADMIN_PASSWORD || 'schmitter2025';

    if (user !== validUser || password !== validPassword) {
      return new NextResponse('Invalid credentials', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Admin Area"',
        },
      });
    }
  }

  return NextResponse.next();
}

// Configure which routes to protect
export const config = {
  matcher: '/admin/:path*',
};

