import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import 'swiper/css';
import "../App.css"
import 'swiper/css/navigation';
import { Autoplay, Pagination, Scrollbar } from 'swiper/modules';

const Award = () => {
    // Array of awards data
    const awards = [
        {
            href: "",
            imgSrc: "/ejad.webp",
            alt: "Designrush",
            rating: "4.9",
            description: "Ejad Labs TECHNOPARK #1",
        },
        {
            href: "",
            imgSrc: "/award (1).png",
            alt: "Clutch",
            rating: "4.9",
            description: "Brand Scientist Award 2022",
        },
        {
            href: "",
            imgSrc: "/award (2).png",
            alt: "Rightfirms",
            rating: "4.9",
            description: "Digital Health Pakistan",
        },
        {
            href: "",
            imgSrc: "/award (4).png",
            alt: "Goodfirms",
            rating: "5.0",
            description: "Honored by Hamdard University ",
        },

        {
            href: "",
            imgSrc: "/award (5).png",
            alt: "Goodfirms",
            rating: "5.0",
            description: "Brand Scientist Award 2022",
        },
        {
            href: "",
            imgSrc: "/award (6).png",
            alt: "Goodfirms",
            rating: "5.0",
            description: "Global Forum 2023",
        },
        {
            href: "",
            imgSrc: "/award (7).png",
            alt: "Goodfirms",
            rating: "5.0",
            description: "KSTP TECHNOPARK #1",
        },
    ];

    return (
        <section
            className="design-innovation bg-dark-theme overflow-x-hidden sm:overflow-x-auto  "
            id="achievements"
        >
            {/* <div className="lg:py-[10.5rem] md:py-24 py-14">
                <div className="px-6 lg:px-8 max-w-7xl mx-auto" id="design-innovation">
                    <div className="row ">
                        <div className="col-lg-6 ">
                            <h2 className="font-bold text-white our-award">
                                <span>Our Awards And</span>
                                <span className="text-theme"> Recognitions.</span>
                            </h2>
                        </div> <br />
                        <p className="text-secondary mb-12 lg:mb-24 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
                            Recognized globally for our industry-leading development expertise and innovative solutions. Creating innovative, user-friendly, and life-changing products is what we do!
                        </p>
                        <div className='col-lg-6'>
                            <img src='/ceo.png' className='img-fluid' />
                        </div>
                    </div>
                </div> */}
            <div className=" " >
                <div className="  mx-auto" id="design-innovation">
                    <div className="row ">
                        <div className="col-lg-6 lg:py-[10.5rem] md:py-24 py-14 " data-aos="fade-right" data-aos-delay="100" >
                            <h2 className="font-bold text-white our-award " style={{ paddingLeft: "10%" }} >
                                <span>Our Awards And</span>
                                <span className="text-theme"> Recognitions.</span>
                            </h2>
                            <p className="text-secondary mb-12  w-75 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl" style={{ paddingLeft: "10%" }}>
                                Recognized globally for our industry-leading development expertise and innovative solutions. Creating innovative, user-friendly, and life-changing products is what we do!
                            </p>
                            <Link to="/awardandrecognition">
                                <button style={{ marginLeft: "10%" }} className="service-btn d-flex " >Read More</button>
                            </Link>
                        </div> <br />
                        <div className='col-lg-6 ceo  d-flex justify-content-end'>
                            <img src='/ceo.png' className='w-100 h-100 d-flex justify-content-end' />
                        </div>
                    </div>
                </div> <br /><br />
                {/* Swiper Component */}
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}

                    loop={true}
                    autoplay={{
                        delay: 0, // Continuous autoplay without a delay
                        disableOnInteraction: false, // Keeps autoplay even when interacting
                        pauseOnMouseEnter: false,
                    }}
                    speed={3000} // Adjust speed for smoothness (in ms)
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 30,
                        },
                    }}
                >
                    {awards.map((award, index) => (
                        <SwiperSlide key={index}>

                            <article className="bg-gradient-to-r from-[#050505] to-[#201F21] mx-2 md:mx-4 px-6 py-8 lg:py-[35px] lg:mx-0 mb-0 lg:px-6  rounded-3xl lg:h-64 h-52 flex flex-col justify-between">
                                <div className="flex justify-between">
                                    <img
                                        src={award.imgSrc}
                                        alt={award.alt}
                                        style={{ height: 60, width: 100 }}
                                    />
                                    <div className="flex items-center">
                                        <img
                                            className="h-[14px] w-[14px] sm:h-[15px] sm:w-[15px] lg:h-[16px] lg:w-[16px] 2xl:h-[19px] 2xl:w-[19px] mb-1"
                                            src="/star.png"
                                            alt="Star"
                                        />
                                        <p className="font-bold ml-2 text-white text-sm lg:text-md xl:text-lg 2xl:text-xl">
                                            {award.rating}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-neutral-500 text-sm lg:text-md xl:text-lg 2xl:text-xl">
                                        {award.description}
                                    </p>
                                </div>
                            </article>

                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <br /> <br /> <br />
        </section>
    );
};

export default Award;
