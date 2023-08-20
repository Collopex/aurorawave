import Topbar from '@/components/shared/Topbar';
import './globals.css';
import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import Bottombar from '@/components/shared/Bottombar';
import { ReduxProvider } from '@/redux/provider';

const urbantist = Urbanist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AuroraWave',
  description: 'Modern Minimalist Weather App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${urbantist.className} bg-[#101010] px-[calc(1vw+24px)] py-10`}
      >
        <ReduxProvider>
          <Topbar />
          {children}
          <Bottombar />
        </ReduxProvider>
      </body>
    </html>
  );
}
