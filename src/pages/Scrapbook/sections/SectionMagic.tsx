import { motion } from 'framer-motion'
import { useContent } from '@/contexts/useContent'

const SectionMagic = () => {
  const { content } = useContent()
  const magic = content?.scrapbook?.magic

  if (!magic) return null

  return (
    <section className='space-y-12'>
      <div className='text-center space-y-4 mb-12'>
        <h2 className='font-serif text-3xl md:text-4xl'>Ordinary Magic</h2>
        <p className='text-slate font-light italic max-w-md mx-auto'>
          The little things I notice, even when you think I don't.
        </p>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6'>
        {magic.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (idx % 4) * 0.1 }}
            className='editorial-card p-5 aspect-square flex flex-col'
          >
            <span className='text-dusty-rose font-serif text-xl mb-auto'>
              {(idx + 1).toString().padStart(2, '0')}
            </span>
            <p className='text-sm font-light leading-snug text-ink/90'>{item}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default SectionMagic
