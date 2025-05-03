export { auth as middleware } from '@/shared/api';

console.log('🔐 Middleware /problems loaded');

export const config = {
  matcher: ['/problems/:path*'],
};
