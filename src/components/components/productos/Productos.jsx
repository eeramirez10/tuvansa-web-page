import React from 'react';
import { filters, projects } from './productosItems';
import { NavLink } from 'react-router-dom';


export const Productos = () => {



    // React.useEffect(() => {

    //     function loadScript(src) {

    //         return new Promise(function (resolve, reject) {
    //             var script = document.createElement('script');
    //             script.src = src;
    //             script.addEventListener('load', function () {
    //                 resolve();
    //             });
    //             script.addEventListener('error', function (e) {
    //                 reject(e);
    //             });
    //             document.body.appendChild(script);
    //             document.body.removeChild(script);
    //         })
    //     };

    //     loadScript('./assets/js/masonary.js');

    // }, [])



    return (
        <div className="section-full p-t80 p-b30 square_shape2 mobile-page-padding">


            <div className="container">
                {/* TITLE START */}
                <div className="section-head">
                    <div className="mt-separator-outer separator-center">
                        <div className="mt-separator">
                            <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Nuestros</span> Productos</h2>
                        </div>
                    </div>
                </div>
                {/* TITLE END */}


                <div className="section-content">
                    <div className="filter-wrap text-center">
                        <ul className="filter-navigation inline-navigation masonry-filter link-style  text-uppercase">
                            <li className="active"><NavLink to={"#"} data-filter="*" data-hover="All">Todos</NavLink></li>
                            {filters.map((item, index) => (
                                <li key={index}>
                                    <NavLink
                                        to={"#"}
                                        data-filter={item.filter}
                                        data-hover={item.label}
                                    >
                                        {item.label}
                                    </NavLink>
                                </li>
                            ))}

                        </ul>
                    </div>
                </div>



                <div className="section-content" style={{ maxHeigth: '1560px' }}>
                    <div className="portfolio-wrap row mfp-gallery product-stamp clearfix">
                        {projects.map((item, index) => (

                            <div key={index} className={`${item.filter} masonry-item col-md-4 col-sm-6 m-b30`}>
                                <div className="image-effect-one hover-shadow">
                                    <img src={item.image} alt="" />
                                    <div className="figcaption">
                                        <h4>{item.title}</h4>
                                        <p>{item.category}</p>
                                        <NavLink to="#"><i className="link-plus bg-primary" /></NavLink>
                                    </div>
                                </div>
                            </div>

                        ))}

                    </div>
                </div>





            </div>

        </div>
    )
}
