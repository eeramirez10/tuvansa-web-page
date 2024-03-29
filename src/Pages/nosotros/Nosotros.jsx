import React from 'react';

import { Carousel } from 'shared/components/Carousel';



var bnr1 = require('images/background/bg-map.png');
var bnr2 = require('images/main-slider/slider1/conexiones-valvulas.jpg');



export const Nosotros = ({ title, content, carousel }) => {


    return (
        <>


            <div   className="section-full " style={{ backgroundImage: "url(" + bnr1.default + ")" }}>
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
                        <div className="section-content" data-aos="fade-left" data-aos-offset="300">
                            <div className="row">
                                <div className="col-lg-8 col-md-12 col-sm-12">

                                    <Carousel images={carousel} autoplay={true} />

                                </div>
                                <div className="col-lg-4 col-md-12 col-sm-12">
                                    <div className="about-home-right about-right-v2 bg-primary text-black p-a30" style={{ maxHeight: '300px' }}>
                                        <h3 className="m-t0"><span className="font-weight-100">{title} </span></h3>

                                        {
                                            content.map((paraffo, i) => (
                                                <p key={i} > <strong> {paraffo.p}</strong> </p>

                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="services-half-section-bottom p-t80 p-b50  bg-parallax bg-cover  " data-stellar-background-ratio="0.5" loading="lazy" style={{ backgroundImage: "url(" + bnr2.default + ")", height: '40vh' }} >

                </div>
            </div>
        </>
    );

}
