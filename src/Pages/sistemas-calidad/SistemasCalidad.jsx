import React from 'react'
import { Banner } from 'shared/components/Banner';
import mainBg from 'images/sistemas-calidad/tuvansa-sistemas-de-calidad.jpg'
import Logos from 'components/logos'
import Sistemas from 'components/sistemas/Sistemas';

const logos = [
    // { image: require('images/certificaciones/250x250_9001-2015.png') },
    { image: require('images/certificaciones/250x250_aip.png') },
    { image: require('images/certificaciones/250x250_asme.png') },
    { image: require('images/certificaciones/250x250_astm.png') },
    { image: require('images/certificaciones/250x250_certificado-pemex.png') },
    { image: require('images/certificaciones/250x250_nace.png') },
]



export const SistemasCalidad = () => {

    return (
        <>
            <Banner
                title="Estamos certificados con la norma ISO 9001-2015 y además contamos con el reconocimiento como proveedor confiable de Petróleos Mexicanos (PEMEX).
                "
                bgimage={mainBg}
                link='http://tuvansacloud.dyndns.org/intranet/login.php'
                linkTitle='Ingresar a intranet'
            />

            <Sistemas />

            <Logos imgs={logos} />

            {/* <Images /> */}
            {/* <PostSidebar /> */}
            {/* <BlogListing /> */}
        </>

    )
}
