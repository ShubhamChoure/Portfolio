'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Hero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const staggerDelay = 0.3

  return (
    <motion.section
      ref={ref}
      className="w-full mt-10 py-10 bg-white flex flex-col justify-center items-center font-serif gap-6"
    >
      <motion.h1
        className="text-5xl font-bold text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
        transition={{ duration: 0.5, delay: staggerDelay }}
      >
        Hello, I&apos;m Shubham Dev!
      </motion.h1>
      <motion.p 
        className="font-cursive text-xl text-center max-w-2xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
        transition={{ duration: 0.5, delay: staggerDelay * 2 }}
      >
        A passionate developer with a knack for crafting innovative solutions.
      </motion.p>
      <motion.a
        href="#projects"
        className="bg-orange-500 text-white px-6 py-3 rounded-full font-bold text-lg transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.7 }}
        transition={{ duration: 0.5, delay: staggerDelay * 3 }}
      >
        Explore My Work
      </motion.a>
    </motion.section>
  )
}