import { birthdayData } from '@/constants/data'

interface SectionDividerProps {
  lyricIndex?: number
  className?: string
}

const SectionDivider = ({ lyricIndex = 0, className = '' }: SectionDividerProps) => {
  const lyric =
    birthdayData.lyrics.sectionDividers[lyricIndex % birthdayData.lyrics.sectionDividers.length]

  return (
    <div className={`flex items-center gap-3 my-5 ${className}`}>
      <div className='flex-1 h-px bg-border' />
      <p className='text-[11px] text-mute italic text-center px-1 max-w-[200px]'>"{lyric}"</p>
      <div className='flex-1 h-px bg-border' />
    </div>
  )
}

export default SectionDivider
