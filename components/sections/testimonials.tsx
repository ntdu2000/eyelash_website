"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    quote: "I've been getting my lashes done at NOIRE for over a year now and I'm absolutely in love. The attention to detail is impeccable, and my lashes always look natural yet stunning. Rose takes the time to understand exactly what I want.",
    name: "Sarah M.",
    location: "Toronto, ON",
    rating: 5,
  },
  {
    quote: "Found NOIRE when I was desperately looking for a skilled lash artist before my wedding. The results exceeded my expectations! My lashes looked beautiful in every photo. I've been a regular client ever since.",
    name: "Michelle K.",
    location: "Mississauga, ON",
    rating: 5,
  },
  {
    quote: "As someone with very sensitive eyes, I was nervous about getting lash extensions. The team at NOIRE was so patient and gentle. My lashes are gorgeous and my eyes have never felt irritated. Highly recommend!",
    name: "Jennifer L.",
    location: "Toronto, ON",
    rating: 5,
  },
  {
    quote: "The studio is beautiful, clean, and so relaxing. I always leave feeling refreshed and confident. NOIRE has truly set the standard for luxury lash services in Toronto. Worth every penny!",
    name: "Amanda R.",
    location: "North York, ON",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4">
            Testimonials
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
            What Our Clients Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-foreground font-medium">5.0</span>
            <span className="text-muted-foreground">Google Rating</span>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card p-8 rounded-xl relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-accent/20" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-foreground leading-relaxed mb-6 text-sm md:text-base">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              
              <div>
                <p className="font-medium text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-sm tracking-widest uppercase"
          >
            <span>Read More Reviews</span>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
