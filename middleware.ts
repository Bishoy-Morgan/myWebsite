import createMiddleware from 'next-intl/middleware';
import { routing } from './routing';

export default createMiddleware(routing);

export const config = {
    matcher: [
        // Match all pathnames except for
        // - API routes
        // - _next (Next.js internals) 
        // - _vercel (Vercel internals)
        // - all root files inside /public (e.g. /favicon.ico)
        '/((?!api|_next|_vercel|.*\\..*).*)'
    ]
};