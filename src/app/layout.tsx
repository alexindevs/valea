import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Lavishly_Yours } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const garamond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-garamond",
});

const lavish = Lavishly_Yours({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lavish",
});

export const metadata: Metadata = {
  title: "Valea",
  description: "Letters from your past, delivered just in time.",
  openGraph: {
    title: "Valea",
    description: "Letters from your past, delivered just in time.",
    images: ["/valea_meta_image.png"],
    url: "https://valea-lime.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Valea",
    description: "Letters from your past, delivered just in time.",
    images: ["/valea_meta_image.png"],
  },
  metadataBase: new URL('https://valea-lime.vercel.app'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${garamond.variable} ${lavish.variable} antialiased bg-lilac-light font-sans`}
      >
        {children}
      </body>
    </html>
  );
}

