import { useContext } from 'react'
import { LightboxContext } from './LightboxContext'

export const useLightbox = () => {
  const context = useContext(LightboxContext)
  if (context === undefined) {
    throw new Error('useLightbox must be used within a LightboxProvider')
  }
  return context
}
