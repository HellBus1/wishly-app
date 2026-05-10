import { motion } from 'framer-motion'
import SectionIntro from './sections/SectionIntro'
import SectionPlaylist from './sections/SectionPlaylist'
import SectionTimeline from './sections/SectionTimeline'
import SectionMagic from './sections/SectionMagic'
import SectionLetters from './sections/SectionLetters'
import SectionMuseum from './sections/SectionMuseum'
import SectionClosing from './sections/SectionClosing'
import Nav from '@/components/Nav/Nav'

const Scrapbook = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className='min-h-screen bg-offwhite text-ink font-sans selection:bg-dusty-rose selection:text-white'
    >
      <Nav />
      <div className='max-w-3xl mx-auto px-6 py-24 md:py-32 flex flex-col gap-32 md:gap-48'>
        <SectionIntro />
        <SectionPlaylist />
        <SectionTimeline />
        <SectionMagic />
        <SectionLetters />
        <SectionMuseum />
      </div>

      {/* Full bleed closing */}
      <SectionClosing />
    </motion.div>
  )
}

export default Scrapbook
