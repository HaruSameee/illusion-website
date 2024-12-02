import { type NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  request.headers.set("x-url", request.url);

  return NextResponse.next();
}
