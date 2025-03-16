import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Error from 'components/Error';

import { NosotrosScreen } from 'Pages/nosotros/NosotrosScreen';
import Header from 'shared/ui/header/Header';
import { Home } from 'Pages/home/Home';
import { Footer } from 'shared/ui/footer/Footer';

import { ServiciosScreen } from 'Pages/servicios/ServiciosScreen';
import { ProductosScreen } from 'Pages/productos/ProductosScreen';
import { SistemasCalidad } from 'Pages/sistemas-calidad/SistemasCalidad';
import { ContactoScreen } from 'Pages/contacto/ContactoScreen';
import { DetalleProducto } from './productos/DetalleProducto';
import { ScrolToTop } from './ScrolToTop';
import { GalleryImageContextProvider } from 'context/GalleryImageContext';
import { VideoContextProvider } from 'context/VideoContext';
import { WhatsAppButton } from './whatsapp/WhatsAppButton';

class Components extends React.Component {
    render() {
        return (
            <BrowserRouter basename="/">

                <ScrolToTop />


                <div className="page-wraper">

                    <Header />
                    <Switch>
                        <GalleryImageContextProvider >
                            <VideoContextProvider>

                                <Route path='/' exact component={Home} />

                                <Route path='/nosotros' component={NosotrosScreen} />

                                <Route path='/servicios' component={ServiciosScreen} />

                                <Route path='/productos' component={ProductosScreen} />


                                <Route path='/producto/:idProducto' component={DetalleProducto} />

                                <Route path='/sistemas-calidad' component={SistemasCalidad} />

                                <Route path='/contacto' component={ContactoScreen} />

                            </VideoContextProvider>
                        </GalleryImageContextProvider>


                        <Route component={Error} />
                    </Switch>
                    <WhatsAppButton />
                    <Footer />
                </div>
            </BrowserRouter>
        );
    };
};

export default Components;