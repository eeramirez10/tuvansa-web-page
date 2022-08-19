import { useContext } from 'react'
import GalleryImageContext from 'context/GalleryImageContext'

export const useGalleryImage = () => {
  return (
    useContext(GalleryImageContext)
  )
}
