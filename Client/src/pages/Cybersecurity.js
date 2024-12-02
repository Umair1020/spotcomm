import React from 'react'
import Header from '../components/Header'
import Demo from '../components/Navbar'
import "./business.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { useMediaQuery } from 'react-responsive';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation, Scrollbar, A11y } from 'swiper/modules';
import AOS from 'aos';

import 'aos/dist/aos.css';

AOS.init();

const services = [
    {
        title: 'Cybersecurity Advisory Services', icon: '/cyber11.png', desc: "Healthcare and Medical Devices"
    },
    {
        title: 'System Inegration and Managed Security Services',
        icon: '/cyber10.png', desc: "Next-gen Identity & Access Services to secure your digital transformation journey"
    },
    { title: 'Risk and Compliance Transformation', icon: '/cyber12.png', desc: "Helpng C-suite assess and enhance the enterprise cybersecurity risk posture, adhere" },
    { title: 'Cloud, Zero-Trust & Enterprise Security Architecture', icon: '/cyber13.png', desc: "Fortify defenses both on cloud and data center against the most advanced cyber threats" },
    { title: 'Identity & Access Management', icon: '/cyber14.png', desc: "Next-gen Identty & Access Services to secure your digital transformation journey" },
    { title: 'Data Security & Privacy', icon: '/cyber15.png', desc: "Safeguard your most valuable assets with comprehensive data and OT/IoT security solutions tailored to your needs." },
    { title: 'Cyber Defense and Response', icon: '/cyber16.png', desc: "Seamless and cost-effective management of security operations provided in an as-a-service model." },
    { title: 'Core Advisory, Emerging Technologies & AI', icon: '/cyber17.png', desc: "Spotcomm’s Artificial Intelligence, Open Source, 5G, and more" },

];

const services1 = [
    { title: 'Hospitals & Healthcare Industry', icon: '/cyber14 (1).png' },
    { title: 'Service Industry', icon: '/cyber14 (2).png' },
    { title: 'Software Industry', icon: '/cyber14 (3).png' },
    { title: 'Manufacturing Industry ', icon: '/cyber14 (4).png' },
    { title: 'Pharmaceutical Industry', icon: '/cyber14 (5).png' },
    { title: 'Broadcast Media  Industry', icon: '/cyber14 (6).png' },
    { title: 'Wellness & Fitness Industry', icon: '/cyber14 (7).png' },
    { title: 'Educational Institution ', icon: '/cyber14 (8).png' },
    { title: 'Leisure Industry', icon: '/cyber14 (11).png' },
    { title: 'IT Services Industry', icon: '/cyber14 (10).png' },
    { title: 'Digital Services Industry', icon: '/cyber14 (9).png' }
];

const Cybersecurity = () => {
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
        <>

            <Header />
            <section id="heros" class="heros1 section dark-background"  data-aos="fade-right" data-aos-delay="500">

                <img src="/cyber.png" alt=""  />

                <div class="container text-center" >
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <h2 className='profh2'>Cyber Security</h2>
                        </div>
                    </div>
                </div>

            </section>
            {/* <div className='background'>
                <div className='row text-center'>
                    <div className='col-lg-12 col-sm-12 '>
                        <span className='span text-center  '>Spotlight</span>

                        <span className='span text-center '>Client Speak</span>

                        <span className='span text-center '> What We Do</span>

                        <span className='span text-center '>Industries</span>
                    </div>
                </div>
            </div> */}
            <section className="services-section" >
                <h2 className='text-center'>What <span className='' style={{ color: "#7F3E98" }}> Services </span> We Provide</h2>
                <Desktop>
                    <div className="services-grid row" >
                        {services.map((service, index) => (
                            <div className="col-lg-3 service mx-auto mt-5"  data-aos="fade-right" data-aos-delay="500" key={index}>
                                <div
                                    className="service-card"
                                    style={{ "--image-url": `url(${service.icon})` }}  // Setting the image URL
                                > <br /><br />
                                    <h4 className="service-title">{service.title}</h4>
                                    <p className="text-center desc">{service.desc}</p> <br />
                                    {/* <button className="service-btn">Read More</button> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </Desktop>
                <Mobile>
                    <div className="services-grid row">
                        <Swiper modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                            autoplay={{
                                delay: 1500,
                                disableOnInteraction: false,
                            }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}>
                            {services.map((service, index) => (
                                <SwiperSlide key={index}>
                                    <div class="col-lg-3 service mx-auto mt-5">
                                        <div
                                            className="service-card"
                                            style={{ "--image-url": `url(${service.icon})` }}  // Setting the image URL
                                        > <br />
                                            <div className="service-title">{service.title}</div>
                                            {/* <button className="service-btn">Read More</button> */}
                                        </div>
                                    </div>

                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </Mobile>
            </section>

           
            <section className="services-section" >
                <h2 className='text-center'>Expertise Across a Broad Range of <span style={{ color: "#7F3E98" }}>Industries</span> </h2>
                <div className="row d-flex justify-content-center">
                    {services1.map((service, index) => (
                        <div class="col-lg-3   mt-5 "  data-aos="fade-right" data-aos-delay="500" >
                            <img src={service.icon} className='mx-auto d-flex ' /> <br />
                            <div className="services-title fs-5 fw-bold">{service.title} </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className='p-5 cyber'  data-aos="fade-right" data-aos-delay="500">
                <h2 className='text-center mx-auto  '  data-aos="fade-right" data-aos-delay="500" >
                    Cyber Defense Centers
                </h2><br />
                <p className='text-center mx-auto  ' >Spotcomm CyberTransform is our integrated risk and security platform that delivers strategy-first cybersecurity advisory and implementation services. CyberShield is our industry-leading suite of managed services that defend business operations with on-demand cyber resilience management. </p> <br /><br />
                <img src='/map.png' className='w-50 mx-auto' />
            </section>
            <div className='container'>
                <div className=' row  ' id='cyber'>
                    <div className='col-lg-6 cyberheading  '  data-aos="fade-right" data-aos-delay="500">
                        <br /> <br />
                        <h2 className='h2'>State of <span className='' style={{ color: "#7F3E98" }}>Cybersecurity</span>  Report</h2><br />
                        <p className=' ' >Get Your Copy Now! The 5th edition of Spotcomm’s Cybersecurity Report provides the latest trends and insights, offering a comprehensive view of how modern enterprises are striving for cyber resilience. In recent years, significant technological, geopolitical, and economic disruptions have exposed organizations to new and unforeseen risks, compelling security leaders to rethink their approaches to cybersecurity threats and risk management. This report explores how enterprises are adapting to these emerging risks and highlights the critical challenges security leaders are facing today..</p>
                        {/* <br />   <button className="service-btn">Read More</button> */}
                    </div>

                    <div className='col-lg-6 '  data-aos="fade-up" data-aos-delay="500"><br />
                        <img src='/cyber2.png' className='w-75 mx-auto d-flex justify-content-center' />
                    </div>
                    <br /> <br />
                </div>
            </div>
            <section id="heros" class="cyber3 section dark-background"  data-aos="fade-right" data-aos-delay="500">

                <img src="/cyber3.png" alt=""  />

                <div class="container" >
                    <div class="row ">
                        <div class="col-lg-8">
                            <h2>Collaborate with global CISOs at Spotcomm industry events</h2> <br />
                            <p>SpotComm routinely hosts and participates in CISO peer-to-peer events, with some events being private (CISO private summits) and others hosted publicly at industry events (roundtables, panel discussions).</p>
                            {/* <br />   <button className="service-btn">Read More</button> */}
                        </div>
                    </div>
                </div>

            </section>
            <Demo />

        </>
    )
}

export default Cybersecurity