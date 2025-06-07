"use client"

import type React from "react"

import { motion } from "framer-motion"
import { WaterTextAnimation } from "@/components/water-text-animation"
import { Star, User, Calendar, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const reviews = [
  {
    id: 1,
    name: "Анна Петрова",
    rating: 5,
    date: "15 декабря 2024",
    text: "Отличный сервис! Мастер приехал в течение часа, быстро диагностировал проблему и заменил подшипники. Машина работает как новая. Цены адекватные, гарантия 2 года. Рекомендую!",
    service: "Замена подшипников",
  },
  {
    id: 2,
    name: "Дмитрий Иванов",
    rating: 5,
    date: "12 декабря 2024",
    text: "Машина не сливала воду. Мастер Сергей приехал вечером, оказалось засорился фильтр. Почистил, объяснил как ухаживать. Очень профессионально и недорого.",
    service: "Чистка фильтра",
  },
  {
    id: 3,
    name: "Елена Сидорова",
    rating: 5,
    date: "10 декабря 2024",
    text: "Сгорел ТЭН в стиральной машине LG. Мастер заменил за час, дал гарантию на 2 года. Работает отлично, вода нагревается быстро. Спасибо за качественную работу!",
    service: "Замена ТЭНа",
  },
  {
    id: 4,
    name: "Михаил Козлов",
    rating: 3,
    date: "8 декабря 2024",
    text: "Машина сильно вибрировала при отжиме. Мастер приехал на следующий день, но работал очень долго - почти 4 часа вместо обещанных 2. В итоге заменил амортизаторы, теперь работает тихо. Результат хороший, но время ожидания расстроило.",
    service: "Замена амортизаторов",
  },
  {
    id: 5,
    name: "Ольга Морозова",
    rating: 5,
    date: "5 декабря 2024",
    text: "Не открывалась дверца после стирки. Мастер Андрей приехал быстро, заменил замок блокировки. Всё работает идеально. Цена справедливая, сервис на высоте!",
    service: "Замена замка блокировки",
  },
  {
    id: 6,
    name: "Виктор Белов",
    rating: 5,
    date: "3 декабря 2024",
    text: "Машина Bosch перестала набирать воду. Диагностика показала поломку клапана. Мастер заменил деталь, проверил всю систему. Работает как часы. Рекомендую этот сервис!",
    service: "Замена клапана подачи воды",
  },
  {
    id: 7,
    name: "Татьяна Волкова",
    rating: 5,
    date: "1 декабря 2024",
    text: "Отличные мастера! Машина Samsung не отжимала бельё. Оказалось проблема в модуле управления. Заменили, настроили все программы. Гарантия 2 года - это здорово!",
    service: "Замена модуля управления",
  },
  {
    id: 8,
    name: "Александр Новиков",
    rating: 2,
    date: "28 ноября 2024",
    text: "Машина текла снизу. Мастер нашёл трещину в баке и заменил его, но опоздал на 3 часа без предупреждения. Работу выполнил качественно, но такие задержки недопустимы. Цена тоже оказалась выше озвученной изначально.",
    service: "Замена бака",
  },
  {
    id: 9,
    name: "Марина Соколова",
    rating: 5,
    date: "25 ноября 2024",
    text: "Машина Indesit не включалась. Мастер диагностировал проблему с электроникой, заменил плату. Теперь всё работает отлично. Быстро, качественно, с гарантией!",
    service: "Ремонт электроники",
  },
  {
    id: 10,
    name: "Игорь Лебедев",
    rating: 5,
    date: "22 ноября 2024",
    text: "Сломался насос в машине Electrolux. Мастер приехал в тот же день, заменил помпу за 40 минут. Профессиональный подход, честные цены. Очень доволен!",
    service: "Замена сливного насоса",
  },
  {
    id: 11,
    name: "Светлана Орлова",
    rating: 5,
    date: "20 ноября 2024",
    text: "Машина не грела воду. Мастер Дмитрий быстро определил поломку датчика температуры и заменил его. Вежливый, аккуратный, объяснил как избежать подобных проблем.",
    service: "Замена датчика температуры",
  },
  {
    id: 12,
    name: "Андрей Зайцев",
    rating: 3,
    date: "18 ноября 2024",
    text: "Проблема с программатором в старой машине Zanussi. Мастер смог отремонтировать, но пришлось ждать запчасти целую неделю, хотя обещали 2-3 дня. В итоге всё работает, но из-за долгого ожидания впечатление испорчено.",
    service: "Ремонт программатора",
  },
  {
    id: 13,
    name: "Наталья Федорова",
    rating: 5,
    date: "15 ноября 2024",
    text: "Машина Candy сильно шумела. Мастер заменил подшипники и сальник. Работа выполнена качественно, машина работает тихо. Гарантия 2 года - отличный бонус!",
    service: "Замена подшипников и сальника",
  },
  {
    id: 14,
    name: "Сергей Романов",
    rating: 5,
    date: "12 ноября 2024",
    text: "Отличный сервис! Машина LG не отжимала. Мастер быстро нашёл проблему - износился ремень привода. Заменил за 20 минут. Цена честная, работа качественная.",
    service: "Замена приводного ремня",
  },
  {
    id: 15,
    name: "Юлия Крылова",
    rating: 5,
    date: "10 ноября 2024",
    text: "Машина Whirlpool перестала набирать порошок. Оказалось засорился дозатор. Мастер почистил, заменил клапаны. Теперь всё работает идеально. Спасибо за профессионализм!",
    service: "Чистка и ремонт дозатора",
  },
]

export default function ReviewsPage() {
  const [showReviewForm, setShowReviewForm] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    rating: 5,
    service: "",
    text: "",
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Review submitted:", formData)
    setFormSubmitted(true)

    setTimeout(() => {
      setFormSubmitted(false)
      setShowReviewForm(false)
      setFormData({ name: "", rating: 5, service: "", text: "" })
    }, 3000)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-5 h-5 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
    ))
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <WaterTextAnimation
              text="Отзывы Клиентов"
              className="text-4xl md:text-7xl font-semibold mb-6 tracking-wide"
              color="#1B6568"
            />
            <p className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto mb-8">
              Отзывы наших довольных клиентов о качестве ремонта стиральных машин
            </p>

            <Button
              onClick={() => setShowReviewForm(true)}
              className="text-white px-8 py-4 text-xl font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ backgroundColor: "#1B6568" }}
            >
              Оставить отзыв
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <User className="w-5 h-5 text-gray-400 mr-2" />
                    <span className="font-semibold text-gray-800">{review.name}</span>
                  </div>
                  <div className="flex items-center">{renderStars(review.rating)}</div>
                </div>

                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span className="mr-4">{review.date}</span>
                  <span className="text-teal-600 font-medium">{review.service}</span>
                </div>

                <p className="text-gray-700 font-light leading-relaxed">{review.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Review Form Modal */}
      <motion.div
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: showReviewForm ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ pointerEvents: showReviewForm ? "auto" : "none" }}
      >
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-md mx-4 overflow-hidden"
          initial={{ y: 50, opacity: 0 }}
          animate={{
            y: showReviewForm ? 0 : 50,
            opacity: showReviewForm ? 1 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="px-6 py-4 flex justify-between items-center" style={{ backgroundColor: "#1B6568" }}>
            <h3 className="text-xl font-semibold text-white tracking-wide">Оставить отзыв</h3>
            <button onClick={() => setShowReviewForm(false)} className="text-white/80 hover:text-white">
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
                  Спасибо за отзыв!
                </h4>
                <p className="text-lg text-gray-600 dark:text-gray-300 font-light">
                  Ваш отзыв поможет другим клиентам сделать правильный выбор.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-lg">
                    Ваше имя
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Введите ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full text-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-lg">Оценка</Label>
                  <div className="flex space-x-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setFormData({ ...formData, rating: i + 1 })}
                        className="focus:outline-none"
                      >
                        <Star
                          className={`w-8 h-8 ${i < formData.rating ? "text-yellow-400 fill-current" : "text-gray-300"} hover:text-yellow-400 transition-colors duration-200`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="text-lg">
                    Вид услуги
                  </Label>
                  <Input
                    id="service"
                    type="text"
                    placeholder="Например: Замена ТЭНа"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    required
                    className="w-full text-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="text" className="text-lg">
                    Ваш отзыв
                  </Label>
                  <Textarea
                    id="text"
                    placeholder="Расскажите о качестве обслуживания..."
                    value={formData.text}
                    onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                    required
                    className="w-full text-lg min-h-[100px]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full text-white text-lg font-medium tracking-wide py-6 hover:opacity-90"
                  style={{ backgroundColor: "#1B6568" }}
                  disabled={!formData.name || !formData.service || !formData.text}
                >
                  Отправить отзыв
                </Button>
              </form>
            )}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
