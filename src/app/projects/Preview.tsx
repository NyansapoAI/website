"use client"
import { useNextSanityImage } from "next-sanity-image"
import React from "react"
import { sanityClient } from "@/lib/sanity.client"
import { ProjectInterface } from "./page"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
type Props = {
  project: ProjectInterface
}

function ProjectPreview({ project }: Props) {
  const imageProps = useNextSanityImage(sanityClient, project.mainImage)

  return (
    <Link
      href={`/projects/${project.slug.current}`}
      className=" group relative min-h-[600px] max-w-lg rounded-md overflow-hidden "
    >
      <Image
        {...imageProps}
        // height={500}
        width={800}
        height={800}
        className="w-full object-cover h-full rounded-md"
        alt={project.title}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black group-hover:bg-black/30 duration-200"></div>
      {/* <iframe
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full rounded-md h-96 aspect-video"
        src={videoLink}
      ></iframe> */}
      <div className=" absolute z-30 bottom-10 left-5 p-4 flex flex-col items-start  gap-4 max-w-full">
        <h1 className="text-3xl font-bold ">{project.title}</h1>
        <p className="text-lg text-gray-200">{project.description}</p>
        <Button variant="secondary">more details</Button>
      </div>
    </Link>
  )
}

export default ProjectPreview
