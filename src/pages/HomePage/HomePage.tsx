import { birthdayData } from '@/constants/data'
import SectionDivider from '@/components/SectionDivider/SectionDivider'

const HomePage = () => {
  return (
    <div className='page-container'>
      {/* ─── Member Card (JKT48-style) ─── */}
      <div className='card p-0 overflow-hidden animate-fade-in'>
        {/* Photo */}
        <div className='aspect-[3/4] w-full overflow-hidden'>
          <img
            src={birthdayData.profilePhoto}
            alt={birthdayData.name}
            className='w-full h-full object-cover'
          />
        </div>

        {/* Info strip */}
        <div className='p-4 border-t border-line'>
          <div className='flex items-start justify-between mb-2'>
            <div>
              <h1 className='text-xl font-bold text-ink'>{birthdayData.name}</h1>
              <p className='text-sm text-slate mt-0.5'>{birthdayData.title}</p>
            </div>
            <div className='text-right'>
              <span className='tag tag-accent text-[10px]'>
                {birthdayData.zodiac.symbol} {birthdayData.zodiac.sign}
              </span>
            </div>
          </div>

          <div className='flex items-center gap-2 mt-3'>
            <span className='tag text-[10px]'>🎂 {birthdayData.birthday}</span>
            <span className='tag text-[10px]'>💙 {birthdayData.humanDesign.type}</span>
          </div>
        </div>
      </div>

      <SectionDivider lyricIndex={0} />

      {/* ─── Birthday Greeting ─── */}
      <div
        className='card text-center animate-fade-in-up'
        style={{ opacity: 0, animationDelay: '0.15s', animationFillMode: 'forwards' }}
      >
        <span className='text-3xl block mb-3'>🎂</span>
        <h2 className='text-lg font-bold text-ink mb-1'>
          Happy Birthday, {birthdayData.nickname}!
        </h2>
        <p className='text-sm text-slate mb-4'>
          Turning {birthdayData.age} and shining brighter than ever ✦
        </p>

        {/* Age badge */}
        <div className='inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent text-white font-bold text-xl mb-4'>
          {birthdayData.age}
        </div>

        {/* Quote */}
        <div className='pt-3 border-t border-line'>
          <p className='text-xs text-mute italic'>"{birthdayData.lyrics.heroQuote}"</p>
          <p className='text-[10px] text-mute mt-1'>— {birthdayData.lyrics.artist}</p>
        </div>
      </div>
    </div>
  )
}

export default HomePage
