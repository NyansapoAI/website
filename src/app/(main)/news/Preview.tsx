"use client"
import React from "react"
import { useNextSanityImage } from "next-sanity-image"
import { sanityClient } from "@/lib/sanity.client"
import Image from "next/image"
import Link from "next/link"
import { NewsInterface } from "./News"
import { cn, friendlyLastUpdatedDate } from "@/lib/utils"
import { Card } from "@/components/ui/card"

type Props = {
  data: NewsInterface
  large?: boolean
}

export default function Preview({ data, large }: Props) {
  const imageProps = useNextSanityImage(sanityClient, data.mainImage)

  return (
    <Card className="w-full bg-slate-900 border-slate-900">
      {data.link ? (
        <a
          className={cn(
            "group flex  justify-start items-start gap-4",
            large ? "flex-row " : "flex-col"
          )}
          href={data.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="overflow-clip">
            <Image
              alt={data.slug.current}
              {...imageProps}
              width={large ? 800 : 400}
              height={large ? 800 : 400}
              className={cn(
                " object-contain aspect-auto w-full group-hover:scale-105  duration-200",
                large ? "max-h-[600px]" : "max-h-[300px]"
              )}
              placeholder="blur"
              blurDataURL={data.mainImage.asset.metadata.lqip}
            />
          </div>
          <div className="px-4 py-2">
            <h1
              className={cn(
                " text-center lg:text-left group-hover:text-slate-500 duration-300",
                large ? "text-4xl mt-4" : "text-2xl "
              )}
            >
              {data.title}
            </h1>
            <p className="text-muted-foreground">
              {friendlyLastUpdatedDate(data._createdAt)}
            </p>
          </div>
        </a>
      ) : (
        <Link
          className={cn(
            "group flex justify-start items-start gap-4",
            large ? "flex-row gap-8" : "flex-col "
          )}
          href={`/news/${data._id}`}
        >
          {data.mainImage && (
            <div
              className={cn(
                "overflow-clip flex-1  ",
                large ? "max-h-[400px]" : "max-h-[250px]"
              )}
            >
              <Image
                alt={data.slug.current}
                {...imageProps}
                width={800}
                height={600}
                className="object-contain aspect-auto w-full  group-hover:scale-105 duration-300" // layout="responsive" prior to Next 13.0.0
                placeholder="blur"
                blurDataURL={data.mainImage.asset.metadata.lqip}
              />
            </div>
          )}
          <div className="px-4 py-2">
            <h1 className="text-2xl  text-center lg:text-left group-hover:text-slate-500 duration-300">
              {data.title}
            </h1>
            <p className="text-muted-foreground">
              {friendlyLastUpdatedDate(data._createdAt)}
            </p>
          </div>
        </Link>
      )}
    </Card>
  )
}
