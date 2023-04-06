import React from "react"

type Props = {}
const partners = [
  {
    name: "Penn State",
  },
  {
    name: "Humanitarian Engineering &Social Entrepreneurship (HESE)",
  },
]
export default function Partners({}: Props) {
  return (
    <div className="py-8">
      <h1 className="text-3xl  mb-6">Our Partners</h1>
      <div className="flex gap-3 flex-wrap">
        {partners.map((partner, i) => (
          <h1
            key={i}
            className=" text-3xl shadow-md rounded-md p-4 font-semibold text-accent2"
          >
            {partner.name}
          </h1>
        ))}
      </div>
    </div>
  )
}
