import { Especification } from 'components/especification/Especification';
import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { Banner } from 'shared/components/Banner';
import { productos } from './productosItems'
import Cotizacion from 'components/forms/cotizacion/Cotizacion'
import Gallery from 'components/gallery/Index';
import { useGalleryImage } from 'hooks/useGalleryImage';
import ModalImg from 'components/Modal/ModalImg';





export const DetalleProducto = () => {

    const [table, setTable] = useState([]);
    const [producto, setProducto] = useState({});
    const [arrDescription, setArrDescription] = useState([])


    const { idProducto } = useParams();

    const { setImages } = useGalleryImage()

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


    })

    useEffect(() => {

        const producto = productos.find(producto => producto.id == idProducto);

        setProducto(producto);

        const arrDescription = producto.description.split(/\r\n|\r|\n/, -1);

        setArrDescription(arrDescription)

        setImages(producto.gallery)

    }, [idProducto, producto])


    const hadleTable = (especificationTitle) => {

        if (producto?.especifications) {

            console.log(producto)

            const findEspecification = producto.especifications.find(especification => especification.title === especificationTitle);


            setTable(findEspecification.data)

        }

        return []


    }





    return (
        <>
            <Banner bgimage={producto.image} title={producto.title} />



            <div className="section-full p-tb80 inner-page-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-sm-7">
                            <div className="section-content">

                                <div className="m-b50">
                                    {/* TITLE START */}
                                    {/* <div className="section-head">
                                        <div className="mt-separator-outer separator-left">
                                            <div className="mt-separator">
                                                <h2 className="text-black text-uppercase sep-line-one "><span className="font-weight-300 text-primary">{producto.title}</span> </h2>
                                            </div>
                                        </div>
                                    </div> */}
                                    {/* TITLE END */}
                                    {/* TAB DEFAULT */}
                                    <div className="section-content">
                                        <div className="mt-tabs bg-tabs">
                                            <ul className="nav nav-tabs">
                                                <li className="active"><a data-toggle="tab" href="#web-design-1"> Descripcion </a></li>
                                                <li><a data-toggle="tab" href="#graphic-design-1" >  Especificaciones </a></li>

                                            </ul>
                                            <div className="tab-content">
                                                <div id="web-design-1" className="tab-pane active">

                                                    <h3>Descripcion</h3>

                                                    {
                                                        arrDescription.map((description, i) => (<p key={i} style={{ fontSize: 15, fontWeight: 400 }} className="m-b10">{description}</p>))
                                                    }


                                                </div>
                                                <div
                                                    id="graphic-design-1"
                                                    className="tab-pane"

                                                >

                                                    <h3>Dimensiones y Pesos</h3>

                                                    <div className="section-content ">
                                                        <div className="mt-accordion acc-bg-gray" id="accordion5">
                                                            <div className="panel mt-panel">
                                                                <div className="acod-head acc-actives">
                                                                    <h6 className="acod-title">
                                                                        <a
                                                                            data-toggle="collapse"
                                                                            href="#collapseOne5"
                                                                            data-parent="#accordion5"
                                                                            className="collapsed"
                                                                            onClick={() => hadleTable('CODO 90')}
                                                                        >
                                                                            CODO DE 90
                                                                            <span className="indicator"><i className="fa" /></span>
                                                                        </a>
                                                                    </h6>
                                                                </div>
                                                                <div style={{ overflowX: 'auto' }} id="collapseOne5" className="acod-body collapse">

                                                                    <div className="acod-content p-tb15">
                                                                        <Especification table={table} />
                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <div className="panel mt-panel">
                                                                <div className="acod-head">
                                                                    <h6 className="acod-title">
                                                                        <a
                                                                            data-toggle="collapse"
                                                                            href="#collapseTwo5"
                                                                            className="collapsed"
                                                                            data-parent="#accordion5"
                                                                            onClick={() => hadleTable('CODO 45')}
                                                                        >
                                                                            CODO 45
                                                                            <span className="indicator"><i className="fa" /></span>
                                                                        </a>
                                                                    </h6>
                                                                </div>
                                                                <div style={{ overflowX: 'auto' }} id="collapseTwo5" className="acod-body collapse">
                                                                    <div className="acod-content p-tb15">
                                                                        <Especification table={table} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="panel mt-panel">
                                                                <div className="acod-head">
                                                                    <h6 className="acod-title">
                                                                        <a
                                                                            data-toggle="collapse"
                                                                            href="#collapseThree5"
                                                                            className="collapsed"
                                                                            data-parent="#accordion5"
                                                                            onClick={() => hadleTable('CODO 180')}
                                                                        >
                                                                            CODO 180
                                                                            <span className="indicator"><i className="fa" /></span>
                                                                        </a>
                                                                    </h6>
                                                                </div>
                                                                <div style={{ overflowX: 'auto' }} id="collapseThree5" className="acod-body collapse">
                                                                    <div className="acod-content p-tb15">
                                                                        <Especification table={table} />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="panel mt-panel">
                                                                <div className="acod-head">
                                                                    <h6 className="acod-title">
                                                                        <a
                                                                            data-toggle="collapse"
                                                                            href="#collapseFour5"
                                                                            className="collapsed"
                                                                            data-parent="#accordion5"
                                                                            onClick={() => hadleTable('TEE RECTA')}
                                                                        >
                                                                            TEE RECTA
                                                                            <span className="indicator"><i className="fa" /></span>
                                                                        </a>
                                                                    </h6>
                                                                </div>
                                                                <div style={{ overflowX: 'auto' }} id="collapseFour5" className="acod-body collapse">
                                                                    <div className="acod-content p-tb15">
                                                                        <Especification table={table} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-5 col-sm-5">
                            <div className="section-content">

                                <Gallery />

                                <Cotizacion />

                                <ModalImg  />

                            </div>

                        </div>
                    </div>
                </div>
            </div>





        </>
    )
}
