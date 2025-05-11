import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { auth } from '@/shared/api';

export async function middleware(request: NextRequest) {
  const session = await auth();

  if (!session?.user) {
    const url = new URL('/auth/login', request.url);
    url.searchParams.set('callbackUrl', request.nextUrl.pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/problems/:path*', '/profile/:path*'],
};
