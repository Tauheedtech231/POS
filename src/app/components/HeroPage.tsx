'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import ji from '../../../public/T.png.png'

const HeroPage = () => {
  const [text, setText] = useState('')
  const fullText = 'MERN Stack Developer'
  const [isDeleting, setIsDeleting] = useState(false)
  const [speed, setSpeed] = useState(150)

  useEffect(() => {
    const handleTyping = () => {
      setText((prev) =>
        isDeleting
          ? fullText.substring(0, prev.length - 1)
          : fullText.substring(0, prev.length + 1)
      )

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000)
        setSpeed(80)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setSpeed(150)
      }
    }

    const timer = setTimeout(handleTyping, speed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, speed])

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 py-12 md:py-24 bg-black text-white">
      {/* 🔮 Background Animation */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-900 via-blue-900 to-black animate-background bg-[length:400%_400%]" />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm -z-10" />

      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left: Circular Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl hover:scale-105 transition-transform duration-500">
            <Image
              src={ji}
              alt="Tauheed"
              width={320}
              height={320}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Right: Text */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Hi, I'm <span className="text-green-400">Tauheed</span>
          </h1>
          <p className="text-xl md:text-2xl text-cyan-300 font-mono min-h-[2.5rem]">
            {text}
            <span className="border-r-2 border-cyan-300 animate-pulse ml-1"></span>
          </p>
          <p className="text-sm text-gray-300 max-w-md mt-4">
            Passionate about building fast, modern web applications with a strong focus on UX & performance.
          </p>
          <div className="mt-6 flex justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full shadow transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-white hover:bg-white hover:text-black px-6 py-2 rounded-full transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Background animation keyframes */}
      <style jsx>{`
        @keyframes background {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-background {
          animation: background 15s ease infinite;
        }
      `}</style>
    </section>
  )
}

export default HeroPage
