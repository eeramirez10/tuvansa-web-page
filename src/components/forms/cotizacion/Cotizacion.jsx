import React from 'react'

const Cotizacion = () => {
    return (
        <div className="contact-home1-left bg-dark p-a30 m-b0">
            <h3 className="text-white m-t0"><span className="font-weight-100">Solicita una cotizacion</span></h3>
            <form className="cons-contact-form2 form-transparent" method="post" action="">
                <div className="input input-animate">
                    <label htmlFor="name">Nombre</label>
                    <input type="text" name="username" id="name" required />
                    <span className="spin" />
                </div>
                <div className="input input-animate">
                    <label htmlFor="empresa">Empresa</label>
                    <input type="text" name="empresa" id="empresa" required />
                    <span className="spin" />
                </div>
                <div className="input input-animate">
                    <label htmlFor="telefono">Telefono</label>
                    <input type="text" name="telefono" id="telefono" required />
                    <span className="spin" />
                </div>
                <div className="input input-animate">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required />
                    <span className="spin" />
                </div>
                <div className="input input-animate">
                    <label htmlFor="message">Mensaje</label>
                    <textarea name="message" required rows="10" cols="80" />
                    <span className="spin" />
                </div>
                <div className="text-center p-t10">
                    <button type="submit" className="site-button btn-effect ">
                        Solicitar Cotizacion
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Cotizacion