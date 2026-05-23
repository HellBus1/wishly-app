import { motion } from 'framer-motion'
import { Music2, PauseCircle, PlayCircle } from 'lucide-react'
import { useContent } from '@/contexts/useContent'
import { usePlayer } from '@/contexts/usePlayer'

const SectionPlaylist = () => {
  const { content } = useContent()
  const playlist = content?.scrapbook?.playlist
  const { isPlaying, handlePlayPause, currentTrackMeta, changeTrack } = usePlayer()

  if (!playlist) return null

  const displayTitle = currentTrackMeta?.title || playlist.hero.title
  const displayArtist = currentTrackMeta?.artist || playlist.hero.artist

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
        <div
          className='relative z-10 w-20 h-20 md:w-24 md:h-24 rounded-full bg-ink flex items-center justify-center shrink-0 shadow-lg cursor-pointer'
          onClick={handlePlayPause}
        >
          {isPlaying ? (
            <PauseCircle className='w-12 h-12 text-offwhite' onClick={handlePlayPause} />
          ) : (
            <PlayCircle className='w-12 h-12 text-offwhite' onClick={handlePlayPause} />
          )}
          <div className='absolute inset-0 rounded-full border-4 border-dusty-rose/20 animate-ping' />
        </div>

        <div className='relative z-10 flex-1 min-w-0'>
          <p className='text-xs uppercase tracking-widest text-dusty-rose font-semibold mb-1'>
            Now Playing
          </p>
          <h3 className='font-serif text-2xl md:text-3xl truncate mb-1'>{displayTitle}</h3>
          <p className='text-slate mb-3 truncate'>{displayArtist}</p>
          {displayTitle === playlist.hero.title && (
            <p className='text-xs text-ink/70 italic hidden md:block border-l-2 border-line pl-3'>
              "{playlist.hero.note}"
            </p>
          )}
        </div>
      </div>

      {/* Companion Tracks & Hero track */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {[playlist.hero, ...playlist.companions].map((song, idx) => (
          <div
            key={idx}
            className={`border p-4 flex items-center gap-4 cursor-pointer hover:bg-dusty-rose/10 transition-colors ${currentTrackMeta?.src === song.src ? 'border-dusty-rose bg-dusty-rose/5' : 'border-line bg-white/50'}`}
            onClick={() => song.src && changeTrack(song.src, song.title, song.artist)}
          >
            <div className='w-10 h-10 bg-[#F5F5F5] flex items-center justify-center shrink-0'>
              <Music2
                className={`w-4 h-4 ${currentTrackMeta?.src === song.src ? 'text-dusty-rose' : 'text-slate'}`}
              />
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
