"use client"
import React from "react"
import { useNextSanityImage } from "next-sanity-image"
import { sanityClient } from "@/lib/sanity.client"
import { NewsInterface } from "./page"
import Image from "next/image"
import Link from "next/link"

type Props = {
  data: NewsInterface
}

export default function Preview({ data }: Props) {
  const imageProps = useNextSanityImage(sanityClient, data.mainImage)

  return (
    <div className="">
      <Link className="flex  flex-col gap-4" href={`/news/${data._id}`}>
        <div className="overflow-clip">
          <Image
            alt={data.slug.current}
            {...imageProps}
            className="w-80  bg-cover aspect-auto hover:scale-125 duration-300" // layout="responsive" prior to Next 13.0.0
            placeholder="blur"
            blurDataURL={data.mainImage.asset.metadata.lqip}
          />
        </div>
        <h1 className="text-3xl text-center  hover:text-slate-600 duration-300">
          {data.title}
        </h1>
      </Link>
    </div>
  )
}
