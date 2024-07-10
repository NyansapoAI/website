import React from "react";
import CountUp from "react-countup";
import { StaticImageData } from 'next/image';

type ImageType = string | StaticImageData;

type Props = {
  title: string;
  description: string;
  suffix?: string;
  image?: ImageType; // Rename backgroundImage to image
  imageWidth?: string; // Add width and height props for the image
  imageHeight?: string;
};

const ImpactStat = ({ title, description, suffix, image, imageWidth, imageHeight }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 rounded-lg text-white">
      {image && (
        <div className="mb-4">
          {typeof image === "string" ? (
            <img
              src={image}
              alt={title}
              className="w-full h-auto rounded-lg"
              style={{ width: imageWidth, height: imageHeight }}
            />
          ) : (
            <img
              src={image.src}
              alt={title}
              className="w-full h-auto rounded-lg"
              style={{ width: imageWidth, height: imageHeight }}
            />
          )}
        </div>
      )}
      <div className="flex text-4xl tracking-wide font-bold">
        <CountUp start={0} end={parseInt(title)} suffix={suffix || ""}>
          {({ countUpRef }) => (
            <div>
              <span ref={countUpRef} />
            </div>
          )}
        </CountUp>
      </div>
      <p className="mt-2 text-center text-base text-muted-foreground">
        {description}
      </p>
    </div>
  );
};

export default ImpactStat;
