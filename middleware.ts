import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";



export async function middleware(request: Request) {
    const isLoggedIn = false;

    if (!isLoggedIn && request.url === "http://localhost:3000/") {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    return NextResponse.next();
  
}

