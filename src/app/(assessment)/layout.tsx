import "../globals.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import { Raleway } from "next/font/google"
import { Metadata } from "next"
import { Toaster } from "react-hot-toast"
import RootProviders from "../providers"
import AssessmentsNavbar from "../(main)/assesmentsNavbar"
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query"

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
    "Supporting literacy and numeracy catch-up interventions using AI,assess yourself using our online literacy assessment tool",
  keywords: [
    "nyansapoAI",
    "nyansapo AI",
    "nyansapo assessments",
    "Assess your literacy skills",
    "Nyansapo AI",
    "Nyansapo",
    "nyansapo ai assessments",
    "Nyansapo Artificial Intelligence",
    "literacy and numeracy bootcamps",
    "teaching at the right level",
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
    <html lang="en" className={`scroll-smooth ${raleway.className}`}>
      <body className="  relative bg-card duration-400">
        <RootProviders>
          <Toaster />
          <AssessmentsNavbar />
          {children}
        </RootProviders>
      </body>
    </html>
  )
}
