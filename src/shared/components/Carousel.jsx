import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export const Carousel = ({images, loop = true, autoplay= true, margin = 30}) => {

    const [options, setOptions] = useState({})


    useEffect( () =>{

        setOptions({
            loop,
            autoplay,
            margin,
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
        })

    },[loop, autoplay, margin])





    return (
        <OwlCarousel className="owl-carousel about-home about-home-v2 owl-dots-bottom-left" {...options}>
            {images.map((item, index) => (
                <div className="item" key={index}>
                    <div className="mt-img-effect zoom-slow">
                        <NavLink to="/about">
                            <img 
                               
                                
                                src={item.img.default} 
                                alt="" 
                            />
                        </NavLink>
                    </div>
                </div>

            ))}

        </OwlCarousel>
    )
}
