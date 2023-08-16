"use client"
import { sanityClient } from "@/lib/sanity.client"
import { useNextSanityImage } from "next-sanity-image"
import Image from "next/image"
import React from "react"
import { TeamMemberType } from "./Team"
const SocialLinkVariants = [
  "twitter",
  "linkedin",
  "instagram",
  "facebook",
] as const

export type TeamMemberProps = {
  data: TeamMemberType
}
export const TeamMember = ({
  data: { name, title, photo, twitter, linkedin },
}: TeamMemberProps) => {
  const imageProps = useNextSanityImage(sanityClient, photo)
  const socialLinks = [
    { type: "twitter", link: twitter },
    { type: "linkedin", link: linkedin },
  ]

  return (
    <div className="px-4">
      <div className="px-6">
        <div className="rounded-full w-[250px] mx-auto shadow-md h-[250px] overflow-clip ">
          <Image
            {...imageProps}
            width={600}
            height={600}
            alt="..."
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
