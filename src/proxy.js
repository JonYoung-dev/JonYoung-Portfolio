import { auth0 } from "./lib/auth0";

export async function proxy(request) {
  console.log(request)
  return await auth0.middleware(request);
}

export async function GET() {
  return auth0.handleLogout({
    returnTo: "http://localhost:3000", // where user goes after logout
  });
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)"
  ]
};