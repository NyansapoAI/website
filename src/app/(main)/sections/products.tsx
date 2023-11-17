import Image from "next/image"
import React, { cache } from "react"
import SectionTitle from "../components/SectionHeader"
import app from "@imgs/products/app.png"
import dashboard from "@imgs/products/dashboard-dark.png"
import Link from "next/link"
import { sanityClient } from "@/lib/sanity.client"
import { groq } from "next-sanity"
import MainImage from "../news/[id]/MainImage"
import SanityImage from "@/components/ui/SanityImage"
import { cn } from "@/lib/utils"
type Props = {}
export type ProductPreviewInterface = {
  title: string
  summary: string
  mainImage: {
    asset: {
      metadata: {
        lqip: string
      }
    }
  }
  _id: string
  slug: {
    current: string
  }
}

const projectQuery = groq`*[_type=='products']{title,summary,slug,mainImage{asset->{...,metadata{
  lqip}}}}`
const clientFetch = cache(sanityClient.fetch.bind(sanityClient))

export default async function Products({}: Props) {
  const data = await clientFetch<ProductPreviewInterface[]>(projectQuery)
  return (
    <div
      id="products"
      className="py-12 px-8 md:px-16 xl:px-32 2xl:px-64 bg-yellow-200 text-gray-800"
    >
      <h1 className="text-4xl font-bold w-full text-center">Our Tools </h1>
      <div className="flex flex-col gap-12">
        {data.map((product, i) => (
          <ProductPreview
            product={product}
            imageWidth={product.title.includes("App") ? 300 : 650}
            key={i}
            flexReverse={i % 2 === 0}
          />
        ))}
      </div>
    </div>
  )
}
type ProductPreviewProps = {
  product: ProductPreviewInterface
  imageWidth?: number
  imageClassName?: string
  imageHeight?: number
  flexReverse?: boolean
}
const ProductPreview = ({
  product,
  imageClassName,
  flexReverse,
  imageWidth,
}: ProductPreviewProps) => {
  const videoLink = product.title.includes("Android")
    ? "/video/app.mp4"
    : "/video/dashboard.mp4"
  return (
    <div
      className={cn(
        flexReverse ? "flex-row-reverse" : "",
        `flex flex-wrap gap-12 items-center justify-center py-12`
      )}
    >
      <aside className="">
        <h1 className="text-xl  mb-4 font-semibold ">{product.title}</h1>
        <p className="tracking-wide lg:max-w-sm">{product.summary}</p>
        <Link
          href={`/products/${product.slug.current}`}
          className="bg-accent text-accent-foreground mt-4 inline-block  py-2 px-4 rounded-md "
        >
          Find out more
        </Link>
      </aside>
      <div className="relative">
        <video
          width={imageWidth}
          autoPlay={true}
          loop
          muted
          className={cn(imageClassName, "z-10 relative")}
        >
          <source src={videoLink} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* <SanityImage
          imageWidth={imageWidth}
          className={cn(imageClassName, "z-10 relative  ")}
          altText={product.title}
          imageData={product.mainImage}
        /> */}

        {/* <div className="w-96 h-96 rounded-full z-0 bg-yellow-300 absolute -right-12 top-24"></div> */}
      </div>
    </div>
  )
}
