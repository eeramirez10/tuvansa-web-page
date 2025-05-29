
import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from 'react-router-dom';



export const Banner = ({ bgimage, title, link, linkTitle }) => {

    useEffect(() => {

        AOS.init({

            delay: 0,
            duration: 1000
        });
        AOS.refresh()

    }, [])


    return (
        <div className="mt-bnr-inr overlay-wraper bg-parallax " data-aos={'zoom-out'} data-aos-offset="300" data-stellar-background-ratio="0.5" style={{ backgroundImage: `url('${bgimage}')` }}>
            <div className="overlay-main bg-black opacity-01" />
            <div className="container">
                <div className="mt-bnr-inr-entry">
                    <div className="banner-title-outer">
                        <div className="banner-title-name">
                            <h2 className="m-b0">{title}</h2>
                        </div>

                        {
                            link &&

                            <div>
                                <ul className="mt-breadcrumb breadcrumb-style-2">
                                    <li>
                                        <a target='_blank' className='site-button text-uppercase yellow m-r5' href={`${link}`} rel="noreferrer"> {linkTitle} </a>
                                    </li>

                                </ul>
                            </div>

                        }



                    </div>
                    {/* BREADCRUMB ROW */}

                    {/* {
                        link &&

                        <div>
                            <ul className="mt-breadcrumb breadcrumb-style-2">
                                <li>
                                    <NavLink className='site-button text-uppercase yellow m-r5' to={`${link}`}> {linkTitle} </NavLink>
                                </li>

                            </ul>
                        </div>

                    } */}

                    {/* BREADCRUMB ROW END */}
                </div>
            </div>
        </div>
    )
}
