import React from 'react'
import Header from '../components/Header'
import VideoCard from '../components/Videocard';
import Demo from '../components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useMediaQuery } from 'react-responsive'

const NetworkAudit = () => {
    const caseStudies = [
        { title: "Minimum Security Baselines", image: "/netaudit1.png" },
        { title: "Wireless and OS Security", image:"/audit2.webp" },
        { title: "Firewall Rule Set Review", image: "/netaudit2.png" },
        // { title: "Cooperative Computing Case Study", image: "/case1.png"  },
        { title: "Access Controls Assessment", image: "/netaudit3.png" },
        { title: "Device Configuration Review", image: "/netaudit4.png" },
        { title: "Network Segmentation  Analysis", image: "/audit2.webp" },
        { title: "SIEM and IPS Deployment Evaluation", image: "/case7.png" },
    ];
    const services = [

        { title: "5G Networks ", images: "/audits1.png" },
        { title: "Advanced Security Measures", images: "/audits5.png" },
        { title: "Edge Computing", images: "/audits3.png" },
        // { title: "Cooperative Computing Case Study", image: "/case1.png"  },
        { title: "Simpler Network Management", images: "/audits6.png" },
        { title: "Artificial Intelligence & Machine Learning", images: "/audits4.png" },
        // { title: "New Wi-Fi 6 & Wi-Fi 7 Protocols", images: "/audits2.png" },
        { title: "New Wi-Fi 6 & Wi-Fi 7 Protocols", images: "/audits7.png" },


    ];
    const Desktop = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 992 })
        return isDesktop ? children : null
    }
    const Tablet = ({ children }) => {
        const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
        return isTablet ? children : null
    }
    const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ minWidth: 20, maxWidth: 991 })
        return isMobile ? children : null
    }
    const Default = ({ children }) => {
        const isNotMobile = useMediaQuery({ minWidth: 768 })
        return isNotMobile ? children : null
    }
    return (
        <div> <Header />
            <section id="heros" class="heros1 section dark-background">

                <img src="/audit.png" alt="" />

                <div class="container text-center">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <h2>Network Audit   </h2>
                            <h4>Spotcomm: Uncover and enhance your network’s potential with our expert audit services.</h4>
                            {/* <img src="/button.svg" alt="play icon" className='mt-4' style={{ width: "80px", height: "80px", left: "40%" }} /> */}
                        </div>
                    </div>
                </div>

            </section>
            <div className='network ' style={{ background: "#fff", color: "#000" }} >
                {/* <h2>Spotcomm’s game changer</h2> */}
                {/* <div class=" d-flex justify-content-center mx-auto">
                    <img src='/Group 134.png' className='d-flex justify-content-center mx-5' />
                </div> */}
                <p className='text-dark fw-700 fs-5'>Network auditing is a vital process that provides organizations with a precise view of their network architecture. Our Network Auditing Services offer an in-depth analysis of your network's efficiency, capacity, security, maintenance requirements, and expansion potential. As a trusted Network Audit Service Provider, we bring a wealth of internal expertise, spanning both technical and financial aspects, including supplier selection, hardware choices, and operator decisions.
                </p>
            </div>
            <section id="heros" class="cyber3 section dark-background">

                <img src="/cyber3.png" alt="" />

                <div class="container">
                    <div class="row ">
                        <div class="col-lg-12">
                            <h2 className='text-center'>Key Aspects of Our Network Auditing Services
                            </h2> 
                        </div>
                    </div>
                </div>

            </section>
            <div className="case-studies-grid">
                {caseStudies.map((study, index) => (
                    <div className="case-studys" key={index}>
                        <div
                            className="case-study-image"
                            style={{ backgroundImage: `url(${study.image})` }}
                        ></div>
                        <div className="case-study-overlay">
                            <h2 className='text-light fs-5'>{study.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
            <div className="teaser teaser--full-size teaser--image-left aem-GridColumn aem-GridColumn--default--12" >
                <div className="cmp-teaser cmp-teaser--638358011    ">
                    <div
                        className="cmp-teaser__content"
                        style={{}}
                    >
                        <div className="cmp-teaser__content-wrapper">
                            <h2 className="cmp-teaser__title  ">
                                <a
                                    className="cmp-teaser__title-link"
                                    href="https://www.capco.com/intelligence/capco-intelligence/will-the-new-virtual-banks-reshape-the-thailand-banking-industry"
                                    rel="nofollow"
                                    target="_blank"
                                >
                                    Access to Vetted Talent
                                </a>
                            </h2>
                            <div className="cmp-teaser__description">
                                <p>
                                    Spotcomm offers you immediate access to a vast talent pool at affordable costs. Amplify your team with certified software specialists.

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="cmp-teaser__image">
                        <img src="/staff (3).png" />
                    </div>
                </div>
            </div><br />
            <div className='apps'>

                {/* <VideoCard
                /> */}
                <VideoCard
                    title="Firewall Audits"
                    videoSrc="/7.mp4 "
                    thumbnail="/networkaudit (1).png"
                /> <br />
                <VideoCard
                    title="Network Architecture Audit
"
                    videoSrc="/7.mp4"
                    thumbnail="/networkaudit (2).png"
                /> <br />
                <VideoCard
                    title="Server Audits"
                    videoSrc="/7.mp4"
                    thumbnail="/networkaudit (3).png"
                />
            </div>

            <section className="services4 ">
                <div className='container'> 
                    <h2 className='text-start fs-1 fw-bold ' >What are the factors driving the growth of the Internet Security Audit Market?

                    </h2><br />
                    <p className='para text-start'>Growing demand for below applications around the world has had a direct impact on the growth of the Internet Security Audit
                    </p>
                    <br /><br />
                    <div className="services3-grid3 ">
                        {services.map((demo, index) => (
                            <div key={index} className="service3-item " style={{flexDirection: "column"}}>
                                <img src={demo.images} /> <br />
                               <h4>{demo.title}</h4> 
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Demo />
        </div>
    )
}

export default NetworkAudit