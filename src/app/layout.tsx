import type { Metadata, Viewport } from "next";
import localFont from "next/font/local"
import "./globals.css";
import Provider from "@/Providers/Provider";

const poppins = localFont({
  src: [
    {
      path: '../assets/fonts/Poppins-Regular.woff2',
      weight: '400',
      style: "normal"
    },
    {
      path: '../assets/fonts/Poppins-Medium.woff2',
      weight: '500',
      style: "normal"
    },
    {
      path: '../assets/fonts/Poppins-Bold.woff2',
      weight: '700',
      style: "normal"
    }
  ],
  display: 'swap',
  variable: "--Poppins"
})

const title = "XRecon | Realtime Chat App"
const description = "XRecon is a cutting-edge real-time chat app, providing seamless communication with instant messaging, smart features, and enhanced security. Experience the future of messaging with XRecon."

export const metadata: Metadata = {
  title: title,
  description: description,
  keywords: ["XRecon", "xrecon", "X-Recon", "x-recon", "XRecon Chat", "Chat App", "chiragchrg", "chirag", "chrgchirag"],
  authors: [{ name: "ChiragChrg" }, { url: "https://chiragchrg.netlify.app/" }],
  creator: "ChiragChrg",
  metadataBase: new URL("https://xrecon.vercel.app/"),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: 'TSsuy8j81zZ0Ge0aestKiwZUPydASWd9aANj-ITDack',
  },
  manifest: "/manifest.json",
  icons: {
    icon: '/Icons/144.png',
    shortcut: '/favicon.svg',
    apple: '/Icons/192.png',
  },
  openGraph: {
    title: title,
    description: description,
    url: 'https://xrecon.vercel.app/',
    siteName: 'XRecon',
    images: [
      {
        url: '/Icons/192.png',
        width: 192,
        height: 192,
        alt: 'XRecon Logo',
      },
      {
        url: '/Icons/temp_wide_screenshot.png',
        width: 768,
        height: 359,
        alt: 'XRecon Mockup Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    creator: '@chrgchirag',
    images: ['/Icons/192.png', '/Icons/temp_wide_screenshot.png'],
  },
}

export const viewport: Viewport = {
  themeColor: 'hsl(0 0% 100%)',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Provider attribute="class" enableSystem storageKey="xrecon-theme">
          {children}
        </Provider>
      </body>
    </html>
  );
}