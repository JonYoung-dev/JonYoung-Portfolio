import { auth0 } from "./lib/auth0";

export async function proxy(request) {
  console.log(request)
  return await auth0.middleware(request);
}

export async function GET() {
  return auth0.handleLogout({
    returnTo: process.env.NEXT_PUBLIC_BASE_URL, // where user goes after logout
  });
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)"
  ]
};