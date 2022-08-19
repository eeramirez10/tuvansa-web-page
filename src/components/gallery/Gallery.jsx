import React from 'react'
import { useGalleryImage } from 'hooks/useGalleryImage';

const Gallery = () => {

    const { setOpen, setPhotoIndex, images } = useGalleryImage()

    const handleClick = (index) => {

        setOpen(true)
        setPhotoIndex(index)

    }

    if (!images.length || !Array.isArray(images)) {
        return (
            <div>
                No images
            </div>
        )
    }

    return (

        <>
            <div className="widget widget_gallery mfp-gallery" style={{ marginTop:51.14 }}>
                {/* <h4 className="widget-title  ">Galeria</h4> */}
                <ul >
                    {images.map((item, index) => (
                        <li key={index} >
                            <div className="mt-post-thum">

                                <img src={item.thumb.default} alt="" style={{ cursor:'pointer'}} onClick={() => handleClick(index)} />

                            </div>
                        </li>
                    ))}
                </ul>
            </div>



        </>



    )
}

export default Gallery