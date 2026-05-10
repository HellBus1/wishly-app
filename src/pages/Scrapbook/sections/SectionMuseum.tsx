import { motion } from 'framer-motion'
import { useContent } from '@/contexts/useContent'

const SectionMuseum = () => {
  const { content } = useContent()
  const museum = content?.scrapbook?.museum

  if (!museum) return null

  return (
    <section className='space-y-12'>
      <div className='text-center space-y-4 mb-12'>
        <h2 className='font-serif text-3xl md:text-4xl'>The Museum of Us</h2>
        <p className='text-slate font-light italic max-w-md mx-auto'>
          A curated exhibition of our most valuable artifacts.
        </p>
      </div>

      {/* CSS columns for a masonry effect without a heavy library */}
      <div className='columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6'>
        {museum.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
            className='editorial-card p-6 break-inside-avoid relative'
          >
            {/* Minimal artifact styling */}
            <div className='absolute top-0 right-0 p-4'>
              <span className='text-[10px] tracking-widest uppercase text-slate border-b border-line pb-1'>
                Exhibit {String(idx + 1).padStart(2, '0')}
              </span>
            </div>

            <h3 className='font-serif text-xl mb-4 pr-16 text-ink'>{item.title}</h3>

            <p className='text-sm font-light text-ink/80 leading-relaxed mb-6'>{item.caption}</p>

            <div className='flex items-center gap-2'>
              <div className='w-1.5 h-1.5 rounded-full bg-dusty-rose' />
              <span className='text-xs tracking-wider uppercase text-dusty-rose'>{item.era}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default SectionMuseum
