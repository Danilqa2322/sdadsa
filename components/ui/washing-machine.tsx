"use client"

import { motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"

const MatrixDisplay = ({ number }: { number: number }) => {
  const [mounted, setMounted] = useState(false)
  const digitsStr = number.toString()
  const digits = digitsStr.split("")

  useEffect(() => {
    setMounted(true)
  }, [])

  // Заполняем слева пробелами, чтобы всегда было 8 символов
  const paddedDigits = Array(8 - digits.length)
    .fill(" ")
    .concat(digits)

  // Prevent hydration mismatch by not animating on server
  if (!mounted) {
    return (
      <div className="absolute top-4 left-4 w-20 h-6 bg-black rounded-sm flex items-center justify-center overflow-hidden">
        <div className="flex flex-col text-green-400 font-mono text-xs leading-none -mt-2.5">
          <div className="flex">
            {paddedDigits.slice(0, 4).map((digit, i) => (
              <span key={`top-${i}`} className="w-2 text-center">
                {digit === " " ? "\u00A0" : digit}
              </span>
            ))}
          </div>
          <div className="flex">
            {paddedDigits.slice(4, 8).map((digit, i) => (
              <span key={`bottom-${i}`} className="w-2 text-center">
                {digit === " " ? "\u00A0" : digit}
              </span>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="absolute top-4 left-4 w-20 h-6 bg-black rounded-sm flex items-center justify-center overflow-hidden">
      <div className="flex flex-col text-green-400 font-mono text-xs leading-none -mt-2.5">
        <div className="flex">
          {paddedDigits.slice(0, 4).map((digit, i) => (
            <motion.span
              key={`top-${i}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1 }}
              className="w-2 text-center"
            >
              {digit === " " ? "\u00A0" : digit}
            </motion.span>
          ))}
        </div>
        <div className="flex">
          {paddedDigits.slice(4, 8).map((digit, i) => (
            <motion.span
              key={`bottom-${i}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1 }}
              className="w-2 text-center"
            >
              {digit === " " ? "\u00A0" : digit}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  )
}

export const WashingMachine = () => {
  const [counter, setCounter] = useState(0)
  const [mounted, setMounted] = useState(false)
  const startTimeRef = useRef<number | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const duration = 5000 // 5 секунд
    const maxCount = 1254

    const step = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp
      const elapsed = timestamp - startTimeRef.current
      if (elapsed < duration) {
        const progress = elapsed / duration
        setCounter(Math.floor(progress * maxCount))
        requestAnimationFrame(step)
      } else {
        setCounter(maxCount)
      }
    }

    requestAnimationFrame(step)

    return () => {
      startTimeRef.current = null
    }
  }, [mounted])

  // Prevent hydration mismatch by rendering static content on server
  if (!mounted) {
    return (
      <div className="relative flex items-center justify-center">
        {/* Client Counter - показываем только здесь */}
        <div className="absolute -left-80 top-1/4 transform -translate-y-1/2">
          <div className="text-center">
            <p className="text-lg font-medium mb-2" style={{ color: "#1B6568" }}>
              Счетчик отремонтированных
            </p>
            <p className="text-lg font-medium mb-4" style={{ color: "#1B6568" }}>
              стиральных машин
            </p>
            <div className="text-lg font-bold" style={{ color: "#1B6568" }}>
              1254+
            </div>
          </div>
        </div>

        {/* Washing Machine */}
        <div className="relative w-48 h-64 mx-auto">
          {/* Main Body */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-200 rounded-xl shadow-2xl border border-gray-300">
            {/* Top Control Panel */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-gray-100 rounded-t-xl border-b border-gray-300">
              {/* Matrix Display */}
              <MatrixDisplay number={1254} />

              {/* Control Knobs */}
              <div className="absolute top-3 right-4 flex space-x-2">
                <div className="w-6 h-6 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full border border-gray-500"></div>
                <div className="w-6 h-6 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full border border-gray-500"></div>
              </div>
            </div>

            {/* Teal Accent Strip */}
            <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-teal-600"></div>

            {/* Door */}
            <div className="absolute top-24 left-0 right-0 flex justify-center">
              <div className="w-36 h-36 bg-gradient-to-br from-white to-gray-100 rounded-full border-4 border-teal-600 overflow-hidden relative shadow-inner">
                {/* Inner Ring */}
                <div className="absolute inset-2 rounded-full border-2 border-gray-300"></div>

                {/* Static Water */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-400 via-blue-300 to-blue-200 opacity-80 h-12 rounded-b-full" />

                {/* Door Handle */}
                <div className="absolute top-1/2 right-2 w-2 h-8 bg-gradient-to-b from-gray-400 to-gray-500 rounded-full transform -translate-y-1/2"></div>
              </div>
            </div>

            {/* Bottom Base */}
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-gray-200 to-gray-300 rounded-b-xl">
              {/* Feet */}
              <div className="absolute -bottom-1 left-6 w-4 h-2 bg-gray-400 rounded-b-md"></div>
              <div className="absolute -bottom-1 right-6 w-4 h-2 bg-gray-400 rounded-b-md"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative flex items-center justify-center">
      {/* Client Counter - показываем только здесь */}
      <div className="absolute -left-80 top-1/4 transform -translate-y-1/2">
        <div className="text-center">
          <p className="text-lg font-medium mb-2" style={{ color: "#1B6568" }}>
            Счетчик отремонтированных
          </p>
          <p className="text-lg font-medium mb-4" style={{ color: "#1B6568" }}>
            стиральных машин
          </p>
          <div className="text-lg font-bold" style={{ color: "#1B6568" }}>
            {counter.toLocaleString()}+
          </div>
        </div>
      </div>

      {/* Washing Machine */}
      <div className="relative w-48 h-64 mx-auto">
        {/* Main Body */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-200 rounded-xl shadow-2xl border border-gray-300">
          {/* Top Control Panel */}
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-gray-100 rounded-t-xl border-b border-gray-300">
            {/* Matrix Display */}
            <MatrixDisplay number={counter} />

            {/* Control Knobs */}
            <div className="absolute top-3 right-4 flex space-x-2">
              <div className="w-6 h-6 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full border border-gray-500"></div>
              <div className="w-6 h-6 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full border border-gray-500"></div>
            </div>
          </div>

          {/* Teal Accent Strip */}
          <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-teal-600"></div>

          {/* Door */}
          <div className="absolute top-24 left-0 right-0 flex justify-center">
            <div className="w-36 h-36 bg-gradient-to-br from-white to-gray-100 rounded-full border-4 border-teal-600 overflow-hidden relative shadow-inner">
              {/* Inner Ring */}
              <div className="absolute inset-2 rounded-full border-2 border-gray-300"></div>

              {/* Animated Water */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-400 via-blue-300 to-blue-200 opacity-80"
                animate={{
                  height: ["30%", "50%", "30%"],
                  borderRadius: ["0% 0% 50% 50%", "0% 0% 60% 40%", "0% 0% 50% 50%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  repeatType: "loop",
                }}
              />

              {/* Water Surface Shimmer */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-white opacity-60"
                animate={{
                  y: ["-30%", "-50%", "-30%"],
                  scaleX: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  repeatType: "loop",
                }}
              />

              {/* Door Handle */}
              <div className="absolute top-1/2 right-2 w-2 h-8 bg-gradient-to-b from-gray-400 to-gray-500 rounded-full transform -translate-y-1/2"></div>
            </div>
          </div>

          {/* Bottom Base */}
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-gray-200 to-gray-300 rounded-b-xl">
            {/* Feet */}
            <div className="absolute -bottom-1 left-6 w-4 h-2 bg-gray-400 rounded-b-md"></div>
            <div className="absolute -bottom-1 right-6 w-4 h-2 bg-gray-400 rounded-b-md"></div>
          </div>
        </div>
      </div>
    </div>
  )
}