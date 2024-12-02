import React from 'react'
import Header from '../components/Header'
import "./about.css"
import { useMediaQuery } from 'react-responsive';
import Timeline from '../components/Timeline'
import Time from '../components/Timeline'
import Demo from '../components/Navbar'
import Blogcard from '../components/Blogcard';
import { Link } from 'react-router-dom';
const Aboutus = () => {
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

            {/* <section id="heros" className="heros section dark-background">
                <img src="/aboutus.png" alt="" />
            </section> */}

         
                <section id="heros" class="heros1 section dark-background ">
                    <img src="/about.png" alt="" />
                    <div class="container text-center " data-aos-delay="100">
                        <div class="row justify-content-center">
                            <div class="--lg-8" data-aos="fade-right" data-aos-delay="500">
                                <h2 data-aos="fade-down" data-aos-delay="100">About Us </h2><br />
                                <p className='text-light w-75 mx-auto fs-6' data-aos="fade-left" data-aos-delay="100">At Spotcomm Global, we are dedicated to empowering businesses by providing cutting-edge
                                    managed services that simplify IT and enhance operational efficiency. As a leading Managed
                                    Services Provider (MSP), we specialize in offering tailored solutions designed to meet the
                                    diverse needs of enterprises of all sizes. </p><br />

                            </div>
                        </div>
                    </div>

                </section>

                {/* <div class="container text-center " data-aos-delay="100">
        <div class="row justify-content-center">
            <div class="" data-aos="fade-right" data-aos-delay="500">
                <img src='/bannermob.png' />
                <h2 data-aos="fade-down" data-aos-delay="100">Be Seamless with  Our    Managed  Services </h2><br />
                <p data-aos="fade-left" data-aos-delay="100">An insight report by Spotcomm Analytics and Partners. </p><br />
                <a data-aos="fade-right" data-aos-delay="100" href="#about" class="btn-get-started ">Learn More</a>
            </div>
        </div>
    </div> */}
  
            {/* </section> */}
            <div className='container'>
                <p className='text-center w-75  mx-auto fs-6'>At Spotcomm Global, we are dedicated to empowering businesses by providing cutting-edge
                    managed services that simplify IT and enhance operational efficiency. As a leading Managed
                    Services Provider (MSP), we specialize in offering tailored solutions designed to meet the
                    diverse needs of enterprises of all sizes.</p>
                <div className='row d-flex align-items-center'>
                    <div className='col-lg-6 mt-3' ><br />
                        <img src='/aboutus2.webp' />
                    </div>
                    <div className='col-lg-6'> <br /><br />
                        <h2 className='h2'>What Drives  <span className='' style={{ color: "#7F3E98" }}> Spotcomm </span> to Be a Successful Company</h2>
                        <br />
                        <div className='d-flex align-items-center'>
                            <img src='/arrow2.png' />   <p className='mx-2 fs-6'>Visionary Leadership  </p>
                        </div> <br />
                        <div className='d-flex align-items-center'>
                            <img src='/arrow2.png' />   <p className='mx-2 fs-6'>Client-Centric Approach
                            </p>
                        </div> <br />
                        <div className='d-flex align-items-center'>
                            <img src='/arrow2.png' />   <p className='mx-2 fs-6'>Commitment to Technological Innovation
                            </p>
                        </div> <br />
                        <div className='d-flex align-items-center'>
                            <img src='/arrow2.png' />   <p className='mx-2 fs-6'>Operational Excellence  </p>
                        </div> <br />
                        <div className='d-flex align-items-center'>
                            <img src='/arrow2.png' />   <p className='mx-2 fs-6'>Empowered and Skilled Workforce
                            </p>
                        </div>
                    </div>
                </div>
            </div>
           
            <div className=' '>
                {/* <img src='/time.png' className='w-50 mx-auto' /> */}
                <Timeline />
            </div> <br /><br />
            <div className="title-container">
                <p
                    className="title boldText text-center profh2 "
                    style={{
                        '--textfontHeading': '60px',
                        '--texttextAlign': 'center',
                        color: 'rgb(0,0,0)',

                        lineHeight: '1.1'
                    }}
                >
                    Who We Are
                    <span>
                        .
                    </span>
                </p>
            </div> <br /><br />
            <div className='col-lg-8 col-sm-12 mx-auto'>
                <img src='/whoweare.png' className='mx-auto' />
            </div>
            <div className="examples-section cmp-border-header cmp-border-header-650763923 " style={{ background: "#626B70", color: "#fff" }} >
                <div className="example-box pt-5">
                    <h2 className="example-title fw-bold text-light">OUR VISION</h2>
                    <p className="example-description">
                        Our vision is to become the preferred MSP for organizations globally by delivering innovative
                        and reliable technology solutions. We believe in fostering a future where businesses are free to
                        focus on growth and innovation, while we manage the complexities of their IT operations behind
                        the scenes.
                    </p>
                </div>
                <div class="vertical  mt-4"></div>
                <div className="example-box pt-5">
                    <h2 className="example-title fw-bold text-light">OUR MISSION</h2>
                    <p className="example-description">
                        Spotcomm Global’s mission is to provide our clients with high-quality, flexible, and cost-
                        effective managed services that improve performance, increase security, and reduce operational
                        downtime. We strive to be more than just a service provider—we aim to be a trusted partner that
                        understands the unique challenges of our clients and delivers solutions that enable them to thrive.
                    </p>
                    <br />
                </div>
            </div>
            <section className='' style={{ background: "#D9D9D9" }}>
                <div className="title boldText text-start fw-bold  container profh2" style={{ fontFamily: 'Proxima Nova, sans-serif' }}>

                    Our <span style={{ color: "#7F3E98" }}>Values</span>


                </div>
                <div className="container1">
                    <div className="card mt-3">
                        <div className="card-headers">
                            <img src="/aboutus (3).png" alt="rover" />
                        </div>
                        <div className="card-body">

                            <h4>
                                Customer-Centric Innovation

                            </h4>
                            <p>
                                At Spotcomm, we place our customers at the heart of everything we do. Our approach to managed services is driven by innovation and tailored solutions, ensuring we meet the unique needs of each client.

                            </p>

                        </div>
                    </div>
                    <div className="card mt-3">
                        <div className="card-headers">
                            <img src="/aboutus (4).png" alt="rover" />
                        </div>
                        <div className="card-body">

                            <h4>
                                Integrity and Transparency
                            </h4>
                            <p>
                                We believe in building trust through honesty and transparency in all our operations. Spotcomm operates with integrity, keeping our clients informed and engaged every step of the way.

                            </p>

                        </div>
                    </div>
                    <div className="card mt-3">
                        <div className="card-headers">
                            <img src="/aboutus (5).png" alt="rover" />
                        </div>
                        <div className="card-body">

                            <h4>
                                Excellence in Execution

                            </h4>
                            <p>
                                Our commitment to delivering excellence in all aspects of managed services is unwavering. From seamless network operations to proactive monitoring, we strive for precision and efficiency in every project.
                            </p>

                        </div>
                    </div>
                </div>
                <div className='container1'>
                    <div className=" card mt-3">
                        <div className="card-headers">
                            <img src="/aboutus (2).png" alt="rover" />
                        </div>
                        <div className="card-body">

                            <h4>
                                Continuous Learning

                            </h4>
                            <p>
                                In a rapidly evolving tech landscape, we prioritize continuous learning. At Spotcomm, we encourage curiosity and adaptability, ensuring our teams are always ahead of industry trends and innovations.

                            </p>

                        </div>
                    </div>
                    <div className=" card mt-3">
                        <div className="card-headers">
                            <img src="/aboutus (6).png" alt="rover" />
                        </div>
                        <div className="card-body">

                            <h4>
                                Collaboration and Teamwork
                            </h4>
                            <p>
                                Collaboration is the cornerstone of our success. Whether it’s working alongside our clients or fostering internal teamwork, we believe that shared knowledge and effort lead to superior results.

                            </p>

                        </div>
                    </div>
                    <div className=" card mt-3">
                        <div className="card-headers">
                            <img src="/aboutus (1).png" alt="rover" />
                        </div>
                        <div className="card-body">

                            <h4>
                                Sustainability and Responsibility

                            </h4>
                            <p>
                                We are committed to making a positive impact not just through technology, but through sustainable business practices. Spotcomm strives to reduce its environmental footprint and promote social responsibility in all its operations.


                            </p>

                        </div>
                    </div>
                </div>
                <br /><br />
            </section>


<br />
            <div className="slick-track " style={{ opacity: 1, transform: 'translate3d(0px, 0px, 0px)' }} role="listbox">

                <div className=" slick-current slick-active  " tabIndex={-1} role="option" aria-describedby="slick-slide00" data-slick-index={0} aria-hidden="false"><br /><br />
                    <div className="card fadeIn animate">
                        <div className="imageContainer">
                            <img loading="lazy" src="/about1.png" alt="" />
                        </div>
                        <div className="textContainer">
                            <h2 className="fw-bold fs-4 text-center mt-3" style={{ color: '', textAlign: '' }}>Our Leadership</h2>

                            <div className="buttonContainer ">
                                <Link to="/leadership" target="_self" className="text-light mt-3" style={{ color: '#fff', background: '' }} tabIndex={0}>Read More</Link>
                            </div><br />
                        </div>
                    </div>
                </div> <br />
                <div className=" slick-current slick-active " tabIndex={-1} role="option" aria-describedby="slick-slide00" data-slick-index={0} aria-hidden="false"><br /><br />
                    <div className="card fadeIn animate">
                        <div className="imageContainer">
                            <img loading="lazy" src="/about2.png" alt="" />
                        </div>
                        <div className="textContainer">
                            <h2 className="fw-bold fs-4 text-center mt-3" style={{ color: '', textAlign: '' }}>Our Community</h2>

                            <div className="buttonContainer ">
                                <a href="" target="_self" className="text-light mt-3" style={{ color: '#fff', background: '' }} tabIndex={0}>Read More</a>
                            </div><br />
                        </div>
                    </div>
                </div>


            </div><br />
            <section className="strategy-section">
                <div className="container">
                    <h2 className="main-heading text-light">THE SPOTCOMM STRATEGY</h2>
                    <p className="sub-heading">
                        As a top IT company, we're uniquely positioned to partner with the world's largest businesses in their transformation journeys.
                    </p>

                    <div className="strategy-columns">
                        <div className="column">
                            <h3 className="column-title text-light">OUTSOURCE</h3>
                            <p className="column-description">
                                We leverage customer-centric and cutting-edge talent and technology for higher business efficiency.
                            </p>
                        </div>
                        <div className="column">
                            <h3 className="column-title text-light">OPTIMIZE</h3>
                            <p className="column-description">
                                We leverage customer-centric and cutting-edge talent and technology for higher business efficiency.
                            </p>
                        </div>
                        <div className="column">
                            <h3 className="column-title text-light">THRIVE</h3>
                            <p className="column-description">
                                We leverage customer-centric and cutting-edge talent and technology for higher business efficiency.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Demo />
        </>

    )
}

export default Aboutus