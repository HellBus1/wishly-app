// ============================================================
// 🎂 BIRTHDAY DATA — Edit this file to personalize everything
// ============================================================

export interface FavoriteItem {
  emoji: string
  label: string
  value: string
}

export interface PhotoItem {
  src: string
  caption?: string
  span?: 'tall' | 'wide' | 'normal'
}

export interface ZodiacInfo {
  sign: string
  symbol: string
  element: string
  dates: string
  traits: string[]
}

export interface LoveLanguage {
  type: string
  emoji: string
  percentage: number
  description: string
}

export interface HumanDesign {
  type: string
  strategy: string
  authority: string
  profile: string
}

export const birthdayData = {
  // — Profile Card —
  name: 'Sevila Rizki',
  nickname: 'Sevila',
  title: 'The Star of My Universe ✧',
  birthday: 'March 5',
  age: 22,
  profilePhoto: '/photos/profile.jpg',

  // — Day6 Lyrics (English) —
  lyrics: {
    sectionDividers: [
      "Let's write down a page of our beautiful youth together",
      'I want to fill it with memories of us',
      'So that this moment could be a page we turn back to',
      "Don't worry about anything, leave it all up to me",
      "I've been waiting for a long time — I believe you have too",
      "For this day, I've prepared quite a bit"
    ],
    heroQuote: 'Want us to have the time of our life',
    closingQuote: 'This is our page. Our page.',
    songTitle: 'Time of Our Life (한 페이지가 될 수 있게)',
    artist: 'DAY6'
  },

  // — Photo Collage —
  photos: [
    { src: '/photos/moment-1.jpg', caption: 'Our first adventure', span: 'tall' as const },
    { src: '/photos/moment-2.jpg', caption: 'Laughing together', span: 'normal' as const },
    { src: '/photos/moment-3.jpg', caption: 'That sunset we loved', span: 'normal' as const },
    { src: '/photos/moment-4.jpg', caption: 'Making memories', span: 'tall' as const },
    { src: '/photos/moment-5.jpg', caption: 'Your beautiful smile', span: 'normal' as const },
    { src: '/photos/moment-6.jpg', caption: 'Together, always', span: 'normal' as const }
  ],

  // — Favorite Things —
  favorites: [
    { emoji: '🍜', label: 'Favorite Food', value: 'Ramen' },
    { emoji: '☕', label: 'Favorite Drink', value: 'Matcha Latte' },
    { emoji: '🎬', label: 'Favorite Movie', value: 'Your Name' },
    { emoji: '🎵', label: 'Favorite Song', value: 'Time of Our Life' },
    { emoji: '📖', label: 'Favorite Book', value: 'The Little Prince' },
    { emoji: '🎨', label: 'Favorite Color', value: 'Blue' },
    { emoji: '🌸', label: 'Favorite Flower', value: 'Cherry Blossom' },
    { emoji: '🍰', label: 'Favorite Dessert', value: 'Tiramisu' }
  ] as FavoriteItem[],

  // — Zodiac —
  zodiac: {
    sign: 'Pisces',
    symbol: '♓',
    element: 'Water',
    dates: 'Feb 19 – Mar 20',
    traits: ['Empathetic', 'Creative', 'Gentle', 'Intuitive', 'Romantic']
  } as ZodiacInfo,

  // — Love Language —
  loveLanguages: [
    {
      type: 'Quality Time',
      emoji: '⏰',
      percentage: 35,
      description: 'Being fully present together'
    },
    {
      type: 'Words of Affirmation',
      emoji: '💬',
      percentage: 25,
      description: 'Hearing heartfelt words'
    },
    {
      type: 'Physical Touch',
      emoji: '🤗',
      percentage: 20,
      description: 'Warm hugs and gentle touches'
    },
    {
      type: 'Acts of Service',
      emoji: '💝',
      percentage: 12,
      description: 'Thoughtful actions of care'
    },
    { type: 'Receiving Gifts', emoji: '🎁', percentage: 8, description: 'Meaningful surprises' }
  ] as LoveLanguage[],

  // — Human Design —
  humanDesign: {
    type: 'Generator',
    strategy: 'To Respond',
    authority: 'Sacral Authority',
    profile: '2/4 Hermit / Opportunist'
  } as HumanDesign,

  // — Poem / Wishes —
  poem: {
    title: 'To You, My Beautiful Page',
    verses: [
      `In every sunrise that paints the morning sky,\nI see the warmth you bring to every day.\nYour laughter is the melody I hold so close,\nA song that never seems to fade away.`,
      `Like pages turning in the book of us,\nEach memory a treasure, bright and true.\nFrom quiet whispers to our loudest dreams,\nEvery chapter leads me back to you.`,
      `So on this day, I wish you all the stars,\nThe peaceful waves, the gentle morning dew.\nMay every moment fill your heart with light —\nHappy birthday, I'm so grateful it's you.`
    ],
    signature: 'With all my heart',
    from: 'Me'
  },

  // — Music —
  music: {
    src: '/music/time-of-our-life.mp3',
    title: 'Time of Our Life',
    artist: 'DAY6'
  }
}
