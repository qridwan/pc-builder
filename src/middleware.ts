import { withAuth } from "next-auth/middleware";

export default withAuth(function middleware(req) {}, {
  callbacks: {
    authorized({ req, token }) {
      return !!token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export const config = { matcher: ["/pcbuild"] }; // restrict to /pcbuild
