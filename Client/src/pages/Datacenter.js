
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

const Datacenter = () => {
    const services = [
        { title: ' Vendor Agnostic Approach', icon: '/service1.png' },
        { title: 'Industry Standard Framework', icon: '/service2.png' },
        { title: 'Fewer  Interruptions', icon: '/service3.png' },
        { title: ' Experts Engineers', icon: '/service4.png' },
        { title: 'Cost Effective Approach', icon: '/service5.png' },
        { title: 'Possible Strategic alliances', icon: '/service6.png' },
        { title: 'Better Application Of Resources', icon: '/service7.png' },
        { title: 'No DownTime', icon: '/service8.png' },
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
        <div style={{ background: "#E1E0E0" }}>
            <Header />
            <section id="heros" class="heros1 section dark-background" data-aos="fade-right" data-aos-delay="100">

                <img src="/datacenter.png" alt="" />

                <div class="container text-center" >
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <h2 className=''>Data Center Management
                                Services</h2>
                        </div>
                    </div>
                </div>

            </section><br />
            <p className='text-center para mx-auto  fs-5' data-aos="fade-right" data-aos-delay="100">
                Spotcomm Global offers Data Center Management Services by assessing existing data center infrastructure and by rendering solutions that support critical and dense environments. We use the most comprehensive automation solution, we monitor and administer the data centers integrated with service management tools.
                In today’s digital world, Data Centers Management has become the backbone of modern IT Companies, facilitating critical access to information that fuels business operations and innovation. The importance of a data center management in streamlining seamless access to important data cannot be overlooked. With the increasing reliance on data and the complexity of managing diverse infrastructures, ensuring uninterrupted access to this key resource has become a pressing challenge.
                As companies move ahead in the digital era, they encounter dynamic requirements that highlight huge strain on data centers hosting architectures and designs. The integrations and complexities of diverse technologies, including on-premises legacy operating systems, virtual setups, hyper-converged solutions, private and public clouds, and other facilities, has further deepened the need for well-managed, effective, high availability and adaptable data center operations teams.
            </p> <br /><br />
            {/* <div className='btn-gradient-2' data-aos="fade-right" data-aos-delay="100" >
                <h2 className='text-dark text-center mx-auto'>
                    Services that we offer to Manage your <span className='' style={{ color: "#7F3E98" }}>Data Center</span>

                </h2>
            </div> */}
            <img src='/datacenter1.png' className='w-100' />
            <h2 className='datah2 mt-5 fw-bold' data-aos="fade-up" data-aos-delay="100">
                Data Center Design & Migration
            </h2> <br />
            <div className='container'>
                <div className='row  d-flex justify-content-center mx-auto'>
                    <div className='col-lg-5 ' data-aos="fade-right" data-aos-delay="100"><img src='/data (1).png' /></div>
                    <div className='col-lg-5 ' data-aos="fade-right" data-aos-delay="100"><img src='/data (2).png' /></div>
                </div>
                <div className='row  d-flex justify-content-center mx-auto'>
                    <div className='col-lg-5 ' data-aos="fade-right" data-aos-delay="100"><img src='/data (3).png' /></div>
                    <div className='col-lg-5 ' data-aos="fade-right" data-aos-delay="100"><img src='/data (4).png' /></div>
                </div>

                <h2 className='datah2 mt-5 fw-bold'>
                    Data Center Consolidation

                </h2> <br />
                <div className='container'>
                    <div className='row  d-flex justify-content-center mx-auto'>
                        <div className='col-lg-5 ' data-aos="fade-right" data-aos-delay="100"><img src='/data (5).png' /></div>
                        <div className='col-lg-5 ' data-aos="fade-right" data-aos-delay="100"><img src='/data (6).png' /></div>
                    </div>
                    <div className='row  d-flex justify-content-center mx-auto'>
                        <div className='col-lg-5 ' data-aos="fade-right" data-aos-delay="100"><img src='/data (7).png' /></div>
                        <div className='col-lg-5 ' data-aos="fade-right" data-aos-delay="100"><img src='/data (8).png' /></div>
                    </div>
                </div>
                <h2 className='datah2 mt-5 fw-bold'>
                    Disaster Recovery


                </h2> <br />

                <div className='row  d-flex justify-content-center mx-auto'>
                    <div className='col-lg-5 ' data-aos="fade-right" data-aos-delay="100"><img src='/data (10).png' /></div>
                    <div className='col-lg-5 ' data-aos="fade-right" data-aos-delay="100"><img src='/data (11).png' /></div>
                </div>
                <div className='row  d-flex justify-content-center mx-auto'>
                    <div className='col-lg-5 ' data-aos="fade-right" data-aos-delay="100"><img src='/data (12).png' /></div>
                    <div className='col-lg-5 ' data-aos="fade-right" data-aos-delay="100"><img src='/data (13).png' /></div>

                </div>
                <div className='row  d-flex justify-content-center mx-auto'>
                    <div className='col-lg-10' data-aos="fade-right" data-aos-delay="100"><img src='/data (19).png' /></div>
                </div>

                <h2 className='datah2 mt-5 fw-bold' data-aos="fade-right" data-aos-delay="100">
                    DC Hosting and Cloud
                </h2> <br />

                <div className='row  d-flex justify-content-center mx-auto'>
                    <div className='col-lg-5 ' data-aos="fade-right" data-aos-delay="100"><img src='/data (14).png' /></div>
                    <div className='col-lg-5 ' data-aos="fade-right" data-aos-delay="100"><img src='/data (15).png' /></div>
                </div>
                <div className='row  justify-content-center mx-auto'>
                    <div className='col-lg-5 ' data-aos="fade-right" data-aos-delay="100"><img src='/data (16).png' /></div>

                </div>
                <h2 className='datah2 mt-5 fw-bold' data-aos="fade-right" data-aos-delay="100">
                    Remote Infrastructure Management



                </h2> <br />
                <div className='row  d-flex justify-content-center mx-auto'>
                    <div className='col-lg-5 '><img src='/data (4).png' /></div>
                    <div className='col-lg-5 '><img src='/data (5).png' /></div>
                </div>
                <div className='row  d-flex justify-content-center mx-auto'>
                    <div className='col-lg-5 ' data-aos="fade-right" data-aos-delay="100"><img src='/data (6).png' /></div>
                    <div className='col-lg-5 ' data-aos="fade-right" data-aos-delay="100"><img src='/data (7).png' /></div>
                </div>
                <div className='row  d-flex justify-content-center mx-auto'>
                    <div className='col-lg-5 ' data-aos="fade-right" data-aos-delay="100"><img src='/data (8).png' /></div>
                    <div className='col-lg-5 ' data-aos="fade-right" data-aos-delay="100"><img src='/data (9).png' /></div>
                </div>
                <div className='row  d-flex justify-content-center mx-auto'>
                    <div className='col-lg-5 ' data-aos="fade-right" data-aos-delay="100"><img src='/data (10).png' /></div>
                    <div className='col-lg-5 ' data-aos="fade-right" data-aos-delay="100 "><img src='/data (11).png' /></div>
                </div>
                <div className='row  d-flex justify-content-center mx-auto'>
                    <div className='col-lg-5 ' data-aos="fade-right" data-aos-delay="100"><img src='/data (12).png' /></div>

                </div>
                <br />
                <br />

                <h2 className='text-dark text-center mx-auto w-50' data-aos="fade-right" data-aos-delay="100">
                    WHAT WE OFFER
                </h2>
                <br />
                <p className='text-dark text-center' data-aos="fade-right" data-aos-delay="100">
                    Spotcomm’s Managed Data Center Services covers all four key areas of an IT infrastructure lifecycle: from Design, Build, Improvement and Management. Our expertise lies in the system integration and systems management aspects of the IT infrastructure, and we provide the following services:


                </p> <br />
                {/* <div className='container'>
                    <div className="row " >
                        <div className='col-lg-6 d-flex align-items-center justify-content-center' style={{ background: "#fff", flexDirection: "column" }}>


                        
                            <div className="cmp-teaser__content-wrapper ml-3 mx-5">
                                <h2 className=" ">
                                    <a
                                        className=" "

                                        rel="nofollow"
                                        target="_blank"
                                    >
                                        Data center optimization:
                                    </a>
                                </h2>
                                <div className="cmp-teaser__description">
                                    <p className='w-75 '>
                                        Helps your business deliver more efficient and cost-effective data-center services to business users, while improving service availability.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <img src='/datacenter2.png' />
                        </div>
                        <div className='col-lg-6'>

                            <img src='/datacenter (2).png' />
                        </div>
                        <div className='col-lg-6 d-flex align-items-center justify-content-center' style={{ background: "#BCBCBC", flexDirection: "column" }}>
                            <div className="cmp-teaser__content-wrapper ml-3">
                                <h2 className=" ">
                                    <a
                                        className=" "

                                        rel="nofollow"
                                        target="_blank"
                                    >
                                        Data center automation:
                                    </a>
                                </h2>
                                <div className="cmp-teaser__description">
                                    <p className='w-75 '>
                                        Automates the typically manual tasks associated with provisioning, patching and support of data center services.


                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 d-flex align-items-center justify-content-center' style={{ background: "#fff", flexDirection: "column" }}>


                        
                            <div className="cmp-teaser__content-wrapper ml-3">
                                <h2 className=" ">
                                    <a
                                        className=" "

                                        rel="nofollow"
                                        target="_blank"
                                    >
                                        Private cloud implementation:
                                    </a>
                                </h2>
                                <div className="cmp-teaser__description">
                                    <p className='w-75 '>
                                        Builds Infrastructure-as-a-Service (IaaS) cloud computing solutions aligned to a service catalog, with optional service assurance definitions, and metering and building.

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <img src='/datacenter (4).png' />
                        </div>
                        <div className='col-lg-6'>

                            <img src='/datacenter (3).png' />
                        </div>
                        <div className='col-lg-6 d-flex align-items-center justify-content-center' style={{ background: "#BCBCBC", flexDirection: "column" }}>
                            <div className="cmp-teaser__content-wrapper ml-3">
                                <h2 className=" ">
                                    <a
                                        className=" "

                                        rel="nofollow"
                                        target="_blank"
                                    >
                                        Hosting and Co-location services
                                    </a>
                                </h2>
                                <div className="cmp-teaser__description">
                                    <p className='w-75 '>
                                        Our hosting and Co-location facilities offer space, security, cooling, power and bandwidth for hosting and co-locating data infrastructure. Businesses then typically purchase, configure, and maintain all their hardware in the co-location facility. In addition, your colocation solution with Spotcomm may involve Spotcomm’s Cloud & IT Services to assist or provide cloud services and resources.

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 d-flex align-items-center justify-content-center' style={{ background: "#fff", flexDirection: "column" }}>



                            <div className="cmp-teaser__content-wrapper ml-3">
                                <h2 className=" ">
                                    <a
                                        className=" "

                                        rel="nofollow"
                                        target="_blank"
                                    >
                                        Private cloud implementation:
                                    </a>
                                </h2>
                                <div className="cmp-teaser__description">
                                    <p className='w-75 '>
                                        Builds Infrastructure-as-a-Service (IaaS) cloud computing solutions aligned to a service catalog, with optional service assurance definitions, and metering and building.

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <img src='/datacenter (1).png' />
                        </div>
                    </div>

                    <br /> <br />

                    <h2 className='text-dark text-center mx-auto w-100'>
                        How We Manage Data Centers
                    </h2>

                    <p className='text-dark text-center' data-aos="fade-right" data-aos-delay="100">
                        Spotcomm manages the Data Centers will help you leverage on the knowledge of our highly educated engineers and experts to design, deploy and maintain your Data Centers. With our Datacenter Service, we delivers:


                    </p> <br />


                    <div className="row " >
                        <div className='col-lg-6 d-flex align-items-center justify-content-center' style={{ background: "#fff", flexDirection: "column" }}>


                        
                            <div className="cmp-teaser__content-wrapper ml-3 mx-5">
                                <h2 className=" ">
                                    <a
                                        className=" "

                                        rel="nofollow"
                                        target="_blank"
                                    >
                                        Enhanced Infrastructure efficiency:
                                    </a>
                                </h2>
                                <div className="cmp-teaser__description">
                                    <p className='w-75 '>
                                        Leverage existing, emerging, and innovative data center technologies and automated tools to streamline data center operations, improve efficiencies and productivity.

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <img src='/datacenter (6).png' />
                        </div>
                        <div className='col-lg-6'>

                            <img src='/datacenter (5).png' />
                        </div>
                        <div className='col-lg-6 d-flex align-items-center justify-content-center' style={{ background: "#BCBCBC", flexDirection: "column" }}>
                            <div className="cmp-teaser__content-wrapper ml-3">
                                <h2 className=" ">
                                    <a
                                        className=" "

                                        rel="nofollow"
                                        target="_blank"
                                    >
                                        Increased Business Agility
                                    </a>
                                </h2>
                                <div className="cmp-teaser__description">
                                    <p className='w-75 '>
                                        Align data center infrastructure and associated capabilities with business goals to help translate overall business objectives into tangible IT services specific to the data center.


                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 d-flex align-items-center justify-content-center' style={{ background: "#fff", flexDirection: "column" }}>


                        
                            <div className="cmp-teaser__content-wrapper ml-3">
                                <h2 className=" ">
                                    <a
                                        className=" "

                                        rel="nofollow"
                                        target="_blank"
                                    >
                                        Optimized Operational Cost:
                                    </a>
                                </h2>
                                <div className="cmp-teaser__description">
                                    <p className='w-75 '>
                                        Optimize cost and ensure the appropriate use of information resources with reusable assets and tools, combined with the ability to ramp-up or down.


                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <img src='/datacenter (7).png' />
                        </div>
                        <div className='col-lg-6'>

                            <img src='/datacenter (8).png' />
                        </div>
                        <div className='col-lg-6 d-flex align-items-center justify-content-center' style={{ background: "#BCBCBC", flexDirection: "column" }}>
                            <div className="cmp-teaser__content-wrapper ml-3">
                                <h2 className=" ">
                                    <a
                                        className=" "

                                        rel="nofollow"
                                        target="_blank"
                                    >
                                        Improved data center scalability and privacy:
                                    </a>
                                </h2>
                                <div className="cmp-teaser__description">
                                    <p className='w-75 '>
                                        Enhance scalability and adaptability of your data center with regular project mentoring for new technologies, and consolidation and virtualization. Our model also ensures data security, integrity, and reliability.

                                    </p>
                                </div>
                            </div>
                        </div>
                       
                    </div>

                    <br /><br />

                </div> */}
                <div className="teaser teaser--full-size aem-GridColumn aem-GridColumn--default--12" data-aos-delay="200">
                    <div className="cmp-teaser cmp-teaser--1095483950    ">
                        <div
                            className="cmp-teaser__content"
                            style={{}}
                        >
                            <div className="cmp-teaser__content-wrapper">
                                <h2 className="  text-dark ">
                                    <a
                                        className=""
                                        href=""
                                        rel="nofollow"
                                        target="_blank"
                                    >
                                        Data center optimization:
                                    </a>
                                </h2> <br />
                                <div className="cmp-teaser__description">
                                    <p className='text-dark'>
                                        <p className='para '> <br />
                                            Helps your business deliver more efficient and cost-effective data-center services to business users, while improving service availability.
                                        </p>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="cmp-teaser__image">
                            <img src="/datacenter2.png" />
                        </div>
                    </div>
                </div>
                <div className="teaser teaser--full-size teaser--image-left aem-GridColumn aem-GridColumn--default--12" data-aos-delay="200">
                    <div className="cmp-teaser cmp-teaser--638358011    ">
                        <div
                            className="cmp-teaser__content"
                            style={{}}
                        >
                            <div className="cmp-teaser__content-wrapper">
                                <h2 className=" ">
                                    <a
                                        className=" "

                                        rel="nofollow"
                                        target="_blank"
                                    >
                                        Data center automation:
                                    </a>
                                </h2>
                                <div className="cmp-teaser__description">
                                    <p className='w-75 '>
                                        Automates the typically manual tasks associated with provisioning, patching and support of data center services.


                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="cmp-teaser__image">

                            <img src='/datacenter (2).png' />
                        </div>
                    </div>
                </div>
                <div className="teaser teaser--full-size aem-GridColumn aem-GridColumn--default--12" data-aos-delay="200">
                    <div className="cmp-teaser cmp-teaser--718471742    ">
                        <div
                            className="cmp-teaser__content"
                            style={{}}
                        >
                            <div className="cmp-teaser__content-wrapper">
                                <h2 className="  ">
                                    <a
                                        className=" "

                                        rel="nofollow"
                                        target="_blank"
                                    >
                                        Private cloud implementation:
                                    </a>
                                </h2>
                                <div className="cmp-teaser__description">
                                    <p className='w-75 '>
                                        Builds Infrastructure-as-a-Service (IaaS) cloud computing solutions aligned to a service catalog, with optional service assurance definitions, and metering and building.

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="cmp-teaser__image">

                            <img src='/datacenter (4).png' />
                        </div>
                    </div>
                </div>
                <div className="teaser teaser--full-size teaser--image-left aem-GridColumn aem-GridColumn--default--12" data-aos-delay="200">
                    <div
                        className="cmp-teaser cmp-teaser-2010868465    "
                        id="insights"
                    >
                        <div
                            className="cmp-teaser__content"
                            style={{}}
                        >
                            <div className="cmp-teaser__content-wrapper">
                                <h2 className="  ">
                                    <a
                                        className=" "

                                        rel="nofollow"
                                        target="_blank"
                                    >
                                        Hosting and Co-location services
                                    </a>
                                </h2>
                                <div className="cmp-teaser__description">
                                    <p className='w-75 fs-6'>
                                        Our hosting and Co-location facilities offer space, security, cooling, power and bandwidth for hosting and co-locating data infrastructure. Businesses then typically purchase, configure, and maintain all their hardware in the co-location facility. In addition, your colocation solution with Spotcomm may involve Spotcomm’s Cloud & IT Services to assist or provide cloud services and resources.

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="cmp-teaser__image">

                            <img src='/datacenter (3).png' />
                        </div>
                    </div>
                </div>
                <div className="teaser teaser--full-size aem-GridColumn aem-GridColumn--default--12" data-aos-delay="200">
                    <div className="cmp-teaser cmp-teaser--718471742    ">
                        <div
                            className="cmp-teaser__content"
                            style={{}}
                        >
                            <div className="cmp-teaser__content-wrapper">
                                <h2 className="  ">
                                    <a
                                        className=" "

                                        rel="nofollow"
                                        target="_blank"
                                    >
                                        Private cloud implementation:
                                    </a>
                                </h2>
                                <div className="cmp-teaser__description">
                                    <p className='w-75 '>
                                        Builds Infrastructure-as-a-Service (IaaS) cloud computing solutions aligned to a service catalog, with optional service assurance definitions, and metering and building.

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="cmp-teaser__image">

                            <img src='/datacenter (1).png' />
                        </div>
                    </div>
                </div>
 <br /> <br />
                <h2 className='text-dark text-center mx-auto w-100'>
                    How We Manage Data Centers
                </h2>
                <br />
                <p className='text-dark text-center w-75 mx-auto' data-aos="fade-right" data-aos-delay="100">
                    Spotcomm manages the Data Centers will help you leverage on the knowledge of our highly educated engineers and experts to design, deploy and maintain your Data Centers. With our Datacenter Service, we delivers:


                </p> <br />

                <div className="teaser teaser--full-size aem-GridColumn aem-GridColumn--default--12" data-aos-delay="200">
                    <div className="cmp-teaser cmp-teaser--1095483950    "> <br />
                        <div
                            className="cmp-teaser__content"
                            style={{}}
                        > 
                            <div className="cmp-teaser__content-wrapper">
                            <h2 className=" ">
                                    <a
                                        className=" "

                                        rel="nofollow"
                                        target="_blank"
                                    >
                                        Enhanced Infrastructure efficiency:
                                    </a>
                                </h2>
                                <div className="cmp-teaser__description">
                                    <p className='w-75 '>
                                        Leverage existing, emerging, and innovative data center technologies and automated tools to streamline data center operations, improve efficiencies and productivity.

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="cmp-teaser__image">
                            <img src="/datacenter (5).png" />
                        </div>
                    </div>
                </div>
                <div className="teaser teaser--full-size teaser--image-left aem-GridColumn aem-GridColumn--default--12" data-aos-delay="200">
                    <div className="cmp-teaser cmp-teaser--638358011    ">
                        <div
                            className="cmp-teaser__content"
                            style={{}}
                        >
                            <div className="cmp-teaser__content-wrapper">
                            <h2 className=" ">
                                    <a
                                        className=" "

                                        rel="nofollow"
                                        target="_blank"
                                    >
                                        Increased Business Agility
                                    </a>
                                </h2>
                                <div className="cmp-teaser__description">
                                    <p className='w-75 '>
                                        Align data center infrastructure and associated capabilities with business goals to help translate overall business objectives into tangible IT services specific to the data center.


                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="cmp-teaser__image">

                            <img src='/datacenter (6).png' />
                        </div>
                    </div>
                </div>
                <div className="teaser teaser--full-size aem-GridColumn aem-GridColumn--default--12" data-aos-delay="200">
                    <div className="cmp-teaser cmp-teaser--718471742    ">
                        <div
                            className="cmp-teaser__content"
                            style={{}}
                        >
                            <div className="cmp-teaser__content-wrapper">
                            <h2 className=" ">
                                    <a
                                        className=" "

                                        rel="nofollow"
                                        target="_blank"
                                    >
                                        Optimized Operational Cost:
                                    </a>
                                </h2>
                                <div className="cmp-teaser__description">
                                    <p className='w-75 '>
                                        Optimize cost and ensure the appropriate use of information resources with reusable assets and tools, combined with the ability to ramp-up or down.


                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="cmp-teaser__image">

                            <img src='/datacenter (7).png' />
                        </div>
                    </div>
                </div>
                <div className="teaser teaser--full-size teaser--image-left aem-GridColumn aem-GridColumn--default--12" data-aos-delay="200">
                    <div className="cmp-teaser cmp-teaser--638358011    ">
                        <div
                            className="cmp-teaser__content"
                            style={{}}
                        >
                            <div className="cmp-teaser__content-wrapper">
                            <h2 className=" ">
                                    <a
                                        className=" "

                                        rel="nofollow"
                                        target="_blank"
                                    >
                                        Increased Business Agility
                                    </a>
                                </h2>
                                <div className="cmp-teaser__description">
                                    <p className='w-75 '>
                                        Align data center infrastructure and associated capabilities with business goals to help translate overall business objectives into tangible IT services specific to the data center.


                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="cmp-teaser__image">

                            <img src='/datacenter (8).png' />
                        </div>
                    </div>
                </div>
              
            </div>
            <section className="services-section bg-dark"  >
                <h2 className='text-center text-light'>  Why Ask Spotcomm to Manage your Data Center</h2>
                <Desktop>
                    <div className="services-grid row"  >
                        {services.map((service, index) => (
                            <div className="col-lg-3 service mx-auto mt-5" data-aos="fade-right" data-aos-delay="100" key={index}>
                                <div
                                    className="service-card"
                                    style={{ "--image-url": `url(${service.icon})` }}  // Setting the image URL
                                > <br /> <br />
                                    <div className="service-title fs-6 fw-bold">{service.title}</div>

                                </div>
                            </div>
                        ))}
                    </div>


                </Desktop>
                <Mobile>
                    <div className="services-grid row">
                        <Swiper modules={[Navigation, A11y, Autoplay]}
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
                                    <div className="col-lg-3 service mx-auto mt-5">
                                        <div
                                            className="service-card"
                                            style={{ "--image-url": `url(${service.icon})` }}  // Setting the image URL
                                        > <br />
                                            <div className="service-title">{service.title}</div>

                                        </div>
                                    </div>

                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </Mobile>


            </section>
            <Demo />
        </div>
    )
}

export default Datacenter