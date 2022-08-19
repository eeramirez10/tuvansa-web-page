import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { useObserver } from 'hooks/useObserver';
import vision from 'images/sistemas-calidad/vision.png'
import sistemasCalidad from 'images/sistemas-calidad/sistemas-calidad.jpg'

import mision from 'images/sistemas-calidad/mision.png'



const data = [
    {
        title: 'Mision',
        content: 'Satisfacer las necesidades del mercado nacional e internacional en la Comercialización de Tubería de Acero al Carbón con y sin costura y Conexiones de Acero al Carbón Soldables, de acuerdo a las especificaciones y requerimientos solicitados por nuestros clientes',
        img: vision,
        efect: 'fade-right'
    },
    {
        title: 'Vision',
        content: 'Ser una empresa de Servicios de clase mundial, líder en el Mercado, que evolucione consistente y sistemáticamente a la par de las necesidades del país y de nuestros clientes, ofertando siempre productos de primera calidad a precios competitivos, con personal altamente calificado y procesos eficaces, los cuales contribuyen a generar confianza y certidumbre en nuestros clientes.',
        img: sistemasCalidad,
        efect: 'fade-left'
    },
    {
        title: 'Alcance',
        content: 'Comercialización de Tubería de acero al carbón con o sin costura, Conexiones y Válvulas.',
        img: mision,
        efect: 'fade-right'
    },
    {
        title: 'Politica de Calidad',
        content: '“Mantenernos en el mercado nacional, solucionando de manera eficaz y oportuna los requerimientos de nuestros clientes, en los productos y servicios que manejamos, con personal competente, en apego a la normatividad solicitada y aplicable y con el compromiso de mejora continua del sistema de gestión de calidad”.',
        img: mision,
        efect: 'fade-left'
    },

]


const Sistemas = () => {

    const [observer, setElements, entries] = useObserver({ threshold: 0.1, root: null });

    useEffect(() => {
        entries.forEach(entry => {
            console.log(entry.isIntersecting)
            if (entry.isIntersecting) {
                const lazyImage = entry.target;
                lazyImage.src = lazyImage.dataset.src;
                lazyImage.classList.remove("sistemasCalidad");
                observer.unobserve(lazyImage);
            }
        });
    }, [entries, observer]);

    useEffect(() => {
        const images = document.querySelectorAll(".sistemasCalidad");
        setElements(images);
    }, [setElements]);




    useEffect(() => {

        AOS.init({

            delay: 0,
            duration: 900
        });
        AOS.refresh()

    }, [])


    return (
        <>

            <div className="section-full p-t80 p-b80  square_shape2 inner-page-padding"  >
                <div className="container" >

                    <div className="section-head" >
                        <div className="mt-separator-outer separator-left ">
                            <div className="mt-separator">
                                <h2 className="text-uppercase sep-line-one  ">
                                    <span className="font-weight-300 text-primary ">Sistemas de </span>
                                    Calidad
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="section-content our-story">

                        {


                            data.map((item, i) => <SistemasItems className="sistemasCalidad" key={i} {...item} />)

                        }


                    </div>

                </div>
            </div>

        </>
    )
}


const SistemasItems = ({ img, title, content, efect, className }) => {





    return (

        <>
            {


                <div data-aos={efect} data-aos-offset="300" >
                    <div className="row"  >
                        <div className="col-md-4 col-sm-6">
                            <div className="">
                                <div className="mt-media our-story-pic">
                                    <img className={className} data-src={img} alt="name"  />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 col-sm-6">
                            <div className="mt-box our-story-detail " style={{ backgroundColor: '#222', color: '#fff' }} >

                                <h4 className="m-b20 text-left" style={{ color: '#fff' }} >{title}</h4>
                                <hr />
                                <p className='text-left'>{content} </p>
                            </div>
                        </div>
                    </div>

                </div>


            }



        </>


    )


}

export default Sistemas;
