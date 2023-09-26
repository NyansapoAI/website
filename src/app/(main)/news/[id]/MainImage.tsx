"use client"
import React from "react"
import { useNextSanityImage } from "next-sanity-image"
import { sanityClient } from "@/lib/sanity.client"
import Image from "next/image"
import { NewsInterface } from "../News"

type Props = {
  data: NewsInterface
}

export default function MainImage({ data }: Props) {
  const imageProps = useNextSanityImage(sanityClient, data.mainImage)

  return (
    <div className=" my-6 flex items-center justify-center lg:my-12">
      <Image
        alt={data.slug.current}
        {...imageProps}
        className="w-[600px] bg-cover aspect-auto " // layout="responsive" prior to Next 13.0.0
        placeholder="blur"
        blurDataURL={data.mainImage.asset.metadata.lqip}
      />
    </div>
  )
}
