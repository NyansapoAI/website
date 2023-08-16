"use client"
import React from "react"
import "../styles/slider.css"
import img1 from "@imgs/gallery/1.png"
import img2 from "@imgs/gallery/2.png"
import img3 from "@imgs/gallery/3.png"
import img4 from "@imgs/gallery/4.png"
import img5 from "@imgs/gallery/5.png"
import ImageGallery from "react-image-gallery"

type Props = {
  autoPlay?: boolean
}
const pictures = [
  {
    original: img1.src,
    thumbnail: img1.src,
  },
  {
    original: img2.src,
    thumbnail: img2.src,
  },
  {
    original: img3.src,
    thumbnail: img3.src,
  },
  {
    original: img4.src,
    thumbnail: img4.src,
  },
  {
    original: img5.src,
    thumbnail: img5.src,
  },
]
export default function Gallery({ autoPlay }: Props) {
  return (
    <ImageGallery
      slideDuration={3000}
      autoPlay={autoPlay ?? false}
      showNav={true}
      showThumbnails={false}
      items={pictures}
    />
  )
}
