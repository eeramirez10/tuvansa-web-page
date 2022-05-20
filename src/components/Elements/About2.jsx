import React from 'react';
import { NavLink } from 'react-router-dom';
import CountUp from 'react-countup';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const images = [
    require('./../../images/nosotros/3-A.jpg'),
    require('./../../images/nosotros/3-B.jpg'),
    require('./../../images/nosotros/4-A.jpg'),
    require('./../../images/nosotros/10-A.jpg'),
    require('./../../images/nosotros/11-A.jpg')
]

var bnr1 = require('./../../images/background/bg-map.png');
var bnr2 = require('./../../images/main-slider/slider1/conexiones-valvulas.jpg');

class About2 extends React.Component {
    render() {
        const options = {
            loop: true,
            autoplay: true,
            margin: 30,
            nav: false,
            dots: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                991: {
                    items: 1
                }
            }
        };
        return (
            <>
                <div className="section-full " style={{ backgroundImage: "url(" + bnr1.default + ")" }}>
                    <div className="services-half-section-top ">
                        <div className="container">
                            {/* TITLE START */}
                            <div className="section-head">
                                <div className="mt-separator-outer separator-left text-wh">
                                    <div className="mt-separator">
                                        <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Noso</span>tros</h2>
                                    </div>
                                </div>
                            </div>
                            {/* TITLE END */}
                            <div className="section-content">
                                <div className="row">
                                    <div className="col-lg-8 col-md-12 col-sm-12">
                                        <OwlCarousel className="owl-carousel about-home about-home-v2 owl-dots-bottom-left" {...options}>
                                            {images.map((item, index) => (
                                                <div className="item" key={index}>
                                                    <div className="mt-img-effect zoom-slow">
                                                        <NavLink to="/about"><img loading='lazy' src={item.default} alt="" /></NavLink>
                                                    </div>
                                                </div>

                                            ))}

                                        </OwlCarousel>
                                    </div>
                                    <div className="col-lg-4 col-md-12 col-sm-12">
                                        <div className="about-home-right about-right-v2 bg-primary text-black p-a30">
                                            <h3 className="m-t0"><span className="font-weight-100">Quienes</span> somos?</h3>
                                            <p><strong>Desde su fundación en 1956, Tubería y Válvulas del Norte, S.A. de C.V. (TUVANSA) es líder en comercialización de tuberías,
                                                válvulas, conexiones y barra hueca.</strong></p>
                                            <p>
                                                <strong>
                                                    Durante más de sesenta años la empresa ha superado retos económicos propios de la industria,
                                                    acrecentando su posición y prestigio en el mercado nacional e internacional.
                                                </strong>

                                            </p>
                                            {/* <div className="text-left">
                                                <NavLink to="/about" className="site-button-secondry btn-effect">Read More</NavLink>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="services-half-section-bottom p-t80 p-b50  bg-parallax bg-cover  " data-stellar-background-ratio="0.5" loading="lazy" style={{backgroundImage:"url(" + bnr2.default + ")", height:'40vh'}} >
                        {/* <div className="container">
                            <div className="section-content">
                                <div className="row">
                                    <div className="col-md-3 col-sm-6">
                                        <div className="text-primary mt-icon-box-wraper left m-b30">
                                            <span className="icon-md p-t10">
                                                <i className="flaticon-city" />
                                            </span>
                                            <div className="icon-content text-white">
                                                <div className="counter font-50 font-weight-800 m-b5"><CountUp end={2500} duration={5} /></div>
                                                <span className="font-16">Projects Done</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <div className="text-primary mt-icon-box-wraper left m-b30">
                                            <span className="icon-md p-t10">
                                                <i className="flaticon-worker" />
                                            </span>
                                            <div className="icon-content text-white">
                                                <div className="counter font-50 font-weight-800 m-b5"><CountUp end={1500} duration={5} /></div>
                                                <span className="font-16">Happy Client</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <div className="text-primary mt-icon-box-wraper left m-b30">
                                            <span className="icon-md p-t10">
                                                <i className="flaticon-crane" />
                                            </span>
                                            <div className="icon-content text-white">
                                                <div className="counter font-50 font-weight-800 m-b5"><CountUp end={840} duration={5} /></div>
                                                <span className="font-16">Industries Served</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <div className="text-primary mt-icon-box-wraper left m-b0">
                                            <span className="icon-md p-t10">
                                                <i className="flaticon-art-and-design" />
                                            </span>
                                            <div className="icon-content text-white">
                                                <div className="counter font-50 font-weight-800 m-b5"><CountUp end={180} duration={5} /></div>
                                                <span className="font-16">Renovate</span>
                                            </div>
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

export default About2;