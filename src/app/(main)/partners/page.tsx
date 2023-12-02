import { sanityClient } from "@/lib/sanity.client"
import { groq } from "next-sanity"
import { DetailedHTMLProps, cache } from "react"
import Partner from "./Partner"
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ufLntfUtwcw
 */
export const metadata = {
  title: "Partners",
  description: "We are proud to have worked with these organizations.",
  slug: "/partners",
}
const query = groq`*[_type=='partners']{title,description,logo{asset->{...,metadata{lqip}}}}`
const clientFetch = cache(sanityClient.fetch.bind(sanityClient))
export interface IPartner {
  title: string
  description: string
  logo: {
    asset: {
      metadata: {
        lqip: string
      }
    }
  }
}
export default async function Achievements() {
  const data = await clientFetch<IPartner[]>(query)
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 mt-20 px-8 md:px-16 xl:px-32 2xl:px-64 mx-auto max-w-[1920px]">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Partnerships
          </h2>
          <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
            We are proud to have worked with these organizations.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {data && data.length > 0
            ? data.map((award, i) => <Partner key={i} award={award} />)
            : null}
        </div>
      </div>
    </section>
  )
}
