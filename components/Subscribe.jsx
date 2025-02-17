"use client"

import { Input } from "@/components/ui/input"
import { CustomBtn } from "./CustomBtn"
import { Button } from "./ui/button"
import { useState } from "react"
import toast from "react-hot-toast"

const Subscribe = () => {

  const [emailValue, setEmailValue] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    setEmailValue('')
    toast.success("Subscribed Successfuly")
  }

  return (
    <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row w-full md:w-1/2 items-center gap-6 mt-6">
      <Input required value={emailValue} onChange={(e) => setEmailValue(e.target.value)} type="email" placeholder="Email" className="py-[26px] rounded-[16px] font-bold body-text" />
      <CustomBtn type="submit" text="Subscribe" />
    </form>
  )
}

export default Subscribe