import { useState, useRef, useEffect } from 'react'
import { birthdayData } from '@/constants/data'

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100)
      }
    }

    audio.addEventListener('timeupdate', updateProgress)
    audio.addEventListener('ended', () => setIsPlaying(false))

    return () => {
      audio.removeEventListener('timeupdate', updateProgress)
      audio.removeEventListener('ended', () => setIsPlaying(false))
    }
  }, [])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play().catch(() => setIsPlaying(false))
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <>
      <audio ref={audioRef} src={birthdayData.music.src} preload='metadata' />
      <div
        className='fixed bottom-14 left-1/2 -translate-x-1/2 z-40'
        style={{ maxWidth: '410px', width: 'calc(100% - 2rem)' }}
      >
        <div className='flex items-center gap-3 px-4 py-2.5 bg-surface rounded-xl border border-line shadow-sm'>
          {/* Play/Pause */}
          <button
            onClick={togglePlay}
            className='w-8 h-8 flex items-center justify-center rounded-full bg-accent text-white text-xs flex-shrink-0'
          >
            {isPlaying ? '⏸' : '▶'}
          </button>

          {/* Song info */}
          <div className='flex-1 min-w-0'>
            <p className='text-xs font-semibold text-ink truncate'>{birthdayData.music.title}</p>
            <p className='text-[10px] text-mute truncate'>{birthdayData.music.artist}</p>
          </div>

          {/* Progress */}
          <div className='w-14 h-1.5 rounded-full bg-surface-alt overflow-hidden flex-shrink-0'>
            <div
              className='h-full rounded-full bg-accent transition-all duration-300'
              style={{ width: `${progress}%` }}
            />
          </div>

          <span className={`text-sm flex-shrink-0 ${isPlaying ? 'animate-float' : ''}`}>🎵</span>
        </div>
      </div>
    </>
  )
}

export default MusicPlayer
