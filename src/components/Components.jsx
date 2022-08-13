import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Error from './Pages/Error';

import { NosotrosScreen } from './Pages/nosotros/NosotrosScreen';
import Header from './Common/Header';
import { Home } from './Pages/home/Home';
import { Footer } from '../shared/ui/footer/Footer';

import { ServiciosScreen } from './Pages/servicios/ServiciosScreen';
import { ProductosScreen } from './Pages/productos/ProductosScreen';
import { SistemasCalidad } from './Pages/sistemas-calidad/SistemasCalidad';
import { ContactoScreen } from './Pages/contacto/ContactoScreen';

class Components extends React.Component {
    render() {
        return (
            <BrowserRouter basename="/">


                <div className="page-wraper">

                        <Header />
                        <Switch>
                            <Route path='/' exact component={ Home } />

                            <Route path='/nosotros' component={ NosotrosScreen }  />

                            <Route path='/servicios' component={ ServiciosScreen }  />

                            <Route path='/productos' component={ ProductosScreen }  />    

                            <Route path='/sistemas-calidad' component={ SistemasCalidad }  />    
                            
                            <Route path='/contacto' component={ ContactoScreen }  />    

 
                            <Route component={Error} />
                        </Switch>
                        <Footer />
                </div>
            </BrowserRouter>
        );
    };
};

export default Components;