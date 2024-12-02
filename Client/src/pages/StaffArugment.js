import React from 'react'
import Header from '../components/Header'
import Blogcard from '../components/Blogcard'
import { useMediaQuery } from 'react-responsive'
import Demo from '../components/Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const StaffArugment = () => {
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
            <section id="heros" class="heros1 section dark-background">

                <img src="/staff.png" alt="" />

                <div class="container text-center">
                    <div class="row justify-content-center">
                        <div class="col-lg-12" data-aos="fade-right" data-aos-delay="200">
                            <h2>Empower the Possibilities with Spotcomm Staff Augmentation</h2>
                        </div>
                    </div>
                </div>

            </section> <br />
            <h2 className='text-start fs-3  w-75 mx-auto' data-aos="fade-right" data-aos-delay="100">We streamline staff  <span className='' style={{ color: "#7F3E98" }}>augmentation</span>   for your business, enabling seamless talent integration and a competitive advantage in the digital landscape.</h2>
            <Blogcard /><br /><br />
            <h2 className='text-center h2'> <span className='' style={{ color: "#7F3E98" }}>DREAMWORLD CASE STUDY </span>
            </h2>
            <p className='text-center'>Benefits of Our IT Staff Augmentation Services
            </p><br /><br />
            <div className="teaser teaser--full-size aem-GridColumn aem-GridColumn--default--12">
                <div className="cmp-teaser cmp-teaser--1095483950    " >
                    <div
                        className="cmp-teaser__content"
                        style={{}}
                    >
                        <div className="cmp-teaser__content-wrapper">
                            <h2 className="cmp-teaser__title  ">
                                <a
                                    className="cmp-teaser__title-link"
                                    href="https://lab45thinktank.com/article/business-process-services-in-the-era-of-generative-artificial-intelligence/"
                                    rel="nofollow"
                                    target="_blank"
                                >
                                    Lower Operational Costs
                                </a>
                            </h2>
                            <div className="cmp-teaser__description">
                                <p>
                                    Reduce your company spending by eliminating the costs of office space, equipment, and taxes. Pay for what drives the most value for your company.


                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="cmp-teaser__image">
                        <img src="/staff (2).png" />
                    </div>
                </div>
            </div>
            <div className="teaser teaser--full-size teaser--image-left aem-GridColumn aem-GridColumn--default--12" >
                <div className="cmp-teaser cmp-teaser--638358011    ">
                    <div
                        className="cmp-teaser__content"
                        style={{}}
                    >
                        <div className="cmp-teaser__content-wrapper">
                            <h2 className="cmp-teaser__title  ">
                                <a
                                    className="cmp-teaser__title-link"
                                    href="https://www.capco.com/intelligence/capco-intelligence/will-the-new-virtual-banks-reshape-the-thailand-banking-industry"
                                    rel="nofollow"
                                    target="_blank"
                                >
                                    Access to Vetted Talent
                                </a>
                            </h2>
                            <div className="cmp-teaser__description">
                                <p className='text-start'>
                                    Spotcomm offers you immediate access to a vast talent pool at affordable costs. Amplify your team with certified software specialists.

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="cmp-teaser__image">
                        <img src="/staff (3).png" />
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
                                    href="/cloud/joint-report-with-forbes-how-to-master-cloud-economics-and-harness-the-power-of-ai/"
                                    target="_blank"
                                >
                                    Full Control
                                </a>
                            </h2>
                            <div className="cmp-teaser__description">
                                <p className='text-start'>
                                    We encourage you to cherry-pick your team members and participate in the screening process. Manage your projec3t success and stay updated on all changes.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="cmp-teaser__image">
                        <img src="/staff (4).png" />
                    </div>
                </div>
            </div>
            <div className="teaser teaser--full-size teaser--image-left aem-GridColumn aem-GridColumn--default--12" >
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
                                    href=""
                                    rel="nofollow"
                                    target="_blank"
                                >
                                    Fewer Legal Hassles
                                </a>
                            </h2>
                            <div className="cmp-teaser__description">
                                <p className='text-start'>
                                    Within our IT augmentation services, we remain the official employers of your hires. Our company takes care of all legal responsibilities and documentation.

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="cmp-teaser__image">
                        <img src="/staff (6).png" />
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
                                    No Recruitment Hassles
                                </a>
                            </h2>
                            <div className="cmp-teaser__description">
                                <p className='text-start'>
                                    Our IT augmentation services save your company the hassle of searching and recruiting vetted development talent. We take over the screening process and send you approved CVs.


                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="cmp-teaser__image">
                        <img src="/staff (5).png" />
                    </div>
                </div>
            </div>
            <div className="teaser teaser--full-size teaser--image-left aem-GridColumn aem-GridColumn--default--12" >
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
                                    href=""
                                    rel="nofollow"
                                    target="_blank"
                                >
                                    Aggressive Deadlines
                                </a>
                            </h2>
                            <div className="cmp-teaser__description">
                                <p className='text-start'>
                                Ramp up your technical capacity, when chasing a stringent deadline. Our team of developers dedicates their efforts to delivering the project in time.


                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="cmp-teaser__image">
                        <img src="/staff (1).png" />
                    </div>
                </div>
            </div>
            <Demo />
        </div>
    )
}

export default StaffArugment