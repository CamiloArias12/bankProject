import { ApolloWrapper } from '@/lib/graphql/apollo-provider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClientCookiesProvider } from '@/lib/cookies/CookiesProvider'
import { cookies } from 'next/headers'
import AuthProvider from './auth/AuthProvider'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bank',
  icons: '/logo.svg'
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientCookiesProvider value={cookies().getAll()}>
          <AuthProvider session={session}>
            <ApolloWrapper>{children}</ApolloWrapper>
          </AuthProvider>
        </ClientCookiesProvider>
      </body>
    </html>
  )
}
