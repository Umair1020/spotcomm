import React from 'react'
import Header from '../components/Header'
import Demo from '../components/Navbar'

const Featureinsight = () => {
    return (
        <div>
            <Header />

            <section id="heros" class="heros1  section dark-background services-hero-section paragraph paragraph--type--banner-inner-version-2 paragraph--view-mode--default" style={{ height: "100vh" }}>

                <img src="/feature.png" alt="" />

                <div className="container">
                    <div
                        className="row text-white"

                    >
                        <div className="col-md-12 text-start">
                            <div className="services-hero services-hero--mobilefull">
                                <div className="services-hero-display">
                                    <h5 className="text-white"> Insights</h5>
                                    <h1 className="text-white">
                                        {" "}
                                        Perspectives, articles,

                                        <br /> and research from our <br />
                                        thought leaders
                                    </h1>
                                </div>
                                <button
                                    type="button"
                                    className="btn-rounded home-hero-display--lets-talk"

                                >
                                    Get in Touch
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section
                id="spotlight-section"
                className="spotlight-section sect-pt paragraph paragraph--type--spotlight paragraph--view-mode--default"
            >
                <div className="container">
                    <div className="row ">
                        <div
                            className="col-12 col-lg-8"
                            
                        >
                            <h6 className="mb-3">Spotlight</h6>
                            <h2 className="primary-heading2 fw-normal mb-3pt5imp" style={{ color: "#7F3E98" }}>
                                Discover the insights that matter
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="sect-gray-bg">
                    <div className="container">
                        <div
                            className="row"
                            
                        >
                            <div className="col-lg-6">
                                <div
                                    className="views-element-container"
                                    id="block-views-block-insights-blog-spotlight"
                                >
                                    <div>
                                        <div className="js-view-dom-id-98300524931819a9ea758019246f8de48e62dd2ee0cb115a02d1b700291a826b">
                                            <a
                                                href="#"
                                                className="text-holder"
                                            >
                                                <h4 className='text-light'>BLOG</h4>
                                                <h2 className="spot-heading text-light">
                                                    5 trends that are shaping the telco industry in 2023
                                                </h2>
                                                <div className="text-link-arrow fromLeft mt-2 text-light">
                                                    READ MORE
                                                    <span className="arrow-right text-light">&nbsp;</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section id="home-services" class="home-services-section paragraph paragraph--type--editor-pick paragraph--view-mode--default">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-7 home-services-section--title">
                            <div class="title-wrap" data-anijs="if: scroll, on: window, do: fadeInLeftSmall animated, before: scrollReveal">
                                <small>Editor’s pick</small>
                                <h2 class="at-bg-none text-fill-inherit gradient-with-scroll" style={{ color: "#7F3E98" }}>Stay cognizant</h2>
                                <div class="description">
                                    <p></p><p>Our aim is to provide organizations with valuable insights that can assist them in developing effective strategies for their business.</p><p></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-3 home-services-section--list gray-border-left p-0">

                            <div class="views-element-container" id="block-views-block-insights-editors-pick">


                                <div><div class="js-view-dom-id-fc7888a67bcbad5ac82a9bd89a01c95c61befbcd8948ce24de3550fb2d478c5d">


                                </div>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </section>
            <section
                id="testimonials-section sect-paddings"
                className="testimonials-section min-vh-100 at-bg-cover d-flex  align-items-center paragraph paragraph--type--quote paragraph--view-mode--default"
                style={{ background: "url(/feature2.png)" }}
            >
                <div className="container">
                    <div className="row align-items-center justify-content-center text-center">
                        <div
                            className="col-12 col-lg-10 at-maxw-1075"
                            
                        >
                            <blockquote className="text-start ">
                                <div className="svg-holder">
                                    <svg
                                        width={107}
                                        height={71}
                                        viewBox="0 0 107 71"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M107 51.8969C107 57.2033 104.965 61.7668 100.895 65.5875C97.039 69.1958 92.2192 71 86.4354 71C78.5095 71 71.8689 68.2407 66.5135 62.722C61.3724 57.2033 58.8018 50.0927 58.8018 41.3901C58.8018 25.4709 65.014 14.1151 77.4384 7.32287C86.4354 2.44096 93.7187 0 99.2883 0C101.645 0 102.823 0.84903 102.823 2.54709C102.823 4.03288 101.538 5.09417 98.967 5.73094C81.1872 10.4006 72.2973 19.2093 72.2973 32.157C72.2973 37.8879 73.7968 42.7698 76.7958 46.8027C77.2242 39.5859 81.8298 35.9776 90.6126 35.9776C95.3253 35.9776 99.1812 37.5695 102.18 40.7534C105.393 43.725 107 47.4395 107 51.8969ZM47.8769 51.8969C47.8769 57.2033 45.8418 61.7668 41.7718 65.5875C37.9159 69.1958 33.2032 71 27.6336 71C19.4935 71 12.8529 68.2407 7.71171 62.722C2.57057 56.991 0 49.7743 0 41.0718C0 25.3647 6.21221 14.1151 18.6366 7.32287C27.6336 2.44096 34.8098 0 40.1652 0C42.5215 0 43.6997 0.84903 43.6997 2.54709C43.6997 4.03288 42.4144 5.09417 39.8438 5.73094C22.2783 10.4006 13.4955 19.3154 13.4955 32.4753C13.4955 37.994 14.995 42.7698 17.994 46.8027C18.4224 39.5859 22.9209 35.9776 31.4895 35.9776C36.2022 35.9776 40.0581 37.5695 43.0571 40.7534C46.2703 43.725 47.8769 47.4395 47.8769 51.8969Z"
                                            fill="#161616"
                                        />
                                    </svg>
                                </div>
                                <h4 className="fw-normal mt-md-5 mt-3 mb-4 at-lh-1pt7">
                                    <p>
                                        Working with Spotcomm Global has been an absolute game-changer for our network infrastructure. Their Managed Network Services are reliable, efficient, and tailored perfectly to our needs. The team is always responsive and proactive, ensuring that any issues are resolved quickly before they even become a problem. Thanks to their expertise, we’ve experienced seamless connectivity and improved security across our operations. We can always count on Spotcomm Global to keep our systems running smoothly, and their support has truly exceeded our expectations.
                                    </p>
                                </h4>
                                <h5 className="" style={{ color: "#7F3E98" }}>Syed Azfar Hussain</h5>
                                <h6>Director NLC, Karachi</h6>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </section>
            <section
                id="chronicles-change"
                className="chronicles-change-section sect-paddings paragraph paragraph--type--chronicles-of-change paragraph--view-mode--default"
            >
                <div className="container">
                    <div className="row pb-70">
                        <div
                            className="col-12 col-lg-6"

                        >
                            <h2 className="text-white primary-heading2 fw-normal">
                                Chronicles of change
                            </h2>
                            <p className="text-white">
                                Showcasing case studies and success stories of our clients and
                                highlighting how we have assisted them in achieving their full
                                potential.
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-end ">
                        <div
                            className="col-12 col-xxl-11"
                            data-anijs="if: scroll, on: window, do: fadeInRightSmall animated, before: scrollReveal"
                        >
                            <div
                                className="views-element-container"
                                id="block-views-block-insights-chronicles-of-change"
                            >
                                <div>
                                    <div className="js-view-dom-id-cbfe21c55a841328dfe96020e70b342ec780ae8845e3dc5667542ca1260441fc">
                                        <div className="row chronicles-change-row">
                                            <div className="col-12 col-lg-4">
                                                <a
                                                    href="/blogs/embracing-era-digital-retail-redefining-norm"
                                                    className="text-box"
                                                >
                                                    <h6 className="text-white fw-normal text-uppercase mb-4" />
                                                    <h2 className="text-white fw-normal mb-4 fs-5">
                                                        Embracing the era of digital retail: Redefining the norm{" "}
                                                    </h2>
                                                    <p className="text-white">
                                                        Empowering salespeople with data insights to boost revenue
                                                        while maintaining customer relationship
                                                    </p>
                                                    <div className="text-link-arrow fromLeft mt-2 text-white">
                                                        READ MORE
                                                        <span className="arrow-right">&nbsp;</span>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="col-12 col-lg-4 bg-dark">
                                                <a

                                                    className="text-box "
                                                >
                                                    <h6 className="text-white fw-normal text-uppercase mb-4" />
                                                    <h2 className="text-white fw-normal mb-4 fs-5">
                                                        Unified commerce: Your lifeline for the next era of retail
                                                        shopping
                                                    </h2>
                                                    <p className="text-white">
                                                        Excel in new era of retail and stand out from competition
                                                        by embracing omnichannel.
                                                    </p>
                                                    <div className="text-link-arrow fromLeft mt-2 text-white">
                                                        READ MORE
                                                        <span className="arrow-right">&nbsp;</span>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="col-12 col-lg-4">
                                                <a
                                                    href="/case-studies/telco-operator-fine-tunes-its-customer-relationships"
                                                    className="text-box"
                                                >
                                                    <h6 className="text-white fw-normal text-uppercase mb-4">
                                                        Better customer experience
                                                    </h6>
                                                    <h2 className="text-white fw-normal mb-4 fs-5">
                                                        Telco operator fine-tunes its customer relationship
                                                    </h2>
                                                    <p className="text-white">
                                                        Automated business operations and unified business
                                                        interactions to ensure quick resolutions and enha...
                                                    </p>
                                                    <div className="text-link-arrow fromLeft mt-2 text-white">
                                                        READ MORE
                                                        <span className="arrow-right">&nbsp;</span>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="col-12 col-lg-4">
                                                <a
                                                    href="/blogs/5-ways-integrated-operations-support-dynamics-ecommerce"
                                                    className="text-box"
                                                >
                                                    <h6 className="text-white fw-normal text-uppercase mb-4 fs-5">
                                                        5 ways integrated operations support dynamic eCommerce
                                                    </h6>

                                                    <p className="text-white">
                                                        Simplify the operations necessary to run a successful
                                                        retail business, both online and in-store.
                                                    </p>
                                                    <div className="text-link-arrow fromLeft mt-2 text-white">
                                                        READ MORE
                                                        <span className="arrow-right">&nbsp;</span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                id="blog-section"
                className="blog-section section-space paragraph paragraph--type--press-releases paragraph--view-mode--default"
            >
                <div className="container">
                    <div className="row ">
                        <div
                            className="col-md-12"
                          
                        >
                            <h2 className="blog-section--title text-md-center">Latest Posts <br /></h2>
                        </div> 
                        <div
                            className="views-element-container"
                            id="block-views-block-insights-latest-posts"
                        ><br />
                            <div>
                                <div className="js-view-dom-id-8d1a6d21f4f5f85c167dd114110269309521be37db36a7ed244301e372b0256d">
                                    <div className="row post ">
                                        <div className="col-lg-3"> <br /> 
                                            <a
                                                href="#"
                                                className="col-lg-4 blog-col-anch "
                                                
                                            >
                                                <div className="img-holder">
                                                    <img
                                                        src="/feature4.png"
                                                        className="img-fluid"
                                                        alt="Ascend 2022"
                                                    />
                                                </div>
                                            </a>
                                            <h5 className=" mt-4 mb-12px">
                                                <a
                                                    href="#"
                                                    className="col-lg-4 blog-col-anch"
                                                    
                                                />
                                                <a
                                                    href="# "
                                                    hrefLang="en" className='text-dark'
                                                >
                                                   Spotcomm Global attends GITEX, brings home value-driven business insights
                                                </a>
                                            </h5>
                                            <div className="text-link-arrow fromLeft text-dark">
                                                READ MORE
                                                <span className="arrow-right">&nbsp;</span>
                                            </div>
                                        </div> 
                                        <div className="col-lg-3 mx-2">  <br /> 
                                            <a
                                                href="#"
                                                className="col-lg-4 blog-col-anch"
                                                
                                            >
                                                <div className="img-holder">
                                                    <img
                                                           src="/feature5.png"
                                                        className="img-fluid"
                                                        alt="Ascend 2022"
                                                    />
                                                </div>
                                            </a>
                                            <h5 className=" mt-4 mb-12px">
                                                <a
                                                    href="/newsroom/ascend-2022-taking-your-cloud-journey-new-heights-co-hosted-systems-and-aws"
                                                    className="col-lg-4 blog-col-anch"
                                                    
                                                />
                                                <a
                                                    href="/newsroom/ascend-2022-taking-your-cloud-journey-new-heights-co-hosted-systems-and-aws"
                                                    hrefLang="en" className=' text-dark'
                                                >
                                               Technology and Client Ambition
                                                </a>
                                            </h5>
                                            <div className="text-link-arrow fromLeft text-dark">
                                                READ MORE
                                                <span className="arrow-right">&nbsp;</span>
                                            </div>
                                        </div> 
                                        <div className="col-lg-3 mx-2"><br /> 
                                            <a
                                                href="/newsroom/transcend-2022-lead-digital-transformation"
                                                className="col-lg-4 blog-col-anch"
                                                
                                            >
                                                <div className="img-holder">
                                                    <img
                                                         src="/feature6.png"
                                                        className="img-fluid"
                                                        alt="Ascend 2022"
                                                    />
                                                </div>
                                            </a>
                                            <h5 className=" mt-4 mb-12px">
                                                <a
                                                    href="/newsroom/transcend-2022-lead-digital-transformation"
                                                    className="col-lg-4 blog-col-anch"
                                                    
                                                />
                                                <a
                                                    href="/newsroom/transcend-2022-lead-digital-transformation text-dark"
                                                    hrefLang="en" className=' text-dark'
                                                >
                                                   Nine years of innovation: Key moments in business technology
                                                </a>
                                            </h5>
                                            <div className="text-link-arrow fromLeft text-dark">
                                                READ MORE
                                                <span className="arrow-right">&nbsp;</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
   <Demo />

        </div>
    )
}

export default Featureinsight