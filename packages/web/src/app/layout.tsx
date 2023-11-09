import { ApolloWrapper } from '@/lib/graphql/apollo-provider';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClientCookiesProvider } from '@/lib/cookies/CookiesProvider';
import { cookies } from 'next/headers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Foncastel',
  icons: '/logo.svg',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
	 <ClientCookiesProvider value={cookies().getAll()}>
	    <ApolloWrapper>{children}</ApolloWrapper>
	 </ClientCookiesProvider>
      </body>
    </html>
  );
}
