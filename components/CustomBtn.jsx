import { ArrowRightCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function CustomBtn({ text, icon, variant, handleClick, customclass, type }) {
  return (
    <Button type={type} onClick={handleClick} variant={variant} className={`no-focus flex-center gap-[10px] py-[28px] px-[39px] rounded-[16px] font-bold body-text ${customclass}`}>
      {text} {icon && <Image src="/arrowRight.svg" alt="arrow" width={14} height={14} />}
    </Button>
  )
}
