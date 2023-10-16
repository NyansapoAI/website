import React from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

type ExpandProps = {
  callback: () => void
  open: boolean
}
export function ExpandResult({ callback, open }: ExpandProps) {
  //show edit option only if not already edited
  return (
    <div>
      <Button onClick={callback} className=" flex items-center">
        <span className={`duration-300 ${open ? "rotate-90" : "rotate-0"}`}>
          <ChevronRight />
        </span>
      </Button>
    </div>
  )
}
