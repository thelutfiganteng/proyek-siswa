import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { MotionProvider } from "@/components/motion-provider"
import SplashProvider from "@/components/splash-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ProyekSiswa.id - Platform Crowdfunding Riset dan Penelitian Pelajar",
  description:
    "Platform crowdfunding pertama di Indonesia yang didedikasikan untuk mendukung proyek Riset dan Penelitian pelajar dan mahasiswa.",
    generator: 'NeoByte'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <SplashProvider>
          <MotionProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <Toaster />
          </MotionProvider>
        </SplashProvider>
      </body>
    </html>
  )
}
