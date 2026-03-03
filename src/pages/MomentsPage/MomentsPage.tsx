import { birthdayData } from '@/constants/data'
import SectionDivider from '@/components/SectionDivider/SectionDivider'

const MomentsPage = () => {
  return (
    <div className='page-container'>
      {/* Header */}
      <div className='mb-5 animate-fade-in'>
        <h1 className='text-xl font-bold text-ink'>Our Moments</h1>
        <p className='text-sm text-slate mt-1'>Every second with you is a treasure</p>
      </div>

      <SectionDivider lyricIndex={1} />

      {/* Photo Grid — masonry */}
      <div className='columns-2 gap-3 space-y-3'>
        {birthdayData.photos.map((photo, index) => (
          <div
            key={index}
            className='break-inside-avoid animate-fade-in-up'
            style={{
              opacity: 0,
              animationDelay: `${index * 0.1}s`,
              animationFillMode: 'forwards'
            }}
          >
            <div className='rounded-xl overflow-hidden border border-line bg-surface'>
              <div
                className={`w-full overflow-hidden ${photo.span === 'tall' ? 'aspect-[3/4]' : 'aspect-square'}`}
              >
                <img
                  src={photo.src}
                  alt={photo.caption || `Moment ${index + 1}`}
                  className='w-full h-full object-cover'
                />
              </div>
              {photo.caption && (
                <div className='px-3 py-2'>
                  <p className='text-[11px] text-slate'>{photo.caption}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <SectionDivider lyricIndex={2} className='mt-5' />
    </div>
  )
}

export default MomentsPage
