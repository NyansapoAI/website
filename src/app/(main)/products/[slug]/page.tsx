import React from "react"
import Intro from "./sections/Intro"
import Why from "./sections/Why"
import TutorChat from "./sections/TutorChat"
import { sanityClient } from "@/lib/sanity.client"
import { groq } from "next-sanity"

const productQuery = groq`*[_type=='products']{
  title,
  detailsTitle,
  detailsSummary,
  detailsImage{
    asset->{ url, metadata { lqip } }
  },
  whyNyansapoTitle,
  whyNyansapoSummary,
  features[]->{
    title,
    icon{
    asset->{ url, metadata { lqip } }
  },
    description
  },
  reachOut
}[0]`

export default async function Page() {
  const productData = await sanityClient.fetch(productQuery)

  return (
    <div>
      <Intro product={productData} />
      <Why
        whyNyansapoTitle={productData.whyNyansapoTitle}
        whyNyansapoSummary={productData.whyNyansapoSummary}
        features={productData.features || []}
      />
      <TutorChat ctaText={productData.reachOut} />
    </div>
  )
}
