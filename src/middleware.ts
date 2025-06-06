import { NextRequest, NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;
const SUPPORTED_LANGUAGES = ["he", "en"];
const DEFAULT_LANGUAGE = "he";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    PUBLIC_FILE.test(pathname) ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api")
  ) {
    return NextResponse.next();
  }

  if (SUPPORTED_LANGUAGES.some((lng) => pathname.startsWith(`/${lng}`))) {
    return NextResponse.next();
  }

  return NextResponse.redirect(
    new URL(`/${DEFAULT_LANGUAGE}${pathname}`, request.url)
  );
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
