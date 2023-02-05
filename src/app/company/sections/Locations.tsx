import React from "react"

type Props = {}
const locationsData = [
  {
    name: "Kitui",
  },
  {
    name: "Kitui",
  },
  {
    name: "Kitui",
  },
]
export default function Locations({}: Props) {
  return (
    <div className="py-8">
      <h1 className="text-3xl mb-6">Our Locations</h1>
      <div>
        <div>
          {locationsData.map((location, i) => (
            <Location key={i} location={location} />
          ))}
        </div>
      </div>
    </div>
  )
}

type LocationProps = {
  location: {
    name: string
    address?: string
    mapLink?: string
  }
}

function Location({ location: { name, address, mapLink } }: LocationProps) {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="">{name}</h1>
      {address && <h4>{address}</h4>}
      {mapLink && (
        <a href={mapLink} target="_blank" rel="noreferrer">
          View Location
        </a>
      )}
    </div>
  )
}
