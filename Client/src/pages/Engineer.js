import React from 'react'
import Header from '../components/Header'
import "./engineer.css"
import Demo from '../components/Navbar'
import { useMediaQuery } from 'react-responsive'
const Engineer = () => {
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
        <div>


            <div>
                <Header />
                <Desktop>
                    <section id="heros" className="heros1 section dark-background" style={{ height: "80vh" }}>

                        <img src="/engineer.png" alt="" />
                        <img src="/button.svg" alt="play icon" className='d-flex align-items-center ' style={{ width: "100px", height: "100px" }} />


                    </section>

                </Desktop>
                <Mobile>
                    <section id="heros" className="heros1 section dark-background" style={{ height: "80vh" }}>

                        <img src="/engineermob.png" alt="" />
                        <img src="/button.svg" alt="play icon" className='d-flex align-items-center ' style={{
                            width: "100px", height: "100px", top: "65%"
                        }} />


                    </section>

                </Mobile>
                <div className='engineer'> <br />
                    <h2 className='text-center ' style={{ color: "#7F3E98" }}>Materializing your vision</h2>
                    <h1 className='text-center '>Strengthening Your Team </h1>
                    <section id="bg2" class="bg3 section dark-background">


                        <div class="container text-center" >
                            <div class="row justify-content-center">
                                <div class="col-lg-10 col-sm-12">

                                    <p className=' text-center p-3 mx-auto w-75' style={{ border: "2px solid #7F3E98 ", borderRadius: "50px" }}>Spotcomm Resident Engineering Services streamlines your solutions, services, and delivery process in one proven, comprehensive methodology.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div><br />
                <section id="heros" className=" " style={{ background: "#626B70" }}> <br />
                    <img src="/engineer1.png" className=' mx-auto ' alt="" /><br />
                </section><br />
                <section className="services-sections">
                    <div className="container">
                        <h2 className="section-title">What <span style={{ color: "#7F3E98" }}> We </span>   Do</h2>

                        <div className="cards-container ">
                            <div className="card ">
                                <img src="/engineer (3).png" alt="L1 to L3 Engineers" className="card-img" />
                                <div className="card-content">
                                    <h3>L1 to L3 Engineers</h3>
                                    <p>We offer complete Network Support from L1 to L3 Network Engineers for your network configurations and devices at your doorstep.</p>
                                </div>
                            </div>
                            <br />
                            <div className="card ">
                                <img src="/engineer (2).png" alt="L1 to L3 Engineers" className="card-img" />
                                <div className="card-content">
                                    <h3>Hassle Free Compliance</h3>
                                    <p>Our team of experienced professionals provides a hassle-free compliance services experience to the clients.</p>
                                </div>
                            </div>

                        </div> <br />
                        <div className="card1 large-card   mx-auto">
                            <img src="/engineer (1).png" alt="L1 to L3 Engineers" className="card-img " />
                            <div className="card-content">
                                <h3>Resource Skill Enhancement</h3>
                                <p>Resource Skill Enhancement programs for Periodic training and monitoring of manpower for skill enhancement.</p>
                                {/* <button className="read-more-btn">Read More</button> */}
                            </div>
                        </div>
                    </div>
                </section>
                <div className=" responsivegrid aem-GridColumn aem-GridColumn--default--12">
                    <div id="container-eb9fb998a4" className="cmp-container cmp-container--1563461404 " data-type="simple">
                        <div className="responsive-image-banner">

                            <div className="cmp-responsive-image-banner cmp-responsive-image-banner--1487958357">
                                <div className="cmp-responsive-image-banner__top-overlay">
                                    <div className="cmp-responsive-image-banner__title d-flex align-items-center"><p>Current and Future Trends </p> <hr />
                                    </div>

                                </div>
                                <div className="cmp-responsive-image-banner__top-overlay-box" />
                                <div className="cmp-responsive-image-banner__content">
                                    <div className="cmp-responsive-image-banner__section">
                                        <a href="#">
                                            <img className="cmp-responsive-image-banner__image" src="/engineer2 (4).png" alt="cloud-energy" />
                                            <div className="cmp-responsive-image-banner__text-overlay"><p className='w-100'>AI Integration<span style={{ fontSize: '18.0px' }} /></p>
                                            </div>
                                            <div className="cmp-responsive-image-banner__bottom-overlay-box" />
                                        </a>
                                    </div>
                                    <div className="cmp-responsive-image-banner__section" target="_self">
                                        <a href="#">
                                            <img className="cmp-responsive-image-banner__image" src="/engineer2 (2).png" alt="cloud-energy" />
                                            <div className="cmp-responsive-image-banner__text-overlay"><p className='w-100'>Cloud and Multi-Cloud Management<span style={{ fontSize: '18.0px' }} /></p>
                                            </div>
                                            <div className="cmp-responsive-image-banner__bottom-overlay-box" />
                                        </a>
                                    </div>
                                    <div className="cmp-responsive-image-banner__section" target="_self">
                                        <a href="">
                                            <img className="cmp-responsive-image-banner__image" src="/engineer2 (3).png" alt="cloud-energy" />
                                            <div className="cmp-responsive-image-banner__text-overlay"><p className='w-100'>5G and Edge Computing<span style={{ fontSize: '18.0px' }} /></p>
                                            </div>
                                            <div className="cmp-responsive-image-banner__bottom-overlay-box" />
                                        </a>
                                    </div>

                                </div >
                                <div className="cmp-responsive-image-banner__content">
                                    <div className="cmp-responsive-image-banner__section">
                                        <a href="#">
                                            <img className="cmp-responsive-image-banner__image" src="/engineer2 (1).png" alt="cloud-energy" />
                                            <div className="cmp-responsive-image-banner__text-overlay"><p className='w-100'>Security Focus<span style={{ fontSize: '18.0px' }} /></p>
                                            </div>
                                            <div className="cmp-responsive-image-banner__bottom-overlay-box" />
                                        </a>
                                    </div>
                                    <div className="cmp-responsive-image-banner__section" target="_self">
                                        <a href="#">
                                            <img className="cmp-responsive-image-banner__image" src="/engineer2 (5).png" alt="cloud-energy" />
                                            <div className="cmp-responsive-image-banner__text-overlay"><p className='w-100'>Software-Defined Networking (SDN)<span style={{ fontSize: '18.0px' }} /></p>
                                            </div>
                                            <div className="cmp-responsive-image-banner__bottom-overlay-box" />
                                        </a>
                                    </div>
                                    {/* <div className="cmp-responsive-image-banner__section" target="_self">
                                        <a href="">
                                            <img className="cmp-responsive-image-banner__image" src="/engineer2 (5).png" alt="cloud-energy" />
                                            <div className="cmp-responsive-image-banner__text-overlay"><p className='w-100'>MEDICAL SCIENCES<span style={{ fontSize: '18.0px' }} /></p>
                                            </div>
                                            <div className="cmp-responsive-image-banner__bottom-overlay-box" />
                                        </a>
                                    </div> */}

                                </div >
                            </div >
                        </div >


                    </div >
                </div>
                <Demo />

            </div>

        </div>
    )
}

export default Engineer