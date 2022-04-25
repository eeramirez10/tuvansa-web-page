import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const images = [
    require('./../../images/acerca/19.jpeg'),
    require('./../../images/acerca/15.jpeg'),
    require('./../../images/acerca/11.jpeg'),
    require('./../../images/acerca/14.jpeg'),
       
]

var bnr1 = require('./../../images/background/bg-6.png');

class About extends React.Component {
    componentDidMount(){
        function loadScript(src) {
           
          return new Promise(function(resolve, reject){
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
        const options = {
            loop:true,
            autoplay:true,
            margin:30,
            nav:false,
            dots: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive:{
                0:{
                    items:1
                },
                991:{
                    items:1
                }
            }
        };
        return (
            <>
                <div className="section-full mobile-page-padding p-t80 p-b30 bg-dark bg-repeat square_shape2 bg-moving" style={{backgroundImage:"url(" + bnr1.default + ")"}}>
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="mt-separator-outer separator-center">
                                <div className="mt-separator">
                                    <h2 className="text-white text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Acerca de </span> Nosotros </h2>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        <div className="section-content">
                            <div className="row">
                                <div className="col-md-9 col-sm-12">
                                    <OwlCarousel className="owl-carousel about-home owl-btn-vertical-center" {...options}>
                                        {images.map((item, index) => (
                                            <div className="item" key={index}>
                                                <div className="mt-img-effect zoom-slow">
                                                <NavLink to=""><img src={item.default} alt=""/></NavLink>
                                                </div>
                                            </div>
                                            
                                        ))}
                                       
                                    </OwlCarousel>
                                </div>
                                <div className="col-md-3 col-sm-12">
                                    <div className="about-home-right bg-white p-a30">
                                        <h3 className="m-t0"><span className="font-weight-100">Quienes</span> somos?</h3>
                                        <p>
                                        <strong>
                                            Desde su fundación en 1956, Tubería y Válvulas del Norte, S.A. de C.V. (TUVANSA) es líder en comercialización de tuberías, 
                                            válvulas, conexiones y barra hueca. 
                                        </strong></p>
                                        <p>Durante más de sesenta años la empresa ha superado retos económicos propios de la industria, 
                                            acrecentando su posición y prestigio en el mercado nacional e internacional.. </p>
                                        <div className="text-right">
                                            <NavLink to="" className="site-button-link" data-hover="Read More">Read More <i className="fa fa-angle-right arrow-animation" /></NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hilite-title text-left p-l50 text-uppercase hilite-dark">
                        <strong>Nosotros</strong>
                    </div>
                </div>
            </>
        );
    }
};

export default About;