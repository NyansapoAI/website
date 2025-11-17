import Image from "next/image"
import React, { cache } from "react"
import Link from "next/link"
import { sanityClient } from "@/lib/sanity.client"
import { groq } from "next-sanity"
import { cn } from "@/lib/utils"

type Props = {}

export type ProductPreviewInterface = {
  title: string
  summary: string
  mainImage: {
    asset: {
      metadata: { lqip: string }
      url: string
    }
  }
  _id: string
  slug: { current: string }
}

const projectQuery = groq`*[_type=='products']{title,summary,slug,mainImage{asset->{...,metadata{lqip,url}}}}`
const clientFetch = cache(sanityClient.fetch.bind(sanityClient))

export default async function Products({}: Props) {
  const data = await clientFetch<ProductPreviewInterface[]>(projectQuery)

  return (
    <div
      id="products"
      className="py-12 px-4 sm:px-8 md:px-16 xl:px-32 2xl:px-64 bg-[#fbfbfb] text-gray-800 min-h-screen"
    >
      <h1 className="text-2xl sm:text-4xl font-bold w-full text-center mt-8 sm:mt-14">
        OUR PRODUCTS
      </h1>
      <h4 className="text-xl sm:text-3xl text-center">
        Assessments. Data Analysis. Targeted Instruction
      </h4>

      <div className="flex flex-wrap justify-center gap-8 mt-12 sm:mt-20 max-w-6xl mx-auto">
        {data.map((product, i) => (
          <ProductPreview
            product={product}
            bgColor={i % 2 === 0 ? "#4caf50" : "#e67e22"}
            key={i}
            flexReverse={i % 2 === 0}
            index={i}
          />
        ))}
      </div>
    </div>
  )
}

type ProductPreviewProps = {
  product: ProductPreviewInterface
  flexReverse?: boolean
  bgColor: string
  index: number
}

const ProductPreview = ({
  product,
  flexReverse,
  bgColor,
  index,
}: ProductPreviewProps) => {
  // ONLY CHANGE: Use local images for the first two cards
  const imageSrc =
    index === 0
      ? "/imgs/gallery/5.jpg"
      : index === 1
      ? "/imgs/gallery/7.jpg"
      : product.mainImage.asset.url

  return (
    <div
      className="flex flex-col overflow-hidden rounded=xl shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 w-full max-w-sm"
      style={{ backgroundColor: "white" }}
    >
      {/* Image section */}
      <div className="relative w-full h-48 sm:h-56 md:h-64">
        <Image
          src={imageSrc}                     // This line is the only change
          alt={product.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={index < 2}               // optional: faster load for the local ones
        />
      </div>

      {/* Content section – unchanged */}
      <div
        style={{ backgroundColor: bgColor }}
        className="flex flex-col p-6 flex-grow"
      >
        <h1 className="text-xl sm:text-2xl mb-4 font-semibold text-white">
          {product.title}
        </h1>
        <p className="tracking-wide text-white flex-grow mb-6">
          {product.summary}
        </p>
        <Link
          href={`/products/${product.slug.current}`}
          className="inline-block py-2 px-6 rounded-md bg-white text-gray-800 font-medium hover:bg-gray-100 transition-colors duration-200 text-center"
        >
          Learn more
        </Link>
      </div>
    </div>
  )
}