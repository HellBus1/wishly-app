import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, MailOpen } from 'lucide-react'
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
            <motion.div
              key={idx}
              layout
              className='editorial-card bg-[#FDFCFB] relative z-10'
              style={{ perspective: 1000 }}
              whileHover={{
                y: -5,
                rotateX: isOpen ? 0 : 2,
                boxShadow: '0 20px 25px -5px rgb(214 200 200 / 0.4)'
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <button
                onClick={() => toggleLetter(idx)}
                className='w-full flex items-center justify-between p-6 text-left transition-colors'
              >
                <div className='flex items-center gap-4'>
                  {isOpen ? (
                    <MailOpen className='w-5 h-5 text-dusty-rose' />
                  ) : (
                    <Mail className='w-5 h-5 text-slate' />
                  )}
                  <span className='font-serif text-lg text-ink'>{letter.title}</span>
                </div>
                <span className='text-[10px] uppercase tracking-widest text-slate opacity-60'>
                  {isOpen ? 'Fold' : 'Open'}
                </span>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, rotateX: -90, transformOrigin: 'top' }}
                    animate={{ height: 'auto', opacity: 1, rotateX: 0 }}
                    exit={{ height: 0, opacity: 0, rotateX: -90 }}
                    transition={{ duration: 0.5, type: 'spring', bounce: 0.2 }}
                  >
                    <div className='p-6 pt-0 text-ink/80 font-sans font-light leading-relaxed mt-2 relative'>
                      {/* Inner letter styling */}
                      <div className='bg-white p-6 border border-line/50 shadow-inner rounded-sm relative overflow-hidden'>
                        <div className='absolute top-0 left-0 right-0 h-1 bg-dusty-rose/20' />
                        <p className='whitespace-pre-line relative z-10'>{letter.content}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default SectionLetters
