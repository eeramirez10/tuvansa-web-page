import React from 'react'
import { Slider } from '../../../shared/components/slider/Slider'
import { Servicios } from '../../components/servicios/Servicios'
import Banner from '../../Elements/Banner'

import mainBg from '../../../images/servicios/conexiones-valvulas.jpg'

export const ServiciosScreen = () => {
  return (
    <>
      
      <Banner 
        title="A traves de las sucursales de TUVANSA Monterrey y Mexicali se prestan los siguientes servicios." 
        bgimage={mainBg}  
      />

      <Servicios />
    </>

  )
}
