import Image from "next/image"
import React from "react"
import data from "./team.json"
type Props = {}

export default function Team({}: Props) {
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
          {data.team.map((member) => (
            <TeamMember
              key={member.name}
              imageUrl={member.imageUrl}
              name={member.name}
              title={member.role}
              socialLinks={member.socialLinks}
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
    type: typeof SocialLinkVariants[number] | string
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
        <div className="rounded-full w-[250px] mx-auto h-[250px] overflow-clip border-2">
          <Image
            width={250}
            height={250}
            alt="..."
            src={imageUrl}
            className="shadow-lg apsect-square w-full h-full"
          />
        </div>
        <div className="pt-6 text-center">
          <h5 className="text-xl font-bold">{name}</h5>
          <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
            {title}
          </p>
          <div className="mt-6">
            {socialLinks.map((social, i) => (
              <button
                key={i}
                className="bg-cyan-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                type="button"
              >
                <i className={`fab fa-${social.type}`}></i>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
