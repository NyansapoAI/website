import React from "react";
import Image from "next/image";
import "../styles/slider.css";
import img1 from "@imgs/gallery/1.png";
import img2 from "@imgs/gallery/2.png";
import img3 from "@imgs/gallery/3.png";
import img4 from "@imgs/gallery/4.png";
import img5 from "@imgs/gallery/5.png";
type Props = {};
const pictures = [
  {
    src: img1.src,
  },
  {
    src: img2.src,
  },
  {
    src: img3.src,
  },
  {
    src: img4.src,
  },
  {
    src: img5.src,
  },
];
export default function Slider({}: Props) {
  return (
    <div className="slide-container">
      {pictures.map((pic, i) => (
        <span key={i} className="slider-span" id={`slider-span${i + 1}`}></span>
      ))}

      <div className="image-slider">
        {pictures.map((pic, i) => (
          <Picture key={i} index={i} imageSrc={pic.src} />
        ))}
      </div>
    </div>
  );

  type pictureProps = {
    imageSrc: string;
    index: number;
  };
  function Picture({ imageSrc, index }: pictureProps) {
    return (
      <div className="slides-div" id={`slide-${index + 1}`}>
        <Image
          width={600}
          height={600}
          src={imageSrc}
          alt=""
          className="img"
          id={`img${index + 1}`}
        />
        <a
          href={`#slider-span${index + 1}`}
          className="button"
          id={`button-${index + 1}`}
        ></a>
      </div>
    );
  }
}
