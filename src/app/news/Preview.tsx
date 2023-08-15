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
    <div className="w-full">
      {data.link ? (
        <a
          className="group flex flex-col justify-start items-start gap-4"
          href={data.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="overflow-clip">
            <Image
              alt={data.slug.current}
              {...imageProps}
              width={400}
              height={500}
              className=" object-contain aspect-auto group-hover:scale-105 duration-200" // layout="responsive" prior to Next 13.0.0
              placeholder="blur"
              blurDataURL={data.mainImage.asset.metadata.lqip}
            />
          </div>
          <h1 className="text-2xl  text-center lg:text-left group-hover:text-slate-500 duration-300">
            {data.title}
          </h1>
        </a>
      ) : (
        <Link
          className="group flex flex-col justify-start items-start gap-4"
          href={`/news/${data._id}`}
        >
          {data.mainImage && (
            <div className="overflow-clip">
              <Image
                alt={data.slug.current}
                {...imageProps}
                width={400}
                height={500}
                className=" object-contain aspect-auto group-hover:scale-105 duration-300" // layout="responsive" prior to Next 13.0.0
                placeholder="blur"
                blurDataURL={data.mainImage.asset.metadata.lqip}
              />
            </div>
          )}
          <h1 className="text-2xl  text-center lg:text-left group-hover:text-slate-500 duration-300">
            {data.title}
          </h1>
        </Link>
      )}
    </div>
  )
}
