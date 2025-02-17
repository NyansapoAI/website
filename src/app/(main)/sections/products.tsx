import Image from "next/image"
import React, { cache } from "react"
import SectionTitle from "../components/SectionHeader"
import Link from "next/link"
import { sanityClient } from "@/lib/sanity.client"
import { groq } from "next-sanity"
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

const topImgs = [
  { src: "/imgs/products/vectors/v1.png", alt: "dash" },
  { src: "/imgs/products/vectors/app.png", alt: "app" },
]

export default async function Products({}: Props) {
  const data = await clientFetch<ProductPreviewInterface[]>(projectQuery)
  return (
    <div
      id="products"
      className="py-12 px-8 md:px-16 xl:px-32 2xl:px-64 bg-[#fbfbfb] text-gray-800"
    >
      <h1 className="text-4xl font-bold w-full text-center">OUR PRODUCTS </h1>
      <h4 className="text-3xl text-center">
        Assessments. Data Analysis. Targeted Instruction
      </h4>
      <div className="flex flex-col md:flex-row gap-12 mt-4 justify-center">
        {data.map((product, i) => (
          <ProductPreview
            product={product}
            bgColor={i % 2 === 0 ? "#008855" : "#B81C61"}
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
  imageWidth?: number
  imageClassName?: string
  imageHeight?: number
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
  const topImg = topImgs[index % topImgs.length]
  return (
    <div>
      <div className="hidden lg:block w-full lg:h-[20vh] relative">
        <Image
          src={topImg.src}
          alt={topImg.alt}
          fill
          className="object-contain"
        />
      </div>
      <div
        style={{ backgroundColor: bgColor }}
        className={cn(
          "flex flex-col md:flex-row gap-12 items-center justify-center p-6 lg:w-[35vw] rounded-lg",
          flexReverse ? "md:flex-row-reverse" : ""
        )}
      >
        {/* Top image for lg screens and above */}

        <aside>
          <h1 className="text-xl mb-4 font-semibold text-white">
            {product.title}
          </h1>
          <p className="tracking-wide lg:max-w-sm text-white">
            {product.summary}
          </p>
          <Link
            href={`/products/${product.slug.current}`}
            className="mt-4 inline-block py-2 px-4 rounded-md bg-white text-gray-800"
          >
            Learn more
          </Link>
        </aside>
      </div>
    </div>
  )
}
