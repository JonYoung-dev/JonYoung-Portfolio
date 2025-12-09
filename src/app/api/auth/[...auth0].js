// src/pages/api/auth/[...auth0].js

// 1. Import handleAuth from the root package
import { handleAuth } from '@auth0/nextjs-auth0'; 

// 2. Use a default export (required for Pages Router API routes)
export default handleAuth();