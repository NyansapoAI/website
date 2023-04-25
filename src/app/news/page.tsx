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
    <div>
      <div className=" flex gap-16 md:min-h-[500px]">
        {data &&
          data.map((item) => {
            return (
              <div className="flex gap-4" key={item._id}>
                <Preview data={item} />
              </div>
            )
          })}
      </div>
      <NewsLetter />
    </div>
  )
}
