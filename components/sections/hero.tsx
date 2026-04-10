"use client"

import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#d4c4a8] via-[#c9b896] to-[#bfaa82] relative overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Logo */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-white/90 tracking-[0.4em] text-sm uppercase mb-8"
          >
            NOIRE. Lash Studio
          </motion.p>

          {/* Main Headline */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white font-light leading-[1.1] mb-8">
            Effortless beauty,
            <br />
            <span className="italic">expertly crafted.</span>
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
          >
            Experience the luxury of personalized lash artistry in a space designed for your ultimate comfort and relaxation.
          </motion.p>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="inline-block bg-white/95 text-[#7a6b4e] px-10 py-4 text-sm tracking-[0.2em] uppercase font-medium hover:bg-white transition-colors duration-300"
          >
            Reserve Your Time
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
