"use client"

import { motion } from "framer-motion"
import { WaterTextAnimation } from "@/components/water-text-animation"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Сколько времени занимает ремонт стиральной машины?",
    answer:
      "В большинстве случаев ремонт занимает от 30 минут до 2 часов, в зависимости от сложности неисправности. Простые поломки, такие как замена сливного насоса или ТЭНа, устраняются за час. Более сложные ремонты могут потребовать дополнительного времени, но мы всегда предупреждаем об этом заранее.",
  },
  {
    question: "Какая гарантия предоставляется на ремонт?",
    answer:
      "Мы предоставляем официальную гарантию до 24 месяцев на выполненные работы и установленные запчасти. Гарантийный срок зависит от типа ремонта и используемых деталей. На все работы выдается гарантийный талон с указанием сроков и условий гарантии.",
  },
  {
    question: "Что делать, если стиральная машина не включается?",
    answer:
      "Не паникуйте! Сначала проверьте подключение к электросети и убедитесь, что дверца плотно закрыта. Если это не помогло, не пытайтесь ремонтировать самостоятельно. Вызовите нашего мастера - в 90% случаев проблема решается быстро и недорого. Диагностика при заказе ремонта бесплатная!",
  },
]

export function FAQSection() {
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
            text="Часто задаваемые вопросы"
            className="text-3xl md:text-5xl font-semibold mb-6 tracking-wide"
            color="#1B6568"
          />
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            Ответы на самые популярные вопросы о ремонте стиральных машин
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gray-50 rounded-xl border border-gray-200 px-6"
              >
                <AccordionTrigger
                  className="text-left text-lg font-semibold py-6 hover:no-underline"
                  style={{ color: "#1B6568" }}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
