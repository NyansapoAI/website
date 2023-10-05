import { Button } from "@/components/ui/button"
import { sanityClient } from "@/lib/sanity.client"
import { Metadata } from "next"
import { groq } from "next-sanity"
import Image from "next/image"
import Link from "next/link"
import React, { cache } from "react"
import ProjectPreview from "./Preview"

type Props = {}
const projects = [
  {
    title: "Korando Bootcamp",
    description:
      "Over 200 literacy assessments were conducted and 40 children aged between 9 to 15 years old we involved in a learning camp. ",
    videoLink: "https://www.youtube.com/embed/HFg6NXFJPiE",
  },
  {
    title: "Kitui Bootcamp",
    description:
      "We conductred a 10 day learning camp in Voo in Kitui county usingthe TARL methodology.",
    videoLink: "https://www.youtube.com/embed/5ncU3xrg18c",
  },
]
export type ProjectInterface = {
  title: string
  summary: string
  link: string
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

const projectQuery = groq`*[_type=='projects']{title,summary,link,mainImage{asset->{...,metadata{
  lqip}}},_id,slug}`
const clientFetch = cache(sanityClient.fetch.bind(sanityClient))
export const revalidate = 60 * 60 * 24 //24 hours
export default async function page({}: Props) {
  const data = await clientFetch<ProjectInterface[]>(projectQuery)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center  gap-4 py-12 mt-20 px-8 md:px-16 xl:px-32 2xl:px-64 mx-auto max-w-[1920px]">
      {data &&
        data.map((project, i) => <ProjectPreview key={i} project={project} />)}
    </div>
  )
}

type ProjectProps = {
  project: ProjectInterface
}
export const metadata: Metadata = {
  title: "Projects",
}
