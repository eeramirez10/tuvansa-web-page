import React from 'react'

export const Especification = ({ table }) => {



    if(!table.length || !Array.isArray(table)){

        return <div style={{ padding:5}}>
            No hay Especificacion
        </div>
    }


    return (

      

        <table className="table table-responsive table-bordered table-hover" >
            <thead>
                <tr>
                    <th scope="col">DIÁMETRO NOMINAL</th>
                    <th scope="col">DIÁMETRO EXTERIOR</th>
                    <th scope="col">ESTANDAR (STD) DIÁMETRO INTERIOR</th>
                    <th scope="col">ESPESOR DE PARED </th>
                    <th scope="col">PESO POR PIEZA KGS.</th>
                    <th scope="col">REFORZADO (XS) DIÁMETRO INTERIOR </th>
                    <th scope="col">ESPESOR DE PARED </th>
                    <th scope="col">PESO POR PIEZA KGS </th>
                </tr>
            </thead>
            <tbody>
                {
                    table.map((data, i) => (
                        <tr key={i}>
                            <td>{data.diametro} </td>
                            <td>{data.diametroExterior} </td>
                            <td>{data.std} </td>
                            <td>{data.espesorStd} </td>
                            <td>{data.pesoStd} </td>
                            <td>{data.xs} </td>
                            <td>{data.espesorXs} </td>
                            <td>{data.pesoXs} </td>
                        </tr>

                    ))
                }
            </tbody>
        </table>
    )
}
