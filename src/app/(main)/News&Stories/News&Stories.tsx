import { sanityClient } from "@/lib/sanity.client"
import { cache } from "react"
import { groq } from "next-sanity"
import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Featured Partners",
  description: "Organizations and publications featuring Nyansapo",
}

// Enable NextJS to cache and dedupe queries
const clientFetch = cache(sanityClient.fetch.bind(sanityClient))

// Query for featured items
const featuredQuery = groq`*[_type=='news' && isFeatured == true] | order(publishedAt desc, _createdAt desc) {
  title, 
  link, 
  _id,
  mainImage {
    asset -> {
      ...,
      metadata {
        lqip
      },
      url
    }
  }
}`

export interface FeaturedInterface {
  title: string
  link: string
  _id: string
  mainImage: {
    _type: string
    asset: {
      _id: string
      _type: string
      metadata: {
        lqip: string
      }
      url: string
    }
  }
}

export const revalidate = 60 * 60

export default async function News() {
  const featuredData = await clientFetch<FeaturedInterface[]>(featuredQuery)

  return (
    <div
      id="Resources"
      className="py-8 lg:py-16 container mx-auto px-4"
    >
      <h2 className="text-3xl xl:text-4xl font-bold mb-10 text-center">
        Featured By
      </h2>

      {featuredData.length > 0 ? (
        <div className="mb-8 lg:mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 items-center">
            {featuredData.map((item) => (
              <a
                key={item._id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group hover:opacity-90 transition-all duration-300 h-24 flex items-center justify-center"
                title={item.title}
              >
                {item.mainImage?.asset?.url && (
                  <div className="w-full h-full relative flex items-center justify-center">
                    <Image
                      src={item.mainImage.asset.url}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                      placeholder={
                        item.mainImage.asset.metadata.lqip ? "blur" : "empty"
                      }
                      blurDataURL={
                        item.mainImage.asset.metadata.lqip || undefined
                      }
                    />
                  </div>
                )}
              </a>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">
          No featured partners to display.
        </p>
      )}
    </div>
  )
}
