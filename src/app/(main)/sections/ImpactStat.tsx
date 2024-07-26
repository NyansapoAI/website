import React, { useState } from "react";
import CountUp from "react-countup";
import { StaticImageData } from 'next/image';

type ImageType = string | StaticImageData;

type Props = {
  title: string;
  description: string;
  suffix?: string;
  image?: ImageType;
  imageWidth?: string;
  imageHeight?: string;
};

const ImpactStat = ({ title, description, suffix, image, imageWidth, imageHeight }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const getTitleColor = (title: string) => {
    if (title === "5000" || title === "40" || title === "15" || title === "200") {
      return "text-yellow-500";
    }
    return "text-yellow-500";
  };

  const getDescriptionColor = (title: string) => {
    if (title === "5000" || title === "40" || title === "15" || title === "200") {
      return "text-white-500 ";
    }
    return "text-white-500";
  };

  const renderDescription = (description: string) => {
    return description.split("\\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <div
      className="flex flex-col items-center justify-center p-4 rounded-lg text-white relative m-9"
      style={{ width: imageWidth, height: imageHeight }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="h-full w-full overflow-hidden rounded-lg bg-gray-800 transition duration-300 ease-in-out transform hover:bg-gray-800 hover:text-white hover:scale-105"
        style={{
          backgroundImage: image && isHovered ? `url(${typeof image === "string" ? image : image.src})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="h-full w-full absolute top-0 left-0 bg-black opacity-50 hover:opacity-0 transition duration-300 ease-in-out"></div>
        {image && (
  <div className="h-full w-full flex flex-col items-center justify-center text-center opacity-100 transition duration-300 ease-in-out">
    <div className={`flex text-6xl tracking-wide font-bold relative z-10 ${getTitleColor(title)}`}>
      <CountUp enableScrollSpy={true} start={0} end={parseInt(title)} suffix={suffix}>
        {({ countUpRef }) => (
          <div>
            <span ref={countUpRef} />
          </div>
        )}
      </CountUp>
    </div>
    <p className={`mt-2 text-lg font-bold relative z-10 ${getDescriptionColor(title)}`}>
      {renderDescription(description)}
    </p>
  </div>
)}
      </div>
    </div>
  );
};

export default ImpactStat;