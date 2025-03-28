import Navbar from "./navbar"
import "@/app/globals.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import { Raleway } from "next/font/google"
import Footer from "./components/footer"
import { Metadata } from "next"
import Alert from "./components/Alert"
import { Separator } from "@/components/ui/separator"
import RootProviders from "../providers"
import { Toaster } from "react-hot-toast"
import { Anton } from "next/font/google"

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

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
})
export const metadata: Metadata = {
  title: "Nyansapo AI",
  description:
    "Supporting literacy and numeracy catch-up interventions using AI",
  keywords: [
    "nyansapoAI",
    "nyansapo AI",
    "Assessments",
    "Personalized learning",
    "Nyansapo AI",
    "Nyansapo",
    "nyansapo",
    "nyansapo ai",
    "Nyansapo Artificial Intelligence",
    "literacy and numeracy bootcamps",
    "teaching at the right level",
    "accelerated learning",
  ],
  category: "technology",
  robots: {
    index: true,
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
    <html lang="en" className={`scroll-smooth ${raleway.className}`}>
      <body className=" dark relative bg-background duration-400">
        <RootProviders>
          <Toaster />
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
