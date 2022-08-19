import React from 'react'
import img1 from 'images/mq3.jpg';
import { useVideo } from 'hooks/useVideo';
import { NavLink } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/css/modal-video.min.css';


const VideoSection = () => {

      const {isOpen, openModal, closeModal } =  useVideo();

    return (
        <>
            <div className="video-section-full-v2">
                <div className="video-section-full bg-no-repeat bg-cover overlay-wraper m-b30" style={{ backgroundImage: 'url(' + img1 + ')' }}>
                    <div className="overlay-main bg-black opacity-04" />
                    <div className="video-section-inner">
                        <div className="video-section-content">
                            <div className="video-section-left">
                                <NavLink to={"#"} className="play-now" onClick={openModal}>
                                    <i className="icon fa fa-play" />
                                    <span className="ripple" />
                                </NavLink>
                            </div>
                            <div className="video-section-right">
                                <NavLink to={"#"} className="font-weight-600 text-uppercase" onClick={openModal}>Video Presentation</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


           
        </>

    )
}

export default VideoSection