"use client"

import { motion } from "framer-motion"
import { WaterTextAnimation } from "@/components/water-text-animation"
import { CheckCircle } from "lucide-react"

const advantages = [
  {
    icon: "price",
    title: "Низкие цены на весь сервисный диапазон услуг",
    description: "Доступные цены благодаря большому количеству клиентов и оптимизированным процессам",
  },
  {
    icon: "master",
    title: "Лучшие мастера с многолетним стажем 7-10 лет",
    description: "Опытные профессионалы с подтвержденной квалификацией",
  },
  {
    icon: "diagnostic",
    title: "Современное оборудование по диагностике",
    description: "Высокотехнологичное оборудование для точной диагностики",
  },
  {
    icon: "warranty",
    title: "Гарантийный срок до 24 месяцев",
    description: "Официальная гарантия на детали и услуги",
  },
  {
    icon: "supply",
    title: "Налаженные связи с поставщиками",
    description: "Оригинальные запчасти и европейские аналоги любых комплектующих",
  },
]

const IconComponent = ({ type }: { type: string }) => {
  const iconStyle = {
    width: "60px",
    height: "60px",
    fill: "#374151",
  }

  if (type === "price") {
    return (
      <div className="flex items-center justify-center">
        <svg width="60" height="60" viewBox="0 0 355 355" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M177.5 60C112.5 60 60 112.5 60 177.5C60 242.5 112.5 295 177.5 295C242.5 295 295 242.5 295 177.5C295 112.5 242.5 60 177.5 60ZM177.5 270C126.5 270 85 228.5 85 177.5C85 126.5 126.5 85 177.5 85C228.5 85 270 126.5 270 177.5C270 228.5 228.5 270 177.5 270Z"
            fill="#374151"
          />
          <path
            d="M177.5 110C177.5 110 177.5 110 177.5 110C168.5 110 160 112.5 152.5 117.5C145 122.5 140 130 137.5 137.5C135 145 135 155 137.5 162.5C140 170 145 177.5 152.5 182.5C160 187.5 168.5 190 177.5 190C186.5 190 195 192.5 202.5 197.5C210 202.5 215 210 217.5 217.5C220 225 220 235 217.5 242.5C215 250 210 257.5 202.5 262.5C195 267.5 186.5 270 177.5 270"
            stroke="#374151"
            strokeWidth="25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M177.5 60V85" stroke="#374151" strokeWidth="25" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M177.5 270V295" stroke="#374151" strokeWidth="25" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    )
  }

  if (type === "master") {
    return (
      <div className="flex items-center justify-center">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M30 7.5C32.5 7.5 35 8.75 36.25 11.25C37.5 13.75 37.5 16.25 36.25 18.75C35 21.25 32.5 22.5 30 22.5C27.5 22.5 25 21.25 23.75 18.75C22.5 16.25 22.5 13.75 23.75 11.25C25 8.75 27.5 7.5 30 7.5Z"
            fill="#374151"
          />
          <path
            d="M15 15C16.25 15 17.5 15.625 18.125 16.875C18.75 18.125 18.75 19.375 18.125 20.625C17.5 21.875 16.25 22.5 15 22.5C13.75 22.5 12.5 21.875 11.875 20.625C11.25 19.375 11.25 18.125 11.875 16.875C12.5 15.625 13.75 15 15 15Z"
            fill="#374151"
          />
          <path
            d="M45 15C46.25 15 47.5 15.625 48.125 16.875C48.75 18.125 48.75 19.375 48.125 20.625C47.5 21.875 46.25 22.5 45 22.5C43.75 22.5 42.5 21.875 41.875 20.625C41.25 19.375 41.25 18.125 41.875 16.875C42.5 15.625 43.75 15 45 15Z"
            fill="#374151"
          />
          <path
            d="M15 25C11.25 25 7.5 27.5 7.5 32.5V37.5C7.5 38.75 8.75 40 10 40H12.5V52.5H22.5V37.5C22.5 35 21.25 32.5 20 31.25C18.75 28.75 16.25 26.25 13.75 25.625C14.375 25 14.375 25 15 25Z"
            fill="#374151"
          />
          <path d="M30 25C23.75 25 17.5 28.75 17.5 36.25V52.5H42.5V36.25C42.5 28.75 36.25 25 30 25Z" fill="#374151" />
          <path
            d="M45 25C45.625 25 45.625 25 46.25 25.625C43.75 26.25 41.25 28.75 40 31.25C38.75 32.5 37.5 35 37.5 37.5V52.5H47.5V40H50C51.25 40 52.5 38.75 52.5 37.5V32.5C52.5 27.5 48.75 25 45 25Z"
            fill="#374151"
          />
        </svg>
      </div>
    )
  }

  if (type === "diagnostic") {
    return (
      <div className="flex items-center justify-center">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M42.5 5H17.5C15 5 12.5 7.5 12.5 10V50C12.5 52.5 15 55 17.5 55H42.5C45 55 47.5 52.5 47.5 50V10C47.5 7.5 45 5 42.5 5ZM30 52.5C28.125 52.5 26.25 51.25 26.25 48.75C26.25 46.25 28.125 45 30 45C31.875 45 33.75 46.25 33.75 48.75C33.75 51.25 31.875 52.5 30 52.5ZM42.5 40H17.5V15H42.5V40Z"
            fill="#374151"
          />
          <path
            d="M25 22.5L30 27.5L35 22.5"
            stroke="#374151"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M30 27.5V35" stroke="#374151" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    )
  }

  if (type === "warranty") {
    return (
      <div className="flex items-center justify-center">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M30 5L10 15V30C10 42.5 18.75 54.375 30 57.5C41.25 54.375 50 42.5 50 30V15L30 5Z"
            stroke="#374151"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M22.5 30L27.5 35L37.5 25"
            stroke="#374151"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    )
  }

  if (type === "supply") {
    return (
      <div className="flex items-center justify-center">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15 15C16.25 15 17.5 15.625 18.125 16.875C18.75 18.125 18.75 19.375 18.125 20.625C17.5 21.875 16.25 22.5 15 22.5C13.75 22.5 12.5 21.875 11.875 20.625C11.25 19.375 11.25 18.125 11.875 16.875C12.5 15.625 13.75 15 15 15Z"
            fill="#374151"
          />
          <path
            d="M45 15C46.25 15 47.5 15.625 48.125 16.875C48.75 18.125 48.75 19.375 48.125 20.625C47.5 21.875 46.25 22.5 45 22.5C43.75 22.5 42.5 21.875 41.875 20.625C41.25 19.375 41.25 18.125 41.875 16.875C42.5 15.625 43.75 15 45 15Z"
            fill="#374151"
          />
          <path
            d="M15 25C11.25 25 7.5 27.5 7.5 32.5V37.5C7.5 38.75 8.75 40 10 40H12.5V52.5H22.5V37.5C22.5 35 21.25 32.5 20 31.25C18.75 28.75 16.25 26.25 13.75 25.625C14.375 25 14.375 25 15 25Z"
            fill="#374151"
          />
          <path
            d="M45 25C45.625 25 45.625 25 46.25 25.625C43.75 26.25 41.25 28.75 40 31.25C38.75 32.5 37.5 35 37.5 37.5V52.5H47.5V40H50C51.25 40 52.5 38.75 52.5 37.5V32.5C52.5 27.5 48.75 25 45 25Z"
            fill="#374151"
          />
          <rect x="22.5" y="25" width="15" height="27.5" fill="#374151" />
        </svg>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center">
      <CheckCircle className="w-15 h-15 text-gray-700" />
    </div>
  )
}

export function ServiceAdvantagesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <WaterTextAnimation
            text="Чем мы гордимся"
            className="text-3xl md:text-5xl font-semibold mb-6 tracking-wide"
            color="#1B6568" // Зеленый цвет для заголовка
          />
          <p className="text-xl text-black font-light">
            Мастерские по ремонту стиральных машин в Одессе многочисленны, однако не все могут гордиться нашими
            преимуществами
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 max-w-7xl mx-auto">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#F9FAFB] rounded-xl shadow-lg transition-all duration-300 p-8 border border-gray-200 text-center h-80 hover:shadow-xl"
            >
              <div className="mb-6 flex justify-center items-center h-16">
                <IconComponent type={advantage.icon} />
              </div>
              <h3 className="text-xl font-semibold mb-4 leading-tight text-teal-600">{advantage.title}</h3>
              <p className="text-gray-600 font-light text-base leading-relaxed">{advantage.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-3 bg-[#1B6568] text-white px-8 py-4 rounded-full text-xl shadow-lg border-2 border-white">
            <CheckCircle className="w-6 h-6" />
            <span className="font-semibold">Диагностика БЕСПЛАТНО при оформлении заказа!</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
