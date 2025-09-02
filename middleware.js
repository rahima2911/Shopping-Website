import { withAuth } from "next-auth/middleware"

export default withAuth(
  function middleware(req) {
    // Additional middleware logic can go here
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // Protect all routes under /home, /services, /about, /contact
        const protectedPaths = ['/home', '/services', '/about', '/contact']
        const isProtectedPath = protectedPaths.some(path => 
          req.nextUrl.pathname.startsWith(path)
        )
        
        if (isProtectedPath) {
          return !!token
        }
        
        return true
      },
    },
  }
)

export const config = {
  matcher: ['/home/:path*', '/services/:path*', '/about/:path*', '/contact/:path*']
}