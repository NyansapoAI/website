import Image from "next/image";
import React, { cache } from "react";
import SectionTitle from "../components/SectionHeader";
import Link from "next/link";
import { sanityClient } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import MainImage from "../news/[id]/MainImage";
import SanityImage from "@/components/ui/SanityImage";
import { cn } from "@/lib/utils";

type Props = {};
export type ProductPreviewInterface = {
  title: string;
  summary: string;
  mainImage: {
    asset: {
      metadata: {
        lqip: string;
      };
    };
  };
  _id: string;
  slug: {
    current: string;
  };
};

const projectQuery = groq`*[_type=='products']{title,summary,slug,mainImage{asset->{...,metadata{
  lqip}}}}`;
const clientFetch = cache(sanityClient.fetch.bind(sanityClient));

export default async function Products({}: Props) {
  const data = await clientFetch<ProductPreviewInterface[]>(projectQuery);
  return (
    <div
      id="products"
      className="py-12 px-8 md:px-16 xl:px-32 2xl:px-64 bg-yellow-200 text-gray-800"
    >
      <h1 className="text-4xl font-bold w-full text-center">Our Tools </h1>
      <div className="flex flex-col gap-12">
        {data.map((product, i) => (
          <ProductPreview
            product={product}
            imageWidth={product.title.includes("App") ? 300 : 650}
            key={i}
            flexReverse={i % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
}

type ProductPreviewProps = {
  product: ProductPreviewInterface;
  imageWidth?: number;
  imageClassName?: string;
  imageHeight?: number;
  flexReverse?: boolean;
};

const ProductPreview = ({
  product,
  imageClassName,
  flexReverse,
  imageWidth,
}: ProductPreviewProps) => {
  const videoLink = product.title.includes("Android")
    ? "/video/app.mp4"
    : "/video/dashboard.mp4";
  return (
    <div
      className={cn(
        flexReverse ? "flex-row-reverse" : "",
        `flex flex-wrap gap-12 items-center justify-center py-12`
      )}
    >
      <aside className="">
        <h1 className="text-xl mb-4 font-semibold">{product.title}</h1>
        <p className="tracking-wide lg:max-w-sm">{product.summary}</p>
        <Link
          href={`/products/${product.slug.current}`}
          className="bg-accent text-accent-foreground mt-4 inline-block py-2 px-4 rounded-md"
        >
          Learn more
        </Link>
      </aside>
      <div className="relative">
        {product.title.includes("Android") ? (
           <div
           className="relative flex justify-center h-[520px] w-[250px] border border-4 border-black rounded-2xl bg-gray-50"
           style={{ boxShadow: "10px 10px 5px 12px rgb(209, 218, 218)" }}
         >
              <span className="border border-black bg-black w-29 h-5 rounded-br-xl rounded-bl-xl"></span>
              <span className="absolute -right-2 top-20 border border-4 border-black h-10 rounded-md"></span>
              <span className="absolute -right-2 top-44 border border-4 border-black h-24 rounded-md"></span>
              <video
                width={imageWidth}
                autoPlay={true}
                loop
                muted
                className={cn(imageClassName, "z-10 relative")}
              >
                <source src={videoLink} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
          </div>
        ) : (
          <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
              <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
                  <video
                    autoPlay={true}
                    loop
                    muted
                    className={cn(imageClassName, "z-10 relative")}
                    width="100%"
                    height="100%"
                  >
                    <source src={videoLink} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
              </div>
              <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
              </div>
          </div>
        )}
      </div>
    </div>
  );
};
