import type { Metadata } from "next"
import NewsLetter from "../company/sections/NewsLetter"
import News from "./News"

export const metadata: Metadata = {
  title: "News",
  description: "Nyansapo News",
}
export default async function IndexPage() {
  return (
    <div className="py-12 2xl:py-16 mt-20 px-8 md:px-16 xl:px-32 2xl:px-64 mx-auto max-w-[1920px]">
      <News />
      <NewsLetter />
    </div>
  )
}
