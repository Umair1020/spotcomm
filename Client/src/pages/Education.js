import React, { useState } from 'react'
import Header from '../components/Header'
import Oursuccess from '../components/Oursuccess'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { useMediaQuery } from 'react-responsive';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation, Scrollbar, A11y } from 'swiper/modules';
import Demo from '../components/Navbar';


const Education = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const openModal = () => {
        console.log("Opening modal"); // Debugging statement
        setIsModalOpen(true);
    };

    const closeModal = () => {
        console.log("Closing modal"); // Debugging statement
        setIsModalOpen(false);
    };
    const openModal1 = () => {
        console.log("Opening modal"); // Debugging statement
        setIsModalOpen1(true);
    };

    const closeModal1 = () => {
        console.log("Closing modal"); // Debugging statement
        setIsModalOpen1(false);
    };
    const services = [
        {
            title: 'Updated Digital Infrastructure', icon: '/cyber11.png', desc: "Healthcare and Medical Devices"
        },
        {
            title: 'System Integration and Managed Security Services',
            icon: '/cyber10.png', desc: "Next-gen Identity & Access Services to secure your digital transformation journey"
        },
        { title: 'Reliable Network Infrastructure', icon: '/cyber12.png', desc: "Helpng C-suite assess and enhance the enterprise cybersecurity risk posture, adhere" },
        { title: 'Disaster Recovery and Backup', icon: '/cyber13.png', desc: "Fortify defenses both on cloud and data center against the most advanced cyber threats" },
        { title: 'Identity & Access Management', icon: '/cyber14.png', desc: "Next-gen Identty & Access Services to secure your digital transformation journey" },
        // { title: 'Compliance and Data Privacy', icon: '/cyber15.png', dec: "Safeguard your most valuable assets with comprehensive data and OT/IoT security solutions tailored to your needs." },
        { title: 'Cloud Integration', icon: '/cyber16.png', desc: "Seamless and cost-effective management of security operations provided in an as-a-service model." },
        { title: 'Core Advisory, Emerging Technologies & AI', icon: '/cyber17.png', desc: "Spotcomm’s Artificial Intelligence, Open Source, 5G, and more" },
        { title: 'Compliance and Data Privacy', icon: '/cyber15.png', desc: "Safeguard your most valuable assets with comprehensive data and OT/IoT security solutions tailored to your needs." },

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

            <Desktop>
                <div class="col-lg-12 w-100  servicehealth mx-auto  " style={{}} >
                    <img src='/education.png' className='w-100 ' />
                </div>
            </Desktop>
            <Mobile>
                <div class="col-lg-12 w-100 servicehealth mx-auto  " style={{}} >
                    <img src='/educationmob.png' className='w-100 ' />
                </div>
            </Mobile>
            <br />
            <div className='container'>
                <div className=' row  ' id='cyber'>
                    <div className='col-lg-6   ' data-aos="fade-right" data-aos-delay="100">

                        <h2 className='h2'>Our Passion for  <span className='' style={{ color: "#7F3E98" }}>Education
                            and</span> Awareness </h2><br />
                        <p className=' ' > Get your copy now! The 5th edition of Wipro’s cybersecurity report presents the latest cyber trends and insights to tell the story of how modern enterprises are working to achieve cyber resilience. Over the past few years, major technological, geopolitical and economic disruptions have exposed enterprises to new and unexpected risks, and have forced security leaders to change how they approach cybersecurity threats and risk management. This report explains how enterprises are stepping up to meet new and unexpected risks and presents the serious challenges facing security leaders.</p>
                        <br />   <button className="service-btn d-block" onClick={openModal1}>Read More</button>
                    </div>

                    <div className='col-lg-6 ' data-aos="fade-up" data-aos-delay="100"><br />
                        <img src='/education3.png' className='w-75 mx-auto d-flex justify-content-center' />
                    </div>
                    <br /> <br />
                </div>
            </div>
            {isModalOpen1 && (
                <div className="modal" style={{ display: 'flex', alignItems: "center" }}>
                    <div className="modal-content bg-light fixed-top w-75  ">
                        <span className="close " style={{ color: "#7F3E98" }} onClick={closeModal1}>&times;</span>
                        <div className="modal-body">


                            <p>
                                Educational institutions are experiencing significant change and since Covid-19, the world has moved from in-institution education to remote live session based setup. From preschool to high school, and universities to technical courses, educational institutions have navigated across their operations and service delivery. Hybrid and flexible learning models are the new way to go for students to learn, and also how faculty support new delivery mechanisms.
                                Industry leaders are challenged to improve service efficiency and student outcomes without compromising the overall experience. Technology can help drive these imperatives and create a future where institutions deliver value in education, research and experience. But realizing this future requires a partner with the experience and expertise to accelerate digital transformation in education, enabling all stakeholders to achieve their desired outcomes.

                                Spotcomm helps educational institutions around the world manage their digital transformation journey by providing solutions that:

                                Providing Seamless internet experience for teachers and students.
                                Effectively manage the student lifecycle experience and expectations
                                Improve productivity by enhancing the onsite digital infrastructure and WiFi experience
                                Modernize infrastructure and provide critical support, significantly increasing overall effectiveness
                                Leverage data to derive actionable insights and aid in decision making
                                Drive innovation to improve learning and teaching outcomes

                                Spotcomm not only helps organizations network design, but also helps in customizing, implementing, managing and improving a number of systems, from the Student Access Control (SAC), learning management system and CRM to workflow management systems, inhouse servers and IT desktop systems deployed in the labs. These diverse capabilities reflect the full range of functions affected by digital transformation in education.

                                Through Spotcomm’s network consulting expertise, educational institutions can build sustainable digital systems that increase the network capability of student enrollment, improve student/employee satisfaction, drive favorable outcomes for institutions and optimize operations for them.



                            </p>
                        </div>
                    </div>
                </div>
            )}
            <br />
            <section id="heros" class="cyber3 section dark-background">

                <img src="/education1.png" alt="" />

                <div class="container">
                    <div class="row ">
                        <div class="col-lg-12">
                            <h2 className=''>The Future of Network Solutions in 
                                Educational Institutions

                            </h2><br />
                            <p className='para'>Spotcomm’s Managed Network Services offer educational institutions the tools they need to thrive in a technology-driven environment. By enhancing connectivity, security, and support, these services not only improve operational efficiency but also foster a more effective learning experience for students and educators alike. Investing in managed network solutions can significantly contribute to the long-term success of educational institutions, empowering them to focus on their core mission of education while leveraging technology to its fullest potential.
                            </p><br />
                            <button className="service-btn" onClick={openModal}>Read More</button>
                        </div>
                    </div>
                </div>
            </section>

            {isModalOpen && (
                <div className="modal" style={{ display: 'flex', alignItems: "center" }}>
                    <div className="modal-content bg-light fixed-top w-75  ">
                        <span className="close " style={{ color: "#7F3E98" }} onClick={closeModal}>&times;</span>
                        <div className="modal-body">


                            <p>
                                At SpotComm, we understand that the future of education is closely tied to the evolution of network technology. As schools, colleges, and universities increasingly adopt digital learning tools, the demand for high-performance, secure, and adaptable network solutions has never been greater. Our vision is to provide educational institutions with cutting-edge network infrastructures that not only support today’s needs but also prepare them for tomorrow's challenges.

                                We offer tailored solutions that enable seamless connectivity across campuses, empowering students and faculty to collaborate, access resources, and engage with digital content anytime, anywhere. Our solutions include high-speed, scalable networks, advanced Wi-Fi technology, and cloud-based systems that ensure fast and reliable access to learning platforms, online assessments, and research resources.

                                Security is a top priority. With the rise of cyber threats targeting educational institutions, our robust security protocols protect sensitive data, secure communications, and safeguard the privacy of students and staff. We also leverage AI and machine learning to proactively detect and respond to potential security risks in real-time.

                                Furthermore, our network solutions integrate with emerging technologies such as the Internet of Things (IoT), allowing for smart classrooms and campus-wide systems that enhance the learning experience. From interactive whiteboards and digital textbooks to real-time attendance tracking and energy-efficient campus management, our solutions bring automation and innovation to educational environments.

                                As educational institutions continue to adopt hybrid and remote learning models, SpotComm’s network solutions are designed to support flexible learning environments, ensuring that students and educators can connect from anywhere, with the same level of reliability and performance as they would on-campus.

                                At SpotComm, we believe that the future of education depends on creating connected, secure, and efficient digital ecosystems. With our advanced network solutions, educational institutions can not only keep up with technological advancements but also lead the way in transforming how education is delivered and experienced across the globe.


                            </p>
                        </div>
                    </div>
                </div>
            )}
            <Oursuccess />
            <section className="services-section" >
                <h2 className='text-center'>Our <span className='' style={{ color: "#7F3E98" }}> Solutions </span> </h2>
                <Desktop>
                    <div className="services-grid row" >
                        {services.map((service, index) => (
                            <div className="col-lg-3 service mx-auto mt-5" key={index}>
                                <div
                                    className="service-card"
                                    style={{ "--image-url": `url(${service.icon})` }}  // Setting the image URL
                                > <br /><br />
                                    <div className="service-title">{service.title}</div>
                                    <p className="text-center desc">{service.desc}</p> <br />
                                    {/* <button className="service-btn">Read More</button> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </Desktop>
                <Mobile>
                    <div className="services-grid row">
                        <Swiper modules={[Navigation, Autoplay]}
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
                                    <div class="col-lg-3 service mx-auto mt-5">
                                        <div
                                            className="service-card"
                                            style={{ "--image-url": `url(${service.icon})` }}  // Setting the image URL
                                        >
                                            <div className="service-title text-dark"> <br />{service.title}</div>
                                            {/* <button className="service-btn">Read More</button> */}
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

export default Education