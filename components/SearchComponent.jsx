"use client"

import * as React from "react"
import { Check, ChevronsUpDown, SearchIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Image from "next/image"
import { Link } from "nextjs13-progress"

const categories = [
  {
    value: "all",
    label: "All",
  },
  {
    value: "vegetables",
    label: "Vegetables",
  },
  {
    value: "fruits",
    label: "Fruits",
  },
  {
    value: "millets",
    label: "Millets",
  },
  {
    value: "health",
    label: "Health",
  },
  {
    value: "nuts",
    label: "Nuts",
  },
  {
    value: "juice",
    label: "Juice",
  },
]

export function SearchComponent() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <SearchIcon className="cursor-pointer" />
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 z-50">
        <Command>
          <CommandInput placeholder="Search category..." />
          <CommandEmpty>No categories found.</CommandEmpty>
          <CommandGroup>
            {categories.map((category) => (
              <CommandItem
                key={category.value}
                value={category.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === category.value ? "opacity-100" : "opacity-0"
                  )}
                />
                <Link className="w-full" href={`/shop?category=${category.value}`}>
                  {category.label}
                </Link>
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
