"use client"

import { motion } from "framer-motion"

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-to-br from-[#d4c4a8] via-[#c9b896] to-[#bfaa82]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-light leading-[1.15] mb-6">
            Ready to elevate
            <br />
            <span className="italic">your everyday?</span>
          </h2>
          
          <p className="text-white/85 text-lg mb-10 leading-relaxed">
            Secure your appointment today. Our calendar fills up quickly.
          </p>

          <motion.a
            href="https://calendly.com/noirelashstudio-ca/30min"
	    target="_blank"
	    rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block bg-white/95 text-[#7a6b4e] px-10 py-4 text-sm tracking-[0.2em] uppercase font-medium hover:bg-white transition-colors duration-300"
          >
            Book Now
          </motion.a>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-16 pt-10 border-t border-white/20"
          >
            <div className="grid md:grid-cols-3 gap-8 text-white/80 text-sm">
              <div>
                <p className="text-white/50 uppercase tracking-[0.15em] text-xs mb-2">Location</p>
                <p>420 Roxton Rd</p>
                <p>Toronto, ON M6G 3R4</p>
              </div>
              <div>
                <p className="text-white/50 uppercase tracking-[0.15em] text-xs mb-2">Hours</p>
                <p>Monday - Sunday</p>
                <p>09:00 AM - 05:00 PM</p>
              </div>
              <div>
                <p className="text-white/50 uppercase tracking-[0.15em] text-xs mb-2">Contact</p>
                <p>(416) 889-5442</p>
                <p>noirelashstudio.ca@gmail.com</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
