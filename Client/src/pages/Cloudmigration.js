import Header from "../components/Header"
import { useMediaQuery } from 'react-responsive'
import Demo from "../components/Navbar";

const Cloudmigration = () => {
  const services1 = [
    { title: 'Assessment and Planning', icon: '/onprem (1).png' },
    { title: 'Choose the Right Cloud Service Provider (CSP)', icon: '/onprem (2).png' },
    { title: 'Data Migration', icon: '/onprem (3).png' },
    { title: 'Application Migration', icon: '/onprem (4).png' },
    { title: 'Security Measures', icon: '/onprem (5).png' },
    { title: 'Testing and Validation', icon: '/onprem (6).png' },
    { title: 'Training and Skill Development', icon: '/onprem (7).png' },
    { title: 'Deployment and Optimization ', icon: '/onprem (8).png' },
    { title: 'Monitoring and Management', icon: '/onprem (9).png' },

    // { title: 'Wellness & Fitness Industry', icon: '/cyber15 (3).webp' }
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
    <div>
      <Header />
      <section id="heros" class="heros1 section dark-background" data-aos="fade-right" data-aos-delay="100">

        <img src="/migration.png" alt="" className=" " />

        <div class="container text-center" >
          <div class="row justify-content-center">
            <div class="col-lg-8 oncloud">
              <h2 className="profh2">On-Premise to <br /> Cloud  Migration
              </h2>
            </div>
          </div>
        </div>

      </section>

      <section id="bg2" className="bg2 section dark-background" data-aos="fade-right" data-aos-delay="500" style={{ background: "#E1E0E0" }}>

        <div className="container text-center" >
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <p style={{ color: "#7F3E98" }} >Unleashing Business Potential:</p><br />
              <h2>Advantages of On-Premise to Cloud Migration</h2><br />
              <p className=' text-center '>On-premise to cloud migration is not a one-size-fits-all endeavor. It involves a strategic and tailored approach, considering factors such as existing infrastructure, application dependencies, data sensitivity, and regulatory compliance. The migration journey typically encompasses assessment, planning, data migration, application migration, and post-migration optimization. <br /><br />
                Traditionally, on-premise infrastructure has been the bedrock of IT operations, offering control and familiarity. However, as the pace of technological advancement accelerates, businesses face the need to evolve rapidly to meet changing market demands. Cloud computing emerges as a transformative solution, offering a virtualized, scalable, and cost-effective alternative to traditional on-premise setups.
              </p>
            </div>
          </div>
        </div>

      </section>
      <br />
      <h2 className=" fw-bold text-center progh2">Benefits <span style={{ color: "#7F3E98" }}> of Cloud Migration</span></h2>
      <p className="para mx-auto text-center">Discover the unparalleled benefits of transitioning from on-premise to the cloud, specifically with Tencent, Azure or Amazon Web Services (AWS). Here are the top 5 advantages:
      </p> <br /> <br />
      <section>
        <div className="teaser teaser--full-size aem-GridColumn aem-GridColumn--default--12">
          <div className="cmp-teaser cmp-teaser--1095483950    ">
            <div
              className="cmp-teaser__content"
              style={{}}
            >
              <div className="cmp-teaser__content-wrapper">
                <h2 className="cmp-teaser__title  ">
                  <a
                    className="cmp-teaser__title-link"
                    href=""
                    rel="nofollow"
                    target="_blank"
                  >
                    Scalability for Growth

                  </a>
                </h2>
                <div className="cmp-teaser__description">
                  <p>
                    Cloud services like AWS and others empowers organization with seamless scalability for computation and storage. Unlike other traditional setups, cloud migration services allows auto-scaling, adapting resources dynamically to changing demands. This flexibility provided is especially important during peak times, providing a competitive edge.


                  </p>
                </div>
              </div>
            </div>
            <div className="cmp-teaser__image">
              <img src="/mig (1).png" className="w-100 " />
            </div>
          </div>
        </div>
        <div className="teaser teaser--full-size teaser--image-left aem-GridColumn aem-GridColumn--default--12">
          <div className="cmp-teaser cmp-teaser--638358011    ">
            <div
              className="cmp-teaser__content"
              style={{}}
            >
              <div className="cmp-teaser__content-wrapper">
                <h2 className="cmp-teaser__title  ">
                  <a
                    className="cmp-teaser__title-link"
                    href=""
                    rel="nofollow"
                    target="_blank"
                  >
                    Global Accessibility for Enhanced Productivity:

                  </a>
                </h2>
                <div className="cmp-teaser__description">
                  <p>
                    In today's dispersed work landscapes, accessibility is paramount. Cloud Services ensures effortless access to crucial applications and data, fostering productivity regardless of employee locations. This accessibility across diverse locations enhances collaboration and efficiency.

                  </p>
                </div>
              </div>
            </div>
            <div className="cmp-teaser__image">
              <img src="/mig (5).webp" />
            </div>
          </div>
        </div>
        <div className="teaser teaser--full-size aem-GridColumn aem-GridColumn--default--12">
          <div className="cmp-teaser cmp-teaser--718471742    ">
            <div
              className="cmp-teaser__content"
              style={{}}
            >
              <div className="cmp-teaser__content-wrapper">
                <h2 className="cmp-teaser__title  ">
                  <a
                    className="cmp-teaser__title-link"
                    href="/cloud/joint-report-with-forbes-how-to-master-cloud-economics-and-harness-the-power-of-ai/"
                    target="_blank"
                  >
                    Fortified Security Measures

                  </a>
                </h2>
                <div className="cmp-teaser__description">
                  <p>
                    Security is paramount, and cloud services prioritizes it through adherence to industry standards like GDPR and PCI DSS. Robust security measures are inherent in cloud computing environments. Cloud migration services provides comprehensive solutions for compliance, disaster recovery, identity management, and native security features, catering to businesses of all sizes.

                  </p>
                </div>
              </div>
            </div>
            <div className="cmp-teaser__image">
              <img src="/mig (3).webp" />
            </div>
          </div>
        </div>
        <div className="teaser teaser--full-size teaser--image-left aem-GridColumn aem-GridColumn--default--12">
          <div
            className="cmp-teaser cmp-teaser-2010868465    "
            id="insights"
          >
            <div
              className="cmp-teaser__content"
              style={{}}
            >
              <div className="cmp-teaser__content-wrapper">
                <h2 className="cmp-teaser__title  ">
                  <a
                    className="cmp-teaser__title-link"
                    href="https://www.designit.com/stories/point-of-view/why-should-insurance-companies-rethink-their-loyalty-strategies"
                    rel="nofollow"
                    target="_blank"
                  >
                    Cost-Effective Efficiency

                  </a>
                </h2>
                <div className="cmp-teaser__description">
                  <p>
                    Cloud migration introduces greater cost efficiency through its flexible and scalable model. Compared to the expenses associated with traditional infrastructure scaling, any cloud’s pay-as-you-go model facilitates efficient long-term budgeting. Conduct cost comparisons among CSPs for a tailored financial approach.

                  </p>
                </div>
              </div>
            </div>
            <div className="cmp-teaser__image">
              <img src="/mig (2).webp" className="w-75 mx-auto" />
            </div>
          </div>
        </div>
        <div className="teaser teaser--full-size aem-GridColumn aem-GridColumn--default--12" >
          <div className="cmp-teaser cmp-teaser--718471742    ">
            <div
              className="cmp-teaser__content"
              style={{}}
            >
              <div className="cmp-teaser__content-wrapper">
                <h2 className="cmp-teaser__title  ">
                  <a
                    className="cmp-teaser__title-link"
                    href="/cloud"
                    target="_blank"
                  >
                    Optimized Performance Across Geographies:

                  </a>
                </h2>
                <div className="cmp-teaser__description">
                  <p>
                    Hosting websites and applications closer to staff and customers is a breeze with cloud like Azure or AWS. This minimizes latency issues associated with remote connections to on-site data centers, ensuring optimal performance. Vital for businesses expanding geographically or adopting remote and flexible work structures.


                  </p>
                </div>
              </div>
            </div>
            <div className="cmp-teaser__image">
              <img src="/mig (6).webp" />
            </div>
          </div>
        </div>
      </section>
      <section className="services-section" >
        <p className='text-center fs-5' style={{ color: "#7F3E98" }}>Streamlining Spotcomm Global for Excellence</p>
        <h2 className='text-center'>On-Premise to Cloud Migration  </h2>
        <p className="w-75 text-center mx-auto">Embarking on the journey from on-premise to cloud infrastructure is a strategic move that can revolutionize your business operations. Here’s a comprehensive guide to ensure a smooth and successful on-premise to cloud migration:
        </p>
        <div className="row d-flex justify-content-center">
          {services1.map((service, index) => (
            <div class="col-lg-3   mt-5 " data-aos="fade-right" data-aos-delay="500" >
              <img src={service.icon} className='mx-auto d-flex ' />
              <h5 className="services-title ">{service.title} </h5>
            </div>
          ))}
        </div>
      </section>
      <Demo />
    </div>

  )
}

export default Cloudmigration