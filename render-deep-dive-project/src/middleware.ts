import { NextRequest, NextResponse } from 'next/server';

export default function middleware(request: NextRequest) {
  console.log(request, 'request middleware');
  return NextResponse.redirect(new URL('/news', request.url));
}

export const config = {
  matcher: ['/']
};
