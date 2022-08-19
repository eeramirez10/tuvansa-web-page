import React, { useState } from 'react'
import 'react-image-lightbox/style.css';
import Lightbox from 'react-image-lightbox';
import { useGalleryImage } from 'hooks/useGalleryImage';

const ModalImg = () => {

    const {isOpen, photoIndex, setPhotoIndex, setOpen, images } = useGalleryImage();

    const handleNext = () => {
        setPhotoIndex(current => (current + 1) % images.length);
    }

    const handlePrev = () => {
        setPhotoIndex(current => (current + images.length - 1) % images.length);
    }

    return (

        <>
            {
                isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex].image.default}
                        nextSrc={images[(photoIndex + 1) % images.length].image.default}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length].image.default}
                        onCloseRequest={() => setOpen(false)}
                        onMovePrevRequest={handlePrev}
                        onMoveNextRequest={handleNext}
                    />
                )
            }
        </>

    )
}

export default ModalImg