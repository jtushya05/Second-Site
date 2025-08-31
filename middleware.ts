import { withAuth } from 'next-auth/middleware';

export default withAuth(
  function middleware(req) {
    // Add any additional middleware logic here
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // Protect admin routes
        if (req.nextUrl.pathname.startsWith('/admin')) {
          const adminEmails = (process.env.ADMIN_EMAILS || '').split(',').map(email => email.trim());
          return !!token && !!token.email && adminEmails.includes(token.email);
        }
        
        // Only protect the ambassador application section
        if (req.nextUrl.pathname.startsWith('/ambassador-circle/dashboard')) {
          return !!token;
        }
        return true;
      },
    },
  }
);

export const config = {
  matcher: ['/ambassador-circle/:path*', '/admin/:path*']
};