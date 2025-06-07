"use client"

import { motion } from "framer-motion"
import { WaterTextAnimation } from "@/components/water-text-animation"

const steps = [
  {
    number: 1,
    title: "Пришел",
    description: "Мастер приезжает в удобное для вас время и проводит первичный осмотр",
    details: ["Точно в назначенное время", "Бесплатная диагностика"],
  },
  {
    number: 2,
    title: "Проанализировал",
    description: "Проводит полную диагностику и определяет точную причину неисправности",
    details: ["Профессиональная диагностика", "Составление плана ремонта"],
  },
  {
    number: 3,
    title: "Починил",
    description: "Выполняет качественный ремонт с использованием оригинальных запчастей",
    details: ["Качественные запчасти", "Гарантия на работы"],
  },
]

export function StepperSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <WaterTextAnimation
            text="Как проходит ремонт"
            className="text-3xl md:text-5xl font-semibold mb-4 tracking-wide"
            color="#1B6568"
          />
          <p className="text-2xl text-gray-600 font-light max-w-3xl mx-auto">
            Простой и понятный процесс ремонта в три этапа
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="bg-gray-200 rounded-2xl shadow-lg overflow-hidden border border-gray-300 h-[500px]">
                  {/* Image placeholder */}
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center">
                    <div className="w-32 h-32 bg-teal-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-4xl font-bold">{step.number}</span>
                    </div>

                    {/* Simple Number Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center text-white text-xl font-bold shadow-lg">
                        {step.number}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col justify-between h-[236px]">
                    <div>
                      <h3 className="text-2xl font-semibold mb-3 text-center text-gray-700">{step.title}</h3>
                      <p className="text-gray-600 font-light text-xl leading-relaxed text-center mb-4">
                        {step.description}
                      </p>
                    </div>

                    {/* Always visible details */}
                    <div className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center text-lg text-gray-600">
                          <div className="w-2 h-2 bg-gray-500 rounded-full mr-3 flex-shrink-0"></div>
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}