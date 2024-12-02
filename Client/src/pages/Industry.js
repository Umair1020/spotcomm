import React from 'react'
import Header from '../components/Header'
import Demo from '../components/Navbar';

const Industry = () => {
    const solutions = [
        {

            imgSrc: "/industry (2).png",
            title: "Managed Network Services",
            description: "network design, deployment, and monitoring",
        },
        {

            imgSrc: "/industry (3).png",
            title: "Private 5G Networks",
            description: "low latency, high speed, and secure connectivity ",
        },
        {

            imgSrc: "/industry (4).png",
            title: "Edge Computing Solutions",
            description: "reducing latency and enabling real-time decision-making.",
        },
        {

            imgSrc: "/industry (1).png",
            title: "Smart Building and Automation Solutions",
            description: "HVAC, lighting, and energy ",
        },
        {

            imgSrc: "/industry (5).png",
            title: "Advanced Cybersecurity",
            description: "firewall management, network segmentation, and threat detection systems",
        },
        {

            imgSrc: "/industry (8).png",
            title: "Industrial IoT Integration",
            description: "monitoring and data analytics across production lines, enabling predictive maintenance",
        },
        {

            imgSrc: "/industry (6).png",
            title: "Cloud-Based Networking",
            description: "centralize management and operations",
        },
        {

            imgSrc: "/industry (7).png",
            title: "Network Monitoring and Optimization",
            description: "prevent downtime, troubleshoot issues quickly, and optimize network performance.",
        },
    ];
    const segmentsData = [
        {
            title: 'Broadcast Networks',
            imgSrc: '/industry2.png',
        },
        {
            title: 'Production Studios',
            imgSrc: '/industry3.png',
        },
        {
            title: 'OTT Platforms & Streaming Services',
            imgSrc: '/industry4.png',
        },
        {
            title: 'News Agencies',
            imgSrc: '/industry5.png',
        },
        {
            title: 'Advertising Agencies',
            imgSrc: '/industry6.png',
        },
        {
            title: 'Post-Production Companies',
            imgSrc: '/industry1.png',
        },
    ];
    return (
        <div>
            <Header />
            <section id="heros" className="heros1 section dark-background" data-aos="fade-right" data-aos-delay="100">
                <img src="/industry.jpg" alt="" />
                
                <div class="container text-center">
                    <div class="row justify-content-center">
                        <div class="">
                            <h2 className='profh2 text-start'>Industrial Process &
                            Manufacturing   </h2>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container " >
                <div className="spacing" >
                    <div className="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
                        <div className="title aem-GridColumn aem-GridColumn--default--12"></div>
                        <div className="innerpage">
                            <h2 className="font-bold  "  data-aos="fade-up" data-aos-delay="100">
                                Our Expertise

                            </h2>

                        </div>
                    </div>
                </div>

                <div className="text-styling text parbase aem-GridColumn aem-GridColumn--default--12" data-aos="fade-right" data-aos-delay="100"> 

                    <div className="hyperlink">
                        <div>
                            <div>
                                <div>
                                    <div className="innerpage" tabIndex={0}>
                                        <p className="content-h6-neuzeit-grotesk fs-6">At Spotcomm, we understand the unique demands of factories and industrial zones, where seamless connectivity and reliable communication are critical for operational efficiency. Through our advanced networking technologies, we provide tailored solutions that ensure robust, high-performance networks capable of supporting large-scale operations, IoT integration, and real-time data analytics. Our expertise in managed network services enables us to enhance productivity, reduce downtime, and improve overall operational visibility, empowering industries to thrive in today's fast-evolving digital landscape.
                                        </p><br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="segments-container" style={{ background: "#E8E8E8" }}> <br />
                <div className='container'>
                    <div className=''>

                        <h2 className="h2 fw-bold" style={{ color: "#7F3E98" }} data-aos="fade-up" data-aos-delay="100">Segments</h2><br />
                        <div className="services3-grid3 mx-auto">
                            {segmentsData.map((segment, index) => (
                                <div key={index} className="segment-card mx-auto">
                                    <img src={segment.imgSrc} alt={segment.title} className="segment-image" data-aos="fade-right" data-aos-delay="200" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <br />
            </div>

            <div className="layout-container-component aem-GridColumn aem-GridColumn--default--12"> 
                <div className="white img-position--">
                    <div className="layoutcontainer">
                        <div className="container ">
                            <div className="spacing">
                                <div className="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
                                    <div className="title aem-GridColumn aem-GridColumn--default--12">
                                        <div >
                                            <div className="innerpage" data-aos="fade-right" data-aos-delay="100">
                                                <h2>
                                                    <span
                                                        className="content-sec-header-h2-akkurat-mono floting-nav-title fw-bold"
                                                        tabIndex="0"
                                                    >
                                                        What we Think
                                                    </span>
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="splitparsys aem-GridColumn aem-GridColumn--default--12" data-aos="fade-right" data-aos-delay="200">
                                        <div
                                            className="splitparsys "
                                            style={{}}
                                        >
                                            <div>
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12" >
                                                        <div className="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
                                                            <div className="latest-thinking case-study1 aem-GridColumn aem-GridColumn--default--12">
                                                                <div className="cq-dd-pages">
                                                                    <div className="foundation-ordered-list-container">
                                                                        <span className="foundation-list-item">
                                                                            <div className="wipro-case-studies-bg">

                                                                                <div className="wipro-shadow" />
                                                                                <img
                                                                                    alt="Healthcare"
                                                                                    className="multi-image"
                                                                                    data-hd="/content/dam/nexus/en/industries/healthcare/images/why-value-based-cares-1896x275.jpg/jcr:content/renditions/why-value-based-cares-575x540.jpg"
                                                                                    data-mob="/content/dam/nexus/en/industries/healthcare/images/why-value-based-cares-1896x275.jpg/jcr:content/renditions/why-value-based-cares-575x540.jpg"
                                                                                    data-sd="/content/dam/nexus/en/industries/healthcare/images/why-value-based-cares-1896x275.jpg/jcr:content/renditions/why-value-based-cares-575x540.jpg"
                                                                                    src="/industry7.png"
                                                                                    tabIndex="0"
                                                                                />


                                                                            </div>

                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="latest-thinking case-study1 aem-GridColumn aem-GridColumn--default--12">
                                                                <div className="cq-dd-pages">
                                                                    <div className="foundation-ordered-list-container">
                                                                        <span className="foundation-list-item">
                                                                            <div className="wipro-case-studies-bg">

                                                                                <div className="wipro-shadow" />
                                                                                <img
                                                                                    alt="Healthcare"
                                                                                    className="multi-image"
                                                                                    data-hd="/content/dam/nexus/en/service-lines/consulting/tech-trends/1896x275-tech-trends-healthcare.jpg"
                                                                                    data-mob="/content/dam/nexus/en/service-lines/consulting/tech-trends/1896x275-tech-trends-healthcare.jpg"
                                                                                    data-sd="/content/dam/nexus/en/service-lines/consulting/tech-trends/1896x275-tech-trends-healthcare.jpg"
                                                                                    src="/industry8.png"
                                                                                    tabIndex="0"
                                                                                />


                                                                            </div>

                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                        <div className="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
                                                            <div className="latest-thinking case-study1 aem-GridColumn aem-GridColumn--default--12">
                                                                <div className="cq-dd-pages">
                                                                    <div className="foundation-ordered-list-container">
                                                                        <span className="foundation-list-item">
                                                                            <div className="wipro-case-studies-bg">

                                                                                <div className="wipro-shadow" />
                                                                                <img
                                                                                    alt="Healthcare"
                                                                                    className="multi-image "

                                                                                    src="/industry9.png"
                                                                                    tabIndex="0"
                                                                                />


                                                                            </div>

                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="latest-thinking case-study1 aem-GridColumn aem-GridColumn--default--12">
                                                                <div className="cq-dd-pages">
                                                                    <div className="foundation-ordered-list-container">
                                                                        <span className="foundation-list-item">
                                                                            <div className="wipro-case-studies-bg">

                                                                                <div className="wipro-shadow" />
                                                                                <img
                                                                                    alt="Healthcare"
                                                                                    className="multi-image "
                                                                                    data-hd="/content/dam/nexus/en/service-lines/consulting/tech-trends/1896x275-healthcare-tech-trends-new.jpg/jcr:content/renditions/575x540-healthcare-tech-trends-new.jpg"
                                                                                    data-mob="/content/dam/nexus/en/service-lines/consulting/tech-trends/1896x275-healthcare-tech-trends-new.jpg/jcr:content/renditions/575x540-healthcare-tech-trends-new.jpg"
                                                                                    data-sd="/content/dam/nexus/en/service-lines/consulting/tech-trends/1896x275-healthcare-tech-trends-new.jpg/jcr:content/renditions/575x540-healthcare-tech-trends-new.jpg"
                                                                                    src="/industry10.png"
                                                                                    tabIndex="0"
                                                                                />


                                                                            </div>

                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                <h2 data-aos="fade-up" data-aos-delay="100" className='text-center'>What We Provide To The Industry</h2>
            <div className="services-grid">
                <div className="grid-container" >
                    {solutions.map((service, index) => (
                        <div key={index} className="grid-item" data-aos="fade-right" data-aos-delay="100">
                            <img src={service.imgSrc} alt={service.title}  />
                            <div className='p-2'>
                                <h3 >{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Demo />
        </div>
    )
}

export default Industry