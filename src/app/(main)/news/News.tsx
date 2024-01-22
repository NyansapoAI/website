import { sanityClient } from "@/lib/sanity.client"
import { cache } from "react"
import { groq } from "next-sanity"
import type { Metadata } from "next"
import Preview from "./Preview"

export const metadata: Metadata = {
  title: "News",
  description: "Nyansapo News",
}
// Enable NextJS to cache and dedupe queries
const clientFetch = cache(sanityClient.fetch.bind(sanityClient))
// const query = groq`*[_type=='news']{body, title,link, _createdAt, publishedAt, _rev, _type, _id, _updatedAt, slug, mainImage{asset->{...,metadata{
//   lqip
// }}}}`
const query = groq`*[_type=='news'] | order(_createdAt desc) {
  body, 
  title, 
  link, 
  _createdAt, 
  publishedAt, 
  _rev, 
  _type, 
  _id, 
  _updatedAt, 
  slug, 
  mainImage {
    asset -> {
      ...,
      metadata {
        lqip
      }
    }
  }
}`
export interface NewsInterface {
  body: any[]
  title: string
  _createdAt: string
  publishedAt: string
  link: string
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
      metadata: {
        lqip: string
      }
      /* Define the properties of the asset object here */
    }
  }
}
export const revalidate = 60 * 60
type Props = {
  latest: boolean
}

export default async function News({ latest }: Props) {
  const data = await clientFetch<NewsInterface[]>(query)
  const latestNews = data.slice(0, 3)

  const news = latest ? latestNews : data.slice(1, data.length)
  return (
    <div id="news-section" className="py-8 lg:py-12">
      <h2 className="text-3xl xl:text-4xl font-bold mb-8">
        {latest ? "Latest News" : "News"}
      </h2>
      <div className="mb-8 lg:mb-12">
        <h2 className="mb-2 text-xl">Latest News</h2>
        <Preview key={data[0]._id} data={data[0]} large={true} />
      </div>
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-8 py-8">
        {data &&
          news.map((item, i) => {
            return <Preview key={item._id} data={item} />
          })}
      </div>
    </div>
  )
}
