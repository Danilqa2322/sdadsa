"use client"

import { motion } from "framer-motion"
import { WaterTextAnimation } from "@/components/water-text-animation"
import { Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function WaterContactsSection({ onCallMaster }: { onCallMaster: () => void }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-blue-400 via-cyan-500 to-blue-600">
      {/* Water Animation Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated ripples - only render after mount */}
        {mounted && [...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border-2 border-white/20"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              width: ["0px", "300px", "600px"],
              height: ["0px", "300px", "600px"],
              opacity: [0.8, 0.4, 0],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.8,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Additional smaller ripples - only render after mount */}
        {mounted && [...Array(4)].map((_, i) => (
          <motion.div
            key={`small-${i}`}
            className="absolute rounded-full border border-white/30"
            style={{
              right: `${15 + i * 20}%`,
              bottom: `${20 + i * 15}%`,
            }}
            animate={{
              width: ["0px", "150px", "300px"],
              height: ["0px", "150px", "300px"],
              opacity: [0.6, 0.3, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 1.2 + 2,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Water droplets - only render after mount */}
        {mounted && [...Array(12)].map((_, i) => (
          <motion.div
            key={`droplet-${i}`}
            className="absolute w-3 h-3 bg-white/60 rounded-full"
            style={{
              left: `${20 + (i * 7) % 60}%`, // Use deterministic positioning
              top: `${15 + (i * 11) % 70}%`,
            }}
            animate={{
              y: [-30, 30, -30],
              x: [-15, 15, -15],
              opacity: [0.6, 1, 0.6],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Number.POSITIVE_INFINITY,
              delay: (i % 4) * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Floating particles - only render after mount */}
        {mounted && [...Array(8)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-white/40 rounded-full"
            style={{
              left: `${10 + (i * 13) % 80}%`, // Use deterministic positioning
              top: `${10 + (i * 17) % 80}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Number.POSITIVE_INFINITY,
              delay: (i % 3) * 0.7,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <WaterTextAnimation
            text="Контакты"
            className="text-4xl md:text-6xl font-semibold mb-4 tracking-wide text-white"
            color="white"
          />
          <p className="text-xl text-white font-light">Свяжитесь с нами любым удобным способом</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-xl p-8 border-2 border-white/20 shadow-lg"
            style={{ backgroundColor: "#1B6568" }}
          >
            <div className="flex items-center mb-6">
              <Phone className="w-8 h-8 text-white mr-4" />
              <h3 className="text-2xl font-semibold text-white tracking-wide">Телефон</h3>
            </div>
            <p className="text-white text-xl font-light mb-2">+38 (067) 123-45-67</p>
            <p className="text-white text-xl font-light">+38 (050) 987-65-43</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-xl p-8 border-2 border-white/20 shadow-lg"
            style={{ backgroundColor: "#1B6568" }}
          >
            <div className="flex items-center mb-6">
              <MapPin className="w-8 h-8 text-white mr-4" />
              <h3 className="text-2xl font-semibold text-white tracking-wide">Адрес</h3>
            </div>
            <p className="text-white text-xl font-light mb-2">г. Киев</p>
            <p className="text-white text-lg font-light">Выезд по всей Украине</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button
            onClick={onCallMaster}
            className="px-8 py-4 bg-white rounded-lg font-semibold text-xl transition-transform duration-200 shadow-lg hover:scale-105"
            style={{ color: "#1B6568" }}
          >
            Вызвать Мастера Сейчас
          </Button>
        </motion.div>
      </div>
    </section>
  )
}