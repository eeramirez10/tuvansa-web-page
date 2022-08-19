import React from 'react'

import { Banner } from 'shared/components/Banner';
import OwlCarousel from 'react-owl-carousel';

import mainBg from 'images/productos/tuvansa-productos.jpg'
import { Productos2 } from 'components/productos/Productos2';
import { NavLink } from 'react-router-dom';
import Logos from 'components/components/logos';

const logos = [
  { image: require('images/productos/logos/durman.png') },
  { image: require('images/productos/logos/genebre.png') },
  { image: require('images/productos/logos/laguna.png') },
  { image: require('images/productos/logos/otek.png') },
  { image: require('images/productos/logos/ruhrpumpen.png') },
  { image: require('images/productos/logos/rymco.png') },
  { image: require('images/productos/logos/siemens.png') },
  { image: require('images/productos/logos/tamsa.png') },
  { image: require('images/productos/logos/ternium.png') },
  { image: require('images/productos/logos/tubacero.png') },
  { image: require('images/productos/logos/tumex.png') },
  { image: require('images/productos/logos/victaulic.png') },
  { image: require('images/productos/logos/villacero.png') },
  { image: require('images/productos/logos/walworth.png') },
];


export const ProductosScreen = () => {

  return (
    <>
      <Banner
        title="Utilizados en la industria en general, minera, conducción de agua potable y residual."
        bgimage={mainBg}
      />
      {/* <Productos /> */}
      <Productos2 />

      <Logos imgs={logos} title="Contamos con el respaldo técnico y solidario de las fábricas que representamos." />


    </>
  )
}
