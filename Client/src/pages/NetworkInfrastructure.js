import React from 'react'
import Header from '../components/Header'
import Blogcard from '../components/Blogcard'
import { useMediaQuery } from 'react-responsive'
import Demo from '../components/Navbar';

const NetworkInfrastructure = () => {
    const services = [
        { icon: "/blog2 (2).png", title: " 5G Networks" },
        { icon: "/blog2 (3).png", title: "Advanced Security Measures" },
        { icon: "/blog2 (5).png", title: "Simpler Network Management" },
        { icon: "/blog2 (6).png", title: "Artificial Intelligence & Machine Learning" },
        { icon: "/blog2 (4).png", title: "Edge Computing " },
        { icon: "/blog2 (1).png", title: "New Wi-Fi 6 & Wi-Fi 7 Protocols" },
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
        <>
            <Header />
            <section id="heros" class="heros1 section dark-background">

                <img src="/network.png" alt="" data-aos="fade-in" />

                <div class="container text-center" >
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <h2>Network Infrastructure Deployment</h2><br /> 
                            <h4>Spotcomm Engineering Edge launchesthe first ever <br />
                                software marketplace for the automotive industry.</h4>
                        </div>
                    </div>
                </div>

            </section>
            <br />     <br />
            <section id="bg2" class="bg3 section dark-background">


                <div class="container text-center" >
                    <div class="row justify-content-center">
                        <div class="col-lg-10 col-sm-12">

                            <p className=' text-center p-5 mx-auto' style={{ border: "2px solid #7F3E98 ", borderRadius: "20px" }}>Spotcomm is your Global Network Infrastructure Partner from the word Go. Whether you need network switching, upgraded firewalls or enterprise-grade Wireless solutions, Spotcomm is here to make your network infrastructure deployments go smooth and secure as possible.
                                Selecting and implementing the right network infrastructure for your IT environment is critical to a smooth-running, secure IT environment. You need a Network Infrastructure deployment partner who can make sure that you are making the right decisions and are able to complete stress-free network infrastructure deployments in your premises and beyond.</p>
                        </div>
                    </div>
                </div>

            </section>      <br />     <br />
            <h2 className='text-center fs-1 fw-bold' >Importance of Robust  <span style={{ color: "#7F3E98" }}>Network Infrastructure</span> </h2>
            <p className='text-center  mx-auto w-75' > <br />
                A robust network infrastructure is critical for maintaining continuous connectivity and communication, improving productivity, and enhancing security. It facilitates seamless communication among employees, promotes collaboration, and increases efficiency within businesses. A reliable network infrastructure reduces the risk of data breaches and cyber threats, ensuring higher levels of network security.
            </p><br /><br />

            <div className="network-container" >
                <h1 className="title text-dark">Wired Network Examples</h1>
                <p className="description">
                    A wired network uses physical cables to connect devices to each other and the internet. This type of network infrastructure offers secure, high-speed connectivity, and reliable performance. Wired networks are common in large organizations that require high bandwidth, low latency, and consistent performance. Wired networks are ideal for applications like streaming video or transferring large files. These are applications that require a high amount of bandwidth with guaranteed speed.
                </p> <br /><br />
                <div className="examples-section" >
                    <div className="example-box">
                        <h2 className="example-title ">Wireless Network Basics</h2>
                        <p className="example-description">
                            A wireless network uses radio waves to connect network infrastructure devices to each other and the internet. Wireless networks are often deployed in public spaces because they are easy to connect, flexible, and cost-effective. Wi-Fi is the most common type of wireless network used in homes, small businesses, and public places.
                        </p>
                    </div>
                    <div class="vertical"></div>
                    <div className="example-box">
                        <h2 className="example-title ">Hybrid Networks</h2>
                        <p className="example-description">
                            The largest wireless carriers have a complex combination of wired and wireless networks that provide infrastructure for small and remote cells. A hybrid network combines wired and wireless elements, enabling consistent communication across large areas with high user density. This type of network helps service providers keep up with increased demand, enabling applications like Internet of Things (IoT) devices. Hybrid networks offer the best of both worlds by providing the high bandwidth of wired networks and the convenience and flexibility of wireless networks.
                        </p>
                    </div>
                </div>
            </div> <br /><br />
            <h2 className='text-center fs-1 fw-bold'>What is  <span style={{ color: "#7F3E98", fontFamily: "'proxima-nova', sans-serif" }}>Network Infrastructure Management?</span> </h2>    <br />
            <Blogcard />
            <section className="services3 ">
                <div className='container'> <br /><br />
                    <h2 className='text-start fs-1 fw-bold ' >The Future of   <span style={{ color: "#7F3E98" }}>Network Infrastructure : </span> <br />  What to Expect </h2>
                    <p className='w-75 text-start'>Future advancements in network technology are set to revolutionize infrastructure, enhancing efficiency and security. These developments promise improved connectivity and productivity across most industries.
                    </p>
                    <br /><br />
                    <div className="services3-grid3 ">
                        {services.map((service, index) => (
                            <div key={index} className="bg-light p-3">
                                <img src={service.icon} alt={service.title} className="mx-auto" />
 <br />
                                    <p className='text-center'>{service.title}</p>
                               
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Demo />
        </>
    )
}

export default NetworkInfrastructure