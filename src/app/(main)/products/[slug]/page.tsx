import { PortableText } from "@portabletext/react"
import { groq } from "next-sanity"
import React from "react"
import { sanityClient } from "@/lib/sanity.client"
import urlBuilder from "@sanity/image-url"
import { cache } from "react"
import type { Metadata } from "next"
import Image from "next/image"
import ProductFeatures, { Feature } from "./productFeatures"
import SanityImage from "@/components/ui/SanityImage"
import { cn } from "@/lib/utils"
type Props = {
  params: { slug: string }
}
type ProductInterface = {
  title: string
  summary: string
  about: any[]
  video: string
  features: Feature[]
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
  const query = groq`*[_type=='products' && slug.current=='${params.slug}']{ title,summary,video,icon{...,asset->{metadata{lqip}}}, slug,about, features[]->{
  title
}}`
  const data = await clientFetch<ProductInterface[]>(query)
  if (data.length > 0)
    return {
      title: data[0].title,
      keywords: [
        data[0].title,
        "nyansapo AI products",
        "NyansapoAI products",
        "nyansapo AI",
        "Nyansapo AI",
        "nyansapoAI",
      ],
      description: data[0].summary,
    }
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
  const query = groq`*[_type=='products' && slug.current=='${params.slug}']{ title,summary,video,mainImage{asset->{...,metadata{lqip}}}, slug,about, features[]->{
  title,
  video,
  icon{asset->{...,metadata{lqip}}},
  description
}}`
  const data = await clientFetch<ProductInterface[]>(query)

  return (
    <div className="lg:px-28 flex  flex-col gap-4 py-12 2xl:py-16 mt-20 px-4 md:px-16 xl:px-32 2xl:px-64 mx-auto max-w-[1920px]">
      {data.length > 0 ? (
        <div className="max-w-6xl mx-auto">
          <h1 className=" text-3xl lg:text-5xl font-bold text-center mb-8">
            {data[0].title}
          </h1>
          {data[0].title.includes("Android") && (
            <div className="flex flex-col items-center gap-8 justify-center">
              <video
                width={300}
                autoPlay={true}
                loop
                muted
                className={cn("z-10 relative")}
              >
                <source src={"/video/app.mp4"} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}

          {data[0].title.includes("Dashboard") && (
            <div className="flex flex-col items-center gap-8 justify-center">
              <video
                width={800}
                autoPlay={true}
                loop
                muted
                className={cn("z-10 relative")}
              >
                <source src={"/video/dashboard.mp4"} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
          <h2 className=" text-xl  text-muted-foreground my-8">
            {data[0].summary}
          </h2>

          {/* <SanityImage
            className=" mx-auto my-6 2xl:my-12 aspect-video"
            imageData={data[0].mainImage}
            imageWidth={data[0].title.includes("App") ? 300 : 1000}
            altText={data[0].title}
          /> */}
          {/* {data[0].mainImage && <MainImage data={data[0]} />} */}
          {data[0].video && (
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full mx-auto rounded-md h-96 aspect-video"
              src={data[0].video}
            ></iframe>
          )}
          {data[0].features && data[0].features.length > 0 ? (
            <ProductFeatures features={data[0].features} />
          ) : null}
          <div className="leading-7 text-lg max-w-2xl mx-auto dark:text-slate-100 ">
            {data && data[0].about && (
              <PortableText value={data[0].about} components={components} />
            )}
          </div>
        </div>
      ) : (
        <div className="text-5xl">Not found</div>
      )}
    </div>
  )
}
