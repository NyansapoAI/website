import { sanityClient } from "@/lib/sanity.client"
import { groq } from "next-sanity"
import Image from "next/image"
import React, { cache } from "react"
import data from "./team.json"
type Props = {}
const clientFetch = cache(sanityClient.fetch.bind(sanityClient))
type TeamMember = {
  name: string
  title: string
  photo: {
    asset: {
      metadata: {
        lqip: string
      }
    }
  }
  twitter: string
  linkedin: string
}
const teamQuery = groq`*[_type=="team"]{
  name,
  title,
  photo,
  twitter,
  linkedin,
  }`
export default async function Team({}: Props) {
  const data = await clientFetch<TeamMember[]>(teamQuery)
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
            <TeamMember
              key={member.name}
              imageUrl={member.photo.asset.metadata.lqip}
              name={member.name}
              title={member.title}
              socialLinks={[
                { link: member.twitter, type: "twitter" },
                { link: member.linkedin, type: "linkedin" },
              ]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
type TeamMemberProps = {
  imageUrl: string
  name: string
  title: string
  socialLinks: {
    link: string
    type: (typeof SocialLinkVariants)[number] | string
  }[]
}
const SocialLinkVariants = [
  "twitter",
  "linkedin",
  "instagram",
  "facebook",
] as const

const TeamMember = ({
  name,
  imageUrl,
  title,
  socialLinks,
}: TeamMemberProps) => {
  return (
    <div className="px-4">
      <div className="px-6">
        <div className="rounded-full w-[250px] mx-auto shadow-md h-[250px] overflow-clip ">
          <Image
            width={600}
            height={600}
            alt="..."
            src={imageUrl}
            className=" w-96 shadow-lg bg-cover  h-auto"
          />
        </div>
        <div className="pt-6 text-center">
          <h5 className="text-xl font-bold">{name}</h5>
          <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
            {title}
          </p>
          <div className="mt-6 flex gap-3 justify-center">
            {socialLinks.map((social, i) => (
              <a
                href={social.link}
                target="_blank"
                rel="noreferrer"
                key={i}
                className="bg-cyan-600 flex items-center justify-center text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                type="button"
              >
                <i className={`fab fa-${social.type}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
