import { sanityClient } from "@/lib/sanity.client"
import { groq } from "next-sanity"
import React, { cache } from "react"
import data from "./team.json"
import { TeamMember } from "./TeamMember"
type Props = {}
const clientFetch = cache(sanityClient.fetch.bind(sanityClient))
export type TeamMemberType = {
  name: string
  title: string
  photo: {
    asset: {
      _id: string
      _type: string
      metadata: {
        lqip: string
      }
    }
  }
  twitter: string
  linkedin: string
}
const teamQuery = groq`*[_type=="team"]|order(order asc){
  name,
  title,
  photo{asset->{...,metadata{
  lqip
}}},
  twitter,
  linkedin,
  }`
export default async function Team({}: Props) {
  const data = await clientFetch<TeamMemberType[]>(teamQuery)
  return (
    <section className=" flex flex-col items-center justify-center py-8 md:py-16 2xl:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center mb-24">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold">Meet the Team</h2>
            <p className="text-lg leading-relaxed m-4 text-blueGray-500"></p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-8">
          {data.map((member) => (
            <TeamMember key={member.name} data={member} />
          ))}
        </div>
      </div>
    </section>
  )
}
