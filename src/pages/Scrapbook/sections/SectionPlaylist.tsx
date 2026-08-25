import { motion } from 'framer-motion'
import { Disc3, Music2 } from 'lucide-react'
import { useContent } from '@/contexts/useContent'

const SectionPlaylist = () => {
  const { content } = useContent()
  const playlist = content?.scrapbook?.playlist

  if (!playlist) return null

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 1 }}
      className='space-y-12'
    >
      <div className='text-center space-y-4'>
        <h2 className='font-serif text-3xl md:text-4xl'>The Soundtrack</h2>
        <p className='text-slate font-light italic max-w-md mx-auto'>
          These songs will take you back in an instant.
        </p>
      </div>

      {/* Hero Track Card */}
      <div className='editorial-card p-6 md:p-8 flex items-center gap-6 relative overflow-hidden group'>
        <div className='absolute inset-0 bg-dusty-rose/5 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out' />

        <div className='relative z-10 w-20 h-20 md:w-24 md:h-24 rounded-full bg-ink flex items-center justify-center shrink-0 shadow-lg'>
          <Disc3 className='w-12 h-12 text-offwhite animate-[spin_4s_linear_infinite]' />
          <div className='absolute inset-0 rounded-full border-4 border-dusty-rose/20 animate-ping' />
        </div>

        <div className='relative z-10 flex-1 min-w-0'>
          <p className='text-xs uppercase tracking-widest text-dusty-rose font-semibold mb-1'>
            Now Playing
          </p>
          <h3 className='font-serif text-2xl md:text-3xl truncate mb-1'>{playlist.hero.title}</h3>
          <p className='text-slate mb-3 truncate'>{playlist.hero.artist}</p>
          <p className='text-xs text-ink/70 italic hidden md:block border-l-2 border-line pl-3'>
            "{playlist.hero.note}"
          </p>
        </div>
      </div>

      {/* Companion Tracks */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {playlist.companions.map((song, idx) => (
          <div key={idx} className='border border-line p-4 flex items-center gap-4 bg-white/50'>
            <div className='w-10 h-10 bg-[#F5F5F5] flex items-center justify-center shrink-0'>
              <Music2 className='w-4 h-4 text-slate' />
            </div>
            <div className='min-w-0'>
              <p className='font-serif text-sm truncate'>{song.title}</p>
              <p className='text-xs text-slate truncate'>{song.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  )
}

export default SectionPlaylist
