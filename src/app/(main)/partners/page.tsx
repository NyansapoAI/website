import { sanityClient } from "@/lib/sanity.client"
import { groq } from "next-sanity"
import { cache } from "react"
import Image from 'next/image'
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

export const revalidate = 60 * 60

export default async function Achievements() {
  const data = await clientFetch<IPartner[]>(query)
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 mt-20 px-8 md:px-16 xl:px-32 2xl:px-64 mx-auto max-w-[1920px]">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Partnerships
          </h2>
          <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-white">
          There are currently 23,000 children using our award-winning solutions around the world, thanks to our partners and donors:
          </p>
        </div>
      </div>
      <div className="relative w-[900px] max-w-3xl mx-auto h-[400px] flex items-end mb-6 lg:mb-12">
        <Image
          src="/screenshots/app/image (14).png" 
          alt="Description of the image"
          layout="fill" 
          objectFit="cover" 
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  )
}
