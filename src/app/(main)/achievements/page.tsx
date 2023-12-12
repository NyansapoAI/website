import { sanityClient } from "@/lib/sanity.client"
import { groq } from "next-sanity"
import { DetailedHTMLProps, cache } from "react"
import Achievement from "./Achievement"
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ufLntfUtwcw
 */
const awardsQuery = groq`*[_type=='awards']| order(year desc){title,year,link,mainImage{asset->{...,metadata{lqip}}}}`
const clientFetch = cache(sanityClient.fetch.bind(sanityClient))
export interface IAward {
  title: string
  year: string
  link: string
  mainImage: {
    asset: {
      metadata: {
        lqip: string
      }
    }
  }
}
export const revalidate=60*60
export default async function Achievements() {
  const data = await clientFetch<IAward[]>(awardsQuery)
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 mt-20 px-8 md:px-16 xl:px-32 2xl:px-64 mx-auto max-w-[1920px]">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Achievements
          </h2>
          <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
            We are proud to be recognized for our innovative approach in
            technology.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {data && data.length > 0
            ? data.map((award, i) => <Achievement key={i} award={award} />)
            : null}
        </div>
      </div>
    </section>
  )
}
