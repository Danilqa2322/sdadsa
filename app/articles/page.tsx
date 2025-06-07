"use client"

import { motion } from "framer-motion"
import { WaterTextAnimation } from "@/components/water-text-animation"
import { Clock, User, ArrowRight } from "lucide-react"
import Link from "next/link"

const articles = [
  {
    id: 1,
    title: "Как почистить стиральную машину?",
    excerpt:
      "Подробное руководство по очистке стиральной машины от накипи, плесени и неприятных запахов. Узнайте, как продлить срок службы вашей техники.",
    author: "Мастер Сергей",
    date: "15 декабря 2024",
    readTime: "5 мин",
  },
  {
    id: 2,
    title: "Как правильно пользоваться стиральной машиной?",
    excerpt:
      "Советы по правильному использованию стиральной машины, которые помогут избежать поломок и обеспечить качественную стирку.",
    author: "Мастер Андрей",
    date: "12 декабря 2024",
    readTime: "7 мин",
  },
  {
    id: 3,
    title: "Частые поломки стиральных машин",
    excerpt: "Разбираем самые распространённые неисправности стиральных машин, их причины и способы устранения.",
    author: "Мастер Дмитрий",
    date: "10 декабря 2024",
    readTime: "8 мин",
  },
  {
    id: 4,
    title: "Жена застряла в машине - что делать?",
    excerpt:
      "Юмористическая статья о том, как 'починить' самую важную 'деталь' в доме, когда она 'застревает' в стиральной машине.",
    author: "Мастер Юрий",
    date: "8 декабря 2024",
    readTime: "3 мин",
  },
]

export default function ArticlesPage() {
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
              text="Полезные Статьи"
              className="text-4xl md:text-7xl font-semibold mb-6 tracking-wide"
              color="#1B6568"
            />
            <p className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto">
              Полезные советы и рекомендации по ремонту и обслуживанию стиральных машин
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {articles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 group"
              >
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center">
                  <div className="w-24 h-24 bg-teal-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">{article.id}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <User className="w-4 h-4 mr-1" />
                    <span className="mr-4">{article.author}</span>
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="mr-4">{article.readTime}</span>
                    <span>{article.date}</span>
                  </div>

                  <h2
                    className="text-xl font-semibold mb-3 leading-tight group-hover:text-teal-600 transition-colors duration-300"
                    style={{ color: "#1B6568" }}
                  >
                    {article.title}
                  </h2>

                  <p className="text-gray-600 font-light leading-relaxed mb-4">{article.excerpt}</p>

                  <Link
                    href={`/articles/${article.id}`}
                    className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium transition-colors duration-300"
                  >
                    Читать далее
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}