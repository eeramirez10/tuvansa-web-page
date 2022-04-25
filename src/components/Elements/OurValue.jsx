import React from 'react';
import { NavLink } from 'react-router-dom';
import CountUp from 'react-countup';
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/css/modal-video.min.css';

// var img1 = require('./../../images/video-bg.jpg');

const img1 = require('./../../images/logo-tuvansa.png');

class OurValue extends React.Component {
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

    componentDidMount() {
        function loadScript(src) {

            return new Promise(function (resolve, reject) {
                var script = document.createElement('script');
                script.src = src;
                script.addEventListener('load', function () {
                    resolve();
                });
                script.addEventListener('error', function (e) {
                    reject(e);
                });
                document.body.appendChild(script);
                document.body.removeChild(script);
            })
        };

        loadScript('./assets/js/masonary.js');

    };

    render() {
        return (
            <>
                <div className="section-full mobile-page-padding p-t80 p-b30 bg-white">
                    <div className="container">
                        <div className="section-content">
                            <div className="row">
                                <div className="col-md-4 col-sm-12">
                                    {/* TITLE START */}
                                    <div className="section-head">
                                        <div className="mt-separator-outer separator-left">
                                            <div className="mt-separator">
                                                <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Nuestro</span> Valor</h2>
                                            </div>
                                            <p>Frase de nuestro valor</p>
                                        </div>
                                    </div>
                                    {/* TITLE END */}
                                    <div className="author-info p-t20">
                                        <div className="author-signature">
                                            <img src={require('./../../images/Signature+Black.png').default} alt="Signature" width={150} />
                                        </div>
                                        <div className="author-name">
                                            <h4 className="m-t0">Roy Grinberg</h4>
                                            <p>Director General</p>
                                        </div>
                                    </div>
                                    <div className="video-section-full bg-no-repeat overlay-wraper " >
                                        <div className="overlay-main bg-black opacity-07" />
                                        <div className="video-section-inner">
                                            <div className="video-section-content">
                                                
                                                <div className="video-section-left">
                                                <NavLink to={"#"} className="play-now" onClick={this.openModal}>
                                                        <i className="icon fa fa-play" />
                                                        <span className="ripple" />
                                                    </NavLink>
                                                </div>
                                                <div className="video-section-right">
                                                <NavLink to={"#"} className="font-weight-600 text-uppercase" onClick={this.openModal}>Presentacion</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="mt-count m-b30 text-white mt-icon-box-wraper center  bg-dark p-a20">
                                        <div className="counter font-30 font-weight-800 m-b15 text-primary"><CountUp end={450} duration={5} /></div>
                                        <h4 className="m-tb0">Expertos</h4>
                                    </div>
                                    <div className="mt-count m-b30 text-white mt-icon-box-wraper center  bg-dark p-a20">
                                        <div className="counter font-30 font-weight-800 m-b15  text-primary"><CountUp end={670} duration={5} /></div>
                                        <h4 className="m-tb0">Clientes Satisfechos</h4>
                                    </div>
                                    <div className="mt-count m-b30 text-white mt-icon-box-wraper center  bg-dark p-a20">
                                        <div className="counter font-30 font-weight-800 m-b15 text-primary"><CountUp end={1500} duration={5} /></div>
                                        <h4 className="m-tb0">Projectos completos</h4>
                                    </div>
                                </div>
                                <div className="col-md-5 col-sm-6">
                                    <div className="p-b0">
                                        <div className="mt-box">
                                            <h3 className="m-t0"><span className="font-weight-100"> Contamos con </span><span className="text-primary"> 65 años</span> de experiencia en el ramo</h3>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ModalVideo channel='vimeo' isOpen={this.state.isOpen} videoId='34741214' onClose={() => this.setState({ isOpen: false })} />
            </>
        );
    }
};

export default OurValue;