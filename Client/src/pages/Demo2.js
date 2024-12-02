import React from 'react'
import Header from '../components/Header'
import Demo from '../components/Navbar';
import { useMediaQuery } from 'react-responsive'
const Demo2 = () => {
    const services = [
        // "CIO Advisory",
        // "Sustainability Services",
        // "Talent and Change Management",
        // "Digital Transformation",
        // "Banking",
        // "Energy",
        // "Utilities",
        // "Consumer Packaged Goods",
        // "Healthcare",
        // "Life Sciences",
        // "Retail",
        // "Telecom"
        { title: 'Managed Network Services', icon: '/Monitoring Services 1.png' },
        { title: 'Managed LAN/WAN Services', icon: '/Network Design 1.png' },
        { title: 'Managed WiFi Services', icon: '/NetworkHardware.png' },
        { title: 'Managed Security Services', icon: '/Network Security 1.png' },
        { title: 'Data Center Management', icon: '/infrastructure 1.png' },
        { title: 'Managed NOC Services', icon: '/Cloud Services 1.png' },
        { title: 'SD-WAN Services', icon: '/Wireless Network 1.png' },
        // { title: 'White Label VPN Services', icon: '/service8.png' },
        { title: 'Managed Infrastructure Services', icon: '/service9.png' }
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

            <div className="  responsivegrid">
                <div
                    className="cmp- cmp---939597271 "
                    data-type="grid"
                    id="-296a049e61"
                >
                    <div className="aem-Grid aem-Grid--12 aem-Grid--default--12 ">

                        <div className=" responsivegrid aem-GridColumn aem-GridColumn--default--12">
                            <div
                                className="cmp- cmp---220486293 "
                                data-type="grid"
                                id="-3aab8fef1f"
                            >
                                <div className="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
                                    <Desktop>
                                        <section id="heros" class="heros1 section dark-background">

                                            <img src="/consulting.png" alt="" />

                                            <div class="container text-center"  >
                                                <div class="row justify-content-center">
                                                    <div class="col-lg-8">
                                                        <h2>Consulting meet transformation</h2>
                                                    </div>
                                                </div>
                                            </div>

                                        </section>
                                    </Desktop>
                                    <Mobile>
                                        <section id="heros" class="heros1 section dark-background">

                                            <img src="/consultingmob.png" alt="" className='' />

                                            <div class="container text-center"  >
                                                <div class="row justify-content-center">
                                                    <div class="col-lg-12 col-sm-12">
                                                        <h2 className='fs-1'>Consulting meet transformation</h2>
                                                    </div>
                                                </div>
                                            </div>

                                        </section>
                                    </Mobile>
                                    <div className=" responsivegrid --width-wide --full-width aem-GridColumn aem-GridColumn--default--12">
                                        <div
                                            className="cmp- cmp---1058722595 "
                                            data-type="grid"
                                            id="-4af8be69f5"
                                        >
                                            <div className="aem-Grid aem-Grid--12 aem-Grid--default--12 aem-Grid--phone--12 ">
                                                <div className=" responsivegrid --width-regular --full-width aem-GridColumn aem-GridColumn--default--12">
                                                    <div
                                                        className="cmp- cmp--1070173647 "
                                                        data-type="simple"
                                                        id="-aee7dd742e"
                                                        style={{
                                                            backgroundColor: '#7F3E98'
                                                        }}
                                                    >
                                                        <div className="separator">
                                                            <div
                                                                className="cmp-separator cmp-separator-1957592741"
                                                                id="separator-6f8943cc75"
                                                                style={{
                                                                    background: '#7F3E98'
                                                                }}
                                                            />
                                                            <style
                                                                dangerouslySetInnerHTML={{
                                                                    __html: '.cmp-separator-1957592741 {height:40px;}'
                                                                }}
                                                                data-path="/content/nexus/en/service-lines/consulting/jcr:content/root////separator"
                                                            />
                                                        </div>
                                                        <div className="text fw-300" style={{ width: "90%", textAlign: "center", margin: "auto" }}>
                                                            <div
                                                                className="cmp-text"
                                                                id="text-5ad5ae65a0"
                                                            >
                                                                <p
                                                                    style={{
                                                                        textAlign: 'center'
                                                                    }}
                                                                >
                                                                    <span
                                                                        style={{
                                                                            display: 'inline',
                                                                            fontSize: '24.0px'
                                                                        }}
                                                                    >

                                                                        <span className='w-50'
                                                                            style={{
                                                                                color: 'rgb(255,255,255)',
                                                                                display: 'inline',

                                                                            }}
                                                                        >
                                                                            Spotcomm harnesses cutting-edge technologies and extensive industry expertise to support clients in driving business transformation and developing robust, next-generation operating models. Our consulting practice spans various sectors, including financial services, energy, utilities, healthcare and life sciences, sustainability, talent management and change, CIO advisory, and consumer businesses. Explore some of the latest insights from Spotcomm Consulting, Full Stride Cloud, Engineering Edge, Lab45, Designit, and Capco.
                                                                        </span>

                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="separator">
                                                            <div
                                                                className="cmp-separator cmp-separator-1772701903"
                                                                id="separator-383956da6f"
                                                                style={{
                                                                    background: '#7F3E98'
                                                                }}
                                                            />
                                                            <style
                                                                dangerouslySetInnerHTML={{
                                                                    __html: '.cmp-separator-1772701903 {height:40px;}'
                                                                }}
                                                                data-path="/content/nexus/en/service-lines/consulting/jcr:content/root////separator_copy"
                                                            />
                                                        </div>
                                                        <div className="cmp-__button-">
                                                        </div>
                                                        <div
                                                            className="cmp-__popup-background"
                                                            id="popup-background--aee7dd742e"
                                                        />
                                                        <div
                                                            className="cmp-__data"
                                                            data-expandaspopup="false"
                                                            data-expandbuttonlabel="Read More"
                                                            data-maxitems="-2"
                                                            data-maxitemsmobile="-2"
                                                            data-maxitemstablet="-2"
                                                            id="data--aee7dd742e"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="teaser teaser--full-size aem-GridColumn aem-GridColumn--default--12" data-aos-delay="200">
                                                    <div className="cmp-teaser cmp-teaser--1095483950    ">
                                                        <div
                                                            className="cmp-teaser__content"
                                                            style={{}}
                                                        >
                                                            <div className="cmp-teaser__content-wrapper">
                                                                <h2 className="cmp-teaser__title  text-dark ">
                                                                    <a
                                                                        className="cmp-teaser__title-link"
                                                                        href="https://lab45thinktank.com/article/business-process-services-in-the-era-of-generative-artificial-intelligence/"
                                                                        rel="nofollow"
                                                                        target="_blank"
                                                                    >
                                                                        HPE (Hewlett Packard Enterprise) and Huawei Named Leaders:
                                                                    </a>
                                                                </h2>
                                                                <div className="cmp-teaser__description">
                                                                    <p className='text-dark'>
                                                                        Both HPE and Huawei were recently recognized as leaders in the IDC MarketScape: Worldwide Network Consulting Services 2024 Vendor Assessment. HPE was acknowledged for its excellence in handling complex transformation projects and leveraging cutting-edge AI and automation capabilities. Huawei similarly earned leadership status for its end-to-end network consulting capabilities, catering to evolving business needs in areas like edge computing and data flow management.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="cmp-teaser__image">
                                                            <img src="/icon (4).png" />
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
                                                                <h2 className="cmp-teaser__title  text-dark ">
                                                                    <a
                                                                        className="cmp-teaser__title-link"
                                                                        href="https://www.capco.com/intelligence/capco-intelligence/will-the-new-virtual-banks-reshape-the-thailand-banking-industry"
                                                                        rel="nofollow"
                                                                        target="_blank"
                                                                    >
                                                                        Growing Importance of AI and Automation:
                                                                    </a>
                                                                </h2>
                                                                <div className="cmp-teaser__description">
                                                                    <p className='text-dark'>
                                                                        Companies offering network consulting services are increasingly incorporating AI and automation to manage data centers and wireless networks more efficiently. These technologies allow for better observability and management, making networks more adaptable to dynamic business environments
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="cmp-teaser__image">
                                                            <img src="/icon (2).png" />
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
                                                                <h2 className="cmp-teaser__title  text-dark ">
                                                                    <a
                                                                        className="cmp-teaser__title-link"
                                                                        href="/cloud/joint-report-with-forbes-how-to-master-cloud-economics-and-harness-the-power-of-ai/"
                                                                        target="_blank"
                                                                    >
                                                                        Harness digital to get disruptive results:
                                                                    </a>
                                                                </h2>
                                                                <div className="cmp-teaser__description">
                                                                    <p className='text-dark'>
                                                                        Leveraging our digital-led expertise, we devise an agile and flexible approach to help companies unlock new growth opportunities. Our digital consulting services are custom-tailored, enabling clients to experience game-changing outcomes.

                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="cmp-teaser__image">
                                                            <img src="/icon (5).png" />
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
                                                                <h2 className="cmp-teaser__title  text-dark ">
                                                                    <a
                                                                        className="cmp-teaser__title-link"
                                                                        href="https://www.designit.com/stories/point-of-view/why-should-insurance-companies-rethink-their-loyalty-strategies"
                                                                        rel="nofollow"
                                                                        target="_blank"
                                                                    >
                                                                        Future-proof approach to digital strategy:
                                                                    </a>
                                                                </h2>
                                                                <div className="cmp-teaser__description">
                                                                    <p className='text-dark'>
                                                                        The pace of digital change is rapidly increasing, and so is the number of demanding customers. We help our clients orchestrate all elements of an efficient digital value chain by leveraging the best digital capabilities, empowering them to cultivate long-term growth.

                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="cmp-teaser__image">
                                                            <img src="/icon (3).png" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="teaser teaser--full-size teaser--image-left teaser--card aem-GridColumn--default--none aem-GridColumn--phone--none aem-GridColumn--phone--12 aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--offset--phone--0 aem-GridColumn--offset--default--0">
                                                    <div className="cmp-teaser cmp-teaser--1828042053  cmp-teaser--show-action  ">
                                                        <div
                                                            className="cmp-teaser__content"
                                                            style={{}}
                                                        >
                                                            <div className="cmp-teaser__content-wrapper">
                                                                <h2 className="cmp-teaser__title  text-dark ">
                                                                    <div className="cmp-teaser__title">
                                                                        The Role of Network Consultation
                                                                        <br />
                                                                    </div>
                                                                </h2>
                                                                <div className="cmp-teaser__description">
                                                                    <p className='text-dark' >
                                                                        The Role of Network Consultation in Digital Transformation for Businesses
                                                                        network consultation experts guides businesses through digital transformation, ensuring scalable, secure, and efficient network infrastructures.

                                                                    </p>
                                                                </div>
                                                                <div className="cmp-teaser__action-">
                                                                    <div
                                                                        className="cmp-teaser__action-background"
                                                                        data-style="background-color:#fff; "
                                                                        style={{
                                                                            backgroundColor: '#fff',
                                                                            color: "#000"
                                                                        }}
                                                                    >

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="cmp-teaser__image">
                                                            <img src="/icon (6).png" />
                                                        </div>
                                                    </div>
                                                    <style
                                                        dangerouslySetInnerHTML={{
                                                            __html: '.cmp-teaser--1828042053 .cmp-teaser__content{color:rgb(255,255,255);background-color:#fff;}'
                                                        }}
                                                        data-path="/content/nexus/en/service-lines/consulting/jcr:content/root///teaser_copy_32048284_712145262"
                                                    />
                                                </div>
                                                <div className="teaser teaser--full-size teaser--image-left teaser--card aem-GridColumn--default--none aem-GridColumn--phone--none aem-GridColumn--phone--12 aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--offset--phone--0 aem-GridColumn--offset--default--0">
                                                    <div className="cmp-teaser cmp-teaser--971658057  cmp-teaser--show-action  ">
                                                        <div
                                                            className="cmp-teaser__content"
                                                            style={{}}
                                                        >
                                                            <div className="cmp-teaser__content-wrapper">
                                                                <h2 className="cmp-teaser__title  text-dark ">
                                                                    <div className="cmp-teaser__title">
                                                                        Cybersecurity Posture
                                                                        <br />
                                                                    </div>
                                                                </h2>
                                                                <div className="cmp-teaser__description">
                                                                    <p className='text-dark'>
                                                                        How Network Consultation Can Improve Cybersecurity Posture
                                                                        the role of network consultants in identifying vulnerabilities, implementing security measures, and improving overall network defense against cyber threats.

                                                                    </p>
                                                                </div>
                                                                <div className="cmp-teaser__action-">
                                                                    <div
                                                                        className="cmp-teaser__action-background"
                                                                        data-style="background-color:#fff; "
                                                                        style={{
                                                                            backgroundColor: '#fff',
                                                                            color: "#000"
                                                                        }}
                                                                    >
                                                                        <a
                                                                            className="cmp-teaser__action-link"
                                                                            href="/consulting/design-the-future-featuring-femtech-cofounders/"
                                                                            style={{
                                                                                backgroundColor: '#fff'
                                                                            }}
                                                                        >
                                                                            <span style={{}}>
                                                                                Read
                                                                            </span>
                                                                            More
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="cmp-teaser__image">
                                                            <img src="/icon (8).png" />
                                                        </div>
                                                    </div>
                                                    <style
                                                        dangerouslySetInnerHTML={{
                                                            __html: '.cmp-teaser--971658057 .cmp-teaser__content{color:rgb(255,255,255);background-color:#fff;}'
                                                        }}
                                                        data-path="/content/nexus/en/service-lines/consulting/jcr:content/root///teaser_copy_32048284_1027937634"
                                                    />
                                                </div>
                                                <div className="teaser teaser--full-size teaser--card aem-GridColumn--default--none aem-GridColumn--phone--none aem-GridColumn--phone--12 aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--offset--phone--0 aem-GridColumn--offset--default--0">
                                                    <div className="cmp-teaser cmp-teaser--13409574  cmp-teaser--show-action  ">
                                                        <div
                                                            className="cmp-teaser__content"
                                                            style={{}}
                                                        >
                                                            <div className="cmp-teaser__content-wrapper">
                                                                <h2 className="cmp-teaser__title  text-dark ">
                                                                    <div className="cmp-teaser__title">
                                                                        Educational Institutions
                                                                    </div>
                                                                </h2>
                                                                <div className="cmp-teaser__description">
                                                                    <p className='text-dark' >
                                                                        Why Educational Institutions Need Network Consultation for Enhanced Learning Experiences
                                                                        educational institutions can benefit from network consultation to design scalable, secure networks that support online learning and administrative functions.

                                                                    </p>
                                                                    <p />
                                                                </div>
                                                                <div className="cmp-teaser__action-">
                                                                    <div
                                                                        className="cmp-teaser__action-background"
                                                                        data-style="background-color:#fff; "
                                                                        style={{
                                                                            backgroundColor: '#fff',
                                                                            color: "#000"
                                                                        }}
                                                                    >

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="cmp-teaser__image">
                                                            <img src="/icon (10).png" />
                                                        </div>
                                                    </div>
                                                    <style
                                                        dangerouslySetInnerHTML={{
                                                            __html: '.cmp-teaser--13409574 .cmp-teaser__content{color:rgb(255,255,255);background-color:#fff;}'
                                                        }}
                                                        data-path="/content/nexus/en/service-lines/consulting/jcr:content/root///teaser_copy_32048284_1621792052"
                                                    />
                                                </div>
                                                <div className="teaser teaser--full-size teaser--card aem-GridColumn--default--none aem-GridColumn--phone--none aem-GridColumn--phone--12 aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--offset--phone--0 aem-GridColumn--offset--default--0">
                                                    <div className="cmp-teaser cmp-teaser--1606096698  cmp-teaser--show-action  ">
                                                        <div
                                                            className="cmp-teaser__content"
                                                            style={{}}
                                                        >
                                                            <div className="cmp-teaser__content-wrapper">
                                                                <h2 className="cmp-teaser__title  text-dark ">
                                                                    <div className="cmp-teaser__title">
                                                                        Bandwidth Management

                                                                        <br />
                                                                    </div>
                                                                </h2>
                                                                <div className="cmp-teaser__description">
                                                                    <p className='text-dark'>
                                                                        Optimizing Network Performance: The Role of Network Consultation in Bandwidth Management
                                                                        network consultants helps businesses optimize bandwidth usage, reduce latency, and improve overall network performance.

                                                                    </p>
                                                                    <p>
                                                                        <br />
                                                                    </p>
                                                                    <p />
                                                                </div>
                                                                <div className="cmp-teaser__action-">
                                                                    <div
                                                                        className="cmp-teaser__action-background"
                                                                        data-style="background-color:#fff; "
                                                                        style={{
                                                                            backgroundColor: '#fff',
                                                                            color: "#000"
                                                                        }}
                                                                    >
                                                                        <a
                                                                            className="cmp-teaser__action-link"
                                                                            href="/consulting/championing-the-chatbot/"
                                                                            style={{
                                                                                backgroundColor: '#fff'
                                                                            }}
                                                                        >
                                                                            Read More
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="cmp-teaser__image">
                                                            <img src="/icon (1).png" />
                                                        </div>
                                                    </div>
                                                    <style
                                                        dangerouslySetInnerHTML={{
                                                            __html: '.cmp-teaser--1606096698 .cmp-teaser__content{color:rgb(255,255,255);background-color:#fff;}'
                                                        }}
                                                        data-path="/content/nexus/en/service-lines/consulting/jcr:content/root///teaser_copy_32048284_1404454339"
                                                    />
                                                </div>
                                                <div className="teaser teaser--full-size teaser--image-left teaser--card aem-GridColumn--default--none aem-GridColumn--phone--none aem-GridColumn--phone--12 aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--offset--phone--0 aem-GridColumn--offset--default--0">
                                                    <div className="cmp-teaser cmp-teaser--786989466  cmp-teaser--show-action  ">
                                                        <div
                                                            className="cmp-teaser__content"
                                                            style={{}}
                                                        >
                                                            <div className="cmp-teaser__content-wrapper">
                                                                <h2 className="cmp-teaser__title  text-dark ">
                                                                    <div className="cmp-teaser__title">
                                                                        Ensuring Business Continuity and Disaster Recovery
                                                                        <br />
                                                                    </div>
                                                                </h2>
                                                                <div className="cmp-teaser__description">
                                                                    <p className='text-dark'>
                                                                        The Role of Network Consultation in Ensuring Business Continuity and Disaster Recovery
                                                                        Experts assist businesses in developing reliable business continuity plans and implementing disaster recovery strategies to minimize downtime.

                                                                    </p>
                                                                    <p />
                                                                </div>
                                                                <div className="cmp-teaser__action-">
                                                                    <div
                                                                        className="cmp-teaser__action-background"
                                                                        data-style="background-color:#fff; "
                                                                        style={{
                                                                            backgroundColor: '#fff',
                                                                            color: "#000"
                                                                        }}
                                                                    >

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="cmp-teaser__image">
                                                            <img src="/icon (7).png" />
                                                        </div>
                                                    </div>
                                                    <style
                                                        dangerouslySetInnerHTML={{
                                                            __html: '.cmp-teaser--786989466 .cmp-teaser__content{color:rgb(255,255,255);background-color:#fff;}'
                                                        }}
                                                        data-path="/content/nexus/en/service-lines/consulting/jcr:content/root///teaser_copy_32048284"
                                                    />
                                                </div>
                                                <div className="teaser teaser--full-size teaser--image-left teaser--card aem-GridColumn--default--none aem-GridColumn--phone--none aem-GridColumn--phone--12 aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--offset--phone--0 aem-GridColumn--offset--default--0">
                                                    <div className="cmp-teaser cmp-teaser--1182465507  cmp-teaser--show-action  ">
                                                        <div
                                                            className="cmp-teaser__content"
                                                            style={{}}
                                                        >
                                                            <div className="cmp-teaser__content-wrapper">
                                                                <h2 className="cmp-teaser__title  text-dark ">
                                                                    <div className="cmp-teaser__title">
                                                                        Cloud Migration Strategies
                                                                        <br />
                                                                    </div>
                                                                </h2>
                                                                <div className="cmp-teaser__description">
                                                                    <p className='text-dark'>
                                                                        Cloud Migration Strategies: How Network Consultants Help Businesses Transition Seamlessly
                                                                        the effects of organizations in moving their operations to the cloud, ensuring minimal disruption and maximum efficiency.
                                                                    </p>
                                                                    <p />
                                                                </div>
                                                                <div className="cmp-teaser__action-">
                                                                    <div
                                                                        className="cmp-teaser__action-background"
                                                                        data-style="background-color:#fff; "
                                                                        style={{
                                                                            backgroundColor: '#fff',
                                                                            color: "#000"
                                                                        }}
                                                                    >

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="cmp-teaser__image">
                                                            <img src="/icon (9).png" />
                                                        </div>
                                                    </div>
                                                    <style
                                                        dangerouslySetInnerHTML={{
                                                            __html: '.cmp-teaser--1182465507 .cmp-teaser__content{color:rgb(255,255,255);background-color:#fff;}'
                                                        }}
                                                        data-path="/content/nexus/en/service-lines/consulting/jcr:content/root///teaser_copy_32048284_1056046798"
                                                    />
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
            <section className="services3">
                <h2 className='fw-bold fs-2'>

                </h2>
                <div className="border-header">
                    <div className="cmp-border-header cmp-border-header-650763923">
                        <div className="cmp-border-header__top-overlay">
                            <div className="cmp-border-header__title">
                                <p>
                                    {/* <span
                                        style={{
                                            color: 'rgb(53,84,146)'
                                        }}
                                    >
                                        SERVICES
                                    </span> */}
                                    <span className="highlight">Consulting</span>
                                </p>
                            </div>
                            <div
                                className="cmp-border-header__top-overlay-line"
                                style={{
                                    backgroundColor: '#7F3E98'
                                }}
                            />
                        </div>
                    </div>
                </div> <br />
                <div className="services3-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service3-items d-block p-3" style={{height: "auto"}}>
                            <img src={service.icon} className="mx-auto" />  <br />
                            {service.title}
                        </div>
                    ))}
                </div>
            </section>
            <Demo />
        </div>
    )
}

export default Demo2