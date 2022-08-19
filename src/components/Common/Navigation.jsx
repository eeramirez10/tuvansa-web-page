import React from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {

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
                <div className={(this.props.bgcolor !== '') ? `header-nav navbar-collapse collapse ${this.props.bgcolor}` : 'header-nav navbar-collapse collapse'}>
                    <ul className="nav navbar-nav">
                        <li  >
                            <NavLink exact to={"/"} activeStyle={{  color:'#F5BF23' }}  >Home</NavLink>
                        </li>
                        <li   >
                            <NavLink to={"/nosotros"} activeStyle={{  color:'#F5BF23' }}  > Nosotros</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/servicios'} activeStyle={{  color:'#F5BF23' }} >Servicios</NavLink>
                        </li>
                        <li>
                            <NavLink
                      
                                to={"/productos"}
                                activeStyle={{  color:'#F5BF23' }}
                            >
                                Productos
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={"/sistemas-calidad"}
                                activeStyle={{  color:'#F5BF23' }}
                            >
                                Sistemas de Calidad
                            </NavLink>
                        </li>
                        <li className="submenu-direction">
                            <NavLink to={"/contacto"} activeStyle={{  color:'#F5BF23' }} >Contacto</NavLink>
                        </li>
                    </ul>
                </div>
            </>
        );
    };
};

export default Navigation;