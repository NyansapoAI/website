import Image from "next/image"
import React from "react"

type ProductProps = {
  product: {
    title: string
    detailsTitle: string
    detailsSummary: string
    detailsImage: {
      asset: {
        metadata: {
          lqip: string
        }
        url: string
      }
    }
  }
}

const CurriculumHero = ({ product }: ProductProps) => {
  return (
    <div className="relative bg-[#142848] w-full pt-[100px]">
      {/* Mobile Image (shown above content on small screens) */}
      <div className="lg:hidden w-full px-4 -mb-4 ">
        <div className="rounded-2xl overflow-hidden shadow-xl w-full max-w-md mx-auto mt-8">
          <div style={{ width: "100%", height: "200px", position: "relative" }}>
            {/* <Image
              src={product.detailsImage.asset.url}
              alt="Teacher"
              fill
              style={{ objectFit: "cover" }}
            /> */}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col lg:flex-row items-start justify-between gap-8 py-12">
          {/* Content Section */}
          <div className="w-full lg:w-1/2 space-y-6 z-10 px-2">
            <div className="text-white text-lg lg:text-2xl">
              {product.title}
            </div>
            <h1 className="text-white text-4xl lg:text-5xl font-bold">
              {product.detailsTitle}
            </h1>
            <p className="text-white/90 text-lg text-justify lg:text-2xl">
              {product.detailsSummary}
            </p>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-md font-medium transition-colors duration-200 inline-flex items-center gap-2">
              Learn More
            </button>
          </div>

          {/* Desktop Image (positioned absolutely for overlap) */}
          <div className="hidden lg:block absolute right-0 top-0 w-1/3 h-[120%] mt-8 z-20">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={product.detailsImage.asset.url}
                  alt={product.title}
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
