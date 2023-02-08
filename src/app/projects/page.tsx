import React from "react"

type Props = {}
const projects = [
  {
    title: "Korando Bootcamp",
    description:
      "Over 200 literacy assessments were conducted and 40 children aged between 9 to 15 years old we involved in a learning camp. ",
    videoLink: "https://www.youtube.com/embed/HFg6NXFJPiE",
  },
  {
    title: "Kitui Bootcamp",
    description:
      "We conductred a 10 day learning camp in Voo in Kitui county usingthe TARL methodology.",
    videoLink: "https://www.youtube.com/embed/5ncU3xrg18c",
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
    <div className=" flex flex-col gap-3 shadow-lg rounded-md p-4">
      <iframe
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full rounded-md h-96 aspect-video"
        src={videoLink}
      ></iframe>
      <h1 className="text-3xl font-bold ">{title}</h1>
      <p className="text-lg text-gray-500">{description}</p>
    </div>
  )
}
