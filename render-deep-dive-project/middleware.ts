import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  console.log(request, 'request middleware');
  return NextResponse.redirect(new URL('/news2', request.url));
}

export const config = {
  matcher: '/news'
};
