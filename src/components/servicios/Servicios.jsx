import React from 'react';

import img1 from 'images/background/bg-5.png';

import img2 from 'images/background/line.png';

const services = [
  {
    count: 1,
    title: 'Roscado de tubos dd',
    flaticon: 'flaticon-city',
    description: '',
  },
  {
    count: 2,
    title: 'Cortes de tubos',
    flaticon: 'flaticon-paint',
    description: '',
  },
  {
    count: 3,
    title: 'Biseles de tubos',
    flaticon: 'flaticon-crane',
    description: '',
    // description: 'Preparado de uniones antes de la soldadura',
  },
  {
    count: 4,
    title: 'Ranurados de tuberia',
    flaticon: 'flaticon-decorating',
    description: '',
  },
  {
    count: 5,
    title: 'Maquilados en general',
    flaticon: 'flaticon-chart',
    description: '',
    // description: 'Consistentes en disminuir el espesor o calibre de conexiones y valvulas',
  },
  ,
  {
    count: 7,
    title: 'Ranurados conexiones',
    flaticon: 'flaticon-builder',
    description: '',
  },

  {
    count: 6,
    title: 'Manejo y transportacion de materiales',
    flaticon: 'flaticon-sketch',
    description: '',
  }
]





export const Servicios = () => {

  React.useEffect(() => {

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


  }, [])

  return (
    <div className="section-full p-t80 p-b50 bg-white mobile-page-padding" style={{ backgroundImage: 'url(' + img1+ ')' }}>
      <div className="container">
        {/* TITLE START */}
        <div className="section-head">
          <div className="mt-separator-outer separator-center">
            <div className="mt-separator">
              <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Nuestros</span> Servicios</h2>
            </div>
          </div>
          {/* <h3>A traves de las sucursales de TUVANSA Monterrey y Mexicali se prestan los siguientes servicios.</h3> */}
        </div>
        {/* TITLE END */}
        {/* IMAGE CAROUSEL START */}
        <div className="section-content">
          <div className="row">
            {services.map((item, index) => (
              <div key={index} className="col-md-4 col-sm-6">
                <div className="mt-icon-box-wraper p-a30 center m-b30 box-shadow bg-white">
                  <div className="mt-icon-box-sm inline-icon text-primary  m-b20 radius bg-primary  scale-in-center bg-moving" style={{ backgroundImage: 'url(' + img2 + ')' }}>
                    <span className="icon-cell text-secondry"><i className={item.flaticon} /></span>
                  </div>
                  <div className="icon-content">
                    <h4 className="mt-tilte text-uppercase font-weight-600 m-b20">{item.title}</h4>
                    <p>{item.description}</p>
                    {/* <NavLink to={"/services"} className="site-button-link" data-hover="Read More">Read More <i className="fa fa-angle-right arrow-animation" /></NavLink> */}
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  )
}
