import React, { createContext, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'

export interface LightboxContextType {
  activeImage: string | null
  openLightbox: (src: string) => void
  closeLightbox: () => void
}

export const LightboxContext = createContext<LightboxContextType | undefined>(undefined)

export const LightboxProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeImage, setActiveImage] = useState<string | null>(null)

  const openLightbox = (src: string) => setActiveImage(src)
  const closeLightbox = () => setActiveImage(null)

  return (
    <LightboxContext.Provider value={{ activeImage, openLightbox, closeLightbox }}>
      {children}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className='fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-zoom-out'
          >
            <button
              onClick={closeLightbox}
              className='absolute top-6 right-6 text-white hover:text-dusty-rose transition-colors'
            >
              <X className='w-8 h-8' />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              src={activeImage}
              className='max-w-full max-h-[90vh] object-contain rounded-md shadow-2xl'
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </LightboxContext.Provider>
  )
}
