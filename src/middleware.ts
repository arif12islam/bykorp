import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
    // Protect the /admin route
    if (req.nextUrl.pathname.startsWith('/admin')) {
        const basicAuth = req.headers.get('authorization')
        const url = req.nextUrl

        // Grab the password from .env (default to 'bykorp-admin' if not set for safety fallback)
        const ADMIN_PWD = process.env.ADMIN_PASSWORD || 'bykorp-admin'

        if (basicAuth) {
            const authValue = basicAuth.split(' ')[1]
            const [user, pwd] = atob(authValue).split(':')

            if (user === 'admin' && pwd === ADMIN_PWD) {
                return NextResponse.next()
            }
        }

        // Throw HTTP 401 prompt if no auth or wrong password
        url.pathname = '/api/auth'
        return new NextResponse('Authentication Required.', {
            status: 401,
            headers: {
                'WWW-Authenticate': 'Basic realm="Secure Bykorp Admin Portal"'
            }
        })
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/admin/:path*'],
}
