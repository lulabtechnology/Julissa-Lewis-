import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PRIMARY_HOST = "jjlindependentaccounting.com";
const LEGACY_HOSTS = new Set([
  "julissalewis.com",
  "www.julissalewis.com",
  "www.jjlindependentaccounting.com"
]);

export function middleware(request: NextRequest) {
  const host = (request.headers.get("host") || "").split(":")[0].toLowerCase();

  if (LEGACY_HOSTS.has(host)) {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.host = PRIMARY_HOST;
    url.port = "";

    if (url.pathname === "/") {
      url.pathname = "/es";
    }

    return NextResponse.redirect(url, 308);
  }

  const response = NextResponse.next();
  response.headers.set(
    "Content-Language",
    request.nextUrl.pathname.startsWith("/en") ? "en" : "es-PA"
  );
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"]
};
