import React  from 'react'
import  Valores  from 'components/valores/Index';
import { Nosotros } from './Nosotros';
import {Banner} from 'shared/components/Banner';
import { nosotrosData } from './data';
import bannerImg from 'images/nosotros/tuvansa-quienes-somos.jpg'

export const NosotrosScreen = () => {

    return (
        <>
            <Banner
                title="Contamos con 5 puntos de venta dentro de la República Mexicana: Estado de México, Monterrey, Veracruz, Mexicali y Querétaro" 
                bgimage={bannerImg}
            />
            <Nosotros   {...nosotrosData} />
            <Valores />
        </>
    )
}
