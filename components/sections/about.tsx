"use client"

import { motion } from "framer-motion"

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground font-light leading-[1.15] mb-8">
              A sanctuary for
              <br />
              <span className="italic">your self-care.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-muted-foreground text-lg leading-relaxed text-center"
          >
            <p>
              We believe that lash extensions are more than just a beauty service—they are a moment of rest in your busy life. Our studio is designed to feel like visiting a trusted friend who happens to be a master of their craft.
            </p>
            <p>
              Every set of lashes is meticulously customized to your natural eye shape, lifestyle, and aesthetic preferences. We use only the highest quality silks, faux minks, and medical-grade adhesives to ensure safety and longevity.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
