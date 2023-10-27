import { sanityClient } from "@/lib/sanity.client"
import { groq } from "next-sanity"
import React, { cache } from "react"
import CareersPreview from "./CareersPreview"
import { CardTitle } from "@/components/ui/card"

type Props = {}
// const careers = [
//   {
//     _id: "1",
//     title: "Test",
//     department: "Project mamagement",
//     location: "Remote",
//     duration: "Full Time",
//     summary: "test summary",
//     formUrl: "http://localhost:3000/careers",
//     slug: {
//       current: "test",
//     },
//   },
// ]
export type CareersInterface = {
  title: string
  formUrl: string
  open?: boolean
  _updatedAt?: string
  _createdAt?: string
  location?: string
  department?: string
  duration?: string
  body?: any[]
  _id: string
  slug: {
    current: string
  }
}
export const revalidate = 0
const careersQuery = groq`*[_type=='careers'&& open==true]{title,formUrl,_id,department,duration,location,slug}`
const clientFetch = cache(sanityClient.fetch.bind(sanityClient))
export default async function page({}: Props) {
  const careers = await clientFetch<CareersInterface[]>(careersQuery)
  return (
    <div className="flex flex-col w-full items-center justify-center py-8 lg:py-16 mt-20 px-8 md:px-16 xl:px-32 2xl:px-64 mx-auto ">
      <div className="text-center mb-6 lg:mb-8">
        <CardTitle>Open Positions</CardTitle>
        <p className="text-muted-foreground my-2">
          We are currently looking for help in the following areas
        </p>
      </div>
      <div className="flex border-t md:w-3/4 lg:w-1/2 border-slate-500 flex-col w-full items-center justify-center divide-y-2 divide-slate-500 ">
        {careers && careers.length > 0 ? (
          careers.map((career) => (
            <CareersPreview key={career._id} data={career} />
          ))
        ) : (
          <h1 className="py-4 text-lg font-bold">
            No Appllications open currently
          </h1>
        )}
      </div>
    </div>
  )
}
