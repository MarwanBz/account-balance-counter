import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { hasCookie } from "cookies-next";



// const isLoggedIn =true;

export function middleware(request: NextRequest) {
  let headers = new Headers(request.headers)
  let cookie = request.cookies.has('username')
  console.log(cookie)
    if (cookie) {
      
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/login", request.url));
}

export const config  = {
  matcher: ['/']
}
