import React from "react"

type Props = {}
const projects = [
  {
    title: "Korando Bootcamp",
    description:
      "Over 200 literacy assessments were conducted and 40 children aged between 9 to 15 years old we involved in a learning camp. ",
    videoLink: "",
  },
  {
    title: "Lorem Bootcamp",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta at, quo soluta accusamus odio adipisci commodi deserunt cumque consectetur aut necessitatibus fuga omnis dignissimos neque quibusdam ipsam asperiores tempora similique.",
    videoLink: "",
  },
]
export default function page({}: Props) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {projects.map((project, i) => (
        <Project key={i} project={project} />
      ))}
    </div>
  )
}

type ProjectProps = {
  project: typeof projects[number]
}

function Project({ project: { title, description, videoLink } }: ProjectProps) {
  return (
    <div className="shadow-lg rounded-md p-4">
      <video className="w-full h-96 aspect-video" src={videoLink}></video>
      <h1 className="text-3xl font-bold lg:text-4xl">{title}</h1>
      <p className="text-lg text-gray-500">{description}</p>
    </div>
  )
}
