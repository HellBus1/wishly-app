import { birthdayData } from '@/constants/data'
import SectionDivider from '@/components/SectionDivider/SectionDivider'

const FavoritesPage = () => {
  return (
    <div className='page-container'>
      {/* Header */}
      <div className='mb-5 animate-fade-in'>
        <h1 className='text-xl font-bold text-ink'>All About You</h1>
        <p className='text-sm text-slate mt-1'>The little things that make you special</p>
      </div>

      {/* ─── Favorite Things ─── */}
      <div className='mb-5'>
        <h3 className='text-sm font-semibold text-ink mb-3'>Favorite Things</h3>
        <div className='grid grid-cols-2 gap-2'>
          {birthdayData.favorites.map((item, index) => (
            <div
              key={index}
              className='card p-3 text-center animate-fade-in-up'
              style={{
                opacity: 0,
                animationDelay: `${index * 0.05}s`,
                animationFillMode: 'forwards'
              }}
            >
              <span className='text-xl block mb-1'>{item.emoji}</span>
              <p className='text-[10px] text-mute uppercase tracking-wider'>{item.label}</p>
              <p className='text-sm font-semibold text-ink mt-0.5'>{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      <SectionDivider lyricIndex={3} />

      {/* ─── Zodiac ─── */}
      <div className='card mb-3'>
        <div className='flex items-start gap-3'>
          <div className='w-12 h-12 rounded-xl bg-accent-light flex items-center justify-center flex-shrink-0'>
            <span className='text-2xl'>{birthdayData.zodiac.symbol}</span>
          </div>
          <div className='flex-1'>
            <h3 className='text-sm font-bold text-ink'>{birthdayData.zodiac.sign}</h3>
            <p className='text-[11px] text-mute mt-0.5'>
              {birthdayData.zodiac.element} Sign · {birthdayData.zodiac.dates}
            </p>
            <div className='flex flex-wrap gap-1 mt-2'>
              {birthdayData.zodiac.traits.map((trait, i) => (
                <span key={i} className='tag text-[10px]'>
                  {trait}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ─── Love Language ─── */}
      <div className='card mb-3'>
        <h3 className='text-sm font-bold text-ink mb-3'>Love Language</h3>
        <div className='space-y-3'>
          {birthdayData.loveLanguages.map((lang, index) => (
            <div key={index}>
              <div className='flex items-center justify-between mb-1'>
                <span className='text-xs text-ink flex items-center gap-1.5'>
                  {lang.emoji} {lang.type}
                </span>
                <span className='text-[10px] text-mute font-medium'>{lang.percentage}%</span>
              </div>
              <div className='w-full h-1.5 rounded-full bg-surface-alt overflow-hidden'>
                <div
                  className='h-full rounded-full bg-accent'
                  style={{ width: `${lang.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Human Design ─── */}
      <div className='card'>
        <h3 className='text-sm font-bold text-ink mb-3'>Human Design</h3>
        <div className='grid grid-cols-2 gap-2'>
          {[
            { label: 'Type', value: birthdayData.humanDesign.type },
            { label: 'Strategy', value: birthdayData.humanDesign.strategy },
            { label: 'Authority', value: birthdayData.humanDesign.authority },
            { label: 'Profile', value: birthdayData.humanDesign.profile }
          ].map((item, i) => (
            <div key={i} className='bg-surface-alt rounded-xl p-3'>
              <p className='text-[10px] text-mute uppercase tracking-wider'>{item.label}</p>
              <p className='text-xs font-semibold text-ink mt-1'>{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      <SectionDivider lyricIndex={4} className='mt-5' />
    </div>
  )
}

export default FavoritesPage
