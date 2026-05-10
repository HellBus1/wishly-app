import { motion } from 'framer-motion'
import { Image as ImageIcon } from 'lucide-react'
import { useContent } from '@/contexts/useContent'

const SectionTimeline = () => {
  const { content } = useContent()
  const timeline = content?.scrapbook?.timeline

  if (!timeline) return null

  return (
    <section className='space-y-16'>
      <div className='text-center space-y-4 mb-12'>
        <h2 className='font-serif text-3xl md:text-4xl'>The Timeline</h2>
        <p className='text-slate font-light italic max-w-md mx-auto'>
          A collection of moments that brought us exactly here.
        </p>
      </div>

      <div className='relative'>
        {/* Vertical line for desktop */}
        <div className='hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-line -translate-x-1/2' />

        <div className='space-y-12 md:space-y-24'>
          {timeline.map((moment, idx) => {
            const isEven = idx % 2 === 0

            return (
              <motion.div
                key={moment.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-12 items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Desktop timeline dot */}
                <div className='hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-offwhite border-2 border-dusty-rose rounded-full z-10' />

                {/* Content Box */}
                <div className={`w-full md:w-1/2 ${isEven ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className='editorial-card p-4 pb-6'>
                    {/* Image Placeholder */}
                    <div className='w-full aspect-[4/3] bg-[#F5F5F5] mb-6 flex items-center justify-center border border-line'>
                      <ImageIcon className='w-8 h-8 text-line' />
                    </div>

                    <div className='px-2'>
                      <div className='flex justify-between items-start mb-3'>
                        <span className='text-xs uppercase tracking-widest text-slate'>
                          {moment.date}
                        </span>
                        <span className='text-[10px] uppercase tracking-widest text-dusty-rose bg-dusty-rose/10 px-2 py-1'>
                          {moment.feeling}
                        </span>
                      </div>
                      <h3 className='font-serif text-xl mb-3'>{moment.title}</h3>
                      <p className='text-sm italic text-ink/80 border-l-2 border-line pl-3'>
                        "{moment.lyric}"
                      </p>
                    </div>
                  </div>
                </div>

                {/* Empty space for the other half on desktop */}
                <div className='hidden md:block w-1/2' />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SectionTimeline
