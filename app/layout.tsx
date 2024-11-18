import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppBar, BottomBarNavigation } from "@/components/layouts";
import { Analytics } from "@vercel/analytics/react"
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Dunia Keramik Samarinda",
    template: "%s | Dunia Keramik Samarinda",
  },
  description: "Toko Keramik Dan Granit terlengkap di Samarinda",
  applicationName: "Dunia Keramik Samarinda",
  authors: {
    name: "Muhammad Nur Rahman",
    url: "https://www.linkedin.com/in/sarrahman-me",
  },
  keywords: ["toko keramik samarinda", "toko granit samarinda"],
  creator: "Muhammad Nur Rahman",
  publisher: "Muhammad Nur Rahman",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <meta name="google-site-verification" content="uxJGUa8ROS677Ksm9gM_kc3xryC-7ds5t0_VEHoOBqU" />
      </head>
      <body className={`bg-secondary min-h-screen ${inter.className}`}>
        <AppBar />
        <div className="mx-auto max-w-7xl p-2 md:p-4 lg:p-6">{children}</div>
        <footer className="flex justify-center items-center space-y-5 flex-col pb-20 p-2">
          <p className="text-xs text-secondary-medium/50 text-center">
            Dibuat Menggunakan{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://main.dtusqppnb0kst.amplifyapp.com/"
              className="underline text-primary-600/80"
            >
              tokokeramik.com
            </a>
          </p>
        </footer>
        <div className="p-2 bg-secondary fixed w-full bottom-0 block md:hidden">
          <BottomBarNavigation />
        </div>
      </body>
      <GoogleAnalytics gaId="G-ZN7V9PF8KN" />
      <Analytics />
    </html>
  );
}
