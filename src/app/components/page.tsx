'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Snippets', href: '/snippets' },
    { name: 'Todo', href: '/todo' },
  ]

  return (
    <header className="bg-black text-white shadow-md">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4 md:py-5">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white relative group">
          <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-sm opacity-0 group-hover:opacity-100 transition duration-300">
            Home
          </span>
          Home
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-400 transition-all duration-300 group-hover:w-full" />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-10 items-center">
          {navLinks.slice(1).map(({ name, href }) => (
            <li key={name}>
              <Link href={href} className="relative group">
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-sm opacity-0 group-hover:opacity-100 transition duration-300">
                  {name}
                </span>
                <span>{name}</span>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col items-center md:hidden bg-gray-900 py-4 gap-4 text-white">
          {navLinks.map(({ name, href }) => (
            <li key={name}>
              <Link
                href={href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-lg hover:text-green-400 transition"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
