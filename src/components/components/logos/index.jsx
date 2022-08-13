import React, { Suspense } from 'react'
import { useNearScreen } from 'hooks/useNearScreen';

const Logos = React.lazy(() => import('./Logos'));

const LazyLogos = ({ imgs,title }) => {

  const { isNear, fromRef } = useNearScreen()

  return (
    <div ref={fromRef}   >
      <Suspense fallback={<div style={{ color: 'red' }}> Estoy Cargando... </div>}>

        {
          isNear &&

          <Logos imgs={imgs} title={title} />
        }

      </Suspense>

    </div>
  )
}

export default LazyLogos;
