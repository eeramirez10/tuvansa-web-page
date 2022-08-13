import React from 'react';
import mainBg from '../../../images/contacto/contacto.jpg'
import Banner from '../../Elements/Banner';
import GoogleMaps from "simple-react-google-maps";

import OwlCarousel from 'react-owl-carousel';

const sucursales = [
    { phone: '(55) 5039.0730', email: 'ventasmex@tuvansa.com.mx', address: 'San Buenaventura 12, 54135 Tlalnepantla, Mex.' },
    { phone: '(81) 8125 4242', email: 'ventasmty@tuvansa.com.mx', address: 'Guerrero Norte 4100, 64500 Monterrey, NL.' },
    { phone: '(686) 557 2316', email: 'ventasmli@tuvansa.com.mx', address: 'Blvd. Adolfo López Mateos Km. 5.5 C.P. 21330, Mexicali, B.C.' },
    { phone: '(229) 989 3900', email: 'ventasver@tuvansa.com.mx', address: 'Av. Framboyanes 13 Cd. Industrial Bruno Pagliai 91697 Veracruz, Ver., ' },
    { phone: '(442) 6425 795', email: 'ventasqro@tuvansa.com.mx', address: 'Brisa 227 Josefa Ortiz Dominguez 76115 Santiago de Queretaro, Qro.' },
    { phone: '(998) 372 7571', email: 'ventascun@tuvansa.com.mx', address: 'Monte Campestre, SM.301 Santa Ana Cancún, Quintana Roo. 77560' },

];


export const ContactoScreen = () => {

    const options = {
        loop: true,
        autoplay: true,
        items: 2,
        nav: false,
        dots: true,
        navText: ['<i className="fa fa-angle-left"></i>', '<i className="fa fa-angle-right"></i>'],
        autoplayHoverPause:true,
        animateOut: 'fadeOut',
        responsive:{
            0:{
                items:1,
                loop:true
            },
            600:{
                items:1,
              
                loop:true
            },
            1000:{
                items:2,
                loop:true
            }
        }
    };
    return (
        <>
            <Banner
                title="Estamos certificados con la norma ISO 9001-2015 y además contamos con el reconocimiento como proveedor confiable de Petróleos Mexicanos (PEMEX).
                "
                bgimage={mainBg}
            />

       
            <div className="section-full p-t80 inner-page-padding">
          
                <div className="container">
                   
                    <div className="section-content">
                        

                        <div className="section-head">
                            <div className="mt-separator-outer separator-left">
                                <div className="mt-separator">
                                    <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary"></span> Contacto</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">

                            <div className="col-md-12 col-sm-12 m-b30">

                                <div className="gmap-outline">
                                    <GoogleMaps
                                        apiKey={"AIzaSyAfY1DRbspf6E3jYUso-PeI_tdfRXA59i0"}
                                        style={{ height: "500px", width: "100%" }}
                                        zoom={5}
                                        center={{ lat: 25.648, lng: -100.373 }}
                                        markers={[
                                            { lat: 19.536, lng: -99.196 },
                                            { lat: 32.652, lng: -115.472 },
                                            { lat: 19.173, lng: -96.131 },
                                            { lat: 25.716, lng: -100.308 },
                                            { lat: 20.589456, lng: -100.388314 },
                                            { lat: 21.048, lng: -86.866 }
                                        ]} //optional
                                    />
                                </div>


                            </div>

                            <div className="col-md-12 col-sm-12 ">

                                <div className="widget">
                                    <h4 className="widget-title text-center "></h4>
                                    <OwlCarousel  className="owl-carousel  p-t10" {...options}>
                                        {sucursales.map((sucursal,i) => (
                                            <CardInfo  key={i} {...sucursal} />

                                        ))}

                                    </OwlCarousel>
                                </div>

                            </div>


                        </div>
                    </div>

                </div>
            </div>
      

        </>
    )
}


const CardInfo = ({ phone, email, address }) => {

    return (

        <div className="p-a10" >
            <div className='row  ' style={{ display: 'block', margin: '0 auto ' }} >
                <div className='mt-icon-box-wraper bx-style-1 p-a20 left bg-white '>
                    <div className='col-sm-6 col-lg-6 m-b20 p-a0'>

                        <div className="mt-icon-box-xs bg-secondry scale-in-center ">
                            <span className="icon-cell text-primary">
                                <i  className="fa fa-phone"></i>
                            </span>
                        </div>

                        <div className="icon-content ">
                            <h5 className="mt-tilte m-a0">Telefono</h5>
                            <p> <a href={`tel:${phone}`}> {phone} </a> </p>
                        </div>

                    </div>

                    <div className='col-sm-6 col-lg-6  p-a0 m-b20'>

                        <div className="mt-icon-box-xs bg-secondry scale-in-center">
                            <span className="icon-cell text-primary">
                                <i className="fa fa-envelope"></i>
                            </span>
                        </div>

                        <div className="icon-content">
                            <h5 className="mt-tilte m-a0">Email</h5>
                            <p> <a href={`mailto:${email}`}>{email}</a></p>
                        </div>


                    </div>

                    <div className='col-sm-12  col-lg-12 p-a0'>

                        <div className="mt-icon-box-xs bg-secondry scale-in-center">
                            <span className="icon-cell text-primary">
                                <i className="fa fa-map-marker"></i>
                            </span>
                        </div>

                        <div className="icon-content">
                            <h5 className="mt-tilte m-a0">Direccion</h5>
                            <p>{address}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}
