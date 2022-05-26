import React from 'react';
import Header2 from './../Common/Header2';
import Footer2 from './../Common/Footer';
import Slider2 from '../Elements/Slider2';
import Services from '../Elements/Services';
import About2 from '../Elements/About2';
import OurValue2 from '../Elements/OurValue2';
import OurMission2 from '../Elements/OurMission2';
import OurServices2 from '../Elements/OurServices2';
import Callus2 from '../Elements/Callus2';
import OurProject2 from '../Elements/OurProject2';
import Team from '../Elements/Team';
import Pricing from '../Elements/Pricing';
import ClientsLogo from '../Elements/ClientsLogo';
import Testimonials2 from '../Elements/Testimonials2';
import Header from '../Common/Header';
import OurServices3 from '../Elements/OurServices3';

import LazyLoad from 'react-lazyload';

import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class Home2 extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                    <Slider2 />
                    {/* <Services /> */}
                    <Element name='nosotros' className='element'  >
                        <LazyLoad>
                            <About2 />
                        </LazyLoad>

                    </Element>



                    <OurValue2 />



                    {/* <OurMission2 /> */}


                    <LazyLoad >

                        <Element name='servicios' className='element'  >
                            <OurServices3 />
                        </Element>

                    </LazyLoad>


                    {/* <Callus2 /> */}

                    <Element name='productos' className='element'  >




                        <OurProject2 />



                    </Element>


                    <Team />



                    {/* <Pricing /> */}

                    <LazyLoad>

                        <ClientsLogo />

                    </LazyLoad>

                    <LazyLoad>

                        <Testimonials2 />
                    </LazyLoad>


                </div >



                <Footer2 />


            </>
        );
    };
};

export default Home2;