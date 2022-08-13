import React from 'react'
import { NavLink } from 'react-router-dom';

import logo from './../../../images/logo-tuvansa.png';



export const Footer = () => {
    return (
        <footer className="site-footer footer-large  footer-dark	footer-wide">
 
            {/* FOOTER BLOCKES START */}
            <div className="footer-top overlay-wraper">
                <div className="overlay-main" />
                <div className="container">
                    <div className="row">
                        {/* ABOUT COMPANY */}
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="widget widget_about">
                                {/*<h4 class="widget-title">About Company</h4>*/}
                                <div className="logo-footer clearfix m-b10">
                                    <NavLink to={"./"}><img src={logo} alt="" /></NavLink>
                                </div>
                                {/* <p className="max-w400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dolorum repellat sit quo! Soluta impedit facilis accusantium digniss.</p> */}
                                <ul className="social-icons  mt-social-links">
                                    <li><NavLink to={"#"} className="fa fa-google" /></li>
                                    <li><NavLink to={"#"} className="fa fa-rss" /></li>
                                    <li><NavLink to={"#"} className="fa fa-facebook" /></li>
                                    <li><NavLink to={"#"} className="fa fa-twitter" /></li>
                                    <li><NavLink to={"#"} className="fa fa-linkedin" /></li>
                                </ul>
                            </div>
                        </div>
                        {/* RESENT POST */}
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="widget widget_address_outer">
                                <h4 className="widget-title">Contactanos</h4>
                                <ul className="widget_address">
                                    <li>San Buenaventura 12 Tlalnepantla Mex</li>
                                    <li>tuvansaventas@tuvansa.com.mx</li>
                                    <li>(55) 5039 0730</li>
                                    {/* <li>(+298) 146-6543-480</li> */}
                                </ul>
                            </div>
                        </div>
                        {/* USEFUL LINKS */}
                        {/* <div className="col-lg-3 col-md-6 col-sm-6 footer-col-3">
                    <div className="widget widget_services inline-links">
                        <h4 className="widget-title">Useful links</h4>
                        <ul>
                            <li><NavLink to={"/about"}>About</NavLink></li>
                            <li><NavLink to={"/project-grid"}>Projects</NavLink></li>
                            <li><NavLink to={"/blog-grid"}>Blog</NavLink></li>
                            <li><NavLink to={"/contactus"}>Contact Us</NavLink></li>
                        </ul>
                    </div>
                </div> */}
                        {/* TAGS */}
                        {/* <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="widget recent-posts-entry-date">
                        <h4 className="widget-title">Resent Post</h4>
                        <div className="widget-post-bx">
                            <div className="bdr-light-blue widget-post clearfix  bdr-b-1 m-b10 p-b10">
                                <div className="mt-post-date text-center text-uppercase text-white p-tb5">
                                    <strong className="p-date">24</strong>
                                    <span className="p-month">Mar</span>
                                    <span className="p-year">2021</span>
                                </div>
                                <div className="mt-post-info">
                                    <div className="mt-post-header">
                                        <h6 className="post-title"><NavLink to={"/post-sidebar"}>On these beams, we’re building dreams.</NavLink></h6>
                                    </div>
                                    <div className="mt-post-meta">
                                        <ul>
                                            <li className="post-author"><i className="fa fa-user" />By Admin</li>
                                            <li className="post-comment"><i className="fa fa-comments" /> 28</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="bdr-light-blue widget-post clearfix  bdr-b-1 m-b10 p-b10">
                                <div className="mt-post-date text-center text-uppercase text-white p-tb5">
                                    <strong className="p-date">30</strong>
                                    <span className="p-month">Jan</span>
                                    <span className="p-year">2021</span>
                                </div>
                                <div className="mt-post-info">
                                    <div className="mt-post-header">
                                        <h6 className="post-title"><NavLink to={"/post-sidebar"}>We’ll be a sensation for you next renovation</NavLink></h6>
                                    </div>
                                    <div className="mt-post-meta">
                                        <ul>
                                            <li className="post-author"><i className="fa fa-user" />By Admin</li>
                                            <li className="post-comment"><i className="fa fa-comments" /> 29</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                        {/* NEWSLETTER */}
                    </div>
                </div>
            </div>
            {/* FOOTER COPYRIGHT */}
            <div className="footer-bottom overlay-wraper">
                <div className="overlay-main" />
                <div className="container">
                    <div className="row">
                        <div className="mt-footer-bot-center">
                            <span className="copyrights-text">© 2022 Tuvansa </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
