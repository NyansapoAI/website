import { sanityClient } from "@/lib/sanity.client"
import { cache } from "react"
import { groq } from "next-sanity"
import type { Metadata } from "next"
import Preview from "./Preview"
import NewsLetter from "../company/sections/NewsLetter"

export const metadata: Metadata = {
  title: "News",
  description: "Nyansapo News",
}
// Enable NextJS to cache and dedupe queries
const clientFetch = cache(sanityClient.fetch.bind(sanityClient))
const query = groq`*[_type=='news']{body, title, _createdAt, publishedAt, _rev, _type, _id, _updatedAt, slug, mainImage{asset->{...,metadata{
  lqip
}}}}`
export interface NewsInterface {
  body: any[]
  title: string
  _createdAt: string
  publishedAt: string
  _rev: string
  _type: string
  _id: string
  _updatedAt: string
  slug: {
    _type: string
    current: string
  }
  mainImage: {
    _type: string
    asset: {
      _id: string
      _type: string
      url: string
      metadata: {
        lqip: string
      }
      /* Define the properties of the asset object here */
    }
  }
}

export default async function IndexPage() {
  const data = await clientFetch<NewsInterface[]>(query)
  return (
    <div className="py-12 2xl:py-16 mt-20 px-8 md:px-16 xl:px-32 2xl:px-64 mx-auto max-w-[1920px]">
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-12 ">
        {data &&
          data.map((item) => {
            return <Preview key={item._id} data={item} />
          })}
      </div>
      <NewsLetter />
    </div>
  )
}
