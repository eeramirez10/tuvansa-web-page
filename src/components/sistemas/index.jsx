
import React, { Suspense } from 'react';

import { useNearScreen } from 'hooks/useNearScreen';



const Sistemas = React.lazy(() => import('./Sistemas'));

const LazySistemas = () => {

    

    const { isNear, fromRef } = useNearScreen();

    console.log('sistemas',isNear)

    return <div ref={fromRef} style={{ minHeight:1000  }}>



        <Suspense  fallback={<div>Cargando...  </div>} >

            {
                isNear &&

                <Sistemas />
            }


        </Suspense>


    </div>

}

export default LazySistemas;