import React, { createContext, useState, useRef, useEffect } from 'react'
import { useContent } from './useContent'

export interface PlayerContextType {
  isPlaying: boolean
  handlePlayPause: () => void
  play: () => Promise<void>
  pause: () => void
  audioRef: React.RefObject<HTMLAudioElement | null>
}

export const PlayerContext = createContext<PlayerContextType | undefined>(undefined)

export const PlayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { content } = useContent()
  const currentTrack = content?.music?.[0]?.src || ''

  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const play = async () => {
    if (!audioRef.current) return
    try {
      await audioRef.current.play()
      setIsPlaying(true)
    } catch (error) {
      console.error('Playback failed:', error)
      setIsPlaying(false)
    }
  }

  const pause = () => {
    if (!audioRef.current) return
    audioRef.current.pause()
    setIsPlaying(false)
  }

  const handlePlayPause = () => {
    if (isPlaying) {
      pause()
    } else {
      play()
    }
  }

  // Sync state with native media controls or natural end
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)
    const handleEnded = () => setIsPlaying(false)

    audio.addEventListener('play', handlePlay)
    audio.addEventListener('pause', handlePause)
    audio.addEventListener('ended', handleEnded)

    return () => {
      audio.removeEventListener('play', handlePlay)
      audio.removeEventListener('pause', handlePause)
      audio.removeEventListener('ended', handleEnded)
    }
  }, [currentTrack])

  return (
    <PlayerContext.Provider value={{ isPlaying, handlePlayPause, play, pause, audioRef }}>
      {/* 
        This audio element stays in the DOM as long as PlayerProvider is mounted, 
        which is at the root of the app, ensuring uninterrupted playback across routes. 
      */}
      {currentTrack && <audio ref={audioRef} src={currentTrack} preload='auto' />}
      {children}
    </PlayerContext.Provider>
  )
}
