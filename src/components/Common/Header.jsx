import React from 'react';
import Navigation from '../Common/Navigation';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = { logo: require('images/logo-tuvansa.png') };
    }


    render() {

        return (
            <>

                <header className="site-header header-style-1">
                    <div className="top-bar bg-gray">
                        <div className="container">
                            <div className="row">
                                <div className="mt-topbar-left clearfix">
                                    <ul className="list-unstyled e-p-bx pull-right">
                                        <li><i className="fa fa-envelope" /> <a href='mailto:ventasmex@tuvansa.com.mx' style={{ textDecoration: 'none', color: 'black' }}>ventasmex@tuvansa.com.mx</a>  </li>
                                        <li><i className="fa fa-phone" /> <a href='tel:5550390730' style={{ textDecoration: 'none', color: 'black' }}>(55) 5039 0730</a>  </li>
                                        <li><i className="fa fa-clock-o" />Lun-Vier 09:00 - 17:30 </li>
                                    </ul>
                                </div>
                                {/* <div className="mt-topbar-right clearfix">
                                    <div className="appint-btn"><NavLink to={"#"} className="site-button">Make an Appointment</NavLink></div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="sticky-header main-bar-wraper">
                        <div className="main-bar bg-gray">
                            <div className="container">
                                <div className="logo-header">
                                    <div className="logo-header-inner logo-header-one">
                                        <NavLink to={"./"}>
                                            <img src={this.state.logo.default} alt="Shapen" />
                                        </NavLink>
                                    </div>
                                </div>
                                {/* NAV Toggle Button */}
                                <button data-target=".header-nav" data-toggle="collapse" type="button" className="navbar-toggle collapsed">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                </button>

                                <Navigation />
                            </div>
                        </div>
                    </div>
                </header>

            </>
        );
    };
};

export default Header;

