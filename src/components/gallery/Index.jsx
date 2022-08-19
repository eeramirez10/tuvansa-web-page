import { useNearScreen } from 'hooks/useNearScreen'
import React, { Suspense } from 'react'

const Gallery = React.lazy(()=> import('./Gallery'))

const LazyGallery = () => {

   const {isNear,fromRef} = useNearScreen()
  return (
    <div ref={fromRef}>
        <Suspense fallback={<div>Am loading...</div>}>
            {
                isNear &&
                <Gallery />

            }

        </Suspense>
    </div>
  )
}

export default LazyGallery