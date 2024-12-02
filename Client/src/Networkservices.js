import React, { useState } from 'react'
import Header from './components/Header'
import Demo from './components/Navbar';
import HeroSection from './components/D';

const Networkservices = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const solutions = [
        {

            imgSrc: "/managenet (1).png",
            title: "Resident Engineer Deployment",
            description: "Qualified resident engineer hiring and deployment.",
        },
        {

            imgSrc: "/managenet (2).png",
            title: "Electronics/CCTV Staff Hiring",
            description: "Selecting the right candidates to monitor CCTV to monitor surveillance setup ",
        },
        {

            imgSrc: "/managenet (3).png",
            title: "IT Department Training",
            description: "IT Staff audit, Training and Hiring",
        },
        {

            imgSrc: "/managenet (4).png",
            title: "IT Staffing",
            description: "Outsourcing, Training and certification",
        },
        {

            imgSrc: "/managenet (5).png",
            title: "Electronics/CCTV Staff Hiring",
            description: "Selecting the right candidates to monitor CCTV to monitor surveillance setup ",
        },
        {

            imgSrc: "/managenet (6).png",
            title: "IT Department Training",
            description: "IT Staff audit, Training and Hiring",
        },
        {

            imgSrc: "/managenet (7).png",
            title: "IT Staffing",
            description: "Outsourcing, Training and certification",
        },
    ];

    return (
        <div>
            <Header />
            <section id="heros" class="heros1 section dark-background">
                <img src="/manage.png" alt="" />

                <div class="container text-start">
                    <div class="row justify-content-start">
                        <div class="col-lg-8">
                            <h2 className='profh2'>Managed Network
                            Services </h2>
                        </div>
                    </div>
                </div>
            </section>
            <div className='container'>

                <p className='text-start fs-5'><br />
                    Spotcomm’s Managed Network Services cover the entire lifecycle of your network infrastructure—from design and deployment to ongoing management and support. We offer a full range of solutions, including network architecture, configuration, security, monitoring, and troubleshooting.
                    If your network performance is lagging, managed services could be the key to optimizing it. A poorly performing network can disrupt employee productivity, increase costs, and cause issues like slow response times or dropped calls.
                    At Spotcomm, we recognize the critical role a reliable network plays in your organization’s success. Our goal is to provide top-tier managed network services that empower your business to thrive in any environment

                </p>

                <br /><br />
                <h2>Features of Managed Network Services   </h2>
                <p>When you sign up with Spotcomm, you’ll get access to our critical network management and maintenance features which are essential  <br />to your network performance and its durability.
                </p>
                <br /><br />
                <div className=''>


                    <div className="teaser teaser--full-size teaser--image-left teaser--card aem-GridColumn--default--none aem-GridColumn--phone--none aem-GridColumn--phone--12 aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--offset--phone--0 aem-GridColumn--offset--default--0">
                        <div className="cmp-teaser cmp-teaser--971658057  cmp-teaser--show-action  ">
                            <div
                                className="cmp-teaser__content"
                                style={{}}
                            >
                                <div className="cmp-teaser__content-wrapper">
                                    <h2 className="cmp-teaser__title  text-dark ">
                                        <div className="cmp-teaser__title">
                                            Network Security

                                            <br />
                                        </div>
                                    </h2>
                                    <div className="cmp-teaser__description">
                                        <p className='text-dark'>
                                            A lack of adequately applied software patches can cause much more than an unreliable network. Many of these patches are designed to fix security holes. Worse, every would-be cyber criminal knows about the exploit once the patch is released. If you don’t apply the patches quickly, your systems become a haven for every cyber attacker wishing to harm you. Should they succeed, your sensitive data, or that of your customers, could be made public.

                                        </p>
                                    </div>

                                </div>
                            </div>
                            <div className="cmp-teaser__image">
                                <img src="/manage (3).png" />
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
                                            Network Management

                                        </div>
                                    </h2>
                                    <div className="cmp-teaser__description">
                                        <p className='text-dark' >
                                            Network management involves daily tasks such as configuration, optimization, monitoring, and troubleshooting. Beyond these routine duties, it also encompasses responding to issues as they arise and handling one-time tasks like setting up new devices or software.



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
                                <img src="/manage (2).png" />
                            </div>
                        </div>
                        <style
                            dangerouslySetInnerHTML={{
                                __html: '.cmp-teaser--13409574 .cmp-teaser__content{color:rgb(255,255,255);background-color:#fff;}'
                            }}
                            data-path="/content/nexus/en/service-lines/consulting/jcr:content/root///teaser_copy_32048284_1621792052"
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
                                            Network Maintenance

                                            <br />
                                        </div>
                                    </h2>
                                    <div className="cmp-teaser__description">
                                        <p className='text-dark'>
                                            While daily monitoring is essential for maintaining a healthy network, regular maintenance is equally crucial. Software companies frequently release patches to fix bugs and improve security, which need to be promptly installed. Hardware, too, can fail over time and may require replacement or upgrading to meet modern performance standards. In some cases, outdated equipment simply can’t keep up with current demands. Without proper attention to these updates, a once reliable network can quickly become more of a liability than an asset.


                                        </p>
                                    </div>

                                </div>
                            </div>
                            <div className="cmp-teaser__image">
                                <img src="/manage (1).png" />
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
                                            Network Monitoring
                                        </div>
                                    </h2>
                                    <div className="cmp-teaser__description">
                                        <p className='text-dark' >
                                            Networks are busy. At any given time, important data could be flowing through them. Data that can seriously impede business processes if it doesn’t arrive. Yet, networks aren’t infallible. Sometimes they go down. To minimize the impact of lost data, they need to be monitored constantly. While plenty of advanced tools can automate that process, you’ll need access to those tools. Importantly, you’ll also need access to someone who can be alerted and intervene when there’s a problem. This makes monitoring one of the most essential features of managed network services.


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
                                <img src="/manage (4).png" />
                            </div>
                        </div>
                        <style
                            dangerouslySetInnerHTML={{
                                __html: '.cmp-teaser--13409574 .cmp-teaser__content{color:rgb(255,255,255);background-color:#fff;}'
                            }}
                            data-path="/content/nexus/en/service-lines/consulting/jcr:content/root///teaser_copy_32048284_1621792052"
                        />
                    </div>
                </div>

            </div> <br /> <br />
            <h2 className='text-center'>Benefits</h2>
            <div className="services-grid">
                <div className="grid-container">
                    {solutions.map((service, index) => (
                        <div key={index} className="grid-item">
                            <img src={service.imgSrc} alt={service.title} />
                            <div className='p-2'>
                                <h3 >{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <HeroSection />

            <br /><br />
            <h2 className='text-center fw-bold fs-1 '>YOUR TECH SUPPORT</h2>
            <h4 className='text-center fw-normal'>LET US BE YOUR LARGE AND SMALL BUSINESS IT <br /> SUPPORT
            </h4><br /><br />
            <img src='/manage2.png' className='w-100' />
            <Demo />
        </div>
    )
}

export default Networkservices