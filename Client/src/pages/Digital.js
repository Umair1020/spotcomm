import React from 'react'
import Header from '../components/Header'
import Demo from '../components/Navbar';

const Digital = () => {
    const solutions = [
        {

            imgSrc: "/digital (2).png",
            title: "AI-Powered Automation",
            description: "Streamlining marketing workflows with cutting-edge AI automation tools.",
        },
        {

            imgSrc: "/digital (3).png",
            title: "Cloud-Based Collaboration Tools",
            description: "Enhancing teamwork with secure, scalable cloud collaboration platforms. ",
        },
        {

            imgSrc: "/digital (4).png",
            title: "Omnichannel IT Integration",
            description: "Ensuring consistent performance across multiple marketing communication channels.",
        },
        {

            imgSrc: "/digital (1).png",
            title: "Disaster Recovery for Marketing Operations",
            description: "Minimizing disruptions with reliable backup and recovery systems. ",
        },
        {

            imgSrc: "/digital (5).png",
            title: "Marketing Analytics Solutions",
            description: "Providing actionable insights through advanced data analytics systems.",
        },
        {

            imgSrc: "/digital (8).png",
            title: "Real-Time Performance Monitoring",
            description: "Tracking marketing activities with responsive IT monitoring solutions.",
        },
        {

            imgSrc: "/digital (6).png",
            title: "Campaign Infrastructure Support",
            description: "Building reliable networks for seamless digital marketing campaigns.",
        },
        {

            imgSrc: "/digital (7).png",
            title: "Network Monitoring and Optimization",
            description: "prevent downtime, troubleshoot issues quickly, and optimize network performance.",
        },
    ];
    const segmentsData = [
        {
            title: 'Broadcast Networks',
            imgSrc: '/digital1.png',
        },
        {
            title: 'Production Studios',
            imgSrc: '/digital2.png',
        },
        {
            title: 'OTT Platforms & Streaming Services',
            imgSrc: '/digital3.png',
        },
        {
            title: 'News Agencies',
            imgSrc: '/digital4.png',
        },
        {
            title: 'Advertising Agencies',
            imgSrc: '/digital5.png',
        },
        {
            title: 'Post-Production Companies',
            imgSrc: '/digital6.png',
        },
    ];
    return (
        <div>
            <Header />
            <section id="heros" className="heros1 section dark-background" data-aos="fade-right" data-aos-delay="100">
                <img src="/digital.jpg" alt="" />
                
                <div class="container text-center">
                    <div class="row justify-content-center">
                        <div class="">
                            <h2 className='profh2 text-start'>Navigating the Digital <br /> Landscape with<br />
                            Mastery   </h2>
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
 <br />
                <div className="text-styling text parbase aem-GridColumn aem-GridColumn--default--12" data-aos="fade-right" data-aos-delay="100"> 

                    <div className="hyperlink">
                        <div>
                            <div>
                                <div>
                                    <div className="innerpage" tabIndex={0}>
                                        <p className="content-h6-neuzeit-grotesk fs-6">At Spotcomm Global, we bring transformative IT solutions to the marketing digital, enabling seamless operations and innovative campaigns. Our expertise lies in building robust, scalable network infrastructures that support high-volume data, secure client communications, and advanced analytics for performance tracking. We empower marketing teams with cloud-based tools, automated systems, and real-time collaboration platforms to enhance creativity and efficiency. By integrating cutting-edge technology with deep digital insights, we ensure your marketing efforts are not just impactful but also future-ready. Spotcomm Global is your partner in driving measurable outcomes and delivering exceptional customer experiences.
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

                        <h2 className="h2 fw-bold" style={{ color: "#7F3E98" }}>Segments</h2><br />
                        <div className="services3-grid3 mx-auto">
                            {segmentsData.map((segment, index) => (
                                <div key={index} className="segment-card mx-auto">
                                    <img src={segment.imgSrc} alt={segment.title} className="segment-image" />
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
                                                                                    src="/digital7.png"
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
                                                                                    src="/digital8.png"
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

                                                                                    src="/digital9.png"
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
                                                                                    src="/digital10.png"
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

export default Digital