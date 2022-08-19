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

class Components extends React.Component {
    render() {
        return (
            <BrowserRouter basename="/">

                <ScrolToTop />


                <div className="page-wraper">

                    <Header />
                    <Switch>
                        <GalleryImageContextProvider >
                            
                            <Route path='/' exact component={Home} />

                            <Route path='/nosotros' component={NosotrosScreen} />

                            <Route path='/servicios' component={ServiciosScreen} />

                            <Route path='/productos' component={ProductosScreen} />


                            <Route path='/producto/:idProducto' component={DetalleProducto} />




                            <Route path='/sistemas-calidad' component={SistemasCalidad} />

                            <Route path='/contacto' component={ContactoScreen} />

                        </GalleryImageContextProvider>


                        <Route component={Error} />
                    </Switch>
                    <Footer />
                </div>
            </BrowserRouter>
        );
    };
};

export default Components;