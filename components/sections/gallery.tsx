"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const galleryImages = [
  { src: "/images/gallery/lash-1.jpg", alt: "Volume lash extensions", style: "Volume" },
  { src: "/images/gallery/lash-2.jpg", alt: "Classic lash extensions", style: "Classic" },
  { src: "/images/gallery/lash-3.jpg", alt: "Hybrid lash extensions", style: "Hybrid" },
  { src: "/images/gallery/lash-4.jpg", alt: "Mega volume lash extensions", style: "Mega Volume" },
  { src: "/images/gallery/lash-5.jpg", alt: "Wispy lash extensions", style: "Wispy" },
  { src: "/images/gallery/lash-6.jpg", alt: "Russian volume lash extensions", style: "Russian Volume" },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-foreground font-light mb-6">
            Our Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Each set is custom-designed to complement your unique features.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative aspect-square overflow-hidden cursor-pointer bg-muted"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm font-medium">{image.style}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          
          <div
            className="relative max-w-3xl max-h-[80vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-square">
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-center text-white mt-4">
              {galleryImages[selectedImage].style}
            </p>
          </div>

          <button
            className="absolute left-4 md:left-8 text-white/40 hover:text-white transition-colors"
            onClick={(e) => {
              e.stopPropagation()
              setSelectedImage((prev) => 
                prev === 0 ? galleryImages.length - 1 : (prev ?? 0) - 1
              )
            }}
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button
            className="absolute right-4 md:right-8 text-white/40 hover:text-white transition-colors"
            onClick={(e) => {
              e.stopPropagation()
              setSelectedImage((prev) => 
                prev === galleryImages.length - 1 ? 0 : (prev ?? 0) + 1
              )
            }}
          >
            <ChevronRight className="w-10 h-10" />
          </button>
        </motion.div>
      )}
    </section>
  )
}
