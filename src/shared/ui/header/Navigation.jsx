import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = ({ isOpen, handleOpenMenu }) => {


  // useEffect(() => {
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

  // })

  const handleClick = (e) => {
    e.preventDefault()
    window.open('https://tuvansa-facturas.web.app/invoices', '_blank', 'noopener,noreferrer')
  }



  return (
    <>
      <div className={'header-nav navbar-collapse collapse'}>
        <ul className="nav navbar-nav">
          <li  >
            <NavLink
              data-target=".header-nav"
              data-toggle="collapse"
              exact
              to={"/"}
              activeStyle={{ color: '#F5BF23' }}
            >
              Home
            </NavLink>
          </li>
          <li   >
            <NavLink
              data-target=".header-nav"
              data-toggle="collapse"
              to={"/nosotros"}
              activeStyle={{ color: '#F5BF23' }}
            >
              Nosotros
            </NavLink>
          </li>
          <li>
            <NavLink
              data-target=".header-nav"
              data-toggle="collapse"
              to={'/servicios'} activeStyle={{ color: '#F5BF23' }} >Servicios</NavLink>
          </li>
          <li>
            <NavLink
              data-target=".header-nav"
              data-toggle="collapse"
              to={"/productos"}
              activeStyle={{ color: '#F5BF23' }}
            >
              Productos
            </NavLink>
          </li>
          <li>
            <NavLink
              data-target=".header-nav"
              data-toggle="collapse"
              to={"/sistemas-calidad"}
              activeStyle={{ color: '#F5BF23' }}
            >
              Sistemas de Calidad
            </NavLink>
          </li>

          <li className="submenu-direction">
            <NavLink
              data-target=".header-nav"
              data-toggle="collapse"
              to={"/contacto"} activeStyle={{ color: '#F5BF23' }} >Contacto
            </NavLink>
          </li>

          <li className="submenu-direction">
            <NavLink
              data-target=".fact"
              data-toggle="collapse"
              to={"/fac"}
              activeStyle={{ color: '#F5BF23' }}
              onClick={handleClick}
            >
              Portal Facturas
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );

};

export default Navigation;