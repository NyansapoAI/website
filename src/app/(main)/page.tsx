import Services from "./sections/services"
import Hero from "./sections/hero"
import Products from "./sections/products"
import About from "./sections/about"
import Testimonials from "./sections/testimonials"
import Cta from "./sections/cta"
import NewsLetter from "./about/sections/NewsLetter"
import RootProviders from "../providers"
import Impact from "./sections/impact"
import { Separator } from "@/components/ui/separator"
import News from "./News&Stories/News&Stories"

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Products />
      <div className="px-4 sm:px-8 md:px-16 xl:px-32 2xl:px-64 mx-auto max-w-[1920px]">
        <Separator />
        <Impact />
        {/* <About /> */}
        {/* <Separator /> */}
        {/* <Services />
        <Separator /> */}
      </div>
      <div className="px-8 md:px-16 xl:px-32 2xl:px-64 w-screen bg-white">
        {/* <Separator /> */}
        <News />
      </div>
      <Separator />
      <div className="px-8 md:px-16 xl:px-32 2xl:px-64 mx-auto max-w-[1920px]">
        <Cta />
        {/* <NewsLetter /> */}
      </div>
    </main>
  )
}
