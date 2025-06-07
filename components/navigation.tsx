"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Phone, Clock } from "lucide-react"
import { useEffect } from "react"

export function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Главная" },
    { href: "/buyback", label: "Выкуп б/у машин" },
    { href: "/articles", label: "Статьи" },
    { href: "/reviews", label: "Отзывы" },
  ]

  // Вычисляем ширину скроллбара и устанавливаем CSS переменную
  useEffect(() => {
    const getScrollbarWidth = () => {
      const outer = document.createElement("div")
      outer.style.visibility = "hidden"
      outer.style.overflow = "scroll"
      outer.style.msOverflowStyle = "scrollbar"
      document.body.appendChild(outer)

      const inner = document.createElement("div")
      outer.appendChild(inner)

      const scrollbarWidth = outer.offsetWidth - inner.offsetWidth
      outer.parentNode?.removeChild(outer)

      return scrollbarWidth
    }

    const scrollbarWidth = getScrollbarWidth()
    document.documentElement.style.setProperty("--scrollbar-width", `${scrollbarWidth}px`)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-2 border-[#1B6568] shadow-sm transition-all duration-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 items-center h-16 gap-4">
          {/* Left - Logo */}
          <div className="flex justify-start">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm font-cormorant">РМ</span>
              </div>
              <span className="font-semibold text-gray-900 text-lg tracking-wide font-cormorant whitespace-nowrap">
                Ремонт Машин
              </span>
            </Link>
          </div>

          {/* Center - Navigation Links */}
          <div className="hidden md:flex items-center justify-center">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium tracking-wide whitespace-nowrap",
                    pathname === item.href && "text-blue-600 font-semibold",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right - Working Hours and Call Button */}
          <div className="flex items-center justify-end space-x-4">
            {/* Working Hours */}
            <div className="hidden lg:flex items-center space-x-2 text-gray-600">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium whitespace-nowrap">Пн-Вс: 9:00-21:00</span>
            </div>

            {/* Call Button */}
            <Link
              href="tel:+380671234567"
              className="flex items-center space-x-2 bg-[#1B6568] hover:bg-[#14514b] text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline whitespace-nowrap">+38 (067) 123-45-67</span>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden pb-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium",
                  pathname === item.href && "text-blue-600 font-semibold",
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
