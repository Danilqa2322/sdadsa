"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

interface WaterTextAnimationProps {
  text: string
  className?: string
  color?: string
}

export function WaterTextAnimation({ text, className = "", color = "inherit" }: WaterTextAnimationProps) {
  const [mounted, setMounted] = useState(false)
  const letters = text.split("")

  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent hydration mismatch by rendering static text on server
  if (!mounted) {
    return (
      <div className={`flex flex-wrap justify-center ${className}`} style={{ color }}>
        {letters.map((letter, index) => (
          <span key={index} className="inline-block">
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </div>
    )
  }

  return (
    <div className={`flex flex-wrap justify-center ${className}`}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{
            opacity: 0,
            y: 50,
            scaleY: 0.3,
            filter: "blur(4px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            scaleY: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.8,
            delay: index * 0.1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          style={{
            transformOrigin: "bottom",
            color: color,
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </div>
  )
}