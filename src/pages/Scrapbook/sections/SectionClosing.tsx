import { motion } from 'framer-motion'
import { useContent } from '@/contexts/useContent'

const SectionClosing = () => {
  const { content } = useContent()
  const closing = content?.scrapbook?.closing

  if (!closing) return null

  return (
    <section className='min-h-screen bg-ink text-offwhite flex items-center justify-center py-24 px-6 mt-32 relative overflow-hidden'>
      <div className='max-w-2xl w-full mx-auto text-center space-y-24 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className='font-serif text-3xl md:text-5xl italic font-light mb-12'>
            This was — and is — <br /> the time of my life.
          </h2>
        </motion.div>

        <div className='grid md:grid-cols-2 gap-16 md:gap-8 text-left border-y border-offwhite/20 py-16'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className='space-y-6'
          >
            <h3 className='text-sm uppercase tracking-widest text-warm-gold'>I am grateful for</h3>
            <ul className='space-y-4 font-light text-sm md:text-base text-offwhite/80'>
              {closing.gratefulFor.map((item, idx) => (
                <li key={idx} className='flex gap-4'>
                  <span className='text-warm-gold/50'>—</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className='space-y-6'
          >
            <h3 className='text-sm uppercase tracking-widest text-warm-gold'>I will protect</h3>
            <ul className='space-y-4 font-light text-sm md:text-base text-offwhite/80'>
              {closing.protect.map((item, idx) => (
                <li key={idx} className='flex gap-4'>
                  <span className='text-warm-gold/50'>—</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.7 }}
          className='space-y-4'
        >
          <p className='text-sm uppercase tracking-widest text-warm-gold'>My Promise</p>
          <p className='font-serif text-xl md:text-2xl italic font-light max-w-lg mx-auto leading-relaxed'>
            "{closing.promise}"
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 1 }}
          className='pt-24 pb-12'
        >
          <p className='text-xs tracking-[0.3em] uppercase text-offwhite/50 mb-4'>Happy Birthday</p>
          <h1 className='font-serif text-7xl md:text-9xl text-warm-gold'>{closing.name}</h1>
          <p className='mt-8 text-sm font-light tracking-widest text-offwhite/50'>{closing.date}</p>
        </motion.div>
      </div>

      {/* Subtle background grain or glow */}
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,150,122,0.05)_0%,transparent_70%)]' />
    </section>
  )
}

export default SectionClosing
