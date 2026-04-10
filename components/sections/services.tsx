"use client"

import { motion } from "framer-motion"

const services = [
  {
    name: "Classic Elegance",
    price: "$150",
    description: "One extension applied to one natural lash. Perfect for a mascara-like, everyday look that enhances length and curl.",
  },
  {
    name: "Textured Hybrid",
    price: "$185",
    description: "A blend of classic and volume techniques. Offers the perfect balance of definition and subtle fluffiness.",
  },
  {
    name: "Soft Volume",
    price: "$220",
    description: "Hand-made fans of multiple lightweight extensions applied to each natural lash for a full, glamorous, yet soft look.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-foreground font-light mb-6">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            Curated artistry to enhance your natural beauty. All full sets include a thorough consultation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-background p-8 border border-border"
            >
              <h3 className="font-serif text-2xl text-foreground mb-2">
                {service.name}
              </h3>
              <p className="text-2xl text-accent font-light mb-6">
                {service.price}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
