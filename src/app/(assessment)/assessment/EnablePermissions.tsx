"use client"
import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import img1 from "@imgs/mic_permissions/permissions_1.jpg"
import img2 from "@imgs/mic_permissions/permissions_2.jpg"
import img3 from "@imgs/mic_permissions/permissions_3.jpg"
import ImageGallery from "react-image-gallery"
type Props = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  open: boolean
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
]
const EnablePermissions = ({ open, setOpen }: Props) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Allow microphone permissions and reload the page
          </DialogTitle>
        </DialogHeader>
        <div className="max-w-lg max-h-[400px] overflow-clip ">
          <ImageGallery
            autoPlay={true}
            slideDuration={2000}
            showThumbnails={false}
            items={pictures}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
export default EnablePermissions
