import React from 'react';
import { NavLink } from 'react-router-dom';
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/css/modal-video.min.css';

var img1 = require('./../../images/mq3.jpg');

class OurValue2 extends React.Component {
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }

    openModal() {
        this.setState({ isOpen: true })
    }
    render() {
        return (
            <>
                <div className="section-full p-t80 p-b50 bg-white mobile-page-padding">
                    <div className="container">
                        <div className="section-content">
                            <div className="row">
                                <div className="col-md-7 col-sm-12">
                                    <div className="video-section-full-v2">
                                        <div className="video-section-full bg-no-repeat bg-cover overlay-wraper m-b30" style={{ backgroundImage: 'url(' + img1.default + ')' }}>
                                            <div className="overlay-main bg-black opacity-04" />
                                            <div className="video-section-inner">
                                                <div className="video-section-content">
                                                    <ModalVideo channel='youtube' autoplay={0} isOpen={this.state.isOpen} videoId='EdI1wBGZXCo' onClose={() => this.setState({ isOpen: false })} />
                                                    <div className="video-section-left">
                                                        <NavLink to={"#"} className="play-now" onClick={this.openModal}>
                                                            <i className="icon fa fa-play" />
                                                            <span className="ripple" />
                                                        </NavLink>
                                                    </div>
                                                    <div className="video-section-right">
                                                        <NavLink to={"#"} className="font-weight-600 text-uppercase" onClick={this.openModal}>Video Presentation</NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5 col-sm-12">
                                    {/* TITLE START */}
                                    <div className="video-part-2">
                                        <h3><span className="font-weight-100"> </span> Nuestros valores son: </h3>

                                        <div className="row">
                                            <div className="col-md-6 col-sm-6">
                                                <ul className="list-angle-right anchor-line">
                                                    <li>oportunidad</li>
                                                    <li>profesionalismo</li>
                                                    <li>calidad</li>
                                                    <li>cuidado del medio ambiente</li>
                                                   
                                                </ul>

                                            </div>

                                            <div className="col-md-6 col-sm-6">
                                                <ul className="list-angle-right anchor-line">
                                                    <li>competencia</li>
                                                    <li>entusiasmo</li>
                                                    <li>honestidad</li>
                                                    <li>puntualidad</li>
                                                    <li>innovación</li>
                                                </ul>

                                            </div>


                                        </div>

                                        <p>Los integrantes de la organización reconocen en Tuvansa una familia de la cual son con orgullo parte integral.</p>
                                        <p>
                                            Nuestro compromiso es solucionar los requerimientos de nuestros clientes, su satisfaccion en nuestra meta.

                                        </p>

                                    </div>
                                    {/* TITLE END */}
                                    <div className="author-info author-info-v2 p-t20">
                                        <div className="author-signature">
                                            <img src={require('./../../images/Signature+Black.png').default} alt="Signature" width={150} />
                                        </div>
                                        <div className="author-name">
                                            <h4 className="m-t0">Roy Grinberg</h4>
                                            <p>Director General</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default OurValue2;