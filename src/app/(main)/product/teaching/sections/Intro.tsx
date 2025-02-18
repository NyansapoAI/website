import Image from "next/image"
import React from "react"

const CurriculumHero = () => {
  return (
    <div className="relative bg-emerald-600 w-full pt-[100px]">
      {/* Mobile Image (shown above content on small screens) */}
      <div className="lg:hidden w-full px-4 -mb-4 ">
        <div className="rounded-2xl overflow-hidden shadow-xl w-full max-w-md mx-auto mt-8">
          <div style={{ width: "100%", height: "200px", position: "relative" }}>
            {" "}
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
          <div className="w-full lg:w-1/2 space-y-6 z-10 px-2">
            {/* use Title data from sanity below */}
            <div className="text-white text-sm">Nyansapo Teaching App</div>
            {/* Use `detailsTitle` from sanity data below */}
            <h1 className="text-white text-4xl lg:text-5xl font-bold">
              Data-Driven Assessments. Scalable Impact.
            </h1>

            {/* Use `detailsSummary` from sanity data below */}
            <p className="text-white/90">
              Enhance the effectiveness of foundational literacy and numeracy
              programs with AI-powered assessments and real-time data insights.
              Seamlessly deliver high-impact Early Grande Reading Assessments
              (EGRA), Early Grade Numeracy Assessments (EGMA), and Uwezo
              assessments, optimizing resource allocation and improving learning
              outcomes at scale. By automating assessments and providing
              actionable insights, Nyansapo empowers teachers and program
              managers to focus on what truly matters—accelerating student
              learning.
            </p>

            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-md font-medium transition-colors duration-200 inline-flex items-center gap-2">
              Learn More
            </button>
          </div>

          {/* Desktop Image (positioned absolutely for overlap) */}
          <div className="hidden lg:block absolute right-0 top-0 w-1/2 h-[120%] z-20">
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
