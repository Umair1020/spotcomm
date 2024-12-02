import React, { useState } from "react";
import Header from "../components/Header"
import "../App.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { useMediaQuery } from 'react-responsive';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation, Scrollbar, A11y } from 'swiper/modules';
import Demo from '../components/Navbar';


const Healthcare = () => {
  const [activeTab, setActiveTab] = useState("tab-a-stronger-healthcare-core");

  const services = [
    {
      image: '/health (9).png', // Replace with actual image paths
      title: 'Business Continuity in Healthcare',
      description: 'Sizing and Configuring Power systems for Reliability and Cost-Effectiveness',
    },
    {
      image: '/health (12).png',
      title: 'Achieving a Higher Level of Data Center Efficiency',
      description: 'Improving data center performancedoesn’t necessarily entail a costly upgrade. With optimization, youcan have a highly efficient data center at lower costs.',
    },
    {
      image: '/health (13).png',
      title: 'Cloud, IoT, Edge and Data enter',
      description: 'Best practices in protecting the technology systems revolutionizing healthcare',
    },
    {
      image: '/health (15).png',
      title: 'Telehealth and the Edge: Infrastructure Considerations for Remote Patient Care',
      description: 'Telehealth, previously a simmering patient engagement option, haserupted causing healthcare IT managers and CIOs to considernew IT strategies and investments.',
    },

  ];
  // Function to handle tab switching
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  const solutions = [
    {

      imgSrc: "/health (3).png",
      title: "Revenue Cycle Management (RCM)",
      description: "Your blueprint for revenue cycle excellence.",
    },
    {

      imgSrc: "/health (1).png",
      title: "Spotcomm’s Interoperability solution",
      description: "Process efficiency: The heartbeat of cost competitiveness",
    },
    {
      href: "",
      imgSrc: "/health (2).png",
      title: "Comprehensive solution for Medicare Advantage market",
      description: "A turnkey solution for compliance while seamlessly integrating with enterprise systems",
    },
    {

      imgSrc: "/health (4).png",
      title: "Spotcomm Enterprise Medicaid as a Service",
      description: "From Fictional Collaboration to Functional Collaboration.",
    }, {
      href: "",
      imgSrc: "/health (2).png",
      title: "Healthcare Business Process Solutions",
      description: "A turnkey solution for compliance while seamlessly integrating with enterprise systems",
    },
    {
      href: "/healthcare/provider-lifecycle-management-plm/",
      imgSrc: "/health (4).png",
      title: "Provider Lifecycle Management (PLM)",
      description: "From Fictional Collaboration to Functional Collaboration.",
    },
    {
      href: "",
      imgSrc: "/health (2).png",
      title: "Enrollment and Billing",
      description: "A turnkey solution for compliance while seamlessly integrating with enterprise systems",
    },
    {
      href: "/healthcare/provider-lifecycle-management-plm/",
      imgSrc: "/health (4).png",
      title: "Healthcare Insurance Exchanges",
      description: "From Fictional Collaboration to Functional Collaboration.",
    },
    {
      href: "",
      imgSrc: "/health (2).png",
      title: "Provider Credentialing",
      description: "A turnkey solution for compliance while seamlessly integrating with enterprise systems",
    },
    {
      href: "/healthcare/provider-lifecycle-management-plm/",
      imgSrc: "/health (4).png",
      title: "Revenue Cycle Management (RCM)",
      description: "From Fictional Collaboration to Functional Collaboration.",
    },
    {
      href: "",
      imgSrc: "/health (2).png",
      title: "Health Insurance Exchange (HIX)",
      description: "A turnkey solution for compliance while seamlessly integrating with enterprise systems",
    },
    {
      href: "/healthcare/provider-lifecycle-management-plm/",
      imgSrc: "/health (4).png",
      title: "Value Based Care",
      description: "From Fictional Collaboration to Functional Collaboration.",
    },
    {
      href: "",
      imgSrc: "/health (2).png",
      title: "Intelligent Document Management solution",
      description: "A turnkey solution for compliance while seamlessly integrating with enterprise systems",
    },
    {
      href: "/healthcare/provider-lifecycle-management-plm/",
      imgSrc: "/health (4).png",
      title: "Advance Healthcare Data Analytics ",
      description: "From Fictional Collaboration to Functional Collaboration.",
    },
    {
      href: "/healthcare/provider-lifecycle-management-plm/",
      imgSrc: "/health (4).png",
      title: "ICD 10 Compliance and Quality Assurance ",
      description: "From Fictional Collaboration to Functional Collaboration.",
    }
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
      <div>
        <Header />
        <div>
          <section id="heros" className="heros1 section dark-background">
            <img src="/healthbanner.png" alt="" />
            <div class="container text-start" >
              <div class="row justify-content-start">
                <div class="col-lg-8">
                  <h2>Spotcomm: Gearing for the <br />
                    Future of Healthcare</h2>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="solution-detail-component container">

          <div className="wrapper-background">
            <section className="page-section">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12 col-sm-7">
                    <h2>What is happening?</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-sm-4">
                    <p>
                      <img
                        src="/health (1).png"
                        width={350}
                        height={262}
                      />
                    </p>
                    <h3>
                      <strong>Patient Empowerment</strong>
                    </h3> <br />
                    <table>
                      <tbody>
                        <tr>
                          <td valign="top" >
                            •
                          </td>
                          <td style={{ padding: "0 15px" }}>
                            <p>
                              Ease and convenience brought by new technologies have led
                              to a more empowered patient, increasing the demand for
                              quality healthcare services and higher satisfaction
                              overall.
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-xs-12 col-sm-4">
                    <p>
                      <img
                        src="/health (2).png"
                        width={350}
                        height={262}
                      />
                    </p>
                    <h3>
                      <strong>Internet of Medical Things</strong>
                    </h3>  <br />
                    <table>
                      <tbody>
                        <tr>
                          <td valign="top" >
                            •
                          </td>
                          <td style={{ padding: "0 15px" }}>
                            <p>
                              Wearables, mobile apps and other tools are increasingly
                              becoming a part of the bigger picture of patient care.
                            </p>
                          </td>
                        </tr>
                      </tbody> <br />
                    </table>
                  </div> <br />
                  <div className="col-xs-12 col-sm-4">
                    <p>
                      <img
                        src="/health (3).png"
                        width={350}
                        height={262}
                      />
                    </p>
                    <h3>
                      <strong>Data Security and Sovereignty </strong>
                    </h3> <br />
                    <table>
                      <tbody>
                        <tr>
                          <td valign="top" >
                            •
                          </td>
                          <td style={{ padding: "0 15px" }}>
                            <p>
                              As more personal information is stored online, data
                              security becomes imperative.
                            </p>
                          </td>
                        </tr>
                      </tbody> <br />
                    </table>
                  </div>
                </div>
              </div>
            </section>
            <section className="page-section">
              <div className="container">
                <h2>Spotcomm Powers Imaging Equipment</h2> <br />
                <div className="row">
                  <div className="col-sm-12 col-xs-12">
                    <h5>
                      Technology is rapidly transforming healthcare and playing a significant role in improving personal health. Find out
                      how Vertiv Solutions Help Support Healthcare Applications
                    </h5>  <br />
                  </div>
                  <div className="col-sm-4 col-xs-12">
                    <img
                      className="responsive px-3"
                      src="/health (4).png"
                      height={300}
                    />
                  </div>
                  <div className="col-sm-7 mx-2 col-xs-12">
                    <ul> <br />
                      <li>
                        <span>
                          Robust power backup in the case of unexpected power outages
                        </span>
                      </li>  <br />
                      <li>
                        <span>Extended UPS service life and battery run time</span>
                      </li> <br />
                      <li>
                        <span>
                          Simplified installation, management, and maintenance
                        </span>
                      </li> <br />
                      <li>
                        <span>
                          Ensuring crystal clear images is a top priority by maintaining
                          high power quality
                        </span>
                      </li>
                    </ul>
                    <br />

                    <button
                      className="btns1 "
                    >
                      EXPLORE MORE
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <div class="tabbed-nav-component">
              <div className="tabbed-section-component clearfix">
                <div className="container">
                  <h2>Infrastructure Challenges</h2> <br />
                  <ul class="nav nav-tabs" role="tablist">

                    <li
                      role="presentation"
                      className={activeTab === "tab-a-stronger-healthcare-core" ? "active" : ""}
                    >
                      <a className="text-dark" href="#tab-a-stronger-healthcare-core" onClick={() => handleTabClick("tab-a-stronger-healthcare-core")} aria-controls="tab-a-stronger-healthcare-core" role="tab" data-toggle="tab" aria-expanded="false">A Stronger Healthcare Core</a>
                    </li>
                    <li
                      role="presentation"
                      className={activeTab === "tab-growth-at-the-healthcare-edge" ? "active" : ""}
                    >
                      <a className="text-dark" href="#tab-growth-at-the-healthcare-edge" onClick={() => handleTabClick("tab-growth-at-the-healthcare-edge")} aria-controls="tab-growth-at-the-healthcare-edge" role="tab" data-toggle="tab" aria-expanded="false">Growth at the Healthcare Edge</a>
                    </li>
                    <li
                      role="presentation"
                      className={activeTab === "tab-visibility-at-the-facility" ? "active" : ""}
                    >
                      <a className="text-dark" href="#tab-visibility-at-the-facility" onClick={() => handleTabClick("tab-visibility-at-the-facility")} aria-controls="tab-visibility-at-the-facility" role="tab" data-toggle="tab" aria-expanded="false">Visibility at the Facility</a>
                    </li>
                    <li
                      role="presentation"
                      className={activeTab === "tab-protecting-critical-healthcare-operations" ? "active" : ""}
                    >
                      <a className="text-dark" href="#tab-protecting-critical-healthcare-operations" onClick={() => handleTabClick("tab-protecting-critical-healthcare-operations")} aria-controls="tab-protecting-critical-healthcare-operations" role="tab" data-toggle="tab" aria-expanded="true">Protecting Critical Healthcare Operations</a>
                    </li>
                  </ul>

                </div>


                <div className="tab-content">
                  {/* Tab A */}
                  <div
                    className={`tab-pane ${activeTab === "tab-a-stronger-healthcare-core" ? "active" : "hidden"
                      }`}
                  >


                    <div
                      role="tabpanel"
                      className="tab-pane active"
                      id="tab-protecting-critical-healthcare-operations"
                    >
                      <div>
                        <div className="block featuredvideo  ">
                          <section className="page-section ">
                            <div className="container  ">
                              <div className="row solutions__stats_container  my-2 mb-xs-4 media-div__mobile">
                                <div className="col-lg-5 col-sm-12 pr-sm-4 media-on-top__mobile ">
                                  <ul>
                                    <li className="w-75" >
                                      <span style={{ color: "#333333" }}>
                                        Technology has become an essential component of healthcare.

                                      </span>
                                    </li><br />
                                    <li className="w-75" >
                                      <span style={{ color: "#333333" }}>

                                        As reliance on IT grows, the demand for stronger and more agile data centers becomes crucial.
                                      </span>
                                    </li><br />
                                    <li className="w-75" >
                                      <span style={{ color: "#333333" }}>


                                        IT managers need to invest in innovative approaches and technologies to support critical infrastructure.
                                      </span>
                                    </li>
                                  </ul>
                                </div>

                                <div className="col-lg-6 col-sm-6"> <br />
                                  <div className="media-section">
                                    <img
                                      className="w-100 pt-xs-1 pt-sm-2 mx-2"
                                      src="/health (5).png"
                                    />
                                  </div>
                                  <p className="page-section-p-s"></p>
                                </div>

                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Tab B */}
                  <div
                    className={`tab-pane ${activeTab === "tab-growth-at-the-healthcare-edge" ? "active" : "hidden"
                      }`}
                  >
                    <div
                      role="tabpanel"
                      className="tab-pane active"
                      id="tab-protecting-critical-healthcare-operations"
                    >
                      <div>
                        <div className="block featuredvideo  ">
                          <section className="page-section ">
                            <div className="container  ">
                              <div className="solutions__stats_container row my-2 mb-xs-4 media-div__mobile">
                                <div className="col-lg-6 col-sm-6 pr-sm-4 media-on-top__mobile">
                                  <ol>
                                    <li className="w-75" >
                                      <span style={{ color: "#333333" }}>
                                        IT managers are responsible for visibility of what’s going on
                                        throughout the critical facility, to ensure security and continuity of a
                                        hospital’s IT system



                                      </span>
                                    </li> <br />
                                    <li className="w-75" >
                                      <span style={{ color: "#333333" }}>
                                        A proactive approach is essential instead of a reactive one, so any
                                        problems are detected before they happen
                                      </span>
                                    </li> <br />
                                    <li className="w-75" >
                                      <span style={{ color: "#333333" }}>

                                        A predictive monitoring solution enables the planning of specific
                                        points of defense in any future eventuality
                                      </span>
                                    </li>
                                  </ol>
                                </div>

                                <div className="col-lg-6 col-sm-6"> <br />
                                  <div className="media-section">
                                    <img
                                      className="w-100 pt-xs-1 pt-sm-2"
                                      src="/health (7).png"
                                    />
                                  </div>
                                  <p className="page-section-p-s"></p>
                                </div>
                              </div>

                            </div>
                          </section>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Tab C */}
                  <div
                    className={`tab-pane ${activeTab === "tab-visibility-at-the-facility" ? "active" : "hidden"
                      }`}
                  >
                    <div
                      role="tabpanel"
                      className="tab-pane active"
                      id="tab-protecting-critical-healthcare-operations"
                    >
                      <div>
                        <div className="block featuredvideo  ">
                          <section className="page-section ">
                            <div className="container  ">
                              <div className="solutions__stats_container row my-2 mb-xs-4 media-div__mobile">
                                <div className="col-lg-6 col-sm-6 pr-sm-4 media-on-top__mobile">
                                  <ul>
                                    <li className="w-75" >
                                      <span style={{ color: "#333333" }}>

                                        With mobile apps and other tools at patients' disposal, the hospital's IT manager faces the challenge of managing data coming from various platforms and locations.


                                      </span>
                                    </li><br />
                                    <li className="w-75" >
                                      <span style={{ color: "#333333" }}>
                                        Wearables and apps demand low latency to allow patients to access information anytime, anywhere.

                                      </span>
                                    </li><br />
                                    <li className="w-75" >
                                      <span style={{ color: "#333333" }}>
                                        For critical infrastructure, this calls for a new approach with a converged, standardized design to enhance speed and efficiency.
                                      </span>
                                    </li>
                                  </ul>

                                </div>
                                <div className="col-lg-6 col-sm-6">  <br />
                                  <div className="media-section">
                                    <img
                                      className="w-100 pt-xs-1 pt-sm-2"
                                      src="/health (8).png"
                                    />
                                  </div>
                                  <p className="page-section-p-s"></p>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Tab D */}
                  <div
                    className={`tab-pane ${activeTab === "tab-protecting-critical-healthcare-operations" ? "active" : "hidden"
                      }`}
                  >
                    <div
                      role="tabpanel"
                      className="tab-pane active"
                      id="tab-protecting-critical-healthcare-operations"
                    >
                      <div>
                        <div className="block featuredvideo  ">
                          <section className="page-section ">
                            <div className="container  ">
                              <div className="solutions__stats_container my-2 mb-xs-4 media-div__mobile row">
                                <div className="col-lg-6 col-sm-6 pr-sm-4 media-on-top__mobile">
                                  <ul>
                                    <li className="w-75" >
                                      <span style={{ color: "#333333" }}>
                                        Medical equipment such as machines and lab equipment require
                                        constant availability to deliver accurate health services
                                        and to ensure the patient is given adequate care
                                      </span>
                                    </li><br />
                                    <li className="w-75" >
                                      <span style={{ color: "#333333" }}>
                                        Power outages can put patients at risk, hence backup power
                                        is critical at all levels of the hospital and/or clinic
                                      </span>
                                    </li><br />
                                    <li className="w-75" >
                                      <span style={{ color: "#333333" }}>
                                        Power systems need to be agile and efficient; they also
                                        require regular testing to comply with regulations and to
                                        ensure availability at all times
                                      </span>
                                    </li>
                                  </ul>
                                </div>

                                <div itemProp="video" className="col-lg-6 col-sm-6">  <br />
                                  <div className="media-section">
                                    <img
                                      className="w-100 pt-xs-1 pt-sm-2"
                                      src="/health (6).png"
                                    />
                                  </div>
                                  <p className="page-section-p-s"></p>
                                </div>
                              </div>

                            </div>
                          </section>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>




        <div className="layout-container-component aem-GridColumn aem-GridColumn--default--12">
          <div className="white img-position--">
            <div className="layoutcontainer">
              <div className="container ">
                <div className="spacing">
                  <div className="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
                    <div className="title aem-GridColumn aem-GridColumn--default--12">
                      <div >
                        <div className="innerpage">
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
                    <div className="splitparsys aem-GridColumn aem-GridColumn--default--12">
                      <div
                        className="splitparsys "
                        style={{}}
                      >
                        <div>
                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                              <div className="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
                                <div className="latest-thinking case-study1 aem-GridColumn aem-GridColumn--default--12">
                                  <div className="cq-dd-pages">
                                    <div className="foundation-ordered-list-container">
                                      <span className="foundation-list-item">
                                        <div className="wipro-case-studies-bg">
                                          <div
                                            className="cursor"
                                            className="text-dark" href="/healthcare/why-value-based-cares-moment-has-finally-come-for-healthcare-providers/"
                                            target="_self"
                                          >
                                            <div className="wipro-shadow" />
                                            <img
                                              alt="Healthcare"
                                              className="multi-image"
                                              data-hd="/content/dam/nexus/en/industries/healthcare/images/why-value-based-cares-1896x275.jpg/jcr:content/renditions/why-value-based-cares-575x540.jpg"
                                              data-mob="/content/dam/nexus/en/industries/healthcare/images/why-value-based-cares-1896x275.jpg/jcr:content/renditions/why-value-based-cares-575x540.jpg"
                                              data-sd="/content/dam/nexus/en/industries/healthcare/images/why-value-based-cares-1896x275.jpg/jcr:content/renditions/why-value-based-cares-575x540.jpg"
                                              src="/think (2).png"
                                              tabIndex="0"
                                            />

                                          </div>
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
                                          <div
                                            className="cursor"
                                            className="text-dark" href="/consulting/these-tech-trends-will-reshape-healthcare-in-2024/"
                                            target="_self"
                                          >
                                            <div className="wipro-shadow" />
                                            <img
                                              alt="Healthcare"
                                              className="multi-image"
                                              data-hd="/content/dam/nexus/en/service-lines/consulting/tech-trends/1896x275-tech-trends-healthcare.jpg"
                                              data-mob="/content/dam/nexus/en/service-lines/consulting/tech-trends/1896x275-tech-trends-healthcare.jpg"
                                              data-sd="/content/dam/nexus/en/service-lines/consulting/tech-trends/1896x275-tech-trends-healthcare.jpg"
                                              src="/think (1).png"
                                              tabIndex="0"
                                            />

                                          </div>
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
                                          <div
                                            className="cursor"
                                            className="text-dark"
                                            target="_self"
                                          >
                                            <div className="wipro-shadow" />
                                            <img
                                              alt="Healthcare"
                                              className="multi-image "

                                              src="/think (3).png"
                                              tabIndex="0"
                                            />

                                          </div>
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
                                          <div
                                            className="cursor"
                                            className="text-dark" href="/consulting/these-tech-trends-will-reshape-healthcare-in-2024/"
                                            target="_self"
                                          >
                                            <div className="wipro-shadow" />
                                            <img
                                              alt="Healthcare"
                                              className="multi-image "
                                              data-hd="/content/dam/nexus/en/service-lines/consulting/tech-trends/1896x275-healthcare-tech-trends-new.jpg/jcr:content/renditions/575x540-healthcare-tech-trends-new.jpg"
                                              data-mob="/content/dam/nexus/en/service-lines/consulting/tech-trends/1896x275-healthcare-tech-trends-new.jpg/jcr:content/renditions/575x540-healthcare-tech-trends-new.jpg"
                                              data-sd="/content/dam/nexus/en/service-lines/consulting/tech-trends/1896x275-healthcare-tech-trends-new.jpg/jcr:content/renditions/575x540-healthcare-tech-trends-new.jpg"
                                              src="/think (4).png"
                                              tabIndex="0"
                                            />

                                          </div>
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
        <div className="segments-container"> <br />
          <div className='container'>
            <h2 className="h2 fw-bold" style={{ color: "#7F3E98" }}>RELATED MATERIALS</h2><br />
            <div className="grid-container">
              {services.map((service, index) => (
                <div key={index} className="grid-item">
                  <img src={service.image} alt={service.title} />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Demo />
      </div >
    </>
  );
}


export default Healthcare