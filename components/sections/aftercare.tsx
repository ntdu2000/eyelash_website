"use client"

import { motion } from "framer-motion"

const tips = [
  {
    title: "The First 24 Hours",
    description: "Avoid water, steam, and excessive heat to allow the adhesive to fully cure and bond.",
  },
  {
    title: "Daily Cleansing",
    description: "Wash your lashes daily with our recommended lash bath to remove oils and debris that break down retention.",
  },
  {
    title: "Oil is the Enemy",
    description: "Avoid oil-based skincare and makeup around the eye area, including heavy eye creams and waterproof mascara.",
  },
  {
    title: "Maintenance Fills",
    description: "Schedule your touch-ups every 2-3 weeks to maintain a full, beautiful lash line as your natural lashes shed.",
  },
]

export function Aftercare() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-foreground font-light mb-4">
            Preserving Your Investment
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {tips.map((tip, index) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <h4 className="font-serif text-xl text-foreground mb-4">
                {tip.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {tip.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
