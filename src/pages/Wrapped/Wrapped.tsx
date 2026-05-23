import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Disc3, PauseCircle, PlayCircle } from 'lucide-react'
import { useContent } from '@/contexts/useContent'
import Nav from '@/components/Nav/Nav'
import { usePlayer } from '@/contexts/usePlayer'

const Wrapped = () => {
  const { content, loading } = useContent()
  const [hasStarted, setHasStarted] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const navigate = useNavigate()
  const { isPlaying, handlePlayPause, play, currentTrackMeta } = usePlayer()

  if (loading || !content) {
    return (
      <div className='fixed inset-0 bg-offwhite flex items-center justify-center text-slate font-sans tracking-widest uppercase text-xs'>
        Loading...
      </div>
    )
  }

  const wrappedCards = content.wrapped

  const handleStart = async () => {
    setHasStarted(true)
    play()
  }

  const handleNext = () => {
    if (currentIndex < wrappedCards.length - 1) {
      setCurrentIndex((prev) => prev + 1)
    } else {
      navigate('/scrapbook')
    }
  }

  if (!hasStarted) {
    return (
      <>
        <div
          className='fixed inset-0 bg-offwhite flex items-center justify-center p-6 cursor-pointer'
          onClick={handleStart}
        >
          <Nav />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='text-center'
          >
            <div className='w-24 h-24 mx-auto mb-8 rounded-full bg-ink flex items-center justify-center shadow-lg relative'>
              <Disc3 className='w-12 h-12 text-offwhite animate-[spin_4s_linear_infinite]' />
              <div className='absolute inset-0 rounded-full border-4 border-dusty-rose/20 animate-ping' />
            </div>
            <h1 className='text-3xl font-serif text-ink mb-4'>A Year in Review</h1>
            <p className='text-slate font-sans tracking-widest uppercase text-xs'>
              Tap anywhere to begin
            </p>
          </motion.div>
        </div>
      </>
    )
  }

  const currentCard = wrappedCards[currentIndex]
  const isLastCard = currentIndex === wrappedCards.length - 1

  return (
    <div
      className='fixed inset-0 bg-offwhite flex items-center justify-center p-6 cursor-pointer overflow-hidden'
      onClick={handleNext}
    >
      <Nav />

      {/* Vinyl Disc Player UI */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className='absolute top-6 right-6 flex items-center gap-3 bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-line z-50 shadow-sm'
      >
        <div className='w-8 h-8 rounded-full bg-ink flex items-center justify-center shadow-sm'>
          {/* <Disc3 className='w-4 h-4 text-offwhite animate-[spin_4s_linear_infinite]' /> */}
          {isPlaying ? (
            <PauseCircle className='w-12 h-12 text-offwhite' onClick={handlePlayPause} />
          ) : (
            <PlayCircle className='w-12 h-12 text-offwhite' onClick={handlePlayPause} />
          )}
        </div>
        <div className='hidden sm:block'>
          <p className='text-[10px] uppercase tracking-widest text-dusty-rose font-semibold leading-none mb-0.5'>
            Now Playing
          </p>
          <p className='text-xs font-serif text-ink truncate max-w-[120px] leading-tight'>
            {currentTrackMeta?.title || 'Unknown'}
          </p>
        </div>
      </motion.div>

      <AnimatePresence mode='wait'>
        <motion.div
          key={currentCard.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className='max-w-md w-full text-center flex flex-col items-center justify-center'
        >
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className='text-slate uppercase tracking-widest text-xs md:text-sm mb-4 font-sans'
          >
            {currentCard.subtitle}
          </motion.p>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className='text-4xl md:text-6xl font-serif text-ink mb-6 leading-tight'
          >
            {currentCard.title}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className='text-lg md:text-xl text-ink font-sans font-light leading-relaxed max-w-sm'
          >
            {currentCard.description}
          </motion.p>

          {/* Call to action on last card */}
          {isLastCard && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className='mt-12 px-8 py-3 border border-dusty-rose text-dusty-rose rounded-full font-sans tracking-wide hover:bg-dusty-rose hover:text-offwhite transition-colors duration-300'
              onClick={(e) => {
                e.stopPropagation()
                navigate('/scrapbook')
              }}
            >
              Open the Scrapbook
            </motion.button>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Tap indicator */}
      {!isLastCard && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 2, duration: 1 }}
          className='absolute bottom-8 left-0 right-0 text-center text-xs text-slate font-sans tracking-widest uppercase'
        >
          Tap anywhere to continue
        </motion.div>
      )}
    </div>
  )
}

export default Wrapped
