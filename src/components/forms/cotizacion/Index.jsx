import { useNearScreen } from 'hooks/useNearScreen'
import React, { Suspense} from 'react'


const Cotizacion = React.lazy(() => import('./Cotizacion'));

const LazyCotizacion = () => {

    const {isNear, fromRef} = useNearScreen()

  return (
    <div ref={fromRef}>
        <Suspense fallback={<div style={{ color: 'red' }}> Estoy Cargando... </div>}>
            {
                isNear &&
                 <Cotizacion />
            }

        </Suspense>
    </div>
  )
}

export default LazyCotizacion