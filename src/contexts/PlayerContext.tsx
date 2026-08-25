import React, { createContext, useState, useRef, useEffect } from 'react'
import { useContent } from './useContent'

export interface PlayerContextType {
  isPlaying: boolean
  handlePlayPause: () => void
  play: () => Promise<void>
  pause: () => void
  audioRef: React.RefObject<HTMLAudioElement | null>
  currentTrackMeta: { title: string; artist: string; src: string } | null
  changeTrack: (src: string, title: string, artist: string) => void
}

export const PlayerContext = createContext<PlayerContextType | undefined>(undefined)

export const PlayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { content } = useContent()
  const defaultSrc = content?.music?.[0]?.src || ''
  const defaultTitle = content?.music?.[0]?.title || 'Unknown'
  const defaultArtist = content?.music?.[0]?.artist || 'Unknown'

  const [currentTrackMeta, setCurrentTrackMeta] = useState<{
    title: string
    artist: string
    src: string
  } | null>(null)
  const playOnLoadRef = useRef(false)

  // Initialize track metadata
  useEffect(() => {
    if (defaultSrc && !currentTrackMeta) {
      setCurrentTrackMeta({ src: defaultSrc, title: defaultTitle, artist: defaultArtist })
    }
  }, [defaultSrc, defaultTitle, defaultArtist, currentTrackMeta])

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

  const changeTrack = (src: string, title: string, artist: string) => {
    if (!src || currentTrackMeta?.src === src) return
    setCurrentTrackMeta({ src, title, artist })
    playOnLoadRef.current = true
  }

  // Handle track source changes
  useEffect(() => {
    const audio = audioRef.current
    if (audio && currentTrackMeta?.src) {
      audio.load()
      if (playOnLoadRef.current) {
        audio
          .play()
          .then(() => setIsPlaying(true))
          .catch((e) => {
            console.error('Playback on track change failed:', e)
            setIsPlaying(false)
          })
        playOnLoadRef.current = false
      }
    }
  }, [currentTrackMeta?.src])

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
  }, [currentTrackMeta?.src])

  return (
    <PlayerContext.Provider
      value={{
        isPlaying,
        handlePlayPause,
        play,
        pause,
        audioRef,
        currentTrackMeta,
        changeTrack
      }}
    >
      {/* 
        This audio element stays in the DOM as long as PlayerProvider is mounted, 
        which is at the root of the app, ensuring uninterrupted playback across routes. 
      */}
      {currentTrackMeta?.src && <audio ref={audioRef} src={currentTrackMeta.src} preload='auto' />}
      {children}
    </PlayerContext.Provider>
  )
}
