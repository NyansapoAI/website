import React from "react"

type Props = {}

export default function CompanyLanding({}: Props) {
  return (
    <div className="  w-full h-full pt-16 pb-32 flex flex-col content-center items-center justify-center min-h-screen-75">
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div className="pr-12">
              <h1 className="font-semibold text-4xl lg:text-5xl">
                Our company motto
              </h1>
              <p className="mt-4 text-lg text-blueGray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.Lorem ipsum dolor sit amet,
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
