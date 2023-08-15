import { PortableText } from "@portabletext/react"
import { groq } from "next-sanity"
import React from "react"
import { sanityClient } from "@/lib/sanity.client"
import urlBuilder from "@sanity/image-url"
import { cache } from "react"
import type { Metadata } from "next"
import Image from "next/image"
type Props = {
  params: { slug: string }
}
type ProjectInterface = {
  body: any
  title: string
  _createdAt: string
  publishedAt: string
  description: string
  video: string
  _rev: string
  _type: string
  _id: string
  _updatedAt: string
  slug: { current: string }
  mainImage: {
    asset: {
      _id: string
      metadata: {
        lqip: string
      }
    }
  }
}
export async function generateMetadata({ params }: any): Promise<Metadata> {
  const query = groq`*[_type=='projects' && _id=='${params.id}']{body, title, _createdAt, publishedAt, _id, _updatedAt, slug,video,description, mainImage{asset->{...,metadata{lqip
}}}}`
  const data = await clientFetch<ProjectInterface[]>(query)
  if (data.length > 0) return { title: data[0].title }
  return {}
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
  const query = groq`*[_type=='projects' && slug.current=='${params.slug}']{body, title, _createdAt, publishedAt, _id, _updatedAt, slug,video,description, mainImage{asset->{...,metadata{lqip
}}}}`
  const data = await clientFetch<ProjectInterface[]>(query)
  return (
    <div className="lg:px-28 flex flex-col gap-4 py-12 2xl:py-16 mt-20 px-4 md:px-16 xl:px-32 2xl:px-64 mx-auto max-w-[1920px]">
      {data.length > 0 ? (
        <div className="max-w-3xl mx-auto">
          <h1 className=" text-3xl lg:text-5xl font-bold text-center mb-8">
            {data[0].title}
          </h1>
          <h1 className=" text-xl text-center text-muted-foreground mb-8">
            {data[0].description}
          </h1>
          {/* {data[0].mainImage && <MainImage data={data[0]} />} */}
          {data[0].video && (
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full mx-auto rounded-md h-96 aspect-video"
              src={data[0].video}
            ></iframe>
          )}
          <div className="leading-7 text-lg max-w-2xl mx-auto dark:text-slate-100 ">
            {data && (
              <PortableText value={data[0].body} components={components} />
            )}
          </div>
        </div>
      ) : (
        <div className="text-5xl">Not found</div>
      )}
    </div>
  )
}
