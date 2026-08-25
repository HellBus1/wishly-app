import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useContent } from '@/contexts/useContent'

const SectionLetters = () => {
  const { content } = useContent()
  const letters = content?.scrapbook?.letters
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  if (!letters) return null

  const toggleLetter = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className='space-y-12'>
      <div className='text-center space-y-4 mb-12'>
        <h2 className='font-serif text-3xl md:text-4xl'>Letters Through Time</h2>
        <p className='text-slate font-light italic max-w-md mx-auto'>
          Words I want you to carry with you, wherever you go.
        </p>
      </div>

      <div className='space-y-4 max-w-2xl mx-auto'>
        {letters.map((letter, idx) => {
          const isOpen = openIndex === idx

          return (
            <div key={idx} className='editorial-card overflow-hidden'>
              <button
                onClick={() => toggleLetter(idx)}
                className='w-full flex items-center justify-between p-6 text-left hover:bg-[#FDFDFD] transition-colors'
              >
                <span className='font-serif text-lg text-ink'>{letter.title}</span>
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown className='w-5 h-5 text-slate' />
                </motion.div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className='p-6 pt-0 text-ink/80 font-sans font-light leading-relaxed border-t border-line mt-2'>
                      <p className='pt-4'>{letter.content}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default SectionLetters
