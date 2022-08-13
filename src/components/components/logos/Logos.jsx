import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import { NavLink } from 'react-router-dom';




const Logos = ({ imgs, title = "" }) => {

    const options = {
        loop: true,
        autoplay: true,
        items: 5,
        nav: false,
        dots: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {

            0: {
                items: 1,
                loop: true
            },
            600: {
                items: 2,

                loop: true
            },

            1000: {
                items: 3,
                loop: true
            }
        }
    };



    return (

        <div className="container">
            <div className="row">
                <div className="widget">
                    <h4 className="widget-title text-center ">{title}</h4>
                    <OwlCarousel className="owl-carousel  p-t10" {...options}>
                        {imgs.map((item, index) => (
                            <div className="item" key={index}>
                                <NavLink to={"#"}>
                                    <img
                                        src={item.image.default}
                                        style={styles.img}
                                        alt={item.image.default}
                                    />
                                </NavLink>
                            </div>
                        ))}

                    </OwlCarousel>
                </div>
            </div>

        </div>

    )
}

export default Logos;

const styles = {
    img: { width: '35%', display: 'block', margin: ' 0 auto' }
}
