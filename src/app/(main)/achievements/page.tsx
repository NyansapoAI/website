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
export function IconTrophy(props: DetailedHTMLProps<any, any>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  )
}
