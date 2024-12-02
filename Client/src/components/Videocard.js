import React, { useState } from 'react'

const Videocard = ({ title, videoSrc, thumbnail }) => {
    const [isHovered, setIsHovered] = useState(false);
    const videoRef = React.useRef(null);

    // const handleMouseEnter = () => {
    //     setIsHovered(true);
    //     videoRef.current.play();
    // };

    // const handleMouseLeave = () => {
    //     setIsHovered(false);
    //     videoRef.current.pause();
    //     videoRef.current.currentTime = 0; // Reset video to the start
    // };
    return (
        <div>
            {/* <div className="continer responsivegrid container--full-width aem-GridColumn aem-GridColumn--default--12">
                <div
                    className="cmp-container cmp-container-775696422 "
                    data-type="simple"
                    id="container-7d1196101f"
                >
                    <div className="banner teaser banner--top-banner banner--content-center banner--no-top-padding">
                        <div
                            className="cmp-teaser cmp-teaser--1529542593    "
                            id="aibanner"
                            style={{
                                minHeight: 'calc(-110px + 100vh)'
                            }}
                        >
                            <div className="cmp-teaser__content cmp-teaser__theme-white cmp-teaser__content--no-padding  ">
                                <div className="cmp-teaser__tout">
                                    <div className="cmp-teaser__pretitle">
                                    </div>
                                    <h1 className="cmp-teaser__title">
                                        <div className="cmp-teaser__title wipro-dot__period ">
                                            <span
                                                style={{
                                                    display: 'inline',
                                                    fontSize: '70.0px'
                                                }}
                                            >
                                                More intelligence, less artificial
                                            </span>
                                        </div>
                                    </h1>
                                    <div className="cmp-teaser__description">
                                        <p>
                                            <span
                                                style={{
                                                    display: 'inline',
                                                    fontSize: '32.0px'
                                                }}
                                            >
                                                Wipro paves the way for predictive, preventive, and personalized care with GenAI.
                                            </span>
                                        </p>
                                        <p>
                                            <br />
                                        </p>
                                    </div>
                                </div>
                                <div className="cmp-teaser__floatingcard-placeholder">
                                </div>
                                <div className="cmp-teaser__playicon-placeholder ">
                                    <div className="cmp-teaser__play-container cmp-teaser__play-container--center">
                                        <a
                                            className="cmp-teaser__play-link "
                                            data-fancybox=""
                                            href="https://vimeo.com/867120626?share=copy"
                                            rel="nofollow"
                                        >
                                            <svg
                                                className="cmp-teaser__play-icon"
                                                fill="none"
                                                height="115"
                                                viewBox="0 0 114 115"
                                                width="114"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M82.4891 53.6556C85.772 55.8639 85.7192 60.7121 82.3891 62.8484L50.3527 83.4001C46.6694 85.763 41.8357 83.0867 41.8833 78.7109L42.3383 36.9151C42.3859 32.5393 47.2768 29.9689 50.9078 32.4114L82.4891 53.6556Z"
                                                    strokeWidth="3"
                                                />
                                                <circle
                                                    cx="57"
                                                    cy="57.498"
                                                    r="55.5"
                                                    strokeWidth="3"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="cmp-teaser__image ">
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    preload=""
                                    src="/6.mp4"
                                />
                            </div>
                            <div className="cmp-teaser__image cmp-teaser__tablet-image">
                                <div className="cmp-image">
                                    <img
                                        className="cmp-teaser__background-image"
                                        id="banner-background-image"
                                        src="/2.png"
                                    />
                                </div>
                            </div>
                        </div>
                        <style
                            dangerouslySetInnerHTML={{
                                __html: ''
                            }}
                            data-path="/1.png"
                        />
                    </div>
                    <div className="interactive-image">
                        {' '}
                        <style
                            dangerouslySetInnerHTML={{
                                __html: ' @media only screen and (max-width: 768px){.cmp-teaser__title span {font-size: 28px !important;}.cmp-teaser__description span {font-size: 16px !important;}} '
                            }}
                        />
                        <script nonce="" />
                    </div>
                    <div className="cmp-container__button-container">
                    </div>
                    <div
                        className="cmp-container__popup-background"
                        id="popup-background-container-7d1196101f"
                    />
                    <div
                        className="cmp-container__data"
                        data-expandaspopup="false"
                        data-expandbuttonlabel="Read More"
                        data-maxitems="-2"
                        data-maxitemsmobile="-2"
                        data-maxitemstablet="-2"
                        id="data-container-7d1196101f"
                    />
                </div>
            </div> */}
            <div
                className="video-card"
                // onMouseEnter={handleMouseEnter}
                // onMouseLeave={handleMouseLeave}
            >
                <video
                    ref={videoRef}
                    className={`video `}
                    src={videoSrc}
                    poster={thumbnail}
                    muted
                    loop
                />
                <div className="overlay">
                    <h2 className='text-center'>{title}</h2>
                    <div className="play-button ">
                        <svg viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default Videocard