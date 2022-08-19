import React from 'react';
// import firma from 'images/Signature+Black.png'
import VideoSection from 'components/video/VideoSection';
import { useVideo } from 'hooks/useVideo';
import ModalVideo from 'react-modal-video';





const Valores = () => {

    const  {isOpen, closeModal} = useVideo();

    return (
        <>
 
            <div className="section-full p-t80 p-b50 bg-white mobile-page-padding">
                <div className="container">
                    <div className="section-content">
                        <div className="row">
                            <div className="col-md-7 col-sm-12" data-aos="fade-right" data-aos-offset="300">

                                <VideoSection/>

                            </div>
                            <div className="col-md-5 col-sm-12" data-aos="fade-left" data-aos-offset="300">

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

                                <div className="author-info author-info-v2 p-t20">
                                    {/* <div className="author-signature">
                                        <img src={firma} alt="Signature" width={150} />
                                    </div> */}
                                    <div className="author-name">
                                        <h4 className="m-t0">Roy Grinberg</h4>
                                        <p>Director General</p>
                                    </div>
                                </div>
                            </div>
                        </div >
                    </div >
                </div >
            </div >

            <ModalVideo  channel='youtube' isOpen={isOpen} videoId='EdI1wBGZXCo' onClose={closeModal} />

        </>

    )
}

export default Valores;
