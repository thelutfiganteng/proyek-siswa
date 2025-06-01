"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { MotionButton } from "@/components/ui/motion-button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { name: "Jelajahi Proyek", href: "/projects" },
    { name: "Cara Kerja", href: "/how-it-works" },
    { name: "Blog", href: "/blog" },
    { name: "Tentang Kami", href: "/about" },
  ]

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-blue-600">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                ProyekSiswa.id
              </motion.div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="relative group">
                <span
                  className={`text-gray-700 hover:text-blue-600 transition-colors ${pathname === item.href ? "text-blue-600 font-medium" : ""}`}
                >
                  {item.name}
                </span>
                {pathname === item.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            <MotionButton variant="outline" asChild>
              <Link href="/login">Masuk</Link>
            </MotionButton>
            <MotionButton asChild>
              <Link href="/register">Daftar</Link>
            </MotionButton>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden bg-white border-t overflow-hidden"
        initial={false}
        animate={{ height: isMenuOpen ? "auto" : 0, opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="container mx-auto px-4 py-4 space-y-4">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-gray-700 hover:text-blue-600 py-2 ${pathname === item.href ? "text-blue-600 font-medium" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col space-y-2">
            <MotionButton variant="outline" className="w-full" asChild>
              <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                Masuk
              </Link>
            </MotionButton>
            <MotionButton className="w-full" asChild>
              <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                Daftar
              </Link>
            </MotionButton>
          </div>
        </div>
      </motion.div>
    </header>
  )
}
