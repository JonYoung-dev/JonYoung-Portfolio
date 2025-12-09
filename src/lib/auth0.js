import { Auth0Client } from "@auth0/nextjs-auth0/server";

// export const auth0 = new Auth0Client();
export const auth0 = new Auth0Client({
  domain: process.env.NEXT_PUBLIC_AUTH0_DOMAIN,     // dev-xxxx.us.auth0.com
  clientId: process.env.AUTH0_CLIENT_ID,            // same as NEXT_PUBLIC_AUTH0_CLIENT_ID
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  appBaseUrl: process.env.AUTH0_BASE_URL,           // http://localhost:3000
  issuerBaseURL: `https://${process.env.AUTH0_ISSUER_BASE_URL}`, // full URL required
  secret: process.env.AUTH0_SECRET,
});
