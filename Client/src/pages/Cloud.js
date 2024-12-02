import React from 'react'
import Header from '../components/Header'
import Blogcard from '../components/Blogcard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import Partners from '../components/Partner';
import Demo from '../components/Navbar';
import Blog from '../components/Blog';
import { useMediaQuery } from 'react-responsive'

const Cloud = () => {
    const services = [
        { title: 'Proven Track Record', icon: '/cloud (1).png' },
        { title: 'Smooth On-Prem to Cloud Migration Services', icon: '/cloud (2).png' },
        { title: 'Cloud Options', icon: '/cloud (3).png' },
        { title: '24/7 Monitoring Services', icon: '/cloud (4).png' },
        { title: 'One Umbrella Solution', icon: '/cloud (5).png' },
        { title: 'Expert Consultation Services', icon: '/cloud (6).png' },
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
        <div className='' >
            <Header />
            <Desktop>
                <section id="heros" data-aos="fade-right" data-aos-delay="500" className="heros1 section dark-background">
                    <img src="/cloud.gif" alt="" />
                </section>
            </Desktop>
            <Mobile>
                <section id="heros" data-aos="fade-right" data-aos-delay="100" className="heros1 section dark-background">
                    <img src="/cloudmob.png" alt="" />
                </section>

            </Mobile>
            <div className=" cmp-border-header cmp-border-header-650763923" data-aos="fade-right" data-aos-delay="500">
                <div className="row ">
                    <div className="col-lg-10 col-sm-12">
                        <br /> <br />
                        <p className='fs-6' >Spotcomm Cloud Matrix help build an agile IT ecosystem with hybrid multi-cloud environments,
                            security and network you need globally. Our world-className Cloud Solution enables you to grow
                            globally while improving productivity and efficiency, delivering a seamless customer
                            experience.
                            <br /> <br />
                            Our Cloud Managed services make it possible for organizations to reduce their overheads and
                            better productivity, in addition to lowering costs and reducing time-to-market. Spotcomm
                            Cloud Matrix solutions have a track record of helping clients become more secure and more
                            responsive to progressing market trends. Our team of cloud engineers will consult and work
                            with you to determine the specific needs and design a custom solution that meets your needs
                            and budget. With our cloud services, you’ll be able to focus on your core business while we take
                            care of the rest.</p>
                    </div>
                </div>
            </div> <br /> <br />
            <section className='cmp-border-header cmp-border-header-650763923' data-aos="fade-up" data-aos-delay="500">
                <div className="">
                    <div className="cmp-border-header__top-overlay">
                        <div className="cmp-border-h2"><p><span>Why choose <span className='' style={{ color: "#7F3E98" }}>Spotcomm Cloud Matrix </span> Services
                        </span></p>
                        </div>
                        <div className="cmp-border-header__top-overlay-line mx-3" style={{ backgroundColor: "#000" }}></div>
                    </div>
                </div>

                <div className="row d-flex justify-content-center">
                    {services.map((service, index) => (
                        <div className="col-lg-4   mt-5 " data-aos="fade-right" data-aos-delay="500" >
                            <img src={service.icon} className='mx-auto d-flex w-100' />
                            <div className="services-title text-center fs-5 fw-bold mt-3">{service.title} </div>
                        </div>
                    ))}
                </div>

            </section> <br /><br /><br />
            <div className=" responsivegrid --width-wide --full-width aem-GridColumn aem-GridColumn--default--12">
                <div
                    className="cmp- cmp---1058722595 "
                    data-type="grid"
                    id="-4af8be69f5"
                >
                    <div className="aem-Grid aem-Grid--12 aem-Grid--default--12 aem-Grid--phone--12 ">
                        <div className=" responsivegrid --width-regular --full-width aem-GridColumn aem-GridColumn--default--12">

                        </div>


                        <div className="teaser teaser--full-size teaser--image-left teaser--card aem-GridColumn--default--none aem-GridColumn--phone--none aem-GridColumn--phone--12 aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--offset--phone--0 aem-GridColumn--offset--default--0">
                            <div className="cmp-teaser cmp-teaser--1828042053  cmp-teaser--show-action  ">
                                <div
                                    className="cmp-teaser__content"
                                    style={{}}
                                >
                                    <div className="cmp-teaser__content-wrapper">

                                        <div className="cmp-teaser__description">
                                            <p className='text-dark fs-4' >
                                                Cloud infrastructure in combination with development tools and API (Application
                                                Programming Interface) exposure of network assets enables developers to innovate and
                                                bring new applications to end users quicker.
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
                                    <img src="/cloud2 (2).png" />
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
                                        
                                        <div className="cmp-teaser__description">
                                            <p className='text-dark fs-4'>
                                            Operations and management of one common infrastructure is more efficient than many
individual application specific systems.

                                            </p>
                                        </div>

                                    </div>
                                </div>
                                <div className="cmp-teaser__image">
                                    <img src="/cloud2 (4).png" />
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
                                       
                                        <div className="cmp-teaser__description">
                                            <p className='text-dark fs-4' >
                                            Costs for infrastructure resources will be lower since applications share the resources instead of
using dedicated capacity.

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
                                    <img src="/cloud2 (3).png" />
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
                                        
                                        <div className="cmp-teaser__description">
                                            <p className='text-dark fs-4'>
                                            The time to deploy applications will be shorter since the cloud infrastructure including
                                            its hardware and software components is already in place.
                                            </p>
                                            <p>
                                                <br />
                                            </p>
                                            <p />
                                        </div>

                                    </div>
                                </div>
                                <div className="cmp-teaser__image">
                                    <img src="/cloud2 (1).png" />
                                </div>
                            </div>
                            <style
                                dangerouslySetInnerHTML={{
                                    __html: '.cmp-teaser--1606096698 .cmp-teaser__content{color:rgb(255,255,255);background-color:#fff;}'
                                }}
                                data-path="/content/nexus/en/service-lines/consulting/jcr:content/root///teaser_copy_32048284_1404454339"
                            />
                        </div>





                    </div>


                </div>
            </div> <br /><br /><br /><br />
            <section id="cloudSlider" className="workCarousel">
                <div className="cust_container" style={{ sliderpaddingtop: '50px', sliderpaddingbottom: '5px' }}>
                    <div className="wCarousel slick-initialized slick-slider" data-slick="{&quot;slidesToShow&quot;: 3,&quot;slidesToScroll&quot;: 3,&quot;autoplay&quot;: false, &quot;infinite&quot;: false}">
                        <button type="button" data-role="none" className="slick-prev slick-arrow slick-disabled swiper-button-prev text-dark" aria-label="Previous" role="button" aria-disabled="true" style={{}}>Previous</button>
                        <Swiper
                            spaceBetween={30}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                            modules={[Navigation]}

                            loop={false}
                            autoplay={false}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 50,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <div className="card fadeIn animate">
                                    <div className="imageContainer">
                                        <img loading="lazy" src="/blogcard (2).png" alt="AI Integration" />
                                        {/* <div className="playButton" data-speed="-0.8">
                                            <a className='w-50' data-fancybox href="https://www.youtube.com/embed/dgBcSGiouW8?si=XU2ZhqT8UW4IZtHe" width="560" height="315" data-width="100%" rel="nofollow" tabIndex={0}>
                                                <img src="/button.svg" alt="play icon" />
                                            </a>

                                        </div> */}
                                    </div>
                                    <div className="textContainer  p-3">
                                        <p className="text-start   fw-normal fs-5">AI Integration in Education</p><br />
                                        <p className="text-start">
                                            Artificial Intelligence is revolutionizing the learning process by providing personalized, data-
                                            driven feedback. AI helps create adaptive learning environments that cater to individual
                                            student needs, improving learning outcomes and preparing students for AI-influenced career
                                            landscapes.
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card fadeIn animate">
                                    <div className="imageContainer">
                                        <img loading="lazy" src="/blogcard (1).png" alt="EdTech" />
                                        {/* <div className="playButton" data-speed="-0.8">
                                            <a data-fancybox href="https://www.youtube.com/embed/dgBcSGiouW8?si=XU2ZhqT8UW4IZtHe" width="560" height="315" data-width="100%" rel="nofollow" tabIndex={0}>
                                                <img src="/button.svg" alt="play icon" />
                                            </a>
                                        </div> */}
                                    </div>
                                    <div className="textContainer  p-3">
                                        <p className="text-start   fw-normal fs-5">Focus on Mental Health and Well-being:</p> <br />
                                        <p className="text-start">
                                            Cloud-based tools are also being deployed to
                                            support mental health in educational settings. With a growing emphasis on student well-being,
                                            platforms like Hazel Health and Panorama Education
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="card fadeIn animate">
                                    <div className="imageContainer">
                                        <img loading="lazy" src="/blogcard (3).png" alt="EdTech" />
                                        {/* <div className="playButton" data-speed="-0.8">
                                            <a data-fancybox href="https://player.vimeo.com/videos/1011992834" width="560" height="315" data-width="100%" rel="nofollow" tabIndex={0}>
                                                <img src="/button.svg" alt="play icon" />
                                            </a>
                                        </div> */}
                                    </div>
                                    <div className="textContainer  p-3">
                                        <p className="text-start <btr />  fw-normal fs-5">EdTech and Workforce Upskilling</p><br />
                                        <p className="text-start">
                                            Cloud-based tools are also being deployed to
                                            support mental health in educational settings. With a growing emphasis on student well-being,
                                            platforms like Hazel Health and Panorama Education
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card fadeIn animate">
                                    <div className="imageContainer">
                                        <img loading="lazy" src="/blogcard (4).png" alt="EdTech" />
                                        {/* <div className="playButton" data-speed="-0.8">
                                            <a data-fancybox href="https://player.vimeo.com/videos/1011992834" width="560" height="315" data-width="100%" rel="nofollow" tabIndex={0}>
                                                <img src="/button.svg" alt="play icon" />
                                            </a>
                                        </div> */}
                                    </div>
                                    <div className="textContainer  p-3">
                                        <p className="text-start  fw-normal fs-5">Virtual and Augmented Reality:
                                        </p> <br />
                                        <p className="text-start">
                                            Cloud services are supporting the use of Virtual and Augmented Reality (VR/AR) in education.
                                            Institutions like Arizona State University are adopting VR in classrooms, particularly in science
                                            labs, to provide immersive and interactive learning experiences.
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper><br />
                        <button type="button" data-role="none" className="slick-next slick-arrow swiper-button-next text-dark" aria-label="Next" role="button" style={{}} aria-disabled="false">Next</button>
                    </div>
                </div>
            </section>
            {/* <Blog /> */}
            <br /><br />
            <div className=" responsivegrid aem-GridColumn aem-GridColumn--default--12" data-aos="fade-right" data-aos-delay="500">
                <div id="container-eb9fb998a4" className="cmp-container cmp-container--1563461404 " data-type="simple">
                    <div className="responsive-image-banner">

                        <div className="cmp-responsive-image-banner cmp-responsive-image-banner--1487958357">
                            <div className="cmp-responsive-image-banner__top-overlay">
                                <div className="cmp-responsive-image-banner__title"><p>CONNECTING INDUSTRIESWITH<br />
                                    CLOUD MATRIX</p>
                                </div>

                            </div>
                            <div className="cmp-responsive-image-banner__top-overlay-box" />
                            <div className="cmp-responsive-image-banner__content">
                                <div className="cmp-responsive-image-banner__section">
                                    <a href="#">
                                        <img className="cmp-responsive-image-banner__image" src="/cloudmatrix.png" alt="cloud-energy" />
                                        <div className="cmp-responsive-image-banner__text-overlay"><p className='w-100'>ENERGY AND UTILITIES<span style={{ fontSize: '18.0px' }} /></p>
                                        </div>
                                        <div className="cmp-responsive-image-banner__bottom-overlay-box" />
                                    </a>
                                </div>
                                <div className="cmp-responsive-image-banner__section" target="_self">
                                    <a href="#">
                                        <img className="cmp-responsive-image-banner__image" src="/cloudmatrix1.png" alt="cloud-energy" />
                                        <div className="cmp-responsive-image-banner__text-overlay"><p className='w-100'>ENGINEERING<span style={{ fontSize: '18.0px' }} /></p>
                                        </div>
                                        <div className="cmp-responsive-image-banner__bottom-overlay-box" />
                                    </a>
                                </div>
                                <div className="cmp-responsive-image-banner__section" target="_self">
                                    <a href="">
                                        <img className="cmp-responsive-image-banner__image" src="/cloudmatrix2.png" alt="cloud-energy" />
                                        <div className="cmp-responsive-image-banner__text-overlay"><p className='w-100'>MEDICAL SCIENCES<span style={{ fontSize: '18.0px' }} /></p>
                                        </div>
                                        <div className="cmp-responsive-image-banner__bottom-overlay-box" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cmp-container__button-container">
                    </div>
                    <div className="cmp-container__popup-background" id="popup-background-container-eb9fb998a4" />
                    <div className="cmp-container__data" id="data-container-eb9fb998a4" data-expandbuttonlabel="Read More" data-maxitems={-2} data-maxitemstablet={-2} data-maxitemsmobile={-2} />
                </div>
            </div>


            <Partners />
            <Demo />
        </div>
    )
}

export default Cloud