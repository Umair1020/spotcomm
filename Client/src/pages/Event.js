import React from 'react'
import Header from '../components/Header'
import Demo from '../components/Navbar';

const Event = () => {
    const solutions = [
        {

            imgSrc: "/event (2).png",
            title: "WiFi Services",
            description: "Seamless WiFi connectivity for unforgettable event experiences.",
        },
        {

            imgSrc: "/event (3).png",
            title: "Event Monitoring Services",
            description: "Comprehensive event monitoring ensuring flawless operational success. ",
        },
        {

            imgSrc: "/event (4).png",
            title: "Connectivity for Web-Conferencing",
            description: "Reliable connectivity empowering seamless web conferencing events.",
        },
        {

            imgSrc: "/event (1).png",
            title: "Dedicated Connectivity for Events",
            description: "Dedicated connectivity delivering seamless internet for events.",
        },
        {

            imgSrc: "/event (5).png",
            title: "Entire Outsourced Event Organization Services",
            description: "Complete outsourced solutions for seamless event organization success.",
        },
   
        {

            imgSrc: "/event (6).png",
            title: "Cabling Infrasturcture for events",
            description: "Robust cabling infrastructure ensuring flawless event connectivity.",
        },
       
    ];
    const segmentsData = [
        {
            title: 'Broadcast Networks',
            imgSrc: '/event1.png',
        },
        {
            title: 'Production Studios',
            imgSrc: '/event2.png',
        },
        {
            title: 'OTT Platforms & Streaming Services',
            imgSrc: '/event3.png',
        },
        {
            title: 'News Agencies',
            imgSrc: '/event4.png',
        },
        {
            title: 'Advertising Agencies',
            imgSrc: '/event5.png',
        },
        {
            title: 'Post-Production Companies',
            imgSrc: '/event6.png',
        },
    ];
    return (
        <div>
            <Header />
            <section id="heros" className="heros1 section dark-background">
                <img src="/event.jpg" alt="" />
                <div class="container text-start" >
                    <div class="row justify-content-start">
                        <div class="col-lg-8">
                            <h2>Events Industry</h2>
                        </div>
                    </div>
                </div>
            </section>
           
            <div className="segments-container" style={{ background: "#E8E8E8" }}> <br />
                <div className='container'>
                    <div className=''>

                        <h2 className="h2 fw-bold" style={{ color: "#7F3E98" }}>What We Cover</h2><br />
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
                                                                                    src="/event7.png"
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
                                                                                    src="/event8.png"
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

                                                                                    src="/event9.png"
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
                                                                                    src="/event10.png"
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
                        <div key={index} className="grid-item"  data-aos="fade-right" data-aos-delay="100">
                            <img src={service.imgSrc}  alt={service.title}  />
                            <div className='p-2'>
                                <h3 className='fs-4'>{service.title}</h3>
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

export default Event