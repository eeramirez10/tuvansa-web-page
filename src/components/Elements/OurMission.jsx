import React from 'react';
import { NavLink } from 'react-router-dom';

var img1 = require('./../../images/left-men.png');
var img2 = require('./../../images/background/bg-4.png');
var img3 = require('./../../images/background/bg-site.png');
var img4 = require('./../../images/mission.jpg');
var bnr1 = require('./../../images/background/bg-5.png');

class OurMission extends React.Component {
    render() {
        return (
            <>
                <div className="section-full mobile-page-padding mission-outer-section  p-t80 p-b30 bg-gray bg-no-repeat bg-right-center" style={{ backgroundImage: 'url(' + bnr1.default + ')' }}>
                    <div className="section-content">
                        <div className="container">
                            {/* TITLE START */}
                            <div className="section-head">
                                <div className="mt-separator-outer separator-center">
                                    <div className="mt-separator">
                                        <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Sistemas</span> de Calidad</h2>
                                    </div>
                                </div>
                            </div>
                            {/* TITLE END */}
                            <div className="row">
                                <div className="col-md-12 col-sm-12">
                                    <div className="mission-left  m-b30 p-a30 bg-no-repeat bg-bottom-left" >
                                        <h4 className="m-t0"><span className="font-weight-100">
                                            </span>
                                            Estamos certificados con la norma ISO 9001-2015 y además contamos con el reconocimiento como proveedor confiable de Petróleos Mexicanos (PEMEX).
                                            Nuestra política se basa en una mejora continua para cumplir con la creciente demanda de nuestros clientes.
                                        </h4>

                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="mission-left bg-white m-b30 p-a30 bg-no-repeat bg-bottom-left" >
                                        <h3 className="m-t0"><span className="font-weight-100"> </span>Mision</h3>
                                        <p>
                                            Satisfacer las necesidades del mercado nacional e internacional en la Comercialización de Tubería de Acero al Carbón con y sin costura y Conexiones de Acero al Carbón Soldables, de acuerdo a las especificaciones y requerimientos solicitados por nuestros clientes
                                        </p>

                                        {/* <div className="text-right">
                                            <NavLink to="/about" className="site-button-link" data-hover="Read More">Read More <i className="fa fa-angle-right arrow-animation" /></NavLink>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="mission-left bg-white m-b30 p-a30 bg-no-repeat bg-bottom-left" >
                                        <h3 className="m-t0"><span className="font-weight-100"> </span> Valores</h3>
                                        <ul className="list-angle-right anchor-line">
                                            <li><NavLink to="">Madurez</NavLink></li>
                                            <li><NavLink to="">Honestidad</NavLink></li>
                                            <li><NavLink to="">Confianza</NavLink></li>
                                            <li><NavLink to="">Confidencialidad</NavLink></li>
                                            <li><NavLink to="">Ética Profesional</NavLink></li>
                                            <li><NavLink to="">Puntualidad</NavLink></li>
                                            <li><NavLink to="">Lealtad</NavLink></li>
                                        </ul>
                                        {/* <div className="text-right">
                                            <NavLink to="/about" className="site-button-link" data-hover="Read More">Read More <i className="fa fa-angle-right arrow-animation" /></NavLink>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="mission-left bg-white m-b30 p-a30 bg-no-repeat bg-bottom-left" >
                                        <h3 className="m-t0"><span className="font-weight-100"> </span> Vision</h3>
                                        <p>
                                            Ser una empresa de Servicios de clase mundial, líder en el Mercado, que evolucione consistente y sistemáticamente a la par de las necesidades del país y de nuestros clientes, ofertando siempre productos de primera calidad a precios competitivos, con personal altamente calificado y procesos eficaces, los cuales contribuyen a generar confianza y certidumbre en nuestros clientes.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="mission-left bg-white m-b30 p-a30 bg-no-repeat bg-bottom-left" >
                                        <h3 className="m-t0"><span className="font-weight-100"> </span> Política de Calidad</h3>
                                        <p>
                                            “Mantenernos en el mercado nacional, solucionando de manera eficaz y oportuna los requerimientos de nuestros clientes, en los productos y servicios que manejamos, con personal competente, en apego a la normatividad solicitada y aplicable y con el compromiso de mejora continua del sistema de gestión de calidad”.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="mission-left bg-white m-b30 p-a30 bg-no-repeat bg-bottom-left" >
                                        <h3 className="m-t0"><span className="font-weight-100"> </span> Alcance</h3>
                                        <p>
                                            Comercialización de Tubería de acero al carbón con o sin costura, Conexiones y Válvulas.
                                        </p>
                                    </div>
                                </div>


                                {/* <div className="col-md-4 col-sm-6">
                                    <div className="mission-mid bg-no-repeat bg-cover m-b30" style={{ backgroundImage: 'url(' + img4.default + ')' }} />
                                </div> */}
                                {/* <div className="col-md-4 col-sm-12">
                                    <div className="contact-home1-left bg-dark p-a30 m-b0">
                                        <h3 className="text-white m-t0"><span className="font-weight-100">Get In</span> Touch</h3>
                                        <form className="cons-contact-form2 form-transparent" method="post" action="">
                                            <div className="input input-animate">
                                                <label htmlFor="name">Name</label>
                                                <input type="text" name="username" id="name" required />
                                                <span className="spin" />
                                            </div>
                                            <div className="input input-animate">
                                                <label htmlFor="email">Email</label>
                                                <input type="email" name="email" id="email" required />
                                                <span className="spin" />
                                            </div>
                                            <div className="input input-animate">
                                                <label htmlFor="Phone">Phone</label>
                                                <input type="text" name="phone" id="Phone" required />
                                                <span className="spin" />
                                            </div>
                                            <div className="input input-animate">
                                                <label htmlFor="message">Textarea</label>
                                                <textarea name="message" id="message" required defaultValue={""} />
                                                <span className="spin" />
                                            </div>
                                            <div className="text-center p-t10">
                                                <button type="submit" className="site-button btn-effect ">
                                                    Submit Now
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="hilite-title text-left p-l50 text-uppercase text-pop-up-top">
                        <strong>Sist. Calidad</strong>
                    </div>
                </div>
            </>
        );
    }
};

export default OurMission;