"use client"

import { motion } from "framer-motion"

const brands = [
  { name: "Bosch", logo: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=100&h=50" },
  { name: "Whirlpool", logo: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=100&h=50" },
  { name: "Indesit", logo: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=100&h=50" },
  { name: "LG", logo: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=100&h=50" },
  { name: "Electrolux", logo: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=100&h=50" },
  { name: "Zanussi", logo: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=100&h=50" },
  { name: "Samsung", logo: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=100&h=50" },
  { name: "Candy", logo: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=100&h=50" },
  { name: "Ariston", logo: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=100&h=50" },
  { name: "Beko", logo: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=100&h=50" },
  { name: "Gorenje", logo: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=100&h=50" },
  { name: "Ardo", logo: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=100&h=50" },
]

export function BrandCarousel() {
  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-3xl md:text-5xl font-semibold mb-4 tracking-wide text-center" style={{ color: "#1B6568" }}>
          Ремонтируем все марки
        </h2>
        <p className="text-lg text-gray-600 text-center font-light">
          Профессиональный ремонт стиральных машин любых брендов
        </p>
      </div>

      <div className="relative">
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-6 min-w-max"
            animate={{
              x: [0, -1600],
            }}
            transition={{
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-4 border border-gray-200 flex items-center justify-center min-w-[160px] h-20 group hover:border-transparent hover:bg-gradient-to-br hover:from-teal-50 hover:to-cyan-50 hover:shadow-[0_0_0_2px] hover:shadow-teal-200/50"
              >
                <span className="text-lg font-semibold text-gray-700">{brand.name}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-100 to-transparent pointer-events-none"></div>
      </div>
    </div>
  )
}