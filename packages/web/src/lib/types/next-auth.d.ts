import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      identification: number;
      role: string;
      name: string;
      email: string;
    };
  }
}

import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    user: {
      identification: number;
      role: string;
      name: string;
      email: string;
    };

  }
}
