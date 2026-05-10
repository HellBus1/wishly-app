import { motion } from 'framer-motion'
import { useContent } from '@/contexts/useContent'

const SectionIntro = () => {
  const { content } = useContent()
  const intro = content?.scrapbook?.intro

  if (!intro) return null

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 1 }}
      className='editorial-card p-8 md:p-12 relative overflow-hidden'
    >
      {/* Decorative tape */}
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#E5E5E5]/50 -translate-y-3 rotate-1 transform-gpu mix-blend-multiply' />

      <div className='flex justify-between items-start mb-16 border-b border-line pb-6'>
        <div>
          <p className='text-xs tracking-widest uppercase text-slate mb-1'>For</p>
          <h2 className='font-serif text-3xl'>{intro.for}</h2>
        </div>
        <div className='text-right'>
          <p className='text-xs tracking-widest uppercase text-slate mb-1'>Date</p>
          <p className='font-sans text-sm'>{intro.birthday}</p>
        </div>
      </div>

      <div className='space-y-6'>
        <div>
          <p className='text-xs tracking-widest uppercase text-slate mb-2'>Mood</p>
          <p className='font-serif italic text-lg text-dusty-rose'>{intro.mood}</p>
        </div>

        <div>
          <p className='text-xs tracking-widest uppercase text-slate mb-3'>Keywords</p>
          <div className='flex flex-wrap gap-2'>
            {intro.keywords.map((keyword, idx) => (
              <span
                key={idx}
                className='px-3 py-1 bg-[#F5F5F5] text-xs uppercase tracking-wider text-ink/70'
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default SectionIntro
