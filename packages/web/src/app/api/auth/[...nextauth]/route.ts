import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/auth/signin'
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        "identification": { label: "Identification", type: "number" },
        "password": { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const { identification, password } = credentials;
        const res = await fetch(`${process.env.API_ENDPOINT}/user/signin`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            identification: identification,
            password: password
          })
        });

        const user = await res.json();

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    },
    )
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) return { ...token, ...user };
      return token;
    },

    async session({ token, session,user }) {
      session.user = {
        identification: token.identification,
        role: token.role,
        name: token.name,
        email: token.email
      };
      return session;
    }
  }

};

export const handler = NextAuth(authOptions);

export { handler as nextAuthConfig };
export { handler as GET, handler as POST }
