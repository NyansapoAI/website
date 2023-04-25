import { PortableText } from "@portabletext/react"
import { groq } from "next-sanity"
import React from "react"
import { sanityClient } from "@/lib/sanity.client"
import urlBuilder from "@sanity/image-url"
import { cache } from "react"
import type { Metadata } from "next"
import { NewsInterface } from "../page"
import Image from "next/image"
import MainImage from "./MainImage"
type Props = {
  params: { id: string }
}
export async function generateMetadata({ params }: any): Promise<Metadata> {
  const query = groq`*[_type=='news' && _id=='${params.id}']{body, title, _createdAt, publishedAt, _rev, _type, _id, _updatedAt, slug, mainImage{asset->{...,metadata{lqip
}}}}`
  const data = await clientFetch<NewsInterface[]>(query)

  return { title: data[0].title }
}
const components = {
  types: {
    image: ({ value }: any) => {
      return (
        <Image
          width={600}
          height={600}
          alt=""
          src={urlBuilder(sanityClient)
            .image(value)
            .fit("max")
            .auto("format")
            .url()}
          className="w-96 mx-auto md:w-[600px] h-auto bg-cover"
        />
      )
    },
  },
  block: {
    // Ex. 1: customizing common block types
    h1: ({ children }: { children?: any }) => (
      <h1 className="text-4xl">{children}</h1>
    ),
    h2: ({ children }: { children?: any }) => (
      <h1 className="text-3xl">{children}</h1>
    ),
    h3: ({ children }: { children?: any }) => (
      <h1 className="text-2xl">{children}</h1>
    ),
    blockquote: ({ children }: { children?: any }) => (
      <blockquote className="border-l-purple-500">{children}</blockquote>
    ),

    // Ex. 2: rendering custom styles
    customHeading: ({ children }: { children?: any }) => (
      <h2 className="text-lg text-primary text-purple-700">{children}</h2>
    ),
  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }: { children?: any }) => (
      <ul className="list-disc mt-xl">{children}</ul>
    ),
    number: ({ children }: { children?: any }) => (
      <ol className="list-decimal mt-lg">{children}</ol>
    ),

    // Ex. 2: rendering custom lists
    checkmarks: ({ children }: { children?: any }) => (
      <ol className="m-auto text-lg">{children}</ol>
    ),
  },
}
const clientFetch = cache(sanityClient.fetch.bind(sanityClient))

export default async function page({ params }: Props) {
  const query = groq`*[_type=='news' && _id=='${params.id}']{body, title, _createdAt, publishedAt, _rev, _type, _id, _updatedAt, slug, mainImage{asset->{...,metadata{lqip
}}}}`
  const data = await clientFetch<NewsInterface[]>(query)
  return (
    <div className="px-2 md:px-12 lg:px-28  flex flex-col gap-4">
      <h1 className=" text-3xl lg:text-5xl font-bold text-center mb-8">
        {data[0].title}
      </h1>
      {data[0].mainImage && <MainImage data={data[0]} />}
      <div className="leading-7 dark:text-slate-100 ">
        {data && <PortableText value={data[0].body} components={components} />}
      </div>
    </div>
  )
}
