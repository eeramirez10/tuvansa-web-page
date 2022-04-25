import React from 'react';
import { NavLink } from 'react-router-dom';

var bnr1 = require('./../../images/background/bg-5.png');

class Specialization extends React.Component {
    render() {
        return (
            <>
                <div className="section-full mobile-page-padding bg-white p-t80 p-b30 bg-repeat square_shape1" style={{backgroundImage:"url(" + bnr1.default + ")"}}>
                    <div className="container">
                        {/* IMAGE CAROUSEL START */}
                        <div className="section-content">
                            <div className="row">
                                <div className="col-lg-3 col-md-4 col-sm-6 m-b30">
                                    <div className="image-effect-one hover-shadow">
                                        <img src={require('../../images/productos/tuberias01.jpg').default} alt=""/>
                                        <div className="figcaption">
                                            <h4>Tuberias</h4>
                                            <p>Lorem ipsum dolor.  </p>
                                            <NavLink to="" ><i className="link-plus bg-primary" /></NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4  col-sm-6 m-b30">
                                    <div className="image-effect-one hover-shadow">
                                        <img src={require('../../images/productos/shutterstock_540123580.jpg').default} alt="" />
                                        <div className="figcaption">
                                            <h4>Conexiones</h4>
                                            <p>Lorem ipsum dolor.</p>
                                            <NavLink to="" ><i className="link-plus bg-primary" /></NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4  col-sm-6 m-b30">
                                    <div className="image-effect-one hover-shadow">
                                    {/* <img src={require('../../images/pic3.jpg').default} alt="" /> */}
                                        <img src={require('../../images/productos/shutterstock_138247598.jpg').default} alt="" />
                                        <div className="figcaption bg-dark">
                                            <h4>Valvulas</h4>
                                            <p>Lorem ipsum dolor.</p>
                                            <NavLink to="" ><i className="link-plus bg-primary" /></NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-12 col-sm-6 m-b30">
                                    <div className="mt-box our-speciallization-content">
                                        <h3 className="m-t0"><span className="font-weight-100"></span>Productos Tuvansa <br /></h3>
                                        <p>Tienen diversas aplicaciones en la industria Principalmente en la petrolera, petroquímica, gasera, constructora, eléctrica, minera, azucarera, hidráulica, alimenticia, papelera, farmacéutica, etc.</p>
                                        <NavLink to=""  className="site-button btn-effect">Ver todos</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hilite-title text-right p-r50 text-uppercase text-pop-up-top">
                        <strong>Productos</strong>
                    </div>
                </div>
            </>
        );
    }
};

export default Specialization;