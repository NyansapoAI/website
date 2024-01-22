"use client"
import { sanityClient } from "@/lib/sanity.client"
import Image from "next/image"
import { useNextSanityImage } from "next-sanity-image"
import { IPartner } from "./page"

type AwardProps = {
  award: IPartner
}
export default function Partner({ award }: AwardProps) {
  const imageProps = useNextSanityImage(sanityClient, award.logo)

  return (
    <div className="mx-auto flex flex-col w-full items-center justify-center gap-4">
      {/* <IconTrophy className="h-8 w-8 text-zinc-900 dark:text-zinc-50" /> */}

      <Image
        {...imageProps}
        // height={500}
        width={400}
        height={400}
        className="w-full max-w-[250px] max-h-[250px] object-contain  rounded-md"
        alt={award.title}
      />
      <div>
        <h3 className="text-xl font-bold">{award.title}</h3>
        {/* <p className="text-zinc-500 dark:text-zinc-400">
          Awarded for our innovative approach in technology.
        </p> */}
        {award.description && (
          <p className="text-muted-foreground">{award.description}</p>
        )}
      </div>
    </div>
  )
}
