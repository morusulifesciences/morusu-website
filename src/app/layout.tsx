import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Dia365Popup } from "@/components/home/Dia365Popup";


const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap" 
});

const cormorantGaramond = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap"
});

const googleSans = localFont({
  src: [
    { path: './fonts/GoogleSans-Regular.ttf', weight: '400', style: 'normal' },
    { path: './fonts/GoogleSans-Italic.ttf', weight: '400', style: 'italic' },
    { path: './fonts/GoogleSans-Medium.ttf', weight: '500', style: 'normal' },
    { path: './fonts/GoogleSans-MediumItalic.ttf', weight: '500', style: 'italic' },
    { path: './fonts/GoogleSans-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: './fonts/GoogleSans-SemiBoldItalic.ttf', weight: '600', style: 'italic' },
    { path: './fonts/GoogleSans-Bold.ttf', weight: '700', style: 'normal' },
    { path: './fonts/GoogleSans-BoldItalic.ttf', weight: '700', style: 'italic' },
  ],
  variable: '--font-google-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Morusu Life Sciences | Ayurvedic & Herbal Wellness Products",
  description: "Discover Morusu Life Sciences, an Ayurveda-inspired wellness brand showcasing herbal hair care, skin care, nutrition and everyday wellness products.",
};

import { CartProvider } from "@/components/cart/CartProvider";
import { CartSidebar } from "@/components/cart/CartSidebar"; // We'll create this next
import { getBlobMap } from "@/lib/blobUtils";
import { BlobProvider } from "@/components/blob/BlobProvider";

import { ClickSpark } from "@/components/ui/ClickSpark";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const blobMap = await getBlobMap();

  return (
    <html lang="en" className={`${googleSans.variable} ${inter.variable} ${cormorantGaramond.variable}`} suppressHydrationWarning >
      <body className="font-sans bg-cream text-primary-dark antialiased min-h-screen flex flex-col">
        <BlobProvider blobMap={blobMap}>
          <CartProvider>
            {/* <ClickSpark> */}
              <Header />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
              <WhatsAppButton />
              <Dia365Popup />
              <CartSidebar />
            {/* </ClickSpark> */}
          </CartProvider>
        </BlobProvider>
      </body>
    </html>
  );
}
