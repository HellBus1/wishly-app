import React, { createContext, useEffect, useState } from 'react'

// ── Data shapes ────────────────────────────────────────────────────────────────

export interface MusicTrack {
  title: string
  artist: string
  src: string
}

export interface WrappedCard {
  id: string
  subtitle: string
  title: string
  description: string
}

export interface PlaylistHero {
  title: string
  artist: string
  note: string
}

export interface PlaylistCompanion {
  title: string
  artist: string
}

export interface TimelineMoment {
  id: number
  title: string
  date: string
  feeling: string
  lyric: string
  imageSrc?: string
  imagePlaceholder?: string
}

export interface Letter {
  title: string
  content: string
}

export interface MuseumItem {
  title: string
  caption: string
  era: string
}

export interface ScrapbookClosing {
  gratefulFor: string[]
  protect: string[]
  promise: string
  name: string
  date: string
}

export interface ScrapbookContent {
  intro: {
    for: string
    birthday: string
    mood: string
    keywords: string[]
  }
  playlist: {
    hero: PlaylistHero
    companions: PlaylistCompanion[]
  }
  timeline: TimelineMoment[]
  magic: string[]
  letters: Letter[]
  museum: MuseumItem[]
  closing: ScrapbookClosing
}

export interface ContentState {
  music: MusicTrack[]
  wrapped: WrappedCard[]
  scrapbook: ScrapbookContent
}

// ── Context ───────────────────────────────────────────────────────────────────

export interface ContentContextType {
  content: ContentState | null
  loading: boolean
  error: string | null
}

export const ContentContext = createContext<ContentContextType | undefined>(undefined)

// ── Fallback data ─────────────────────────────────────────────────────────────

const fallbackContent: ContentState = {
  music: [{ title: 'Time of Our Life', artist: 'DAY6', src: '' }],
  wrapped: [
    {
      id: 'intro',
      subtitle: 'Before we celebrate your special day,',
      title: "Let's take a look back.",
      description: "At the time of our life we've built so far."
    }
  ],
  scrapbook: {
    intro: {
      for: 'Sevil',
      birthday: 'July 14, 2026',
      mood: 'warm, nostalgic, thankful',
      keywords: ['time of my life', 'memories', 'growth', 'love', 'little moments']
    },
    playlist: {
      hero: {
        title: 'Time of Our Life',
        artist: 'DAY6',
        note: 'Our emotional anchor. The song that always brings me back to us.'
      },
      companions: []
    },
    timeline: [],
    magic: [],
    letters: [],
    museum: [],
    closing: {
      gratefulFor: [],
      protect: [],
      promise: "I promise to never stop 'dating' you, no matter how many years pass.",
      name: 'Sevil',
      date: 'July 14, 2026'
    }
  }
}

// ── Provider ──────────────────────────────────────────────────────────────────

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<ContentState | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch('/private/content.json')
        if (!response.ok) {
          throw new Error('Failed to load private content')
        }
        const data = await response.json()
        setContent(data as ContentState)
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : 'Unknown error'
        console.warn('Using fallback content due to:', message)
        setContent(fallbackContent)
        setError(message)
      } finally {
        setLoading(false)
      }
    }

    fetchContent()
  }, [])

  return (
    <ContentContext.Provider value={{ content, loading, error }}>
      {children}
    </ContentContext.Provider>
  )
}
