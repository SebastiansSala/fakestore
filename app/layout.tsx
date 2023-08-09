import Header from "@/components/Header"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Footer from "@/components/Footer"
import Provider from "@/lib/provider"
import Hero from "@/components/Hero"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "fakestore",
  description: "fakestore",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`bg-[#f2f2f3] ${inter.className}`}>
        <Provider>
          <Header />
          <Hero />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
