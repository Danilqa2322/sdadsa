"use client"

import { cn } from "@/lib/utils"
import type React from "react"

interface AnimatedShinyTextProps {
  children: React.ReactNode
  className?: string
}

export function AnimatedShinyText({ children, className }: AnimatedShinyTextProps) {
  return (
    <span
      className={cn(
        "inline-block animate-shimmer bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] bg-clip-text text-transparent",
        className,
      )}
    >
      {children}
    </span>
  )
}
