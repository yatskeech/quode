export { auth as middleware } from '@/shared/api';

export const config = {
  matcher: ['/problems/:path*'],
};
