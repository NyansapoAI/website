import React from "react"
import Intro from "./sections/Intro"
import Why from "./sections/Why"
import TutorChat from "./sections/TutorChat"
import Awards from "./sections/Awards"
import { sanityClient } from "@/lib/sanity.client"
import { groq } from "next-sanity"

type Props = {
  params: {
    slug: string
  }
}

const productQuery = groq`*[_type=='products' && slug.current == $slug][0]{
  title,
  slug,
  detailsTitle,
  detailsSummary[] {
    ...,
    _type == "block" => {
      ...,
      children[] {
        ...
      }
    }
  },
  detailsImage{
    asset->{ url, metadata { lqip } }
  },
  whyNyansapoTitle,
  whyNyansapoSummary[] {
    ...,
    _type == "block" => {
      ...,
      children[] {
        ...
      }
    }
  },
  features[]->{
    title,
    icon{
      asset->{ url, metadata { lqip } }
    },
    description
  },
  hasAwards,
  awardsTitle,
  awardsDescription,
  awardLogos[]{
    asset->{ url, metadata { lqip } },
    alt
  },
  reachOut
}`

export default async function Page({ params: { slug } }: Props) {
  const productData = await sanityClient.fetch(productQuery, { slug })

  return (
    <div>
      <Intro product={productData} />
      <Why
        whyNyansapoTitle={productData.whyNyansapoTitle}
        whyNyansapoSummary={productData.whyNyansapoSummary}
        features={productData.features || []}
      />
      {productData.hasAwards && (
        <Awards
          title={productData.awardsTitle}
          description={productData.awardsDescription}
          awardLogos={productData.awardLogos || []}
        />
      )}
      <TutorChat ctaText={productData.reachOut} productSlug={slug} />
    </div>
  )
}
