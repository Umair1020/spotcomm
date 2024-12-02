import React from 'react'
import Header from '../components/Header'
import Demo from '../components/Navbar'
import "./business.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { useMediaQuery } from 'react-responsive';
import 'swiper/css';
import { Link } from 'react-router-dom';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation, Scrollbar, A11y } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const services = [
  { title: 'Managed Network Services', icon: '/service1.png', link: '/manage-network' },
  { title: 'Managed LAN/WAN Services', icon: '/service2.png', link: '/managed-lan-wan-services' },
  { title: 'Managed WiFi Services', icon: '/service3.png', link: '/managed-wifi-services' },
  { title: 'Managed Security Services', icon: '/service4.png', link: '/managed-security-services' },
  { title: 'Data Center Management', icon: '/service5.png', link: '/data-center-management' },
  { title: 'Managed NOC Services', icon: '/service6.png', link: '/managed-noc-services' },
  { title: 'SD-WAN Services', icon: '/service7.png', link: '/sd-wan-services' },
  { title: 'White Label VPN Services', icon: '/service8.png', link: '/white-label-vpn-services' },
  { title: 'Managed Infrastructure Services', icon: '/service9.png', link: '/managed-infrastructure-services' }
];

const services2 = [
  { image: '/icon1.png' },
  { image: '/icon2.png' },
  { image: '/icon3.png' },
  { image: '/icon4.png' },
  { image: '/icon5.png' },
  { image: '/bus1.png' },
];
const Businesssolution = () => {
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
        <section id="heros" className="heros1 section dark-background" data-aos="fade-right" data-aos-delay="500">

          <img src="/businessbanner.png" alt="" />

          <div className="container text-center" data-aos-delay="100">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <h2>Business Solutions</h2>
              </div>
            </div>
          </div>

        </section>
      </Desktop>
      <Mobile>
        <section id="heros" className="heros1 section dark-background" data-aos="fade-right" data-aos-delay="500">

          <img src="/businesssolutionmob.png" alt="" />

          <div className="container text-center" data-aos-delay="100">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <h2 className='profh2'>Business Solutions</h2>
              </div>
            </div>
          </div>

        </section>
      </Mobile>
     
      <section id="bg2" className="bg2 section dark-background" data-aos="fade-right" data-aos-delay="500">

        <img src="/bg.png" alt="" />

        <div className="container text-center" >
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2>Custom Business Solutions for Optimal Results</h2> <br />
              <p className=' text-center'>Welcome to Spotcomm, where we specialize in delivering customized business solutions designed  to meet the unique needs of your organization. Our mission is to empower your  business by enhancing  efficiency, driving growth, and overcoming challenges with precision and innovation.</p>
            </div>
          </div>
        </div>

      </section>
      <section className="services-section"  >
        <h2 className='text-center'>What Services We Provide</h2>
        <Desktop>
          <div className="services-grid row">
            {services.map((service, index) => (
              <div className="col-lg-3 service mx-auto mt-5" data-aos="fade-right" data-aos-delay="100" key={index}>
                <div
                  className="service-card"
                  style={{ "--image-url": `url(${service.icon})` }}  // Setting the image URL
                >
                  <br />    <br />
                  <div className="service-title">{service.title}</div>
                  {/* <Link to={service.link} className="service-btn text-light">Read More</Link> */}
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

                  <div className="col-lg-3 service mx-auto mt-5" data-aos="fade-right" data-aos-delay="500" key={index}>
                    <div
                      className="service-card"
                      style={{ "--image-url": `url(${service.icon})` }}  
                    >
                      <br />
                      <div className="service-title">{service.title}</div>
                      {/* <Link to={service.link} className="service-btn text-light">Read More</Link> */}
                    </div>
                  </div>


                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Mobile>

        <br />  <br />   <h2 className='text-center' data-aos="fade-up" data-aos-delay="500">Why Choose Our Solutions?</h2>
        <div className="row d-flex justify-content-center" data-aos="fade-right" data-aos-delay="500">
          <br />
          <div className="services2-grid">
            {services2.map((service2, index) => (
              <div key={index} className="services-item" >
                {service2.image && (
                  <>
                    <img src={service2.image} alt={service2.title} className="services-image" />

                  </>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>
      <Demo />
    </div>
  )
}

export default Businesssolution