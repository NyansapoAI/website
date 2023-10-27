import { PortableText } from "@portabletext/react"
import { groq } from "next-sanity"
import React from "react"
import { sanityClient } from "@/lib/sanity.client"
import urlBuilder from "@sanity/image-url"
import { cache } from "react"
import type { Metadata } from "next"
import Image from "next/image"
import { CareersInterface } from "../page"
import {
  Factory,
  LocateFixedIcon,
  LocateIcon,
  Map,
  Timer,
  Type,
  Users2,
} from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn, friendlyDate } from "@/lib/utils"
type Props = {
  params: { slug: string }
}
export async function generateMetadata({ params }: any): Promise<Metadata> {
  const query = groq`*[_type=='careers' && slug.current=='${params.slug}']{ title}`
  const data = await clientFetch<CareersInterface[]>(query)

  return { title: data[0].title }
}

const components = {
  types: {
    image: ({ value }: any) => {
      return (
        <Image
          width={600}
          height={600}
          alt=""
          src={urlBuilder(sanityClient)
            .image(value)
            .fit("max")
            .auto("format")
            .url()}
          className="w-96 mx-auto md:w-[600px] h-auto bg-cover"
        />
      )
    },
  },
  listItem: {
    bullet: ({ children }: { children?: any }) => (
      <li className="ml-6 my-1 text-muted-foreground">{children}</li>
    ),
    number: ({ children }: { children?: any }) => (
      <li className="ml-6 my-1 text-muted-foreground">{children}</li>
    ),
  },
  block: {
    // Ex. 1: customizing common block types
    h1: ({ children }: { children?: any }) => (
      <h1 className="text-4xl my-2 font-bold">{children}</h1>
    ),
    h2: ({ children }: { children?: any }) => (
      <h3 className="text-3xl my-2 font-bold">{children}</h3>
    ),
    h3: ({ children }: { children?: any }) => (
      <h3 className="text-2xl my-2  font-bold">{children}</h3>
    ),
    normal: ({ children }: { children?: any }) => (
      <p className="text-muted-foreground">{children}</p>
    ),

    blockquote: ({ children }: { children?: any }) => (
      <blockquote className="border-l-purple-500">{children}</blockquote>
    ),

    // Ex. 2: rendering custom styles
    customHeading: ({ children }: { children?: any }) => (
      <h2 className="text-lg text-primary text-purple-700">{children}</h2>
    ),
  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }: { children?: any }) => (
      <ul className="list-disc mt-xl">{children}</ul>
    ),
    number: ({ children }: { children?: any }) => (
      <ol className="list-decimal mt-lg">{children}</ol>
    ),

    // Ex. 2: rendering custom lists
    checkmarks: ({ children }: { children?: any }) => (
      <ol className="m-auto text-lg">{children}</ol>
    ),
  },
}
const clientFetch = cache(sanityClient.fetch.bind(sanityClient))
export const revalidate = 0
export default async function page({ params }: Props) {
  const query = groq`*[_type=='careers' && slug.current=='${params.slug}']{body, title, _createdAt,formUrl, _id,department,role,location,deadline, _updatedAt, slug}`
  const data = await clientFetch<CareersInterface[]>(query)
  const career = data[0]
  return (
    <div className="min-h-[600px] lg:px-28 flex flex-col gap-4 py-12 2xl:py-16 mt-20 px-4 md:px-16 xl:px-32 2xl:px-64 mx-auto max-w-[1920px]">
      {career ? (
        <div>
          <h1 className=" text-3xl lg:text-5xl font-bold text-center mb-8">
            {career?.title}
          </h1>
          <div className="flex py-2 flex-wrap gap-6 justify-center items-center">
            {career?.department && (
              <p className="flex items-center gap-2">
                <Users2 className="text-muted-foreground" />
                <span>{career?.department ?? ""}</span>
              </p>
            )}
            {career?.location && (
              <p className="flex items-center gap-2">
                <LocateFixedIcon className="text-muted-foreground" />
                <span>{career?.location ?? ""}</span>
              </p>
            )}
            {career?.role && (
              <p className="flex items-center gap-2">
                <Timer className="text-muted-foreground" />
                <span>{career?.role ?? ""}</span>
              </p>
            )}
          </div>
          <div className="grid md:pt-12 grid-cols-1 justify-start md:grid-cols-12 gap-6">
            <div className="leading-7 row-start-2 md:row-start-1  md:col-span-10 text-lg max-w-2xl mx-auto dark:text-slate-100 ">
              {career && career?.body && (
                <PortableText value={career.body} components={components} />
              )}
            </div>
            <div className="md:col-span-2 row-start-1  md:col-start-11 ">
              <a
                target="_blank"
                rel="noreferrer"
                href={career.formUrl}
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "w-full my-3 py-6 px-8 md:max-w-fit "
                )}
              >
                Apply
              </a>

              {career.deadline && (
                <p className="flex flex-col">
                  <span className="text-destructive">Deadline</span>
                  <span>{friendlyDate(career.deadline)}</span>
                </p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <p className="text-xl text-center text-destructive">Not found</p>
      )}
    </div>
  )
}
