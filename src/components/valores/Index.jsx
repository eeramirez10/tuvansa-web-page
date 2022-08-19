import { useNearScreen } from 'hooks/useNearScreen'
import React, { Suspense } from 'react'


const Valores = React.lazy(() => import('./Valores'))

const LazyValores = () => {

    const { isNear, fromRef } = useNearScreen()
    return (

        <div ref={fromRef}>

            <Suspense fallback={<div>Loading..</div>} >

                {
                    isNear &&
                    (
                        <Valores />
                    )
                }

            </Suspense>

        </div>

    )
}

export default LazyValores