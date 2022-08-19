import React, { useEffect, useState } from 'react';
import Navigation from './Navigation';
import { NavLink } from 'react-router-dom';

const Header = () => {

    const [logo, setLogo] = useState(require('images/logo-tuvansa.png'));

    const [isOpen, setIsOpen] = useState(false);

    const handleOpenMenu = () => {

        setIsOpen(!isOpen)

    }

    console.log(isOpen)


    useEffect(() => {

        const handleScroll = () => {
            const offset = window.scrollY;

            const stickyheader = document.querySelector('.sticky-header ');

            if (offset >= 100) {
                stickyheader.classList.add('is-fixed');
                stickyheader.classList.add('color-fill');

            } else {
                stickyheader.classList.remove('is-fixed');
                stickyheader.classList.remove('color-fill');
            }
        }

        window.addEventListener('scroll', handleScroll);

        window.updateTopMostParent = (logopath) => {

            console.log(logopath)
            setLogo(logopath)
        };



    }, [])

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
                        </div>
                    </div>
                </div>
                <div className="sticky-header main-bar-wraper">
                    <div className="main-bar bg-gray">
                        <div className="container">
                            <div className="logo-header">
                                <div className="logo-header-inner logo-header-one">
                                    <NavLink to={"./"}>
                                        <img src={logo.default} alt="Shapen" />
                                    </NavLink>
                                </div>
                            </div>
                            {/* NAV Toggle Button */}
                            <button
                                data-target=".header-nav"
                                data-toggle="collapse"
                                
                                className="navbar-toggle collapsed "
                                onClick={handleOpenMenu}
                            >
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                            {/* MAIN Vav */}
                            <Navigation isOpen={ isOpen } handleOpenMenu={ handleOpenMenu }/>
                        </div>
                    </div>
                </div>
            </header>

        </>
    );

};

export default Header;

