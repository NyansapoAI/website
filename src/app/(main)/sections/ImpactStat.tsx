import React from "react";
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
  // Function to determine title color based on title
  const getTitleColor = (title: string) => {
    if (title === "5000" || title === "40" || title === "15" || title === "200") {
      return "text-yellow-500"; // Example: Change to your desired color class
    }
    return "text-yellow"; // Default title color
  };

  // Function to determine description color based on title
  const getDescriptionColor = (title: string) => {
    if (title === "5000" || title === "40" || title === "15" || title === "200") {
      return "text-white-500"; // Example: Change to your desired color class
    }
    return "text-gray-400"; // Default description color
  };

  // Function to split description into lines and add <br> tags
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
      className="flex flex-col items-center justify-center p-4 rounded-lg text-white relative m-9" // Added margin here
      style={{
        width: imageWidth,
        height: imageHeight,
      }}
    >
      {/* Container for hover effect */}
      <div
        className="h-full w-full overflow-hidden rounded-lg bg-gray-800 transition duration-300 ease-in-out transform hover:bg-gray-800 hover:text-white hover:scale-105"
        style={{
          backgroundImage: image ? `url(${typeof image === "string" ? image : image.src})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay for darkening effect */}
        <div className="h-full w-full absolute top-0 left-0 bg-black opacity-50 hover:opacity-0 transition duration-300 ease-in-out"></div>
        
        {/* Conditional rendering based on image availability */}
        {image && (
          <div className="h-full w-full flex flex-col items-center justify-center text-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
            <div className={`flex text-4xl tracking-wide font-bold relative z-10 ${getTitleColor(title)}`}>
              <CountUp start={0} end={parseInt(title)} suffix={suffix || ""}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
            </div>
            <p className={`mt-2 text-lg relative z-10 ${getDescriptionColor(title)}`}>
              {renderDescription(description)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImpactStat;
