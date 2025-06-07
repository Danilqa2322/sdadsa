"use client"

import type React from "react"

import { motion } from "framer-motion"
import { WaterTextAnimation } from "@/components/water-text-animation"
import { CheckCircle, Truck, Shield, Recycle, DollarSign, Clock, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function BuybackPage() {
  const [showContactForm, setShowContactForm] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState("")
  const [brand, setBrand] = useState("")
  const [year, setYear] = useState("")
  const [condition, setCondition] = useState("")
  const [formSubmitted, setFormSubmitted] = useState(false)

  const priceRanges = [
    {
      period: "До 5 лет эксплуатации",
      price: "от 800 до 1500 гривен",
    },
    {
      period: "До 10 лет",
      price: "от 700 до 1000 гривен",
    },
    {
      period: "Свыше 10 лет использования",
      price: "от 300 до 550 гривен",
    },
  ]

  const advantages = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Честность",
      description:
        "Оценим фактическую стоимость машинки в любом состоянии: рабочем или неисправном и не будем ее заниж",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Работаем оперативно!",
      description: "Всегда на связи и готовы приехать в удобное для вас время.",
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Собственный грузовичок",
      description: "А значит мы всегда готовы к выезду в любую точку Одессы.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Аккуратные грузчики",
      description: "Вы же не хотите немного заработав, остаться с поцарапанными полом и дверями?",
    },
  ]

  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      text: "Зачем выкидывать деньги? В рабочем состоянии она облегчала быт, а неисправная – принесла прибыль!",
    },
    {
      icon: <Truck className="w-6 h-6" />,
      text: "Наблюдать за профессиональной работой грузчиков намного комфортнее, чем самому тащить более 50 кг.",
    },
    {
      icon: <Recycle className="w-6 h-6" />,
      text: "Подумайте о нашей планете Земля. Наш вклад в сохранение окружающей среды — перебрать помощницу на запчасти.",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      text: "Продать нерабочую стиральную машину – это практически наличные из воздуха.",
    },
  ]

  const brands = [
    "Indesit",
    "LG",
    "Zanussi",
    "Candy",
    "Electrolux",
    "Ardo",
    "Miele",
    "Whirlpool",
    "Siemens",
    "Atlant",
    "Beko",
    "AEG",
    "Hansa",
    "Gorenje",
    "Brandt",
    "Vestel",
    "Daewoo",
    "Kaiser",
    "Samsung",
    "Bosch",
    "Ariston",
  ]

  const years = Array.from({ length: 25 }, (_, i) => (new Date().getFullYear() - i).toString())

  const conditions = ["Рабочая", "Не рабочая", "Частично рабочая"]

  const formatPhoneNumber = (value: string) => {
    const digits = value.replace(/\D/g, "")
    if (digits.length === 0) return ""
    if (digits.length <= 2) return `+38${digits}`
    if (digits.length <= 5) return `+38 (${digits.slice(2)})`
    if (digits.length <= 8) return `+38 (${digits.slice(2, 5)}) ${digits.slice(5)}`
    if (digits.length <= 10) return `+38 (${digits.slice(2, 5)}) ${digits.slice(5, 8)}-${digits.slice(8)}`
    return `+38 (${digits.slice(2, 5)}) ${digits.slice(5, 8)}-${digits.slice(8, 10)}-${digits.slice(10, 12)}`
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedNumber = formatPhoneNumber(e.target.value)
    setPhoneNumber(formattedNumber)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Buyback form submitted:", { phoneNumber, brand, year, condition })
    setFormSubmitted(true)

    setTimeout(() => {
      setFormSubmitted(false)
      setShowContactForm(false)
      setPhoneNumber("")
      setBrand("")
      setYear("")
      setCondition("")
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <WaterTextAnimation
              text="Выкуп б/у Стиральных Машин"
              className="text-4xl md:text-7xl font-semibold mb-6 tracking-wide"
              color="#1B6568"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed"
            >
              Бесспорно это несвоевременная неприятность — когда ваша верная подруга подводит Вас. Невероятно как много
              пользы она приносила и тут вдруг… Теперь продать машинку в Одессе, это ни сколько не сложно,
              гарантированно высокая оплата и минимум действий.
            </motion.p>
          </motion.div>

          {/* Hero Image with Animation - Made smaller */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative max-w-lg mx-auto mb-16"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <motion.div
                animate={{
                  boxShadow: [
                    "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    "0 25px 50px -12px rgba(27, 101, 104, 0.4)",
                    "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  ],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <div className="w-full h-[300px] bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center">
                  <div className="w-32 h-32 bg-teal-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">₴</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                className="absolute top-4 right-4 text-white px-4 py-2 rounded-full font-semibold"
                style={{ backgroundColor: "#1B6568" }}
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                Высокие цены!
              </motion.div>

              <motion.div
                className="absolute bottom-4 left-4 text-white px-4 py-2 rounded-full font-semibold"
                style={{ backgroundColor: "#1B6568" }}
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                Быстрый выкуп!
              </motion.div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <Button
              onClick={() => setShowContactForm(true)}
              className="text-white px-8 py-4 text-xl font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: "#1B6568" }}
            >
              Продать стиральную машину
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Advantages Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <WaterTextAnimation
              text="Мы опираемся на"
              className="text-4xl md:text-6xl font-semibold mb-6 tracking-wide"
              color="#1B6568"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group hover:border-transparent hover:bg-gradient-to-br hover:from-teal-50 hover:to-cyan-50 hover:shadow-[0_0_0_2px] hover:shadow-teal-200/50"
              >
                <div className="text-teal-600 mb-4 group-hover:text-teal-600 transition-colors duration-300">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 tracking-wide" style={{ color: "#1B6568" }}>
                  {advantage.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Section */}
      <section className="py-20" style={{ backgroundColor: "#1B6568" }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <WaterTextAnimation
              text="Приблизительный прайс"
              className="text-4xl md:text-6xl font-semibold mb-6 tracking-wide text-white"
              color="white"
            />
            <p className="text-xl text-white/80 font-light">Выкуп и вывоз по прайс-листу по Одессе и области</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {priceRanges.map((range, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative overflow-hidden rounded-xl group hover:shadow-xl transition-all duration-300 hover:shadow-[0_0_0_2px] hover:shadow-white/20 bg-white/10 backdrop-blur-sm border border-white/20"
              >
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-semibold mb-4 tracking-wide text-white">{range.period}</h3>
                  <div className="text-4xl font-bold mb-2 text-white">{range.price}</div>
                  <p className="text-base opacity-90 text-white/80">в зависимости от состояния</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <p className="text-lg text-white/80 font-light">
              Не тяните с тем, чтобы продать стиральную машинку на запчасти! Под воздействием перепада температур,
              влажности и пересушки происходит серьезный износ.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <WaterTextAnimation
              text="Почему лучше не выбрасывать"
              className="text-4xl md:text-6xl font-semibold mb-6 tracking-wide"
              color="#1B6568"
            />
            <p className="text-xl text-gray-600 font-light">
              а продать свою бу машинку на запчасти именно нашей компании
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl border border-gray-200 group hover:border-transparent hover:bg-gradient-to-br hover:from-teal-50 hover:to-cyan-50 hover:shadow-[0_0_0_2px] hover:shadow-teal-200/50 transition-all duration-300"
              >
                <div className="text-teal-600 mt-1 group-hover:text-teal-600 transition-colors duration-300">
                  {benefit.icon}
                </div>
                <p className="text-gray-700 font-light leading-relaxed text-lg">{benefit.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: "#1B6568" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <WaterTextAnimation
                text="Заберем Вашу стиральную машину на запчасти"
                className="text-4xl md:text-6xl font-semibold mb-6 tracking-wide text-white"
                color="white"
              />
              <p className="text-xl mb-8 font-light text-white/90">
                Продать свою неисправную машинку — автомат — это также забота. Забота о людях, которые не могут
                позволить себе приобрести машинку из магазина.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => setShowContactForm(true)}
                  className="bg-white hover:bg-gray-100 px-8 py-4 text-xl font-semibold rounded-lg shadow-lg"
                  style={{ color: "#1B6568" }}
                >
                  Продать машину сейчас
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="w-full h-32 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-lg mb-4 flex items-center justify-center">
                  <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center">
                    <Truck className="w-8 h-8 text-white" />
                  </div>
                </div>
                <p className="text-white/90 text-sm font-light">Профессиональный вывоз техники</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="w-full h-32 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-lg mb-4 flex items-center justify-center">
                  <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                </div>
                <p className="text-white/90 text-sm font-light">Аккуратная транспортировка</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Buyback Form Modal */}
      <motion.div
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: showContactForm ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ pointerEvents: showContactForm ? "auto" : "none" }}
      >
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-md mx-4 overflow-hidden"
          initial={{ y: 50, opacity: 0 }}
          animate={{
            y: showContactForm ? 0 : 50,
            opacity: showContactForm ? 1 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="px-6 py-4 flex justify-between items-center" style={{ backgroundColor: "#1B6568" }}>
            <h3 className="text-xl font-semibold text-white tracking-wide">Продать стиральную машину</h3>
            <button onClick={() => setShowContactForm(false)} className="text-white/80 hover:text-white">
              <X size={20} />
            </button>
          </div>

          <div className="p-6">
            {formSubmitted ? (
              <div className="text-center py-8">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "#e6f7f5" }}
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ color: "#1B6568" }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-2xl font-semibold mb-2 tracking-wide" style={{ color: "#1B6568" }}>
                  Заявка принята!
                </h4>
                <p className="text-lg text-gray-600 dark:text-gray-300 font-light">
                  Мы свяжемся с вами для оценки стоимости машины.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-lg">
                    Номер телефона
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+38 (___) ___-__-__"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    required
                    className="w-full text-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-lg">Марка стиральной машины</Label>
                  <Select value={brand} onValueChange={setBrand}>
                    <SelectTrigger className="w-full text-lg">
                      <SelectValue placeholder="Выберите марку" />
                    </SelectTrigger>
                    <SelectContent>
                      {brands.map((b) => (
                        <SelectItem key={b} value={b} className="text-lg">
                          {b}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-lg">Год производства</Label>
                  <Select value={year} onValueChange={setYear}>
                    <SelectTrigger className="w-full text-lg">
                      <SelectValue placeholder="Выберите год" />
                    </SelectTrigger>
                    <SelectContent>
                      {years.map((y) => (
                        <SelectItem key={y} value={y} className="text-lg">
                          {y}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-lg">Состояние машины</Label>
                  <Select value={condition} onValueChange={setCondition}>
                    <SelectTrigger className="w-full text-lg">
                      <SelectValue placeholder="Выберите состояние" />
                    </SelectTrigger>
                    <SelectContent>
                      {conditions.map((c) => (
                        <SelectItem key={c} value={c} className="text-lg">
                          {c}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  className="w-full text-white text-lg font-medium tracking-wide py-6 hover:opacity-90"
                  style={{ backgroundColor: "#1B6568" }}
                  disabled={!phoneNumber || !brand || !year || !condition}
                >
                  Отправить заявку
                </Button>
              </form>
            )}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}