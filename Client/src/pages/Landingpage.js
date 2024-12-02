import React, { useEffect, useState, useRef } from 'react';
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import { useMediaQuery } from 'react-responsive'
import $ from 'jquery'
import Footer from '../components/Footer';
import Demo1 from './Demo1';
import Scroller from './Scroller';
import CookieConsent from '../components/CookieConsent';
import Demo from '../components/Navbar';
import Award from '../components/Award';
import Testmonial from '../components/Testmonial';
import ReactGA from "react-ga"
import AOS from 'aos';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import Form from '../components/Form';
// import Head from '../components/Head';
import "../App.css"
import "../index.css"


AOS.init();
window.jquery = window.$ = $


const Landingpage = () => {

    const Desktop = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 992 })
        return isDesktop ? children : null
    }
    const Tablet = ({ children }) => {
        const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
        return isTablet ? children : null
    }
    const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ minWidth: 100, maxWidth: 991 })
        return isMobile ? children : null
    }
    const Default = ({ children }) => {
        const isNotMobile = useMediaQuery({ minWidth: 768 })
        return isNotMobile ? children : null
    }


    return (
        <>

            <div className='parent '>

                {/* <Navbar /> */}
                <Header />
                {/* <Head /> */}
                <section id="hero" class="hero   fullbanner-clickable true  section dark-background white img-position-image-left-image-top ">
                    <Desktop>

                        <video autoPlay muted loop className='banner-video ' style={{
                            position: 'absolute',
                            top: '0px',
                            left: '0',
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            zIndex: 1,
                            opacity: 0.9,

                        }}>
                            <source src='/123.mp4' type='video/mp4' />

                        </video>
                        <div class="container text-center bannerh2" data-aos-delay="100">
                            <div class="row justify-content-center">
                                <div class="fadeUp animate">
                                    <div class="col-lg-12" data-aos="fade-right" data-aos-delay="100">
                                        <h2 data-aos="fade-down" data-aos-delay="100" className=''>Be Seamless with  Our  <br />  Managed  Services </h2>  <br />
                                        <p data-aos="fade-left" data-aos-delay="100" className=''>An insight report by  Spotcomm Analysts and Partners. </p> 
                                        <Link data-aos="fade-right" data-aos-delay="100" to="/insight-report" class="btn-get-started ">Learn More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <section className="demo">
                            <a href="" className=''>Scroll<span></span></a>
                        </section> 

                    </Desktop>
                    <Mobile>

                        {/* <section id="heros" class="heros section dark-background">
                            <img src='/1.png' alt="" />

                            <div class="container text-center" data-aos="fade-right" data-aos-delay="500">
                                <div class="row justify-content-center">
                                    <div class="col-lg-12">
                                        <h2 data-aos="fade-down" data-aos-delay="100">Be Seamless with  Our    Managed  Services </h2><br />
                                        <p data-aos="fade-left" data-aos-delay="100">An insight report by Spotcomm Analytics and Partners. </p><br />
                                        <a data-aos="fade-right" data-aos-delay="100" href="#about" class="btn-get-started ">Learn More</a>
                                    </div>
                                </div>
                            </div>
                        </section> */}

                        <section id="heros" class="heros section dark-background">
                        <video autoPlay muted loop className='banner-video ' style={{
                            position: 'absolute',
                            top: '0px',
                            left: '0',
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            zIndex: 1,
                            opacity: 0.9,

                        }}>
                            <source src='/123.mp4' type='video/mp4' />

                        </video>
                            
                            <div class="container text-center aos-init aos-animate" data-aos="fade-right" data-aos-delay="500"><div class="row justify-content-center"><div class="col-lg-12"><h2 data-aos="fade-down" data-aos-delay="100" class="aos-init aos-animate">Be Seamless with  Our    Managed  Services </h2><br /><p data-aos="fade-left" data-aos-delay="100" class="aos-init aos-animate">An insight report by Spotcomm Analytics and Partners. </p><br />   <Link data-aos="fade-right" data-aos-delay="100" to="/insight-report" class="btn-get-started ">Learn More</Link></div></div></div></section>
                    </Mobile>

                </section>

                <Scroller />
                <div >
                    <Demo1 />
                </div>
                <Award />

                <div className=' row '>
                    <div className='col-lg-4 col-sm-12   position-relative' data-aos="fade-right" data-aos-delay="100">
                        <Link to="/cloud-migration">  <img src='/image-1.png' className='w-100 h-100' /></Link>
                    </div>
                    <div className='col-lg-4 col-sm-12   position-relative' data-aos="fade-right" data-aos-delay="100" >
                        <Link to="/wifi">    <img src='/image-2.png' className='w-100 h-100' /> </Link>
                    </div>
                    <div className='col-lg-4 col-sm-12   position-relative' data-aos="fade-right" data-aos-delay="100">
                        <Link to="/NetworkInfrastructureDeployment">     <img src='/image-3.png' className='w-100 h-100' /> </Link>
                    </div>


                    <div className='col-lg-4 col-sm-12   position-relative' data-aos="fade-right" data-aos-delay="100" >
                        <Link to="/e-sports">    <img src='/image-4.png' className='w-100 h-100' /> </Link>
                    </div>
                    <div className='col-lg-4 col-sm-12  position-relative' data-aos="fade-right" data-aos-delay="100" >
                        <Link to="/technology ">    <img src='/image-5.png' className='w-100 h-100' /></Link>
                    </div>
                    <div className='col-lg-4 col-sm-12  position-relative' data-aos="fade-right" data-aos-delay="100" >
                        <Link to="/futureoftechnology ">      <img src='/image.png' className='w-100 h-100' /></Link>
                    </div>
                </div>
                <br />
                <Testmonial />
                <div id='section06'>
                    <Form />
                </div>

                <Demo />
                {/* <Footer /> */}
                <CookieConsent />
            </div>

        </>
    )
}

export default Landingpage