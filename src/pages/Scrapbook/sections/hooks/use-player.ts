import { useState, useRef } from 'react'

const usePlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const handlePlayPause = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      // Safari fully trusts play requests when fired on a real DOM element
      audio
        .play()
        .then(() => {
          setIsPlaying(true)
        })
        .catch((error) => {
          console.error('Safari blocked playback:', error)
        })
    }
  }

  return {
    isPlaying,
    handlePlayPause,
    audioRef // We will pass this ref to an audio tag in your component
  }
}

export { usePlayer }
