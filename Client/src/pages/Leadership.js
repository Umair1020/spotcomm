import React, { useState } from 'react';
import Header from '../components/Header';
import "../App.css"
import Demo from '../components/Navbar';
import { useMediaQuery } from 'react-responsive'

const Leadership = () => {
    const [selectedBoard, setSelectedBoard] = useState('Board of Directors');

    const handleFilterClick = (board) => {
        setSelectedBoard(board);
    };

    // Data for each board category
    const data = {
        "Board of Directors": [
            { name: 'Hassam Sohail Ahmed', title: 'CEO & Founder', image: '/ceo1.png' }
        ],
    };
    const Desktop = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 992 })
        return isDesktop ? children : null
    }
    const Tablet = ({ children }) => {
        const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
        return isTablet ? children : null
    }
    const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ minWidth: 100, maxWidth: 991 })
        return isMobile ? children : null
    }
    const Default = ({ children }) => {
        const isNotMobile = useMediaQuery({ minWidth: 768 })
        return isNotMobile ? children : null
    }

    return (
        <div>
            <Header />
            <section id="heros" className="heros1 section dark-background">
                <img src="/leader.png" alt="Leadership Banner" />
                <div className="container">
                    <div className="row justify-content-start">
                        <div className="col-lg-8">
                            <h2 className="profh2">Spotcomm <br />Leadership</h2>
                        </div>
                    </div>
                </div>

            </section>
            {/* <div className="leadership-container container">

                {data[selectedBoard].map((member, index) => (
                    <>
                        <h2 className='text-center' >   {member.title}</h2> <br />
                        <div className="splitparsys aem-GridColumn aem-GridColumn--default--12">



                            <div className="splitparsys " style={{ backgroundColor: "" }}>
                                <div>

                                    <div className="row container-fluid fluid-width four-box align-class-fix">

                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 leadership-section">
                                            <div className="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
                                                <div className="leadership aem-GridColumn aem-GridColumn--default--12">
                                                    <div className="cq-dd-pages strategyalliances new-leadership-style">
                                                        <div className="independent-director-cotent-box">
                                                            <a href="/leadership/srini-pallia/"></a>
                                                            <div className="wipro-segments-squares-content">
                                                                <a href="/leadership/srini-pallia/">
                                                                    <div className="independent-director-cotent-box-image">
                                                                        <span
                                                                            className="view-profile-bg-gradient"

                                                                        />

                                                                        <img
                                                                            alt="Srini Pallia"
                                                                            src={member.image}
                                                                            className="multi-image"
                                                                            data-hd="/content/dam/nexus/en/leadership/srini-pallia-n-250x250.png"
                                                                            data-sd="/content/dam/nexus/en/leadership/srini-pallia-n-250x250.png"
                                                                            data-mob="/content/dam/nexus/en/leadership/srini-pallia-n-250x250.png"
                                                                            hover-color1="rgba(0,140,173,0.7)"
                                                                            hover-color2="rgba(191,0,191,0.7)"
                                                                            hover-text="View Profile"
                                                                        />
                                                                    </div>
                                                                </a><br />
                                                                <div className="independent-director-cotent-box-text">
                                                                    <h4 className="content-h13-akkurat-mono text-center">
                                                                        {member.name}<br />
                                                                    </h4>
                                                                    <p className="content-h6 content-h7-freight-text-pro text-center">
                                                                        {member.title}
                                                                    </p>
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
                    </>
                ))}
            </div> */}





            <div class="tab-content" id="2tabs">
                <div id="2-BoardofDirectors" class="tab" >



                    <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">

                        <div class="layout-container-component aem-GridColumn aem-GridColumn--default--12">

















                            <br />
                            <div class="white img-position-- container">
                                <div class="layoutcontainer">

                                    <div class="withoutmargin ">
                                        <div class="spacing">




                                            <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">

                                                <div class="title-editable aem-GridColumn aem-GridColumn--default--12">









                                                    <div >
                                                        <div class="target" >
                                                            <div class="innerpage " tabindex="0">
                                                                <h2 ><span class="content-sec-header-h2-akkurat-mono floting-nav-title title-regular " >CEO & FOUNDER</span></h2>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <br />







                                                </div>
                                                <div class="splitparsys aem-GridColumn aem-GridColumn--default--12">

                                                    <div class="splitparsys " >










                                                        <div>

                                                            <div class="row   fluid-width four-box align-class-fix">
                                                                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 leadership-section">



                                                                    <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">

                                                                        <div class="leadership aem-GridColumn aem-GridColumn--default--12">

                                                                            <div class="cq-dd-pages strategyalliances new-leadership-style">


                                                                                <div class="independent-director-cotent-box">

                                                                                   <div class="wipro-segments-squares-content">
                                                                                        <div class="independent-director-cotent-box-image">




                                                                                            <img alt="Rishad Premji" src="/ceo1.png" class="multi-image mx-auto" data-hd="/content/dam/nexus/en/leadership/rishad-premji-250x250.png" data-sd="/content/dam/nexus/en/leadership/rishad-premji-250x250.png" data-mob="/content/dam/nexus/en/leadership/rishad-premji-250x250.png" hover-color1="rgba(0,140,173,0.7)" hover-color2="rgba(191,0,191,0.7)" hover-text="View Profile" /><br />
                                                                                        </div>
                                                                                 

                                                                                        <div class="independent-director-cotent-box-text"> 
                                                                                            <h4 class="content-h13-akkurat-mono text-center text-center">Hassam Sohail Ahmed </h4>
                                                                                            <p class="content-h6 content-h7-freight-text-pro text-center text-center">CEO & FOUNDER</p>
                                                                                        </div>
                                                                                    </div>

                                                                                </div>



                                                                            </div></div>


                                                                    </div>

                                                                </div>





                                                            </div>
                                                        </div>









                                                    </div>
                                                </div>
                                                <div class="title-editable aem-GridColumn aem-GridColumn--default--12 mt-5">








                                                    <div >
                                                        <div class="target" style={{ paddingTop: "10px;" }}>
                                                            <div class="innerpage " tabindex="0">
                                                                <h2><span class="content-sec-header-h2-akkurat-mono floting-nav-title">EXECUTIVE BOARD</span></h2>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <br />







                                                </div>
                                                <div class="splitparsys aem-GridColumn aem-GridColumn--default--12">

                                                    <div class="splitparsys " >










                                                        <div>

                                                            <div class="row container-fluid fluid-width four-box align-class-fix ">

                                                                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 leadership-section mx-auto">



                                                                    <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">

                                                                        <div class="leadership aem-GridColumn aem-GridColumn--default--12">
                                                                            <div class="cq-dd-pages strategyalliances new-leadership-style">


                                                                                <div class="independent-director-cotent-box">

                                                                                <div class="wipro-segments-squares-content">
                                                                                        <div class="independent-director-cotent-box-image">

                                                                                            <span class="view-profile-bg-gradient" ></span>


                                                                                            <img alt="Azim H. Premji" src="/basit.png" class="multi-image mx-auto" data-hd="/content/dam/nexus/en/leadership/azim-h-p-250x250.png" data-sd="/content/dam/nexus/en/leadership/azim-h-p-250x250.png" data-mob="/content/dam/nexus/en/leadership/azim-h-p-250x250.png" hover-color1="rgba(0,140,173,0.7)" hover-color2="rgba(191,0,191,0.7)" hover-text="View Profile" />
                                                                                        </div>
                                                                               

                                                                                        <div class="independent-director-cotent-box-text">
                                                                                            <h4 class="content-h13-akkurat-mono text-center fs-5">Basit Naeem </h4>
                                                                                            <p class="content-h6 content-h7-freight-text-pro text-center">CHIEF FINANCE OFFICER</p>
                                                                                        </div>
                                                                                    </div>

                                                                                </div>



                                                                            </div></div>


                                                                    </div>
                                                                    <br />
                                                                </div>

                                                                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 leadership-section mx-auto">



                                                                    <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">

                                                                        <div class="leadership aem-GridColumn aem-GridColumn--default--12">
                                                                            <div class="cq-dd-pages strategyalliances new-leadership-style">


                                                                                <div class="independent-director-cotent-box">

                                                                                  <div class="wipro-segments-squares-content">
                                                                                        <div class="independent-director-cotent-box-image">

                                                                                            <span class="view-profile-bg-gradient" ></span>


                                                                                            <img alt="Azim H. Premji" src="/soaman.png" class="multi-image mx-auto" data-hd="/content/dam/nexus/en/leadership/azim-h-p-250x250.png" data-sd="/content/dam/nexus/en/leadership/azim-h-p-250x250.png" data-mob="/content/dam/nexus/en/leadership/azim-h-p-250x250.png" hover-color1="rgba(0,140,173,0.7)" hover-color2="rgba(191,0,191,0.7)" hover-text="View Profile" />
                                                                                        </div>
                                                                                   

                                                                                        <div class="independent-director-cotent-box-text">
                                                                                            <h4 class="content-h13-akkurat-mono text-center fs-5"> Muhammad Soaman Faruqi </h4>
                                                                                            <p class="content-h6 content-h7-freight-text-pro text-center fs-6">CHIEF CUSTOMER OFFICER</p>
                                                                                        </div>
                                                                                    </div>

                                                                                </div>



                                                                            </div></div>


                                                                    </div>

                                                                </div><br />
                                                                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 leadership-section mx-auto">

                                                                    <br />

                                                                    <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">

                                                                        <div class="leadership aem-GridColumn aem-GridColumn--default--12">
                                                                            <div class="cq-dd-pages strategyalliances new-leadership-style">


                                                                                <div class="independent-director-cotent-box">

                                                                                   <div class="wipro-segments-squares-content">
                                                                                        <div class="independent-director-cotent-box-image">

                                                                                            <span class="view-profile-bg-gradient" ></span>
                                                                                            <img alt="Azim H. Premji" src="/faizan1.png" class="multi-image mx-auto" data-hd="/content/dam/nexus/en/leadership/azim-h-p-250x250.png" data-sd="/content/dam/nexus/en/leadership/azim-h-p-250x250.png" data-mob="/content/dam/nexus/en/leadership/azim-h-p-250x250.png" hover-color1="rgba(0,140,173,0.7)" hover-color2="rgba(191,0,191,0.7)" hover-text="View Profile" />
                                                                                        </div>
                                                                              

                                                                                        <div class="independent-director-cotent-box-text">
                                                                                            <h4 class="content-h13-akkurat-mono text-center fs-5"> Muhammad Faizan Majeed </h4>
                                                                                            <p class="content-h6 content-h7-freight-text-pro text-center fs-6">CHIEF FINANCE OFFICER</p>
                                                                                        </div>
                                                                                    </div>

                                                                                </div>



                                                                            </div></div>


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
            <br /><br /> <Desktop>
                <section id="features" className="features section">
                    {/* Section Title */}

                    {/* End Section Title */}
                    <div className="container">
                        <div className="row justify-content-between">
                            <div
                                className="col-lg-5 d-flex align-items-center aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                <div className="content">

                                    <p>
                                        At Spotcomm Global, our foundation is built on two core principles: leadership and culture. These are not just words for us; they are the driving forces behind our success, innovation, and the strong connections we forge with our clients and team members alike.  We believe every individual in our organization has the power to lead—whether by introducing a transformative idea, solving a challenging problem, or inspiring those around them.  We encourage open communication, creative thinking, and a commitment to delivering exceptional value to our clients.
                                    </p> <br />
                                    <h6>Hassam Sohail Ahmed</h6>
                                    <h6> CEO & FOUNDER</h6>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div
                                    className="tab-content aos-init aos-animate"
                                    data-aos="fade-up"
                                    data-aos-delay={200}
                                >
                                    <div
                                        className="tab-pane fade active show"
                                        id="features-tab-1"
                                        role="tabpanel"
                                    >
                                        <img src="/ceo2.png" alt="" className="img-fluid" />
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="features-details" className="features-details section">
                    <div className="container">
                        <div className="row gy-4 justify-content-between features-item">
                            <div
                                className="col-lg-6 aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={100}
                            >
                                <img src="/basit1.png" className="img-fluid" alt="" />
                            </div>
                            <div
                                className="col-lg-5 d-flex align-items-center aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                <div className="content">

                                    <p>
                                        At Spotcomm Global, our approach to leadership and culture is deeply intertwined with the financial health and sustainability of our organization. As Chief Financial Officer, I see firsthand how a strong culture and visionary leadership drive not only operational success but also long-term value creation We foster an environment where every team member understands how their contributions align with our broader objectives. By maintaining open lines of communication about financial priorities and performance, we build trust and encourage a shared sense of ownership in our success.
                                    </p> <br />
                                    <h6>Basit Naeem</h6>
                                    <h6> CHIEF FINANCE OFFICER</h6>
                                </div>
                            </div>
                        </div>
                        {/* Features Item */}
                        <div className="row gy-4 justify-content-between features-item">
                            <div
                                className="col-lg-5 d-flex align-items-center aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                <div className="content">

                                    <p>
                                        At Spotcomm Global, our leadership and culture are deeply aligned with one purpose: delivering unparalleled value to our customers. As Chief Customer Officer, I have the privilege of championing a customer-first approach across every aspect of our organization. At Spotcomm, we don’t just aim to meet expectations; we strive to exceed them. By fostering a culture of innovation and placing leadership in the hands of every team member, we empower our people to create impactful experiences that help our customers succeed in a rapidly changing world.
                                    </p>
                                    <br />
                                    <h6>Muhammad Soaman Faruqi</h6>
                                    <h6> CHIEF CUSTOMER OFFICER</h6>
                                </div>
                            </div>
                            <div
                                className="col-lg-6 order-1 order-lg-2 aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                <img src="/soaman1.png" className="img-fluid" alt="" />
                            </div>
                        </div>
                        <div className="row gy-4 justify-content-between features-item">
                            <div
                                className="col-lg-6 aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={100}
                            >
                                <img src="/faizan.png" className="img-fluid" alt="" />
                            </div>
                            <div
                                className="col-lg-5 d-flex align-items-center aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                <div className="content">

                                    <p>
                                        At Spotcomm Global, technology is at the heart of everything we do. As Chief Technical Officer, I am proud to lead a team where leadership and culture work hand-in-hand to push the boundaries of innovation and deliver transformative solutions for our clients. Spotcomm’s commitment to leadership and culture is the driving force behind our ability to turn vision into reality. By maintaining a relentless focus on innovation and collaboration, we are building a future where technology enhances lives, empowers businesses, and connects communities worldwide.
                                    </p> <br />
                                    <h6> Muhammad Faizan Majeed</h6>
                                    <h6> CHIEF TECHNICAL OFFICER</h6>
                                </div>
                            </div>
                        </div>
                        {/* Features Item */}
                    </div>
                </section>
            </Desktop>
            <Mobile>
                <section id="details" className="details section">
                    {/* Section Title */}

                    {/* End Section Title */}
                    <div className="container">
                        <div className="row gy-4 align-items-center features-item">
                            <div
                                className="col-md-6 d-flex align-items-center"
                                data-aos="zoom-out"
                                data-aos-delay={100}
                            >
                                <img src="/ceo2.png" alt="" className="img-fluid" />
                            </div>
                            <div className="col-md-6" data-aos="fade-up" data-aos-delay={100}>
                                <div className="content">

                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </p> <br />
                                    <h6>Faizan Majeed</h6>
                                    <h6> CHIEF TECHNICAL OFFICER</h6>
                                </div>
                            </div>
                        </div>
                        {/* Features Item */}
                        <div className="row gy-4 align-items-center features-item">
                            <div
                                className="col-md-5 order-1 order-md-2 d-flex align-items-center"
                                data-aos="zoom-out"
                                data-aos-delay={200}
                            >
                                <img src="/basit1.png" className="img-fluid" alt="" />
                            </div>
                            <div
                                className="col-md-5 order-2 order-md-1"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                <div className="content">

                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </p> <br />
                                    <h6>Basit Naeem</h6>
                                    <h6> CHIEF FINANCE OFFICER</h6>
                                </div>
                            </div>
                        </div>
                        {/* Features Item */}
                        <div className="row gy-4 align-items-center features-item">
                            <div className="col-md-5 d-flex align-items-center" data-aos="zoom-out">
                                <img src="/soaman1.png" className="img-fluid" alt="" />
                            </div>
                            <div className="col-md-5" data-aos="fade-up">
                                <div className="content">

                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </p> <br />
                                    <h6>Soaman Faruqi</h6>
                                    <h6> CHIEF CUSTOMER OFFICER</h6>
                                </div>
                            </div>
                        </div>
                        {/* Features Item */}
                        <div className="row gy-4 align-items-center features-item">
                            <div
                                className="col-md-5 order-1 order-md-2 d-flex align-items-center"
                                data-aos="zoom-out"
                            >
                                <img src="/faizan.png" className="img-fluid" alt="" />
                            </div>
                            <div className="col-md-6 order-2 order-md-1" data-aos="fade-up">
                                <div className="content">

                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </p> <br />
                                    <h6>Faizan Majeed</h6>
                                    <h6> CHIEF TECHNICAL OFFICER</h6>
                                </div>
                            </div>
                        </div>
                        {/* Features Item */}
                    </div>
                </section>
            </Mobile>
            <Demo />

        </div>
    );
};

export default Leadership;
