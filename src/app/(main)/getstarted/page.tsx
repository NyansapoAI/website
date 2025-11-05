import Image from "next/image"
import React, { cache } from "react"
import { sanityClient } from "@/lib/sanity.client"
import { groq } from "next-sanity"
import { cn } from "@/lib/utils"

type Props = {}

export type DashboardPreviewInterface = {
  title: string
  summary: string
  mainImage: {
    asset: {
      metadata: {
        lqip: string
      }
      url: string
    }
  }
  _id: string
  slug: {
    current: string
  }
}

const getStartedQuery = groq`*[_type=='products']{title,summary,slug,mainImage{asset->{...,metadata{
  lqip, url}}}} | order(_createdAt asc) [0...2]`

const clientFetch = cache(sanityClient.fetch.bind(sanityClient))

export default async function GetStarted({}: Props) {
  const data = await clientFetch<DashboardPreviewInterface[]>(getStartedQuery)

  // If no data, render fallback (optional: handle error state)
  if (data.length === 0) {
    return (
      <div className="py-12 px-4 sm:px-8 md:px-16 xl:px-32 2xl:px-64 bg-[#fbfbfb] text-gray-800 min-h-screen">
        <p className="text-center text-lg">Loading dashboards...</p>
      </div>
    )
  }

  return (
    <div
      id="get-started"
      className="py-12 px-4 sm:px-8 md:px-16 xl:px-32 2xl:px-64 bg-[#fbfbfb] text-gray-800 min-h-screen"
    >
      <h1 className="text-2xl sm:text-4xl font-bold w-full text-center mt-8 sm:mt-14">
        GET STARTED
      </h1>
      <h4 className="text-xl sm:text-3xl text-center mb-12 sm:mb-20">
        Access our teaching and learning dashboards
      </h4>
      {/* Flex layout with centering and spacing */}
      <div className="flex flex-wrap justify-center gap-8 mt-12 sm:mt-20 max-w-6xl mx-auto">
        {data.map((dashboard, i) => (
          <DashboardPreview
            dashboard={dashboard}
            bgColor={i % 2 === 0 ? "#4caf50" : "#e67e22"}
            key={dashboard._id}
            index={i}
          />
        ))}
      </div>
    </div>
  )
}

type DashboardPreviewProps = {
  dashboard: DashboardPreviewInterface
  bgColor: string
  index: number
}

const DashboardPreview = ({ dashboard, bgColor, index }: DashboardPreviewProps) => {
  // Map index to external Vercel URL (assumes first product = Nyansapo, second = Hekima)
  const getExternalUrl = (idx: number) => {
    switch (idx) {
      case 0:
        return "https://nyansapo-teaching-dashboard.vercel.app/"
      case 1:
        return "https://hekima-dashboard.vercel.app/"
      default:
        return "#"
    }
  }

  // Custom content based on index (overrides Sanity data)
  const getCustomContent = (idx: number) => {
    switch (idx) {
      case 0:
        return {
          title: "Nyansapo Teaching Dashboard",
          summary: "Enhance the effectiveness of foundational literacy and numeracy programs with AI-powered assessments and real-time data insights."
        }
      case 1:
        return {
          title: "Hekima Learning Dashboard",
          summary: "Hekima Learning helps teachers identify learning gaps, group students based on their needs, and adjust instruction"
        }
      default:
        return {
          title: dashboard.title,
          summary: dashboard.summary
        }
    }
  }

  const { title, summary } = getCustomContent(index)
  const externalUrl = getExternalUrl(index)

  return (
    <div
      className="flex flex-col overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 w-full max-w-sm"
      style={{ backgroundColor: "white" }}
    >
      {/* Image section - reuses the existing product image from Sanity */}
      <div className="relative w-full h-48 sm:h-56 md:h-64">
        <Image
          src={dashboard.mainImage.asset.url}
          alt={title}  // Use custom title for alt text
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL={dashboard.mainImage.asset.metadata.lqip}
        />
      </div>

      {/* Content section - uses custom title/summary */}
      <div
        style={{ backgroundColor: bgColor }}
        className="flex flex-col p-6 flex-grow"
      >
        <h1 className="text-xl sm:text-2xl mb-4 font-semibold text-white">
          {title}
        </h1>
        <p className="tracking-wide text-white flex-grow mb-6">
          {summary}
        </p>
        {/* Start Button - clear CTA to open the dashboard */}
        <a
          href={externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block self-center py-3 px-8 rounded-md bg-white text-gray-800 font-semibold hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors duration-200 text-center"
        >
          Start Now
        </a>
      </div>
    </div>
  )
}