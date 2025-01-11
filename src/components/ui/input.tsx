import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-[#0e0e0e] ring-offset-[#517f3a] file:border-0 file:bg-[#3b5f2d] file:text-sm file:font-medium file:text-[#f5f5f5] file:rounded-full placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[transparent] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm cursor-pointer",
        className
      )}
      ref={ref}
      {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
