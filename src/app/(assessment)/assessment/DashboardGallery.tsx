import React from "react"
import Image from "next/image"
type Props = {}

export default function DashboardGallery({}: Props) {
  return (
    <div className="py-6">
      <div className="flex flex-col items-center gap-6">
        <Image
          width={1200}
          height={600}
          src="/screenshots/dashboard/dashboard-1.png"
          alt="Picture of the author"
        />
        <Image
          width={1200}
          height={600}
          src="/screenshots/dashboard/dashboard-2.png"
          alt="Picture of the author"
        />
      </div>
    </div>
  )
}
