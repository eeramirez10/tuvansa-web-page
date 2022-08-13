import React from 'react';


import AOS from "aos";
import "aos/dist/aos.css";



var img1 = require('./../../images/background/bg-6.png');
var img2 = require('./../../images/background/line.png');

const logos = [
    { image: require('./../../images/certificaciones/9001-2015.png') },
    { image: require('./../../images/certificaciones/aip.png') },
    { image: require('./../../images/certificaciones/asme.png') },
    { image: require('./../../images/certificaciones/astm.png') },
    { image: require('./../../images/certificaciones/certificado-pemex.png') },
    { image: require('./../../images/certificaciones/nace.png') },
]

class AboutSummary extends React.Component {
    componentDidMount() {

        AOS.init({
            
            delay:0,
            duration:900
        });
        AOS.refresh()

    };
    render() {

        const options = {
            loop: true,
            autoplay: true,
            items: 3,
            nav: false,
            dots: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        };
        return (
            <>
                <div className="section-full p-t80 p-b80  square_shape2 inner-page-padding" >
                    <div className="container" >
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="mt-separator-outer separator-left ">
                                <div className="mt-separator">
                                    <h2 className="text-uppercase sep-line-one  ">
                                        <span class="font-weight-300 text-primary ">Sistemas de </span>
                                        Calidad
                                    </h2>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        <div  className="section-content our-story">
                            <div data-aos="fade-left" data-aos-offset="300" className="row">
                                <div  className="col-md-4 col-sm-6">
                                
                                        <div className="mt-media our-story-pic">
                                        <img src={require('./../../images/sistemas-calidad/sistemas-calidad.jpg').default} alt="" />
                                        </div>
                              
                                </div>

                                <div className="col-md-8 col-sm-6">
                                    <div className="mt-box our-story-detail " >

                                        <h4 className="m-b20 ">Mision </h4>
                                        <hr />
                                        <p>Satisfacer las necesidades del mercado nacional e internacional en la Comercialización de Tubería de Acero al Carbón con y sin costura y Conexiones de Acero al Carbón Soldables, de acuerdo a las especificaciones y requerimientos solicitados por nuestros clientes</p>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-right" data-aos-offset="400" className="row">
                                <div className="col-md-4 col-sm-6">
                                    <div className="">
                                        <div className="mt-media our-story-pic">
                                        <img src={require('./../../images/sistemas-calidad/sistemas-calidad.jpg').default} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8 col-sm-6">

                                    <div className="mt-box our-story-detail " style={{ backgroundColor:'#222', color:'#fff'}} >

                                        <h4 className="m-b20 text-left" style={{ color:'#fff'}} >Vision</h4>
                                        <hr />
                                        <p className='text-left'> Ser una empresa de Servicios de clase mundial, líder en el Mercado, que evolucione consistente y sistemáticamente a la par de las necesidades del país y de nuestros clientes, ofertando siempre productos de primera calidad a precios competitivos, con personal altamente calificado y procesos eficaces, los cuales contribuyen a generar confianza y certidumbre en nuestros clientes.</p>

                                    </div>
                                </div>
                            </div>
                            <div  data-aos="fade-left"  data-aos-offset="400" className="row">
                                <div className="col-md-4 col-sm-6">
                                    <div className="">
                                        <div className="mt-media our-story-pic">
                                        <img src={require('./../../images/sistemas-calidad/sistemas-calidad.jpg').default} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8 col-sm-6">

                                    <div className="mt-box our-story-detail " style={{ backgroundColor:'#222', color:'#fff'}} >

                                        <h4 className="m-b20 text-left" style={{ color:'#fff'}} >Alcance</h4>
                                        <hr />
                                        <p className='text-left'> Comercialización de Tubería de acero al carbón con o sin costura, Conexiones y Válvulas.</p>

                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-right" data-aos-offset="400" className="row">
                                <div className="col-md-4 col-sm-6">
                                    <div className="">
                                        <div className="mt-media our-story-pic">
                                            <img src={require('./../../images/sistemas-calidad/sistemas-calidad.jpg').default} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8 col-sm-6">

                                    <div className="mt-box our-story-detail " style={{ backgroundColor:'#222', color:'#fff'}} >

                                        <h4 className="m-b20 text-left" style={{ color:'#fff'}} >Politica de Calidad</h4>
                                        <hr />
                                        <p className='text-left'> “Mantenernos en el mercado nacional, solucionando de manera eficaz y oportuna los requerimientos de nuestros clientes, en los productos y servicios que manejamos, con personal competente, en apego a la normatividad solicitada y aplicable y con el compromiso de mejora continua del sistema de gestión de calidad”.</p>

                                    </div>
                                </div>
                            </div>



{/* 
                            <div className="row">
                                <div className="widget">
                                    <h4 className="widget-title text-center "></h4>
                                    <OwlCarousel className="owl-carousel  p-t10" {...options}>
                                        {logos.map((item, index) => (
                                            <div className="item" key={index}>
                                                <div className="">
                                                    <div className="" >
                                                        <NavLink to={"#"}><img src={item.image.default} style={{ width:'40%', display: 'block', margin:' 0 auto'}} alt="" /></NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                    </OwlCarousel>
                                </div>
                            </div> */}

                            <div className="row">


                                {/* <BlogList /> */}
                            </div>
                        </div>
                        {/* <div className="section-content our-story">

                            <div className="row">
                                <div className="col-md-6 col-sm-6">
                                    <div className="our-story-pic-block">
                                        <div className="mt-media our-story-pic">
                                            <img src={require('./../../images/gallery/portrait/pic6.jpg').default} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="blog-post date-style-3 blog-detail text-black">


                                        <div className="mt-post-title ">
                                            <h3 className="post-title font-weight-600 text-center">Alcance</h3>
                                            <hr />
                                        </div>
                                        <div className="mt-post-text text-center">
                                            <p>
                                                Comercialización de Tubería de acero al carbón con o sin costura, Conexiones y Válvulas.
                                            </p>

                                        </div>

                                    </div>
                                </div>

                                <div className="col-md-6 col-sm-12">
                                    <div className="blog-post date-style-3 blog-detail text-black">
                                        <div className="mt-post-title ">
                                            <h3 className="post-title font-weight-600 text-center">Politica de Calidad</h3>
                                            <hr />
                                        </div>
                                        <div className="mt-post-text text-left text-center">
                                            <p>
                                                “Mantenernos en el mercado nacional, solucionando de manera eficaz y oportuna los requerimientos de nuestros clientes, en los productos y servicios que manejamos, con personal competente, en apego a la normatividad solicitada y aplicable y con el compromiso de mejora continua del sistema de gestión de calidad”.
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-md-4 col-sm-8">
                                    <div className="our-story-pic-block">
                                        <div className="mt-media our-story-pic">
                                            <img src={require('./../../images/gallery/portrait/pic5.jpg').default} alt="" />
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div> */}
                    </div>
                </div>
            </>
        );
    }
};

export default AboutSummary;