"use client"
import React from "react"
import { useNextSanityImage } from "next-sanity-image"
import { sanityClient } from "@/lib/sanity.client"
import Image from "next/image"
import Link from "next/link"
import { NewsInterface } from "./News"
import { friendlyLastUpdatedDate } from "@/lib/utils"

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
              className=" object-contain aspect-auto group-hover:scale-105 max-h-[225px] duration-200" // layout="responsive" prior to Next 13.0.0
              placeholder="blur"
              blurDataURL={data.mainImage.asset.metadata.lqip}
            />
          </div>
          <div>
            <h1 className="text-2xl  text-center lg:text-left group-hover:text-slate-500 duration-300">
              {data.title}
            </h1>
            <p className="text-muted-foreground">
              {friendlyLastUpdatedDate(data._createdAt)}
            </p>
          </div>
        </a>
      ) : (
        <Link
          className="group flex flex-col justify-start items-start gap-4"
          href={`/news/${data._id}`}
        >
          {data.mainImage && (
            <div className="overflow-clip flex-1  max-h-[225px]">
              <Image
                alt={data.slug.current}
                {...imageProps}
                width={800}
                height={600}
                className="object-contain aspect-auto   group-hover:scale-105 duration-300" // layout="responsive" prior to Next 13.0.0
                placeholder="blur"
                blurDataURL={data.mainImage.asset.metadata.lqip}
              />
            </div>
          )}
          <div>
            <h1 className="text-2xl  text-center lg:text-left group-hover:text-slate-500 duration-300">
              {data.title}
            </h1>
            <p className="text-muted-foreground">
              {friendlyLastUpdatedDate(data._createdAt)}
            </p>
          </div>
        </Link>
      )}
    </div>
  )
}
