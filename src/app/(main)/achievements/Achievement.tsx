"use client"
import { sanityClient } from "@/lib/sanity.client"
import Image from "next/image"
import { useNextSanityImage } from "next-sanity-image"
import { IAward } from "./page"

type AwardProps = {
  award: IAward
}
export default function Achievement({ award }: AwardProps) {
  const imageProps = useNextSanityImage(sanityClient, award.mainImage)

  return (
    <div className="mx-auto flex flex-col w-full items-center justify-center gap-4">
      {/* <IconTrophy className="h-8 w-8 text-zinc-900 dark:text-zinc-50" /> */}
      {award.link ? (
        <a href={award.link} target="_blank" rel="noreferrer">
          <Image
            {...imageProps}
            // height={500}
            width={600}
            height={600}
            className="w-full hover:scale-105 max-w-[300px] max-h-[250px] duration-200 cursor-pointer object-cover rounded-md"
            alt={award.title}
          />
        </a>
      ) : (
        <Image
          {...imageProps}
          // height={500}
          width={500}
          height={500}
          className="w-full max-w-[200px] object-cover  rounded-md"
          alt={award.title}
        />
      )}
      <div>
        <h3 className="text-xl font-bold">{award.title}</h3>
        {/* <p className="text-zinc-500 dark:text-zinc-400">
          Awarded for our innovative approach in technology.
        </p> */}
        {award.year && (
          <span className="text-muted-foreground">{award.year}</span>
        )}
      </div>
    </div>
  )
}
