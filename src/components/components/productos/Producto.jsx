import React from 'react'
import { NavLink } from 'react-router-dom'
import placeholder from './placeholder.jpg'


export const Producto = ({ item }) => (

    <div className={` ${item.filter}  col-md-4 col-sm-6 m-b30`}>
        <div className="image-effect-two hover-shadow " style={styles.container}>

            <img 
                src={placeholder} 
                data-src={item.image} 
                className="lazy" 
                width={'900px'} 
                height={'900px'} 
                alt="name" 
            />

            <div className="figcaption">
                <h4 className="mt-tilte" style={styles.title}>{item.title}</h4>
                <p>{item.description.substring(0,200)} ...</p>

                <NavLink 
                    to="#" 
                    style={{ color:'#fff' }} 
                    className="read-more site-button outline yellow "
                >
                    Ver mas
                </NavLink>
                {/* <a className="mfp-link" href={item.image2}>
                    <i className="fa fa-arrows-alt" />
                </a> */}
            </div>
        </div>
    </div>
)


const styles = {
    container: {
        backgroundColor: '#222',
        color: '#fff'
    },
    title: {
        color: '#fff',
        marginTop: 0
    }

}


