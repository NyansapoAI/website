import Image from "next/image"
import React from "react"

const CurriculumHero = () => {
  return (
    <div className="relative bg-pink-700 w-full pt-[100px]">
      {/* Mobile Image (shown above content on small screens) */}
      <div className="lg:hidden w-full px-4 -mb-4 ">
        <div className="rounded-2xl overflow-hidden shadow-xl w-full max-w-md mx-auto mt-8">
          <div style={{ width: "100%", height: "200px", position: "relative" }}>
            {" "}
            {/* Added explicit dimensions */}
            <Image
              src="https://learningportal.iiep.unesco.org/sites/default/files/inline-images/pic2.png"
              alt="Teacher"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col lg:flex-row items-start justify-between gap-8 py-12">
          {/* Content Section */}
          <div className="w-full lg:w-1/2 space-y-6 z-10 pr-[75px]">
            <div className="text-white text-lg font-bold">
              Hekima Learning App
            </div>

            <h1 className="text-white text-4xl lg:text-5xl font-bold">
              AI Powered Assessments. Better Learning Outcomes.
            </h1>

            {/* <p className="text-white/90 text-lg">
              We support the best in math curriculum.
            </p> */}

            <p className="text-white/90 text-[20px]">
              In many Kenyan classrooms teachers struggle to track how well
              students grasp different strands and sub-strands in the
              curriculum. Hekima Learning simplifies this challenge with
              AI-powered assessments that provide real-time insights into
              student progress. By automatically analyzing student performance,
              Hekima Learning helps teachers identify learning gaps, group
              students based on their needs, and adjust instruction accordingly.
              This reduces administrative workload and allows teachers to focus
              on what matters most—helping every child learn effectively.
            </p>

            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-md font-medium transition-colors duration-200 inline-flex items-center gap-2">
              Learn More
            </button>
          </div>

          {/* Desktop Image (positioned absolutely for overlap) */}
          <div className="hidden lg:block absolute right-0 top-0 w-1/2 h-[120%] z-20 ml-6 pl-[20px]">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://learningportal.iiep.unesco.org/sites/default/files/inline-images/pic2.png"
                  alt="Teacher"
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurriculumHero
