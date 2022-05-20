import React from 'react';
import { NavLink } from 'react-router-dom';

import LazyLoad from 'react-lazyload';

const filters = [
    { label: "Tuberias", filter: ".tuberias" },
    { label: "Valvulas", filter: ".valvulas" },
    { label: "Sistemas", filter: ".sistemas" },
    { label: "Conexiones", filter: ".conexiones" },
    { label: "Tapas y rejillas", filter: ".tapas" },

];

const projects = [
    {
        image: require('./../../images/productos/P-1.jpg'),
        title: '2-storey House',
        category: 'Construction, interior',
        filter: 'valvulas'
    },
    {
        image: require('./../../images/productos/P-2.jpg'),
        title: 'City Buildings',
        category: 'Buildings, Engineering',
        filter: 'tuberias'
    },
    {
        image: require('./../../images/productos/P-3.jpg'),
        title: 'Living room',
        category: 'Aqaba, Jordan',
        filter: 'tuberias'
    },
    {
        image: require('./../../images/productos/P-4.jpg'),
        title: 'Bridge Architecture',
        category: 'Design and Construction',
        filter: 'sistemas'
    },
    {
        image: require('./../../images/productos/P-5.jpg'),
        title: 'Feugiat nulla',
        category: 'Engineering, interior',
        filter: 'tuberias'
    },
    {
        image: require('./../../images/productos/P-6.jpg'),
        title: 'Skeptic cambridge',
        category: 'Construction',
        filter: 'tuberias'
    },
    {
        image: require('./../../images/productos/P-7.jpg'),
        title: 'Skeptic cambridge',
        category: 'Construction',
        filter: 'valvulas'
    },
    {
        image: require('./../../images/productos/P-8.jpg'),
        title: 'Skeptic cambridge',
        category: 'Construction',
        filter: 'conexiones'
    },
    {
        image: require('./../../images/productos/P-9.jpg'),
        title: 'Skeptic cambridge',
        category: 'Construction',
        filter: 'sistemas'
    },
    {
        image: require('./../../images/productos/P-10.jpg'),
        title: 'Skeptic cambridge',
        category: 'Construction',
        filter: 'sistemas'
    },
    {
        image: require('./../../images/productos/P-12.jpg'),
        title: 'Skeptic cambridge',
        category: 'Construction',
        filter: 'tapas'
    }
]

class OurProject2 extends React.Component {

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
                                    <li className="active"><NavLink to={"#"} data-filter="*" data-hover="All">All</NavLink></li>
                                    {filters.map((item, index) => (
                                        <li key={index}><NavLink to={"#"} data-filter={item.filter} data-hover={item.label}>{item.label}</NavLink></li>
                                    ))}

                                </ul>
                            </div>
                        </div>

                        <LazyLoad >
                            <div className="section-content">
                                <div className="portfolio-wrap row mfp-gallery product-stamp clearfix">
                                    {projects.map((item, index) => (

                                        <div key={index} className={`${item.filter} masonry-item col-md-4 col-sm-6 m-b30`}>
                                            <div className="image-effect-one hover-shadow">
                                                <img src={item.image.default} alt="" />
                                                <div className="figcaption">
                                                    <h4>{item.title}</h4>
                                                    <p>{item.category}</p>
                                                    <NavLink to="/project-detail"><i className="link-plus bg-primary" /></NavLink>
                                                </div>
                                            </div>
                                        </div>

                                    ))}

                                </div>
                            </div>

                        </LazyLoad>



                    </div>
                </div>
            </>
        );
    }
};

export default OurProject2;