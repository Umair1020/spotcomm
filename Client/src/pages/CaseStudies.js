import React, { useRef, useState, useCallback } from 'react'
import Header from '../components/Header'
import "./business.css"
import Demo from '../components/Navbar';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
    const caseStudies = [
        { title: "ARY Digital Network Case Study", image: "/case4.png" },
        { title: "Bar B Q Tonight Case Study", image: "/case2.png" },
        { title: "Cooperative Computing Case Study", image: "/case4.png" },
        // { title: "Cooperative Computing Case Study", image: "/case1.png"  },
        { title: "Garena Free Fire Case Study", image: "/case5.png" },
        { title: "Dreamworld Resort Case Study", image: "/case6.png" },
        { title: "Family Choice of New York (FCNY) Case Study", image: "/case7.png" },
        { title: "British Council Case Study", image: "/case1.png" }
    ];

    const blogData = [
        {
            to: "/britishcouncil",
            imgSrc: "/case (3).png",
            alt: "Systems Limited MEA partnered with Alfardan Group Perfecting the art of financial consolidation",
            label: "CASE STUDY",
            title: "British Council Case Study",
        },
        {
            to: "/bbq",
            imgSrc: "/case (7).png",
            alt: "Transforming IT service management for one of the largest telecoms in Australia",
            label: "CASE STUDY",
            title: "Bar B Q Tonight Case Study",
        },
        {
            to: "/cc",
            imgSrc: "/case (1).png",
            alt: "BOP implements digital banking technology to meet the changing needs of its clients",
            label: "CASE STUDY",
            title: "Cooperative Computing Case Study",
        },
        {
            to: "/ary",
            imgSrc: "/case (6).png",
            alt: "U Bank is fostering economic development through innovative and user-friendly banking",
            label: "CASE STUDY",
            title: "ARY Digital Network Case Study",
        },
        {
            to: "/freefire",
            imgSrc: "/case (2).png",
            alt: "Khushhali Microfinance Bank enhances its digital banking with Temenos and Systems Limited",
            label: "CASE STUDY",
            title: "Garena Free Fire Case Study",
        },
        {
            to: "/dreamworld",
            imgSrc: "/case (5).png",
            alt: "Bank of Khyber brings digital transformation across 190+ branches with Systems Limited & Temenos",
            label: "CASE STUDY",
            title: "Dreamworld Resort Case Study",
        },
        {
            to: "/familychoice",
            imgSrc: "/case (4).png",
            alt: "An Indonesian bank collaborates with Systems Limited to enhance financial inclusion in its services",
            label: "CASE STUDY",
            title: "Family Choice of New York (FCNY) Case Study",
        },
    ];

    const [currentPage, setCurrentPage] = useState(0);
    const cardsPerPage = 3;

    // Calculate paginated data
    const paginatedData = [];
    for (let i = 0; i < blogData.length; i += cardsPerPage) {
        paginatedData.push(blogData.slice(i, i + cardsPerPage));
    }

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    return (
        <div>

            <Header />
            <section id="heros" class="heros1 section dark-background">

                <img src="/case.png" alt="" />

                <div class="container text-center" >
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <h2 className='profh2'>Case Studies</h2>
                            <h4>Real Solutions, Real Results</h4>
                        </div>
                    </div>
                </div>

            </section>
            <div className='background ' style={{ background: "#362358" , fontFamily: "proxima-nova" ,lineHeight: "1.5" }} >
                <div className='row text-center'>
                    <div className='col-lg-12 col-sm-12 '>
                        <p className='text-center para mx-auto text-light   fw-bold' style={{fontSize: "26px"} }>At Spotcomm, we take pride in delivering tailored network solutions that empower businesses to thrive in a connected world. Our case studies showcase the challenges we’ve tackled and the tangible results we’ve achieved for our clients across diverse industries. Each story highlights how our expertise in managed network services has driven success, whether it’s improving operational efficiency, boosting network security, or enabling seamless scalability.
                        </p>
                    </div>
                </div>

            </div> <br /><br />
            {/* <h2 className='h2 text-center fw-bold'> <span className='' style={{ color: "#7F3E98" }}>Case Studies </span>  By Category</h2><br />

                <div className="case-studies-grid">
                    {caseStudies.map((study, index) => (
                        <div className="case-study " key={index}>
                            <div
                                className="case-study-image"
                                style={{ backgroundImage: `url(${study.image})` }}
                            ></div>
                            <div className="case-study-overlay">
                                <h2 className='text-light'>{study.title}</h2>
                            </div>
                        </div>
                    ))}
                </div> */}

            <div>
                <div className="views-element-container">
                    <div
                        className="js-view-dom-id-9ad579cf0bc69401542353bf258e3a4847dc8630674e11364396bfa2bddb22e5"
                        data-once="ajax-pager"
                    >
                        {/* Career hero banner  */}
                        <section id="services-hero" className="services-hero-section">
                            <div
                                className="img-banner img-banner-h100vh img-banner-industries-telco"
                                style={{
                                    backgroundImage:
                                        "url(/themes/custom/sysltd/assets/images/blog-details/bg-banner-blog.webp)"
                                }}
                            />
                            <div className="container">
                                <div
                                    className="row text-white"
                                    data-anijs="if: load, on: window, do: fadeInUpSmall animated, before: scrollReveal"
                                >
                                    {/* START THE CONTENT FOR THE INTRO  */}
                                    <div className="col-md-12 text-start">
                                        <div className="services-hero services-hero--mobilefull">
                                            <div className="services-hero-display mb-0">
                                                <h2>  Case Studies By Category</h2>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>


                        <section id="blog-section" className="blog-section blog-landing-page">
                            <div className="container">
                                <div className="row">
                                    {paginatedData[currentPage].map((blog, index) => (
                                        <a
                                            to={blog.to}
                                            className="col-lg-4 blog-col-anch"
                                            key={index}
                                        > <br />
                                            <div className="">
                                                <img
                                                    src={blog.imgSrc}
                                                    className=""
                                                    alt={blog.alt}
                                                />
                                            </div> <br />
                                            <h6 className="blog-label">{blog.label}</h6> <br />
                                            <h4 className="blog-title fs-6">{blog.title}</h4>  <br />
                                          <Link to={blog.to}> <div className=" ">
                                                READ MORE<span className="arrow-right">&nbsp;</span>
                                            </div></Link> 
                                        </a>
                                    ))}
                                </div>
                                {/* Pagination */}
                                <div className="custom-pagination">
                                    <ul className="pagination pagination-sm">

                                        {paginatedData.map((_, index) => (
                                            <>
                                               
                                                <li
                                                    className={`page-item pager__item ${index === currentPage ? "is-active" : ""
                                                        }`}
                                                    key={index}
                                                >
                                                    <button
                                                        className="page-link"
                                                        onClick={() => handlePageChange(index)}
                                                    >
                                                        {index + 1}
                                                    </button>
                                                </li>
                                            </>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>



                    </div>
                </div>
            </div>

            <Demo />
        </div>
    )
}

export default CaseStudies