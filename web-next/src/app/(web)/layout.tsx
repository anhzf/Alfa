import WebFooter from '@/components/web-footer';
import WebNavbar from '@/components/web-navbar';
import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { cn } from '@/utils/ui';

const sourceSans = Source_Sans_3({
  subsets: ["latin-ext"],
  style: ['normal', 'italic'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: "Alfa Cipta Mukti",
  description: "Usaha berbasis Jakarta Selatan yang menyediakan berbagai jasa penyediaan barang untuk kebutuhan perusahaan dan kantor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={cn('bg-background font-sans antialiased', sourceSans.variable)}>
        <div className="flex min-h-screen flex-col">
          <WebNavbar />
          {children}
          <WebFooter />
        </div>
      </body>
    </html>
  );
}
