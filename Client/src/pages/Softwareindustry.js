import React from 'react'
import Header from '../components/Header'
import "./software.css"
import Demo from '../components/Navbar'
import { Link } from 'react-router-dom'

const Softwareindustry = () => {
    return (
        <div>
            <Header />
            <section id="heros" class="heros1 section dark-background">

                <img src="/softwarebanner.png" alt="" />

                <div class="container text-center">
                    <div class="row justify-content-center">
                        <div class="col-lg-12" data-aos="fade-right" data-aos-delay="200">
                            <h2 className='profh2'>Software Industry</h2>
                        </div>
                    </div>
                </div>

            </section>
            <div className="heroimage rad-component-spacing-top-none  ml-3 " >
                <div
                    className="rad-hero-image rad-spacing-vertical-md d-flex align-items-center"
                    id="heroimage-4d1ee9695b"
                    data-cmp-data-layer='{"heroimage-4d1ee9695b":{"@type":"cio-sites/components/rad/heroimage","analytics-module-name":"heroimage-1","analytics-template-zone":"hero"}}'
                >
                    <div className="rad-hero-image__photo">
                        <div
                            data-cmp-is="image"
                            data-cmp-dmimage=""
                            data-cmp-smartcroprendition="rad-3x2"
                            data-cmp-src="/software.png"
                            data-asset-id="99f2c8bf-8a40-4cc2-8993-3de2847689a9"
                            data-cmp-filereference="/content/dam/accenture/final/accenture-com/imagery-2/Accenture-software-platforms-illustration-hero-image.png"
                            id="image-9907ad7e09"
                            data-cmp-data-layer='{"radimage-9907ad7e09":{"@type":"cio-sites/components/rad/radimage","analytics-engagement":"true","analytics-link-type":"engagement","analytics-link-name":"Accenture-software-platforms-illustration-hero-image.png","analytics-module-name":"radimage-1"}}'
                            data-cmp-hook-image="imageV3"
                            className="cmp-image "
                            itemScope=""
                            itemType="http://schema.org/ImageObject"
                        >
                            <img
                                src="/software.png"
                                loading="lazy"
                                className="cmp-image__image"
                                itemProp="contentUrl"
                                width={3840}
                                height={2160}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="rad-hero-image__content">
                        <h1 className="rad-hero-image__headline">
                            How Spotcomm Serves the Software Industry

                        </h1>
                        <p className="rad-hero-image__body">
                            At Spotcomm Global, we understand the unique challenges and opportunities facing the software industry in today's rapidly evolving digital landscape.
                        </p>
                    </div>
                </div>
            </div>
            <div className="statstakeaway">
                {/* Stats Takeaway */}
                <div
                    id="block-software-and-platforms-now"
                    data-cmp-data-layer='{"block-software-and-platforms-now":{"@type":"cio-sites/components/rad/statstakeaway","analytics-module-name":"statstakeaway-1","analytics-template-zone":"body"}}'
                >
                    <div className="rad-absorb-stats rad-spacing-vertical-md">
                        <h3 className="rad-absorb-stats__title">Software &amp; platforms now</h3>
                        <div className="rad-absorb-stats__cards-container">
                            <div className="rad-absorb-stats__card">
                                <div className="rad-absorb-stats__card-text">
                                    <p className="rad-absorb-stats__card-stat">80%</p>
                                    <div className="rad-absorb-stats__card-detail">
                                        <p>
                                            of software and platform companies neglect substantial revenue
                                            streams by only transforming parts of their business rather than
                                            the whole
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="rad-absorb-stats__card">
                                <div className="rad-absorb-stats__card-text">
                                    <p className="rad-absorb-stats__card-stat">99.8%</p>
                                    <div className="rad-absorb-stats__card-detail">
                                        <p>
                                        Spotcomm”s SLA commitments success in the Software Industry. 
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="rad-absorb-stats__card">
                                <div className="rad-absorb-stats__card-text">
                                    <p className="rad-absorb-stats__card-stat">96%</p>
                                    <div className="rad-absorb-stats__card-detail">
                                        <p>
                                            of tech executives are inspired by the new capabilities offered
                                            by generative AI
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="rad-absorb-stats__card">
                                <div className="rad-absorb-stats__card-text">
                                    <p className="rad-absorb-stats__card-stat">74%</p>
                                    <div className="rad-absorb-stats__card-detail">
                                        <p>
                                            of c-suite execs feel they need to completely rethink their
                                            operating models to be more resilient
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mosaic">
                <div
                    data-cmp-data-layer='{"block-how-to-reinvent-software-and-platforms":{"@type":"cio-sites/components/rad/mosaic","analytics-module-name":"mosaic-1","analytics-template-zone":"block-how-to-reinvent-software-and-platforms"}}'
                    id="block-how-to-reinvent-software-and-platforms"
                    className="rad-component__title--large-text rad-mosaic rad-mosaic--6-cards rad-spacing-vertical-md"
                >
                    <h3 className="rad-mosaic__heading">
                        How to reinvent software &amp; platforms
                    </h3>
                    <div
                        className="rad-mosaic__grid"
                        data-template-zone="block-how-to-reinvent-software-and-platforms"
                    >
                        {/* vertical with image or stat card */}
                        <button
                            aria-haspopup="dialog"
                            aria-controls="mosaic-card-item0-00190b0d2ff871a2f02591219e405afa0704cb5eff5dbda70377ffd67d516c9f"
                            className="rad-mosaic__card rad-mosaic__image-card rad-mosaic__card--vertical"
                            data-cmp-clickable=""
                            data-analytics-asset-id="card-a1d20d555b"
                            data-analytics-asset-pos={1}
                            data-cmp-data-layer='{"mosaic-card-item0-00190b0d2ff871a2f02591219e405afa0704cb5eff5dbda70377ffd67d516c9f":{"@type":"cio-sites/components/rad/mosaic","xdm:linkURL":"/ae-en/industries/software-platforms","analytics-engagement":"true","analytics-link-type":"engagement","analytics-link-name":"mosaic card clicked","analytics-module-name":"mosaic-card-pagination-1","analytics-template-zone":"block-how-to-reinvent-software-and-platforms"}}'
                            data-analytics-skim-click=""
                        >
                            <div className="rad-mosaic__card-description">
                                <div className="rad-mosaic__card-description-eyebrow fs-2">Seamless Cloud Connectivity and Infrastructure Support</div>
                                <h4 className="rad-mosaic__card-description-title fs-5 fw-normal">
                                    The software industry is increasingly shifting to cloud-based environments, where agility, scalability, and flexibility are key to success.
                                </h4>
                            </div>
                            <div className="rad-mosaic__image-card-image">
                                <div
                                    data-cmp-is="image"
                                    data-cmp-dmimage=""
                                    data-cmp-src="https://preview1.assetsadobe.com/is/image/accenture/1306372406?ts=1726612011714&wid=625&fit=constrain&dpr=off"
                                    data-asset-id="841c1d8e-12f6-4942-9596-cbae40d8e5cb"
                                    data-cmp-filereference="/content/dam/accenture/final/images/photography/person/general-people/1306372406.jpeg"
                                    id="image-928d66528f"
                                    data-cmp-data-layer='{"radimage-928d66528f":{"@type":"cio-sites/components/rad/radimage","analytics-engagement":"true","analytics-link-type":"engagement","analytics-link-name":"","analytics-module-name":"radimage-2"}}'
                                    data-cmp-hook-image="imageV3"
                                    className="cmp-image
     "
                                    itemScope=""
                                    itemType="http://schema.org/ImageObject"
                                >
                                    <img
                                        src="https://preview1.assetsadobe.com/is/image/accenture/1306372406?ts=1726612011714&wid=625&fit=constrain&dpr=off"
                                        loading="lazy"
                                        className="cmp-image__image"
                                        itemProp="contentUrl"
                                        width={6720}
                                        height={4480}
                                        alt=""
                                    />
                                </div>
                            </div>

                        </button>
                        {/* no image*/}
                        {/* vertical with image or stat card */}
                        {/* no image*/}
                        {/* no image*/}
                        {/* no image*/}
                        {/* vertical with image or stat card */}
                        {/* no image*/}
                        <button
                            aria-haspopup="dialog"
                            aria-controls="mosaic-card-item1-71d46931db4225cf862dfd7290bc3914267308bdee8210df82d65d1b859f88c5"
                            className="rad-mosaic__card rad-mosaic__card--no-image"
                            data-cmp-clickable=""
                            data-analytics-asset-id="card-aecf452fb3"
                            data-analytics-asset-pos={2}
                            data-cmp-data-layer='{"mosaic-card-item1-71d46931db4225cf862dfd7290bc3914267308bdee8210df82d65d1b859f88c5":{"@type":"cio-sites/components/rad/mosaic","xdm:linkURL":"/ae-en/industries/software-platforms","analytics-engagement":"true","analytics-link-type":"engagement","analytics-link-name":"mosaic card clicked","analytics-module-name":"mosaic-card-pagination-2","analytics-template-zone":"block-how-to-reinvent-software-and-platforms"}}'
                            data-analytics-skim-click=""
                        >
                            <div className="rad-mosaic__card-description">
                                <div className="rad-mosaic__card-description-eyebrow fs-2">
                                    Optimized Performance for Development and Collaboration

                                </div>
                                <h4 className="rad-mosaic__card-description-title fs-5 fw-normal">
                                    Software development requires fast, reliable networks to ensure that development teams can collaborate effectively, run tests, and deploy code without interruption.
                                </h4>
                            </div>

                        </button>

                        <div
                            className="rad-mosaic__card rad-mosaic__image-card rad-mosaic__card--vertical"
                            data-analytics-asset-id="card-ccdc36c5c3"
                            data-analytics-asset-pos={3}
                            data-cmp-data-layer='{"mosaic-card-item2-cd1b49480d1159b0f3091ead9a522c995b89ddee95bb37c4a63e966fcc9d7185":{"@type":"cio-sites/components/rad/mosaic","xdm:linkURL":"/ae-en/industries/software-platforms","analytics-engagement":"true","analytics-link-type":"engagement","analytics-link-name":"mosaic card clicked","analytics-module-name":"mosaic-card-pagination-3","analytics-template-zone":"block-how-to-reinvent-software-and-platforms"}}'
                        >
                            <div className="rad-mosaic__card-description">
                                <div className="rad-mosaic__card-description-eyebrow fs-2">
                                    Support for DevOps and Agile Methodologies
                                </div>
                                <h4 className="rad-mosaic__card-description-title fs-5">
                                    DevOps and Agile practices are foundational to modern software development, and Spotcomm’s network solutions are built to support these methodologies, ensuring seamless integration across development, testing, and production environments.

                                </h4>
                            </div>
                            <div className="rad-mosaic__image-card-image">
                                <div
                                    data-cmp-is="image"
                                    data-cmp-dmimage=""
                                    data-cmp-src="https://dynamicmedia.accenture.com/is/image/accenture/Accenture-afs-index-mosaic-image1?ts=1721844847908&wid=625&fit=constrain&dpr=off"
                                    data-asset-id="a0f4780f-06bf-48a7-a917-91808fd9bb5a"
                                    data-cmp-filereference="/content/dam/accenture/final/accenture-com/imagery-2/Accenture-afs-index-mosaic-image1.jpg"
                                    id="image-9f04d566f9"
                                    data-cmp-data-layer='{"radimage-9f04d566f9":{"@type":"cio-sites/components/rad/radimage","analytics-engagement":"true","analytics-link-type":"engagement","analytics-link-name":"","analytics-module-name":"radimage-3"}}'
                                    data-cmp-hook-image="imageV3"
                                    className="cmp-image
     "
                                    itemScope=""
                                    itemType="http://schema.org/ImageObject"
                                >
                                    <img
                                        src="https://dynamicmedia.accenture.com/is/image/accenture/Accenture-afs-index-mosaic-image1?ts=1721844847908&wid=625&fit=constrain&dpr=off"
                                        loading="lazy"
                                        className="cmp-image__image"
                                        itemProp="contentUrl"
                                        width={3840}
                                        height={2160}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        {/* no image*/}
                        {/* no image*/}
                        {/* no image*/}
                        {/* vertical with image or stat card */}
                        {/* no image*/}
                        {/* vertical with image or stat card */}
                        {/* no image*/}
                        <button
                            aria-haspopup="dialog"
                            aria-controls="mosaic-card-item3-b32eda2f820783063905b54a22a178518af318606d4ba93c9402c0650cea40be"
                            className="rad-mosaic__card rad-mosaic__card--no-image"
                            data-cmp-clickable=""
                            data-analytics-asset-id="card-e58df3adab"
                            data-analytics-asset-pos={4}
                            data-cmp-data-layer='{"mosaic-card-item3-b32eda2f820783063905b54a22a178518af318606d4ba93c9402c0650cea40be":{"@type":"cio-sites/components/rad/mosaic","xdm:linkURL":"/ae-en/industries/software-platforms","analytics-engagement":"true","analytics-link-type":"engagement","analytics-link-name":"mosaic card clicked","analytics-module-name":"mosaic-card-pagination-4","analytics-template-zone":"block-how-to-reinvent-software-and-platforms"}}'
                            data-analytics-skim-click=""
                        >
                            <div className="rad-mosaic__card-description">
                                <div className="rad-mosaic__card-description-eyebrow fs-2">
                                    Global Reach and Scalability for Software Companies
                                </div>
                                <h4 className="rad-mosaic__card-description-title fs-5">
                                    In the software industry, global reach is essential, especially for companies targeting international markets or developing cloud-based solutions that need to scale efficiently.
                                </h4>
                            </div>

                        </button>
                        {/* no image*/}
                        {/* no image*/}
                        {/* vertical with image or stat card */}
                        {/* no image*/}
                        {/* vertical with image or stat card */}
                        {/* no image*/}
                        {/* no image*/}
                        <button
                            aria-haspopup="dialog"
                            aria-controls="mosaic-card-item4-aa57b5e5c5d2e8449e5f1ac0799677df3dc741090ea58ad9c21dc7c658aefede"
                            className="rad-mosaic__card rad-mosaic__card--no-image"
                            data-cmp-clickable=""
                            data-analytics-asset-id="card-cec043784c"
                            data-analytics-asset-pos={5}
                            data-cmp-data-layer='{"mosaic-card-item4-aa57b5e5c5d2e8449e5f1ac0799677df3dc741090ea58ad9c21dc7c658aefede":{"@type":"cio-sites/components/rad/mosaic","xdm:linkURL":"/ae-en/industries/software-platforms","analytics-engagement":"true","analytics-link-type":"engagement","analytics-link-name":"mosaic card clicked","analytics-module-name":"mosaic-card-pagination-5","analytics-template-zone":"block-how-to-reinvent-software-and-platforms"}}'
                            data-analytics-skim-click=""
                        >
                            <div className="rad-mosaic__card-description">
                                <div className="rad-mosaic__card-description-eyebrow fs-2">
                                    24/7 Network Support and Expertise
                                </div>
                                <h4 className="rad-mosaic__card-description-title fs-5">
                                    Spotcomm understands that the software industry operates around the clock, with development teams working across multiple time zones.
                                </h4>
                            </div>

                        </button>
                        {/* no image*/}
                        {/* vertical with image or stat card */}
                        {/* no image*/}
                        {/* vertical with image or stat card */}
                        {/* no image*/}
                        {/* no image*/}
                        {/* no image*/}    <button
                            aria-haspopup="dialog"
                            aria-controls="mosaic-card-item0-00190b0d2ff871a2f02591219e405afa0704cb5eff5dbda70377ffd67d516c9f"
                            className="rad-mosaic__card rad-mosaic__image-card rad-mosaic__card--vertical"
                            data-cmp-clickable=""
                            data-analytics-asset-id="card-a1d20d555b"
                            data-analytics-asset-pos={1}
                            data-cmp-data-layer='{"mosaic-card-item0-00190b0d2ff871a2f02591219e405afa0704cb5eff5dbda70377ffd67d516c9f":{"@type":"cio-sites/components/rad/mosaic","xdm:linkURL":"/ae-en/industries/software-platforms","analytics-engagement":"true","analytics-link-type":"engagement","analytics-link-name":"mosaic card clicked","analytics-module-name":"mosaic-card-pagination-1","analytics-template-zone":"block-how-to-reinvent-software-and-platforms"}}'
                            data-analytics-skim-click=""
                        >
                            <div className="rad-mosaic__card-description">
                                <div className="rad-mosaic__card-description-eyebrow fs-2">Enhanced Security for Software Development and Delivery</div>
                                <h4 className="rad-mosaic__card-description-title fs-5">
                                    Security is a top priority in the software industry, particularly with the rise of cyber threats targeting development environments and software applications.
                                </h4>
                            </div>
                            <div className="rad-mosaic__image-card-image">
                                <div
                                    data-cmp-is="image"
                                    data-cmp-dmimage=""
                                    data-cmp-src="https://preview1.assetsadobe.com/is/image/accenture/1306372406?ts=1726612011714&wid=625&fit=constrain&dpr=off"
                                    data-asset-id="841c1d8e-12f6-4942-9596-cbae40d8e5cb"
                                    data-cmp-filereference="/content/dam/accenture/final/images/photography/person/general-people/1306372406.jpeg"
                                    id="image-928d66528f"
                                    data-cmp-data-layer='{"radimage-928d66528f":{"@type":"cio-sites/components/rad/radimage","analytics-engagement":"true","analytics-link-type":"engagement","analytics-link-name":"","analytics-module-name":"radimage-2"}}'
                                    data-cmp-hook-image="imageV3"
                                    className="cmp-image
     "
                                    itemScope=""
                                    itemType="http://schema.org/ImageObject"
                                >
                                    <img
                                        src="software1.png"
                                        loading="lazy"
                                        className="cmp-image__image"
                                        itemProp="contentUrl"
                                        width={6720}
                                        height={4480}
                                        alt=""
                                    />
                                </div>
                            </div>

                        </button>
                        <button
                            aria-haspopup="dialog"
                            aria-controls="mosaic-card-item4-aa57b5e5c5d2e8449e5f1ac0799677df3dc741090ea58ad9c21dc7c658aefede"
                            className="rad-mosaic__card rad-mosaic__card--no-image"
                            data-cmp-clickable=""
                            data-analytics-asset-id="card-cec043784c"
                            data-analytics-asset-pos={5}
                            data-cmp-data-layer='{"mosaic-card-item4-aa57b5e5c5d2e8449e5f1ac0799677df3dc741090ea58ad9c21dc7c658aefede":{"@type":"cio-sites/components/rad/mosaic","xdm:linkURL":"/ae-en/industries/software-platforms","analytics-engagement":"true","analytics-link-type":"engagement","analytics-link-name":"mosaic card clicked","analytics-module-name":"mosaic-card-pagination-5","analytics-template-zone":"block-how-to-reinvent-software-and-platforms"}}'
                            data-analytics-skim-click=""
                        >
                            <div className="rad-mosaic__card-description">
                                <div className="rad-mosaic__card-description-eyebrow fs-2">Metaverse</div>
                                <h4 className="rad-mosaic__card-description-title fs-5">
                                    Open new revenue streams by developing experiences your customers
                                    actually want
                                </h4>
                            </div>

                        </button>
                        <div
                            id="mosaic-card-item0-00190b0d2ff871a2f02591219e405afa0704cb5eff5dbda70377ffd67d516c9f"
                            className="mosaic-modal mosaic-modal--with-stat"
                            aria-modal="true"
                            role="dialog"
                            aria-labelledby="mosaic-card-item0-00190b0d2ff871a2f02591219e405afa0704cb5eff5dbda70377ffd67d516c9f-1-eyebrow"
                            style={{ overflowY: "hidden" }}
                        >


                            <div className="modal-inner-scroll" style={{ minHeight: 600 }}>
                                <div className="modal-hero">
                                    <div className="modal-hero__top">
                                        <div
                                            id="mosaic-card-item0-00190b0d2ff871a2f02591219e405afa0704cb5eff5dbda70377ffd67d516c9f-1-eyebrow"
                                            className="modal-hero__eyebrow"
                                        >
                                            SMB Growth
                                        </div>
                                        <h3 className="modal-hero__headline rad-spacing-bottom-sm">
                                            Small to medium is big business
                                        </h3>
                                        <p className="modal-hero__subheader">
                                            Enterprises and SMBs’ success is intertwined, and both benefit
                                            from improved collaboration. It’s time to accelerate SMB growth
                                            and help them thrive on their own terms.
                                        </p>
                                    </div>
                                    <div className="modal-hero__stat">
                                        <h4 className="stat__digits">85%</h4>
                                        <div className="stat__detail">
                                            of enterprises believe they are effectively supporting their SMB
                                            partners, only 40% of SMBs agree.
                                        </div>
                                    </div>
                                </div>
                                <div className="modal__card-stack">
                                    <div className="card">
                                        <img
                                            alt=""
                                            src="/content/dam/accenture/final/images/icons/pictogram/Accenture-public-service-index-nonprofit-icon.svg"
                                        />
                                        <h5 className="card__title">Acquire</h5>
                                        <div className="card__body">
                                            <p>Identify and adopt new SMB customers and partners.</p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img
                                            alt=""
                                            src="/content/dam/accenture/final/images/icons/pictogram/Cloud%20technology_80x80.svg"
                                        />
                                        <h5 className="card__title">Onboard</h5>
                                        <div className="card__body">
                                            <p>Enable frictionless onboarding for all SMBs.</p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img
                                            alt=""
                                            src="/content/dam/accenture/final/images/icons/pictogram/Talent_80x80.svg"
                                        />
                                        <h5 className="card__title">Engage</h5>
                                        <div className="card__body">
                                            <p>Drive customized SMB engagement and experiences.</p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img
                                            alt=""
                                            src="/content/dam/accenture/final/images/icons/pictogram/Cloud%20innovation_80x80.svg"
                                        />
                                        <h5 className="card__title">Offer</h5>
                                        <div className="card__body">
                                            <p>Deliver relevant, SMB-specific solutions and programs.</p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img
                                            alt=""
                                            src="/content/dam/accenture/final/images/icons/pictogram/Client_80x80.svg"
                                        />
                                        <h5 className="card__title">Support</h5>
                                        <div className="card__body">
                                            <p>Provide proactive support tailored to SMB needs.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mosaic-modal__buttons-wrapper">
                                <button
                                    tabIndex={-1}
                                    aria-hidden="true"
                                    className="mosaic-modal__mobile-next-button"
                                >
                                    <span className="rad-icon rad-icon__right" />
                                </button>
                                <div className="mosaic-modal__cta">
                                    <a

                                        className="mosaic-modal__read-more-button rad-button rad-button--ghost"
                                        target="_self"
                                        data-barba-transition=""
                                        aria-label="Read more: Small to medium is big business"
                                        data-cmp-clickable=""
                                        data-analytics-asset-id="card-a1d20d555b"
                                        data-analytics-asset-pos={1}
                                        data-cmp-data-layer='{"mosaic-card-item0-00190b0d2ff871a2f02591219e405afa0704cb5eff5dbda70377ffd67d516c9f-cta-link":{"@type":"cio-sites/components/rad/mosaic","xdm:linkURL":"/ae-en/industries/software-platforms/smb-growth-platform","analytics-engagement":"true","analytics-link-type":"engagement","analytics-link-name":"Read more: Small to medium is big business","analytics-module-name":"mosaiccardbutton-1","analytics-template-zone":"block-how-to-reinvent-software-and-platforms"}}'
                                    >
                                        <div className="rad-button__text">Read more</div>
                                        <div
                                            className="rad-button__icon-right rad-icon rad-icon__chevron-right rad-icon--compact"
                                            aria-hidden="true"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div
                            id="mosaic-card-item1-71d46931db4225cf862dfd7290bc3914267308bdee8210df82d65d1b859f88c5"
                            className="mosaic-modal mosaic-modal--with-stat"
                            aria-modal="true"
                            role="dialog"
                            aria-labelledby="mosaic-card-item1-71d46931db4225cf862dfd7290bc3914267308bdee8210df82d65d1b859f88c5-2-eyebrow"
                            style={{ overflowY: "hidden" }}
                        >
                            <button
                                className="mosaic-modal__close-icon rad-icon-button rad-icon-button--primary rad-icon-button--icon-size-24"
                                data-cmp-clickable=""
                                data-cmp-data-layer='{"mosaic-card-item1-71d46931db4225cf862dfd7290bc3914267308bdee8210df82d65d1b859f88c5-close":{"@type":"cio-sites/components/rad/mosaic","xdm:linkURL":"/ae-en/industries/software-platforms","analytics-engagement":"false","analytics-link-type":"cta","analytics-link-name":"Close","analytics-module-name":"mosaiccard-2","analytics-template-zone":"block-how-to-reinvent-software-and-platforms"}}'
                            >
                                <div className="rad-icon-button__text">Close</div>
                                <div
                                    className="rad-icon rad-icon--compact rad-icon__close"
                                    aria-hidden="true"
                                />
                            </button>
                            <button
                                className="mosaic-modal__close rad-button rad-button--ghost"
                                data-cmp-clickable=""
                                data-cmp-data-layer='{"mosaic-card-item1-71d46931db4225cf862dfd7290bc3914267308bdee8210df82d65d1b859f88c5-close":{"@type":"cio-sites/components/rad/mosaic","xdm:linkURL":"/ae-en/industries/software-platforms","analytics-engagement":"false","analytics-link-type":"cta","analytics-link-name":"Close","analytics-module-name":"mosaiccard-2","analytics-template-zone":"block-how-to-reinvent-software-and-platforms"}}'
                            >
                                <div className="rad-button__text">Close</div>
                                <div className="rad-button__icon-right rad-icon rad-icon__close rad-icon--compact" />
                            </button>
                            <div className="modal-inner-scroll" style={{ minHeight: 600 }}>
                                <div className="modal-hero">
                                    <div className="modal-hero__top">
                                        <div
                                            id="mosaic-card-item1-71d46931db4225cf862dfd7290bc3914267308bdee8210df82d65d1b859f88c5-2-eyebrow"
                                            className="modal-hero__eyebrow"
                                        >
                                            Advertising &amp; Attention Monetization
                                        </div>
                                        <h3 className="modal-hero__headline rad-spacing-bottom-sm">
                                            Attention is a precious commodity
                                        </h3>
                                        <p className="modal-hero__subheader">
                                            Platform proliferation, competition for eyeballs, and data
                                            privacy shifts are causing a battle for attention. Capture and
                                            keep attention that drives new sustainable revenue streams by
                                            reinventing your advertising and subscription models.
                                        </p>
                                    </div>
                                    <div className="modal-hero__stat">
                                        <h4 className="stat__digits">1/3</h4>
                                        <div className="stat__detail">
                                            of advertisers are falling behind the competition for eyeballs.
                                        </div>
                                    </div>
                                </div>
                                <div className="modal__card-stack">
                                    <div className="card">
                                        <img
                                            alt=""
                                            src="/content/dam/accenture/final/images/icons/pictogram/Accenture-public-service-index-social-services-icon.svg"
                                        />
                                        <h5 className="card__title">Reach key B2B audiences</h5>
                                        <div className="card__body">
                                            <p>
                                                Reinvent ad sales and marketing with strategy and activation
                                                plans that boost revenues.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img
                                            alt=""
                                            src="/content/dam/accenture/final/images/icons/pictogram/Finance_80x80.svg"
                                        />
                                        <h5 className="card__title">
                                            Strengthen customer lifetime value
                                        </h5>
                                        <div className="card__body">
                                            <p>
                                                Design and deliver better subscriptions and holistic services
                                                to improve revenue, margins and customer lifetime value.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img
                                            alt=""
                                            src="/content/dam/accenture/final/images/icons/pictogram/Accenture-capital-markets-wealth-management-icon.png"
                                        />
                                        <h5 className="card__title">Monetize new spaces and places</h5>
                                        <div className="card__body">
                                            <p>
                                                Develop powerful next-gen strategies and execution plans to
                                                fully monetize new spaces and places, inclusive of AR/VR/IoT.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img
                                            alt=""
                                            src="/content/dam/accenture/final/images/icons/pictogram/Accenture-public-service-index-nonprofit-icon.svg"
                                        />
                                        <h5 className="card__title">Boost customer acquisition</h5>
                                        <div className="card__body">
                                            <p>
                                                Reinvent your B2C marketing, sales and services to grow your
                                                user base.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img
                                            alt=""
                                            src="/content/dam/accenture/final/images/icons/pictogram/Client_80x80.svg"
                                        />
                                        <h5 className="card__title">Maximize creator engagement</h5>
                                        <div className="card__body">
                                            <p>
                                                Leverage the burgeoning influencer, creator and builder
                                                economy to maximize revenue and engagement, and lower 'cost to
                                                serve’.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mosaic-modal__buttons-wrapper">
                                <button
                                    tabIndex={-1}
                                    aria-hidden="true"
                                    className="mosaic-modal__mobile-next-button"
                                >
                                    <span className="rad-icon rad-icon__right" />
                                </button>
                                <div className="mosaic-modal__cta">
                                    <a

                                        className="mosaic-modal__read-more-button rad-button rad-button--ghost"
                                        target="_self"
                                        data-barba-transition=""
                                        aria-label="Read more: Attention is a precious commodity"
                                        data-cmp-clickable=""
                                        data-analytics-asset-id="card-aecf452fb3"
                                        data-analytics-asset-pos={2}
                                        data-cmp-data-layer='{"mosaic-card-item1-71d46931db4225cf862dfd7290bc3914267308bdee8210df82d65d1b859f88c5-cta-link":{"@type":"cio-sites/components/rad/mosaic","xdm:linkURL":"/us-en/services/software-platforms/advertising-attention-monetization","analytics-engagement":"true","analytics-link-type":"engagement","analytics-link-name":"Read More: Attention is a precious commodity","analytics-module-name":"mosaiccardbutton-2","analytics-template-zone":"block-how-to-reinvent-software-and-platforms"}}'
                                    >
                                        <div className="rad-button__text">Read More</div>
                                        <div
                                            className="rad-button__icon-right rad-icon rad-icon__chevron-right rad-icon--compact"
                                            aria-hidden="true"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div
                            id="mosaic-card-item3-b32eda2f820783063905b54a22a178518af318606d4ba93c9402c0650cea40be"
                            className="mosaic-modal mosaic-modal--with-stat"
                            aria-modal="true"
                            role="dialog"
                            aria-labelledby="mosaic-card-item3-b32eda2f820783063905b54a22a178518af318606d4ba93c9402c0650cea40be-4-eyebrow"
                            style={{ overflowY: "hidden" }}
                        >
                            <button
                                className="mosaic-modal__close-icon rad-icon-button rad-icon-button--primary rad-icon-button--icon-size-24"
                                data-cmp-clickable=""
                                data-cmp-data-layer='{"mosaic-card-item3-b32eda2f820783063905b54a22a178518af318606d4ba93c9402c0650cea40be-close":{"@type":"cio-sites/components/rad/mosaic","xdm:linkURL":"/ae-en/industries/software-platforms","analytics-engagement":"false","analytics-link-type":"cta","analytics-link-name":"Close","analytics-module-name":"mosaiccard-3","analytics-template-zone":"block-how-to-reinvent-software-and-platforms"}}'
                            >
                                <div className="rad-icon-button__text">Close</div>
                                <div
                                    className="rad-icon rad-icon--compact rad-icon__close"
                                    aria-hidden="true"
                                />
                            </button>
                            <button
                                className="mosaic-modal__close rad-button rad-button--ghost"
                                data-cmp-clickable=""
                                data-cmp-data-layer='{"mosaic-card-item3-b32eda2f820783063905b54a22a178518af318606d4ba93c9402c0650cea40be-close":{"@type":"cio-sites/components/rad/mosaic","xdm:linkURL":"/ae-en/industries/software-platforms","analytics-engagement":"false","analytics-link-type":"cta","analytics-link-name":"Close","analytics-module-name":"mosaiccard-3","analytics-template-zone":"block-how-to-reinvent-software-and-platforms"}}'
                            >
                                <div className="rad-button__text">Close</div>
                                <div className="rad-button__icon-right rad-icon rad-icon__close rad-icon--compact" />
                            </button>
                            <div className="modal-inner-scroll" style={{ minHeight: 600 }}>
                                <div className="modal-hero">
                                    <div className="modal-hero__top">
                                        <div
                                            id="mosaic-card-item3-b32eda2f820783063905b54a22a178518af318606d4ba93c9402c0650cea40be-4-eyebrow"
                                            className="modal-hero__eyebrow"
                                        >
                                            PRODUCT ACCELERATION AND VALUE CREATION
                                        </div>
                                        <h3 className="modal-hero__headline rad-spacing-bottom-sm">
                                            Embrace new strategies, models and partners to drive growth
                                        </h3>
                                        <p className="modal-hero__subheader">
                                            Macro pressures and shifting consumer expectations require a new
                                            approach. Innovate products and optimize operations to improve
                                            CX and ROI.
                                        </p>
                                    </div>
                                    <div className="modal-hero__stat">
                                        <h4 className="stat__digits">74%</h4>
                                        <div className="stat__detail">
                                            of c-suite execs feel they need to completely rethink their
                                            operating models to be more resilient.
                                        </div>
                                    </div>
                                </div>
                                <div className="modal__card-stack">
                                    <div className="card">
                                        <img
                                            alt="Bar-Chart-Up"
                                            src="/content/dam/accenture/final/images/icons/pictogram/Bar-Chart-Up-icon.svg"
                                        />
                                        <h5 className="card__title">Accelerated time to market</h5>
                                        <div className="card__body">
                                            <p>
                                                Bring products to market 3-5X times faster and rapidly
                                                accelerate time to value for your customers.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img
                                            alt="Revenue"
                                            src="/content/dam/accenture/final/images/icons/pictogram/Accenture-Revenue-Icon.svg"
                                        />
                                        <h5 className="card__title">
                                            Accelerated revenue and customer acquisition
                                        </h5>
                                        <div className="card__body">
                                            <p>
                                                Increase effectiveness and return on engineering investments
                                                with improved ability to iterate by 60% - 70%.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img
                                            alt="Nonprofit"
                                            src="/content/dam/accenture/final/images/icons/pictogram/Accenture-public-service-index-nonprofit-icon.svg"
                                        />
                                        <h5 className="card__title">
                                            Maintained customer trust and compliance
                                        </h5>
                                        <div className="card__body">
                                            <p>
                                                Reduce security incidents by up to 60% and unplanned downtime
                                                by over 50%.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img
                                            alt="Cloud innovation"
                                            src="/content/dam/accenture/final/images/icons/pictogram/Cloud-Innovation-47x47.svg"
                                        />
                                        <h5 className="card__title">Return on engineering investment</h5>
                                        <div className="card__body">
                                            <p>
                                                Experience 30% shorter customer acquisition cost than the
                                                market average with modernized strategies that drive
                                                marketing, sales and customer success.&nbsp;
                                            </p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img
                                            alt="Network equipment"
                                            src="/content/dam/accenture/final/images/icons/pictogram/Accenture-high-tech-index-network-equipment-icon.svg"
                                        />
                                        <h5 className="card__title">
                                            Scale go-to-market and development efforts
                                        </h5>
                                        <div className="card__body">
                                            <p>
                                                Create network effects to activate developer and new partner
                                                ecosystems, lowering development sales and marketing expenses
                                                by 50%.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mosaic-modal__buttons-wrapper">
                                <button
                                    tabIndex={-1}
                                    aria-hidden="true"
                                    className="mosaic-modal__mobile-next-button"
                                >
                                    <span className="rad-icon rad-icon__right" />
                                </button>
                                <div className="mosaic-modal__cta">
                                    <a

                                        className="mosaic-modal__read-more-button rad-button rad-button--ghost"
                                        target="_self"
                                        data-barba-transition=""
                                        aria-label="Read more: Product acceleration and value creation"
                                        data-cmp-clickable=""
                                        data-analytics-asset-id="card-e58df3adab"
                                        data-analytics-asset-pos={4}
                                        data-cmp-data-layer='{"mosaic-card-item3-b32eda2f820783063905b54a22a178518af318606d4ba93c9402c0650cea40be-cta-link":{"@type":"cio-sites/components/rad/mosaic","xdm:linkURL":"/us-en/services/software-platforms/product-acceleration","analytics-engagement":"true","analytics-link-type":"engagement","analytics-link-name":"Read more: Embrace new strategies, models and partners to drive growth","analytics-module-name":"mosaiccardbutton-3","analytics-template-zone":"block-how-to-reinvent-software-and-platforms"}}'
                                    >
                                        <div className="rad-button__text">Read more</div>
                                        <div
                                            className="rad-button__icon-right rad-icon rad-icon__chevron-right rad-icon--compact"
                                            aria-hidden="true"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div
                            id="mosaic-card-item4-aa57b5e5c5d2e8449e5f1ac0799677df3dc741090ea58ad9c21dc7c658aefede"
                            className="mosaic-modal "
                            aria-modal="true"
                            role="dialog"
                            aria-labelledby="mosaic-card-item4-aa57b5e5c5d2e8449e5f1ac0799677df3dc741090ea58ad9c21dc7c658aefede-5-eyebrow"
                            style={{ overflowY: "hidden" }}
                        >
                            <button
                                className="mosaic-modal__close-icon rad-icon-button rad-icon-button--primary rad-icon-button--icon-size-24"
                                data-cmp-clickable=""
                                data-cmp-data-layer='{"mosaic-card-item4-aa57b5e5c5d2e8449e5f1ac0799677df3dc741090ea58ad9c21dc7c658aefede-close":{"@type":"cio-sites/components/rad/mosaic","xdm:linkURL":"/ae-en/industries/software-platforms","analytics-engagement":"false","analytics-link-type":"cta","analytics-link-name":"Close","analytics-module-name":"mosaiccard-4","analytics-template-zone":"block-how-to-reinvent-software-and-platforms"}}'
                            >
                                <div className="rad-icon-button__text">Close</div>
                                <div
                                    className="rad-icon rad-icon--compact rad-icon__close"
                                    aria-hidden="true"
                                />
                            </button>
                            <button
                                className="mosaic-modal__close rad-button rad-button--ghost"
                                data-cmp-clickable=""
                                data-cmp-data-layer='{"mosaic-card-item4-aa57b5e5c5d2e8449e5f1ac0799677df3dc741090ea58ad9c21dc7c658aefede-close":{"@type":"cio-sites/components/rad/mosaic","xdm:linkURL":"/ae-en/industries/software-platforms","analytics-engagement":"false","analytics-link-type":"cta","analytics-link-name":"Close","analytics-module-name":"mosaiccard-4","analytics-template-zone":"block-how-to-reinvent-software-and-platforms"}}'
                            >
                                <div className="rad-button__text">Close</div>
                                <div className="rad-button__icon-right rad-icon rad-icon__close rad-icon--compact" />
                            </button>
                            <div className="modal-inner-scroll" style={{ minHeight: 600 }}>
                                <div className="modal-hero">
                                    <div className="modal-hero__top">
                                        <div
                                            id="mosaic-card-item4-aa57b5e5c5d2e8449e5f1ac0799677df3dc741090ea58ad9c21dc7c658aefede-5-eyebrow"
                                            className="modal-hero__eyebrow"
                                        >
                                            Software and platform reinvention
                                        </div>
                                        <h3 className="modal-hero__headline rad-spacing-bottom-sm">
                                            Solutions to drive hypergrowth
                                        </h3>
                                        <p className="modal-hero__subheader">
                                            Consumer needs are constantly changing, placing pressure on
                                            platforms to remain relevant. Our solutions can help your
                                            platform plan for new growth, build stand-out experiences, get
                                            personal, secure trust, and provide your customers with what
                                            they want.
                                        </p>
                                    </div>
                                </div>
                                <div className="modal__card-stack">
                                    <div className="card">
                                        <img
                                            alt=""
                                            src="/content/dam/accenture/final/images/icons/pictogram/Finance_80x80.svg"
                                        />
                                        <h5 className="card__title">
                                            Build strategies to capture growth
                                        </h5>
                                        <div className="card__body">
                                            <p>
                                                Build the right growth strategies to innovate, increase
                                                profitability and accelerate time to market.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img
                                            alt=""
                                            src="/content/dam/accenture/final/images/icons/pictogram/Talent_80x80.svg"
                                        />
                                        <h5 className="card__title">
                                            Anticipate and respond to fast-changing customer needs
                                        </h5>
                                        <div className="card__body">
                                            <p>
                                                Deliver experiences that attract, retain and meet the changing
                                                needs of your customers.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img
                                            alt=""
                                            src="/content/dam/accenture/final/images/icons/pictogram/Client_80x80.svg"
                                        />
                                        <h5 className="card__title">Deliver seamless new experiences</h5>
                                        <div className="card__body">
                                            <p>
                                                Place customer needs at the core by connecting new hardware
                                                and devices that provide seamless experiences.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <img
                                            alt=""
                                            src="/content/dam/accenture/final/images/icons/pictogram/Accenture-public-service-index-nonprofit-icon.svg"
                                        />
                                        <h5 className="card__title">
                                            Increase trust with all stakeholders
                                        </h5>
                                        <div className="card__body">
                                            <p>
                                                Maintain a trusted platform by deploying security, privacy,
                                                compliance, data protection and fraud mitigation strategies.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="rad-grid-card-carousel__text-container">
                <h2 className="rad-grid-card-carousel__heading">
                    What’s trending in software Industry
                </h2>


            </div><br /><br />
            <div
                className="rad-grid-card-carousel__card-wrapper flickity-cell is-selected "
                style={{ transform: "translateX(0%)" }}
            >
                <div className="rad-grid-card-carousel__card-size-maintainer">
                    <div
                        className="rad-content-grid-card rad-content-grid-card--case-study"
                        id="case-study-542757d34d"
                        data-cta-title="Expand"
                        data-card-title="Building better business with data and AI"
                        data-cta-link="/ae-en/case-studies/software-platforms/building-better-business-with-data-ai"
                        data-content-type="caseStudy"
                        data-analytics-asset-id="card-542757d34d"
                        data-cs-override-id="card-542757d34d"
                        data-analytics-skim-hover=""
                        data-analytics-asset-pos={1}
                    >


                        <div className="rad-content-grid-card__label">Case Study</div>
                        <div className="rad-content-grid-card__title">
                            Building better business
                            with Spotcomm’s Optimized Network
                        </div>
                        <div className="rad-content-grid-card__sliding-content">
                            <div className="rad-content-grid-card__front-content">
                                <div className="rad-content-grid-card__half-image">
                                    <div className="image radimage">
                                        <div
                                            data-cmp-is="image"
                                            data-cmp-dmimage=""
                                            data-cmp-smartcroprendition="rad-card-half"
                                            data-cmp-src="https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Building-Better-Business-With-Data-And-AI-Glance-600x424%3Arad-card-half?ts=1724245946640&fit=constrain&dpr=off"
                                            data-asset-id="186638de-c6ff-4d2b-83ef-0f11a5773294"
                                            data-cmp-filereference="/content/dam/accenture/final/accenture-com/imagery-8/Accenture-Building-Better-Business-With-Data-And-AI-Glance-600x424.png"
                                            id="image-"
                                            data-cmp-data-layer='{"image-":{"@type":"cio-sites/components/rad/radimage","analytics-engagement":"true","analytics-link-type":"engagement","analytics-link-name":"","analytics-module-name":"radimage-4"}}'
                                            data-cmp-hook-image="imageV3"
                                            className="cmp-image
     "
                                            itemScope=""
                                            itemType="http://schema.org/ImageObject"
                                        >
                                            <img
                                                src="https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Building-Better-Business-With-Data-And-AI-Glance-600x424%3Arad-card-half?ts=1724245946640&fit=constrain&dpr=off"
                                                loading="lazy"
                                                className="cmp-image__image"
                                                itemProp="contentUrl"
                                                width={600}
                                                height={424}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="rad-grid-card-carousel__card-size-maintainer">
                    <div
                        className="rad-content-grid-card rad-content-grid-card--case-study"
                        id="case-study-542757d34d"
                        data-cta-title="Expand"
                        data-card-title="Building better business with data and AI"
                        data-cta-link="/ae-en/case-studies/software-platforms/building-better-business-with-data-ai"
                        data-content-type="caseStudy"
                        data-analytics-asset-id="card-542757d34d"
                        data-cs-override-id="card-542757d34d"
                        data-analytics-skim-hover=""
                        data-analytics-asset-pos={1}
                    >


                        <div className="rad-content-grid-card__label">Blog</div>
                        <div className="rad-content-grid-card__title">
                            5G & Edge Computing
                        </div>
                        <div className="rad-content-grid-card__sliding-content">
                            <div className="rad-content-grid-card__front-content">
                                <div className="rad-content-grid-card__half-image">
                                    <div className="image radimage">
                                        <div
                                            data-cmp-is="image"
                                            data-cmp-dmimage=""
                                            data-cmp-smartcroprendition="rad-card-half"
                                            data-cmp-src="/software5.png"
                                            data-asset-id="186638de-c6ff-4d2b-83ef-0f11a5773294"
                                            data-cmp-filereference="/content/dam/accenture/final/accenture-com/imagery-8/Accenture-Building-Better-Business-With-Data-And-AI-Glance-600x424.png"
                                            id="image-"
                                            data-cmp-data-layer='{"image-":{"@type":"cio-sites/components/rad/radimage","analytics-engagement":"true","analytics-link-type":"engagement","analytics-link-name":"","analytics-module-name":"radimage-4"}}'
                                            data-cmp-hook-image="imageV3"
                                            className="cmp-image
     "
                                            itemScope=""
                                            itemType="http://schema.org/ImageObject"
                                        >
                                            <img
                                                src="/software5.png"
                                                loading="lazy"
                                                className="cmp-image__image"
                                                itemProp="contentUrl"
                                                width={600}
                                                height={424}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="rad-grid-card-carousel__card-size-maintainer">
                    <div
                        className="rad-content-grid-card rad-content-grid-card--case-study"
                        id="case-study-542757d34d"
                        data-cta-title="Expand"
                        data-card-title="Building better business with data and AI"
                        data-cta-link="/ae-en/case-studies/software-platforms/building-better-business-with-data-ai"
                        data-content-type="caseStudy"
                        data-analytics-asset-id="card-542757d34d"
                        data-cs-override-id="card-542757d34d"
                        data-analytics-skim-hover=""
                        data-analytics-asset-pos={1}
                    >


                        <div className="rad-content-grid-card__label">Blog</div>
                        <div className="rad-content-grid-card__title">
                            Ensuring security in the
                            age of generative AI for
                            product development
                        </div>
                        <div className="rad-content-grid-card__sliding-content">
                            <div className="rad-content-grid-card__front-content">
                                <div className="rad-content-grid-card__half-image">
                                    <div className="image radimage">
                                        <div
                                            data-cmp-is="image"
                                            data-cmp-dmimage=""
                                            data-cmp-smartcroprendition="rad-card-half"
                                            data-cmp-src="/software4.png"
                                            data-asset-id="186638de-c6ff-4d2b-83ef-0f11a5773294"
                                            data-cmp-filereference="/content/dam/accenture/final/accenture-com/imagery-8/Accenture-Building-Better-Business-With-Data-And-AI-Glance-600x424.png"
                                            id="image-"
                                            data-cmp-data-layer='{"image-":{"@type":"cio-sites/components/rad/radimage","analytics-engagement":"true","analytics-link-type":"engagement","analytics-link-name":"","analytics-module-name":"radimage-4"}}'
                                            data-cmp-hook-image="imageV3"
                                            className="cmp-image
     "
                                            itemScope=""
                                            itemType="http://schema.org/ImageObject"
                                        >
                                            <img
                                                src="/software4.png"
                                                loading="lazy"
                                                className="cmp-image__image"
                                                itemProp="contentUrl"
                                                width={600}
                                                height={424}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="rad-grid-card-carousel__card-size-maintainer">
                    <div
                        className="rad-content-grid-card rad-content-grid-card--case-study"
                        id="case-study-542757d34d"
                        data-cta-title="Expand"
                        data-card-title="Building better business with data and AI"
                        data-cta-link="/ae-en/case-studies/software-platforms/building-better-business-with-data-ai"
                        data-content-type="caseStudy"
                        data-analytics-asset-id="card-542757d34d"
                        data-cs-override-id="card-542757d34d"
                        data-analytics-skim-hover=""
                        data-analytics-asset-pos={1}
                    >


                        <div className="rad-content-grid-card__label">Blog</div>
                        <div className="rad-content-grid-card__title">
                            Cloud-Native Applications & Hybrid Cloud Architectures
                        </div>
                        <div className="rad-content-grid-card__sliding-content">
                            <div className="rad-content-grid-card__front-content">
                                <div className="rad-content-grid-card__half-image">
                                    <div className="image radimage">
                                        <div
                                            data-cmp-is="image"
                                            data-cmp-dmimage=""
                                            data-cmp-smartcroprendition="rad-card-half"
                                            data-cmp-src="/software6.png"
                                            data-asset-id="186638de-c6ff-4d2b-83ef-0f11a5773294"
                                            data-cmp-filereference="/content/dam/accenture/final/accenture-com/imagery-8/Accenture-Building-Better-Business-With-Data-And-AI-Glance-600x424.png"
                                            id="image-"
                                            data-cmp-data-layer='{"image-":{"@type":"cio-sites/components/rad/radimage","analytics-engagement":"true","analytics-link-type":"engagement","analytics-link-name":"","analytics-module-name":"radimage-4"}}'
                                            data-cmp-hook-image="imageV3"
                                            className="cmp-image
     "
                                            itemScope=""
                                            itemType="http://schema.org/ImageObject"
                                        >
                                            <img
                                                src="/software6.png"
                                                loading="lazy"
                                                className="cmp-image__image"
                                                itemProp="contentUrl"
                                                width={600}
                                                height={424}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-5' style={{ paddingLeft: "6%" }}>
                <div className=' ' >

                    <div className='row' >
                        <div className='col-lg-6' data-aos="fade-right" data-aos-delay="100">

                            <h2 className='text-start fs-2 mt-5 para fw-bold '>Software-Defined Networking (SDN) & SD-WAN for Agility  </h2> <br />
                            <p className='w-75 '>Spotcomm’s SDN and SD-WAN solutions provide the flexibility and agility software companies need to scale efficiently. By decoupling network management from hardware, we enable faster deployment, centralized control, and automation of network configurations. Our SD-WAN technology ensures secure, high-speed connections for remote teams and cloud-based applications, improving performance and reducing costs across global operations. With Spotcomm, software businesses can adapt quickly to changing demands, enhance operational efficiency, and maintain seamless connectivity across diverse environments.
                            </p>  <br /> <Link to="/softwareinner"  ><button  className="service-btn d-block  mx-1" >Read More</button>  </Link>
                        </div>
                        <div className='col-lg-5 d-flex justify-content-center mt-3' data-aos="fade-up" data-aos-delay="100">
                            <img src='/software2.png' className='para h-100' />
                        </div>
                    </div>
                </div>
            </div> <br />
            <Demo />
        </div>
    )
}

export default Softwareindustry