
import React from 'react'

export const Banner = ({bgImage, title}) => {
    return (
        <div className="mt-bnr-inr overlay-wraper bg-parallax " data-stellar-background-ratio="0.5" style={{ backgroundImage:`url('${bgImage.default}')` }}>
            <div className="overlay-main bg-black opacity-01" />
            <div className="container">
                <div className="mt-bnr-inr-entry">
                    <div className="banner-title-outer">
                        <div className="banner-title-name">
                            <h2 className="m-b0">{title}</h2>
                        </div>
                    </div>
                    {/* BREADCRUMB ROW */}
                    {/* <div>
                <ul className="mt-breadcrumb breadcrumb-style-2">
                    <li><NavLink to={"./"}>Home</NavLink></li>
                    <li>{this.props.pagename}</li>
                </ul>
            </div> */}
                    {/* BREADCRUMB ROW END */}
                </div>
            </div>
        </div>
    )
}
