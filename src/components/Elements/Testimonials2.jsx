import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const testimonials = [
    {
        image: require('./../../images/testimonials/pic1.jpg'),
        reviewername: 'Bustamante José carlos Picazo',
        position: 'Cliente',
        review: 'La mejor empresa, aquí puedes encontrar de todo además de válvulas y tubos venden bombas de diferentes aplicaciones, centrífugas, neumáticos, sumergibles, agua helada todo bajo pedido pero las mejores marcas'
    },
    {
        image: require('./../../images/testimonials/pic2.jpg'),
        reviewername: 'Ana Velasco',
        position: 'Cliente',
        review: 'Excelente empresa'
    }
]

var bnr1 = require('./../../images/background/bg-6.png');

class Testimonials2 extends React.Component {
    
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
                <div className="section-full p-t80 bg-dark square_shape2  square_shape1 bg-moving mobile-page-padding" style={{backgroundImage:"url(" + bnr1.default + ")"}}>
                    <div className="container">
                        <div className="section-content">
                            {/* TITLE START */}
                            <div className="section-head">
                                <div className="mt-separator-outer separator-center">
                                    <div className="mt-separator">
                                        <h2 className="text-white text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Opiniones de </span> Clientes</h2>
                                    </div>
                                </div>
                            </div>
                            {/* TITLE END */}
                            {/* TESTIMONIAL START */}
                            <OwlCarousel className="owl-carousel testimonial-home-2 p-b120" {...options}>
                            
                                {testimonials.map((item, index) => (
                                    <div className="item" key={index}>
                                        <div className="col-sm-12 col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8">
                                            <div className="testimonial-1 testimonial-bg m-a30 hover-animation-1 text-center text-white">
                                                <div className="testimonial-detail clearfix">
                                                    <div className="testimonial-pic radius shadow scale-in-center"><img src={item.image.default} width={100} height={100} alt="" /></div>
                                                </div>
                                                <div className="testimonial-text">
                                                    <span className="fa fa-quote-right" />
                                                    <p>{item.review}</p>
                                                </div>
                                                <div className="testimonial-detail clearfix">
                                                    <h4 className="testimonial-name m-b5">{item.reviewername} -</h4>
                                                    <span className="testimonial-position">{item.position}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </OwlCarousel>   
                            
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Testimonials2;