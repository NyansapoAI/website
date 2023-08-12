import Navbar from "./navbar"
import "./globals.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import { Raleway } from "next/font/google"
import Footer from "./components/footer"
import { Metadata } from "next"
import Alert from "./components/Alert"
import { Separator } from "@/components/ui/separator"
import RootProviders from "./providers"
const raleway = Raleway({
  subsets: ["latin"],
  // default, can also use "swap" to ensure custom font always shows
  display: "optional",
})
// const alegreya = Alegreya_Sans({
//   subsets: ['latin'],
//   // default, can also use "swap" to ensure custom font always shows
//   variable: '--font-alegreya',
//   display: 'optional',
//   weight: '400',
// })
export const metadata: Metadata = {
  title: "Nyansapo AI",
  description:
    "supporting literacy and numeracy catch-up interventions using AI",
  keywords: [
    "nyansapoAI",
    "literacy bootcamps",
    "teaching at the right level",
    "digital assesments",
    "literacy interventions",
    "artificial intelligence",
    "data analytics",
  ],
  category: "technology",
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${raleway.className} dark `}>
      <body className="relative bg-background duration-400">
        <RootProviders>
          <Navbar />
          <Alert />
          {children}
          <Separator />
          <Footer />
        </RootProviders>
      </body>
    </html>
  )
}
