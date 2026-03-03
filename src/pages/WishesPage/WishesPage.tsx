import { birthdayData } from '@/constants/data'
import SectionDivider from '@/components/SectionDivider/SectionDivider'

const WishesPage = () => {
  return (
    <div className='page-container'>
      {/* Header */}
      <div className='mb-5 animate-fade-in'>
        <h1 className='text-xl font-bold text-ink'>Words for You</h1>
        <p className='text-sm text-slate mt-1'>From the depths of my heart</p>
      </div>

      {/* ─── Poem ─── */}
      <div
        className='card animate-fade-in-up'
        style={{ opacity: 0, animationDelay: '0.1s', animationFillMode: 'forwards' }}
      >
        <h2 className='text-base font-bold text-ink text-center mb-4'>{birthdayData.poem.title}</h2>

        <div className='space-y-5'>
          {birthdayData.poem.verses.map((verse, index) => (
            <div
              key={index}
              className='animate-fade-in-up'
              style={{
                opacity: 0,
                animationDelay: `${0.2 + index * 0.15}s`,
                animationFillMode: 'forwards'
              }}
            >
              <p className='text-sm text-slate leading-relaxed text-center whitespace-pre-line italic'>
                {verse}
              </p>
              {index < birthdayData.poem.verses.length - 1 && (
                <div className='flex justify-center mt-4'>
                  <div className='w-8 h-px bg-border' />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Signature */}
        <div className='mt-6 pt-4 border-t border-line text-center'>
          <p className='text-sm italic text-slate'>{birthdayData.poem.signature},</p>
          <p className='text-sm font-semibold text-ink mt-0.5'>{birthdayData.poem.from}</p>
          <span className='text-accent text-lg mt-1 inline-block'>♡</span>
        </div>
      </div>

      <SectionDivider lyricIndex={5} className='mt-5' />

      {/* ─── Closing ─── */}
      <div
        className='text-center py-4 animate-fade-in-up'
        style={{ opacity: 0, animationDelay: '0.7s', animationFillMode: 'forwards' }}
      >
        <p className='text-sm text-slate italic mb-1'>"{birthdayData.lyrics.closingQuote}"</p>
        <p className='text-[10px] text-mute'>— {birthdayData.lyrics.artist}</p>
        <div className='mt-4 flex justify-center gap-1.5'>
          {['💙', '✨', '🌙', '✨', '💙'].map((emoji, i) => (
            <span key={i} className='text-sm'>
              {emoji}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WishesPage
