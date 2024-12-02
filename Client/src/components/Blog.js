import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import "../App.css"

const videos = [
    { id: 1, title: "AI Integration in Education", url: 'https://www.youtube.com/embed/dgBcSGiouW8?si=XU2ZhqT8UW4IZtHe'  },
    { id: 2, title: "EdTech and Workforce Upskilling", url: "https://www.youtube.com/embed/videoID2" },
    { id: 3, title: "Video Title 3", url: "https://www.youtube.com/embed/videoID3" },
    { id: 4, title: "Video Title 4", url: "https://www.youtube.com/embed/videoID4" }
];

const Blog = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    const openVideo = (videoUrl) => {
        setSelectedVideo(videoUrl);
    };

    const closeModal = () => {
        setSelectedVideo(null);
    };

    return (
        <>
            <section id="cloudSlider" className="workCarousel">
                <div className="cust_container" style={{ sliderpaddingtop: '50px', sliderpaddingbottom: '5px' }}>
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
                        {videos.map((video) => (
                            <SwiperSlide key={video.id}>
                                <div className="card fadeIn animate">
                                    <div className="imageContainer">
                                        <img loading="lazy" src={`/blogcard (${video.id}).png`} alt={video.title} />
                                        <div className="playButton" onClick={() => openVideo(video.url)}>
                                            <img src="/button.svg" alt="play icon" />
                                        </div>
                                    </div>
                                    <div className="">
                                        <p className="">{video.title}:</p>
                                        <div className="desc">
                                            Short description about the video content.
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            {/* Modal Popup for YouTube Video */}
            {selectedVideo && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <iframe
                            width="560"
                            height="315"
                            src={selectedVideo}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </>
    );
};

export default Blog;
