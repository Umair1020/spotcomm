import React from 'react'
import Header from '../components/Header'
import "../App.css"
import "../components/support.css"
import { useMediaQuery } from 'react-responsive'
import Demo from '../components/Navbar'

const Media = () => {
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
  const segmentsData = [
    {
      title: 'Broadcast Networks',
      imgSrc: 'segment (1).png',
    },
    {
      title: 'Production Studios',
      imgSrc: 'segment (2).png',
    },
    {
      title: 'OTT Platforms & Streaming Services',
      imgSrc: 'segment (3).png',
    },
    {
      title: 'News Agencies',
      imgSrc: 'segment (4).png',
    },
    {
      title: 'Advertising Agencies',
      imgSrc: 'segment (5).png',
    },
    {
      title: 'Post-Production Companies',
      imgSrc: 'segment (6).png',
    },
  ];
  const solutions = [
    {
      href: "/healthcare/revenue-cycle-management-rcm/",
      imgSrc: "/mediathink (1).png",
      title: "High-Performance Content Delivery Networks (CDN)",
      description: "Spotcomm provides advanced Content Delivery Network (CDN) solutions to ensure fast, reliable, and scalable distribution of video, audio, and other media content.",
    },
    {
      href: "/healthcare/scientific-hub-_-molecule-360-degree-predictive-analysis/",
      imgSrc: "/mediathink (2).png",
      title: "Broadcast-Quality Network Solutions",
      description: "In the broadcasting industry, uninterrupted live broadcasts and flawless media delivery are crucial. Spotcomm offers specialized network services to support the unique demands of broadcasters.",
    },
    {
      href: "",
      imgSrc: "/mediathink (3).png",
      title: "Secure and Reliable Data Transmission",
      description: "Spotcomm recognizes the importance of security in the media industry, where data breaches and content piracy can have devastating consequences.",
    },
    {
      href: "/healthcare/provider-lifecycle-management-plm/",
      imgSrc: "/mediathink (4).png",
      title: "Cloud-Enabled Media Workflows)",
      description: "The shift toward cloud-based media production and distribution is reshaping the broadcasting landscape.",
    }, {
      href: "",
      imgSrc: "/mediathink (5).png",
      title: "Real-Time Monitoring and Support",
      description: "Our services for the media industry come with proactive monitoring and support to ensure the highest levels of performance and uptime",
    },
    {
      href: "/healthcare/provider-lifecycle-management-plm/",
      imgSrc: "/mediathink (6).png",
      title: "Scalability for Major Events",
      description: "To manage major events like live sports, award shows, or concerts, Our offerings are designed to scale rapidly to accommodate the increased demand.",
    },
    {
      href: "",
      imgSrc: "/mediathink (7).png",
      title: "Remote Production and Virtual Studios",
      description: "Ensuring reliable connections between on-site production teams, virtual studios and remote collaborators for real-time editing and broadcasting.",
    },
    {
      href: "/healthcare/provider-lifecycle-management-plm/",
      imgSrc: "/mediathink (8).png",
      title: "Tailored Solutions for OTT Platforms",
      description: "Spotcomm’s infrastructure is designed to scale effortlessly as your OTT platform grows, providing seamless service to an expanding global audience.",
    },


  ];
  return (
    <div className=''>
      <Header />
      <Desktop>
        <section id="heros" className="heros1 section dark-background">
          <img src="/media.png" alt="" />
        </section>
      </Desktop>
      <Mobile>
        <section id="heros" className="heros1 section dark-background">
          <img src="/mediamob.png" alt="" />
        </section>
      </Mobile>

      <br /><br />
      <div className="innerpage" style={{ marginBottom: '25px', paddingLeft: "5%", paddingRight: "5%" }}>
        <h2 className="font-bold text-dark fs-2" style={{ fontFamily: "Proxima Nova, sans-serif;" }} >
          Individual and Enterprise Next Gen Virtual Experiences

        </h2><br />
        <p className='para'>
          Stay on top of the user experience with next-gen digital solutions that wow audiences and <br />
          optimize costs <br /><br />
          In today’s digital age, the media and broadcasting industry faces ever-increasing demands for seamless content delivery, real-time collaboration, and high-quality streaming experiences. At Spotcomm, we understand the critical role that a robust and reliable network infrastructure plays in enabling these capabilities. Our comprehensive managed services are designed to empower media companies with the connectivity, performance, and scalability they need to thrive in this fast-paced environment.

        </p>
      </div>
      <div style={{ background: "#D9D9D9" }}>
        <div className='container p-5' >

          <div className='row' >
            <div className='col-lg-6'>

              <h2 className='text-start fs-2 mt-5 para fw-bold '>Our <span className='' style={{ color: "#7F3E98" }}> Success Stories </span> </h2> <br />
              <p className='para text-dark'>Spotcomm’s Media Unit has transformed the operations of some of the world’s leading Internet, publishing, broadcast, entertainment, sport, advertising, education and information organizations. Our one-stop offerings have, time after time, delivered simplified and scalable solutions that enable a next-gen digital user experience, cost optimization and business-model innovation.</p>  <br /><br />
            </div>
            <div className='col-lg-6 d-flex justify-content-center mt-3'>
              <img src='/data.png' className='' />
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
                                        <a
                                          className="cursor"
                                          href="/healthcare/why-value-based-cares-moment-has-finally-come-for-healthcare-providers/"
                                          target="_self"
                                        >
                                          <div className="wipro-shadow" />
                                          <img
                                            alt="Healthcare"
                                            className="multi-image"
                                            data-hd="/content/dam/nexus/en/industries/healthcare/images/why-value-based-cares-1896x275.jpg/jcr:content/renditions/why-value-based-cares-575x540.jpg"
                                            data-mob="/content/dam/nexus/en/industries/healthcare/images/why-value-based-cares-1896x275.jpg/jcr:content/renditions/why-value-based-cares-575x540.jpg"
                                            data-sd="/content/dam/nexus/en/industries/healthcare/images/why-value-based-cares-1896x275.jpg/jcr:content/renditions/why-value-based-cares-575x540.jpg"
                                            src="/media2.png"
                                            tabIndex="0"
                                          />

                                        </a>
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
                                        <a
                                          className="cursor"
                                          href="/consulting/these-tech-trends-will-reshape-healthcare-in-2024/"
                                          target="_self"
                                        >
                                          <div className="wipro-shadow" />
                                          <img
                                            alt="Healthcare"
                                            className="multi-image"
                                            data-hd="/content/dam/nexus/en/service-lines/consulting/tech-trends/1896x275-tech-trends-healthcare.jpg"
                                            data-mob="/content/dam/nexus/en/service-lines/consulting/tech-trends/1896x275-tech-trends-healthcare.jpg"
                                            data-sd="/content/dam/nexus/en/service-lines/consulting/tech-trends/1896x275-tech-trends-healthcare.jpg"
                                            src="/media1.png"
                                            tabIndex="0"
                                          />

                                        </a>
                                      </div>
                                      <div
                                        className="modal fade show-more-popup"
                                        id="poupsample"
                                        role="dialog"
                                        tabIndex="-1"
                                      >
                                        <div
                                          className="modal-dialog modal-lg"
                                          style={{
                                            maxWidth: '600px'
                                          }}
                                        >
                                          <div className="modal-content">
                                            <button
                                              className="close"
                                              data-dismiss="modal"
                                              type="button"
                                            >
                                              <img
                                                alt="popup-close.png"
                                                src="/content/dam/nexus/images/pop-up/popup-close.png"
                                              />
                                            </button>

                                          </div>
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
                                        <a
                                          className="cursor"
                                          href="/business-process/how-genai-is-changing-the-game-for-healthcare-payers/"
                                          target="_self"
                                        >
                                          <div className="wipro-shadow" />
                                          <img
                                            alt="Healthcare"
                                            className="multi-image "

                                            src="/media3.png"
                                            tabIndex="0"
                                          />

                                        </a>
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
                                        <a
                                          className="cursor"
                                          href="/consulting/these-tech-trends-will-reshape-healthcare-in-2024/"
                                          target="_self"
                                        >
                                          <div className="wipro-shadow" />
                                          <img
                                            alt="Healthcare"
                                            className="multi-image "
                                            data-hd="/content/dam/nexus/en/service-lines/consulting/tech-trends/1896x275-healthcare-tech-trends-new.jpg/jcr:content/renditions/575x540-healthcare-tech-trends-new.jpg"
                                            data-mob="/content/dam/nexus/en/service-lines/consulting/tech-trends/1896x275-healthcare-tech-trends-new.jpg/jcr:content/renditions/575x540-healthcare-tech-trends-new.jpg"
                                            data-sd="/content/dam/nexus/en/service-lines/consulting/tech-trends/1896x275-healthcare-tech-trends-new.jpg/jcr:content/renditions/575x540-healthcare-tech-trends-new.jpg"
                                            src="/media4.png"
                                            tabIndex="0"
                                          />

                                        </a>
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

      <div className="layout-container-component aem-GridColumn aem-GridColumn--default--12  p-5" style={{ background: "#474747", color: "#fff" }}>
        <h2 className='h2 fw-bold mx-3 fs-1 text-light'>What  <span className='' style={{ color: "#7F3E98" }}>We Do</span> </h2>
        <br />
        <div className="segmentgrid" >
          {solutions.map((solution, index) => (
            <div key={index} className="mx-3" >


              {/* <a href={solution.href} className="cursor">
                                            <div className="wipro-solutions-squares-content-image  mx-5 mt-5" >
                                              <img alt="Healthcare" tabIndex={0} src={solution.imgSrc} className="multi-image" />
                                              <div className="wipro-solutions-squares-content-text text-akkurat-light mt-2">
                                                <h4 className='text-white  '>{solution.title}</h4>
                                                <p className='text-white  ' >{solution.description}</p>
                                              </div>
                                            </div>
                                          </a> */}
              <div className="card3" >
                <img src={solution.imgSrc} className="card-image" />
                <div className="card-content">
                  <h3 className="card-title">{solution.title}</h3>
                  <p className="card-description">{solution.description}</p>
                </div>

              </div>  <br />
            </div>


          ))}
        </div>
      </div>

      <div className="segments-container"> <br />
        <div className='container'>
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
      <Demo />
    </div>
  )
}

export default Media