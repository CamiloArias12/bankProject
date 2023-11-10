import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
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
        return user;
      },
    },
    )
  ]
});

export { handler as GET, handler as POST }
