import React, { useEffect } from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
// import headerJquery from './header-jquery';
import { Helmet } from 'react-helmet';

window.jquery = window.$ = $


const Header = () => {

    useEffect(() => {
        const handleDocumentReady = () => {
            const b = (a, c) => {
                if (a === "open") {
                    $("header").addClass("dropdown-open active");
                    $("header .geographies .dropdown-subnav").fadeOut();
                    $("header .geographies > a").removeClass("active");
                    c.find(".dropdown-subnav").fadeIn(300).css({ display: "flex" });
                } else if (a === "close") {
                    $("header").removeClass("dropdown-open active");
                    c.find(".dropdown-subnav").hide();
                }
            };

            $(".header").each(function () {
                this.style.setProperty("--initHeaderHeight", $(this).outerHeight() + "px");
            });

            $("[data-hash]").on("click", function (e) {
                if ($(window).width() <= 1024) {
                    $("header .hamburger").click();
                }

                const hash = $(this).attr("data-hash");
                if (typeof hash === "string" && hash.length > 0 && document.getElementById(hash.substring(1))) {
                    e.preventDefault();
                    const offset = $(hash).offset().top;
                    if ($("header").hasClass("navOpen")) {
                        $("header").removeClass("navOpen");
                    }
                    setTimeout(() => {
                        $("html, body").css({ overflow: "unset" }).animate({ scrollTop: offset }, 1000);
                    }, 500);
                }
            });

            if ($(window).width() <= 1024) {
                $(".navigation").slideUp();
            }

            $("header .hamburger").on("click", () => {
                if ($("body").hasClass("navOpen")) {
                    $("html, body").removeClass("hideOverflow");
                    $("body").removeClass("navOpen");
                    $("header .navigation").slideUp();
                    $("header .dropdown-subnav").hide().slideUp();
                    $(".navigation > ul > li").removeClass("active");
                } else {
                    $("html, body").addClass("hideOverflow");
                    $("body").addClass("navOpen");
                    $("header .navigation").slideDown();
                    if ($("body").hasClass("searchOpen")) {
                        $("body").removeClass("searchOpen").find("header");
                        $("header .searchPopup").css({ top: $("header").outerHeight(true) }).fadeOut();
                    }
                    const height = $(window).outerHeight() - ($("header").outerHeight() + $(".header .container .extraHeaderOptions > div.geographies").outerHeight(true));
                    $("header .navigation").css({ top: $("header").outerHeight() });
                    setTimeout(() => {
                        $("header .navigation, .header .container .geographies .dropdown-subnav").css({ height });
                        $("header .container .geographies .dropdown-subnav").css({
                            bottom: $(".header .container .extraHeaderOptions > div.geographies").outerHeight(true) + 2 + "px"
                        });
                    }, 500);
                }
            });

            $("header .navigation > ul > li > a").on("click", function () {
                if ($(window).width() <= 1024) {
                    const dropdown = $(this).siblings(".dropdown-subnav");
                    if (dropdown.length) {
                        $(this).parents("li").toggleClass("active");
                        dropdown.slideToggle();
                        $(".navigation > ul > li .dropdown-subnav").not(dropdown).slideUp();
                    }
                }
            });

            $("header .navigation > ul > li").hover(function () {
                if ($(window).width() > 1024) {
                    b("open", $(this));
                }
            }, function () {
                if ($(window).width() > 1024) {
                    b("close", $(this));
                }
            });

            $("header .geographies > a").on("click", function () {
                const subnav = $(this).siblings(".dropdown-subnav");
                if (subnav.is(":not(:hidden)")) {
                    $(this).removeClass("active").parents("header").removeClass("dropdown-open");
                    if ($(window).width() > 1024) {
                        subnav.fadeOut();
                    } else {
                        subnav.slideUp();
                        $("header .navigation").fadeIn();
                    }
                } else {
                    $(this).addClass("active").parents("header").addClass("dropdown-open");
                    if ($(window).width() > 1024) {
                        subnav.fadeIn(300).css({ display: "flex" });
                    } else {
                        subnav.slideDown();
                        $("header .navigation").fadeOut();
                    }
                }
                if ($("body").hasClass("searchOpen") && $(window).width() > 1024) {
                    $("html, body").removeClass("hideOverflow");
                    $("body").removeClass("searchOpen");
                    $("header .searchPopup").css({ top: $("header").outerHeight(true) }).fadeOut();
                }
            });

            $("header .search").on("click", function () {
                const searchPopup = $("header .searchPopup");
                searchPopup.css({ height: $(window).outerHeight(true) - $("header").outerHeight(true) });
                if ($("body").hasClass("searchOpen")) {
                    $("html, body").removeClass("hideOverflow");
                    $("body").removeClass("searchOpen");
                    $("header").removeClass("dropdown-open");
                    searchPopup.css({ top: $("header").outerHeight(true) }).fadeOut();
                } else {
                    $("html, body").addClass("hideOverflow");
                    $("body").addClass("searchOpen");
                    $("header").addClass("dropdown-open");
                    searchPopup.css({ top: $("header").outerHeight(true) }).fadeIn();
                    if ($(window).width() <= 1024) {
                        $("body").removeClass("navOpen");
                        $("header .navigation").slideUp();
                        $("header .dropdown-subnav").hide().slideUp();
                    }
                }
            });

            let lastScrollTop = 0;
            $(window).on("scroll", function () {
                const scrollTop = $(this).scrollTop();
                if (!$("body").hasClass("navOpen") && $("header").attr("data-homepage") === "true") {
                    if (scrollTop < lastScrollTop || scrollTop <= 0) {
                        $("header").css({ top: 0 });
                    } else {
                        $("header").css({ top: -$("header").outerHeight(true) });
                    }
                }
                lastScrollTop = scrollTop;
                $("header").toggleClass("scrolling", scrollTop > 0);
            });

            $(document).on("click", function (e) {
                if (!e.target.classList.contains("geo") && $(window).width() > 1024) {
                    $(".dropdown-subnav").slideUp();
                    $(".geo").removeClass("active");
                    $('header[role="header"]').removeClass("dropdown-open");
                }
            });


        };

        $(document).ready(handleDocumentReady);
        return () => {
            $(document).off("ready", handleDocumentReady);
        };
    }, []);

    const handleLinkClick = () => {
        $("html, body").removeClass("hideOverflow");
        $("body").removeClass("navOpen");
        $("header .navigation").slideUp();
        $("header .dropdown-subnav").hide().slideUp();
    };

    return (
        <div className='mx-auto d-flex'>
            <header
                className="header opaque-header"


            >
                <div className="container" bis_skin_checked={1}>
                    <div className="logo" bis_skin_checked={1}><Link to="/" target="_self"><img src="/logo.png" alt="" /></Link><span /></div>
                    <nav className="navigation" role="navigation">
                        <ul>
                            <li className="column-3">
                                <Link
                                    style={{}}
                                    target="_self"
                                >
                                    Services
                                </Link>
                                <div
                                    className="dropdown-subnav"
                                    style={{
                                        display: 'none'
                                    }}
                                >
                                    <div className="col ">
                                        <Link
                                            to="/business"
                                            onClick={handleLinkClick}
                                        >
                                            Business Solution
                                        </Link> 
                                       
                                        
                                        <Link
                                            to="/cyber-security"
                                            style={{}}
                                            target="_self"
                                            onClick={handleLinkClick}
                                        >
                                            Cyber Security
                                        </Link>
                                        <Link
                                            to="/cloud"
                                            style={{}}
                                            target="_self"
                                            onClick={handleLinkClick}
                                        >
                                            Cloud Services
                                        </Link>
                                       
                                        <Link
                                            to="/manage-network"
                                            onClick={handleLinkClick}
                                        >
                                          Managed Network Services
                                        </Link>
                                    </div>
                                    <div className="col ">
                                        
                                        <Link
                                            to="/network-audit"
                                            style={{}}
                                            target="_self"
                                            onClick={handleLinkClick}
                                        >
                                            Network Audit
                                        </Link>
                                        <Link
                                            to="/consulting"
                                            style={{}}
                                            onClick={handleLinkClick}
                                            target="_self"
                                        >
                                            Network Consultation
                                        </Link>
                                        <Link
                                            to="/NetworkDesign"
                                            style={{}}
                                            target="_self"
                                            onClick={handleLinkClick}
                                        >
                                            Network Design & Implementation
                                        </Link>
                                        <Link
                                            to="/NetworkInfrastructureDeployment"
                                            style={{}}
                                            target="_self"
                                            onClick={handleLinkClick}
                                        >
                                            Infrastructure Deployment Services
                                        </Link>
                                    </div>
                                    <div className="col ">
                                        <Link
                                            to="/staffargument"
                                            style={{}}
                                            onClick={handleLinkClick}
                                            target="_self"
                                        >
                                            IT Staff Augmentation
                                        </Link>
                                        <Link
                                            to="/engineer"
                                            style={{}}
                                            target="_self"
                                            onClick={handleLinkClick}
                                        >
                                            Resident Engineer Outsourcing
                                        </Link>
                                    </div>

                                </div>
                            </li>
                            <li className="column-4">
                                <Link
                                    style={{}}

                                    target="_self"
                                >
                                    Industries
                                </Link>
                                <div
                                    className="dropdown-subnav"
                                    style={{
                                        display: 'none'
                                    }}
                                >
                                    <div className="col ">

                                        <Link
                                            to="/media"
                                            style={{}}
                                            target="_self"
                                            onClick={handleLinkClick}
                                        >
                                            Media Industry
                                        </Link>

                                        <Link
                                            to="/education/"
                                            style={{}}
                                            target="_self"
                                            onClick={handleLinkClick}
                                        >
                                            Education
                                        </Link>
                                        <Link
                                            to="/Pharmaceutical/"
                                            style={{}}
                                            onClick={handleLinkClick}
                                            target="_self"
                                        >
                                            Pharmaceutical Industry
                                        </Link>

                                        <Link
                                            to="/e-sports"
                                            style={{}}
                                            onClick={handleLinkClick}
                                            target="_self"
                                        >
                                            E-Sports Industry
                                        </Link>

                                    </div>
                                    <div className="col ">
                                        <Link
                                            to="/software"
                                            style={{}}
                                            target="_self"
                                            onClick={handleLinkClick}
                                        >
                                            Software  Industry
                                        </Link>
                                        <Link
                                            to="/digital"
                                            style={{}}
                                            target="_self"
                                            onClick={handleLinkClick}
                                        >
                                            Marketing Agencies
                                        </Link>
                                        {/* <Link
                                            to="/healthcare/"
                                            style={{}}
                                            target="_self"
                                        >
                                            Healthcare
                                        </Link> */}
                                        <Link
                                            to="/Professional-Services"
                                            style={{}}
                                            target="_self"
                                            onClick={handleLinkClick}
                                        >
                                            Professional Services
                                        </Link>
                                        <Link
                                            to="/factories-industrial/"
                                            style={{}}
                                            target="_self"
                                            onClick={handleLinkClick}
                                        >
                                            Factories & Industrial Zones
                                        </Link>

                                    </div>
                                    <div className="col ">
                                        <Link
                                            to="/hotelandresort"
                                            style={{}}
                                            target="_self"
                                            onClick={handleLinkClick}
                                        >
                                            Hotels & Resorts
                                        </Link>

                                        <Link
                                            to="/event"
                                            style={{}}
                                            onClick={handleLinkClick}
                                            target="_self"
                                        >
                                            Events Industry
                                        </Link>

                                    </div>

                                </div>
                            </li>
                            <li className="column-1">
                                <Link

                                    style={{}}
                                    target="_self"
                                >
                                    Insights
                                </Link>
                                <div
                                    className="dropdown-subnav"
                                    style={{
                                        display: 'none'
                                    }}
                                >
                                    <div className="col ">

                                        <Link
                                            to="/case-studies/"
                                            style={{}}
                                            target="_self"
                                            onClick={handleLinkClick}
                                        >
                                            Case Studies
                                        </Link>

                                        <Link
                                            to="/technologiestrend"
                                            style={{}}
                                            target="_self"
                                            onClick={handleLinkClick}
                                        >
                                            Technology Trends
                                        </Link>
                                        <Link
                                            to="/featureinsight"
                                            style={{}}
                                            target="_self"
                                            onClick={handleLinkClick}
                                        >
                                            Featured Insights
                                        </Link>

                                    </div>
                                </div>
                            </li>
                            <li className="column-1">
                                <Link
                                    style={{}}
                                    target="_self"
                                >
                                    About Spotcomm
                                </Link>
                                <div
                                    className="dropdown-subnav"
                                    style={{
                                        display: 'none'
                                    }}
                                >
                                    <div className="col ">
                                        <Link
                                            to="/about-us/"
                                            style={{}}
                                            target="_self"
                                            onClick={handleLinkClick}
                                        >
                                            About Us
                                        </Link>
                                        <Link
                                            to="/blog"
                                            style={{}}
                                            onClick={handleLinkClick}
                                            target="_self"
                                        >
                                            Blog
                                        </Link>


                                        <Link
                                            to="/awardandrecognition"
                                            style={{}}
                                            target="_self"
                                            onClick={handleLinkClick}
                                        >
                                            Awards and Recognitions
                                        </Link>



                                        <Link
                                            to="/leadership"
                                            style={{}}
                                            target="_self"
                                            onClick={handleLinkClick}
                                        >
                                            Leadership
                                        </Link>
                                        


                                    </div>
                                </div>
                            </li>
                            <li className="column-0">
                                <Link
                                    to="/career"
                                    style={{}}
                                    target="_self" 
                                    onClick={handleLinkClick}
                                >
                                    Careers
                                </Link>
                            </li>
                            <li className="column-0">
                                <Link
                                    data-hash="#contactUs" id="section05"
                                    to="/contact"
                                    style={{}}
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="extraHeaderOptions" bis_skin_checked={1}>
                        <div className="geographies" bis_skin_checked={1}><a className="geo"><img src="/content/dam/nexus/en/country-flag/flag_none.svg" alt="" /></a><a className="mobileGeo"><img src="/content/dam/nexus/en/country-flag/flag_none.png" alt="" />Locations</a><div className="dropdown-subnav" bis_skin_checked={1}><div className="col hasCategory" bis_skin_checked={1}><div className="countryContainer" bis_skin_checked={1}><a className="catTitle">America</a></div><div className="accordian" bis_skin_checked={1}><div className="countryContainer" bis_skin_checked={1}><a to="/en-BR/" target="_blank" rel="noopener noreferrer">Brazil</a><div className="geoLinkContainer" bis_skin_checked={1}><a to="/en-BR/" target="_blank" className="geoLinks" rel="noopener noreferrer">En</a><a to="/pt-BR/" target="_blank" className="geoLinks" rel="noopener noreferrer">Po</a>
                        </div></div><div className="countryContainer" bis_skin_checked={1}><a to="/en-CA/" target="_blank" rel="noopener noreferrer">Canada</a></div><div className="countryContainer" bis_skin_checked={1}>
                                <a to="/en-latam/" target="_blank" rel="noopener noreferrer">Latam</a></div><div className="countryContainer" bis_skin_checked={1}><a to="/en-MX/" target="_blank" rel="noopener noreferrer">Mexico</a><div className="geoLinkContainer" bis_skin_checked={1}><a to="/en-MX/" target="_blank" className="geoLinks" rel="noopener noreferrer">En</a><a to="/es-MX/" target="_blank" className="geoLinks" rel="noopener noreferrer">Sp</a></div></div><div className="countryContainer" bis_skin_checked={1}><a to="/en-US/" target="_blank" rel="noopener noreferrer">United States</a></div></div></div><div className="col hasCategory" bis_skin_checked={1}><div className="countryContainer" bis_skin_checked={1}><a to="/en-EU/" target="_blank" className="catTitle" rel="noopener noreferrer">Europe</a><div className="geoLinkContainer" bis_skin_checked={1}><a to="/en-EU/" target="_blank" className="geoLinks" rel="noopener noreferrer">En</a><a to="/de-EU/" target="_blank" className="geoLinks" rel="noopener noreferrer">De</a></div></div><div className="accordian" bis_skin_checked={1}><div className="countryContainer" bis_skin_checked={1}><a to="/en-benelux/" target="_blank" rel="noopener noreferrer">Benelux</a></div><div className="countryContainer" bis_skin_checked={1}><a to="/en-DE/" target="_blank" rel="noopener noreferrer">Germany &amp; Austria</a><div className="geoLinkContainer" bis_skin_checked={1}><a to="/en-DE/" target="_blank" className="geoLinks" rel="noopener noreferrer">En</a><a to="/de-DE/" target="_blank" className="geoLinks" rel="noopener noreferrer">De</a></div></div><div className="countryContainer" bis_skin_checked={1}><a to="/en-nordic/" target="_blank" rel="noopener noreferrer">Nordic</a></div><div className="countryContainer" bis_skin_checked={1}><a to="/en-Southern-EU/" target="_blank" rel="noopener noreferrer">Southern Europe</a><div className="geoLinkContainer" bis_skin_checked={1}><a to="/en-Southern-EU/" target="_blank" className="geoLinks" rel="noopener noreferrer">En</a><a to="/fr-Southern-EU/" target="_blank" className="geoLinks" rel="noopener noreferrer">Fr</a></div></div><div className="countryContainer" bis_skin_checked={1}>
                                    <a to="/en-UKI/" target="_blank" rel="noopener noreferrer">United Kingdom &amp; Ireland</a></div></div></div><div className="col hasCategory" bis_skin_checked={1}><div className="countryContainer" bis_skin_checked={1}><a className="catTitle">Asia Pacific</a></div><div className="accordian" bis_skin_checked={1}><div className="countryContainer" bis_skin_checked={1}><a to="/en-asean/" target="_blank" rel="noopener noreferrer">Asean</a></div><div className="countryContainer" bis_skin_checked={1}><a to="/en-ANZ/" target="_blank" rel="noopener noreferrer">Australia &amp; New Zealand</a></div><div className="countryContainer" bis_skin_checked={1}><a to="/en-CN/" target="_blank" rel="noopener noreferrer">China</a></div><div className="countryContainer" bis_skin_checked={1}><a to="/en-JP/" target="_blank" rel="noopener noreferrer">Japan</a><div className="geoLinkContainer" bis_skin_checked={1}><a to="/en-JP/" target="_blank" className="geoLinks" rel="noopener noreferrer">En</a><a to="/ja-JP/" target="_blank" className="geoLinks" rel="noopener noreferrer">Jp</a></div></div><div className="countryContainer" bis_skin_checked={1}><a to="/en-KR/" target="_blank" rel="noopener noreferrer">Korea</a></div><div className="countryContainer" bis_skin_checked={1}><a to="/en-TW/" target="_blank" rel="noopener noreferrer">Taiwan</a></div></div></div><div className="col hasCategory" bis_skin_checked={1}><div className="countryContainer" bis_skin_checked={1}><a className="catTitle">India &amp; Middle East</a></div><div className="accordian" bis_skin_checked={1}><div className="countryContainer" bis_skin_checked={1}><a to="/en-IN/" target="_blank" rel="noopener noreferrer">India</a></div><div className="countryContainer" bis_skin_checked={1}><a to="/en-ME/" target="_blank" rel="noopener noreferrer">Middle East</a></div><div className="col hasCategory" bis_skin_checked={1}><div className="countryContainer" bis_skin_checked={1}><a className="catTitle" to="/en-africa/" target="_blank" rel="noopener noreferrer">Africa</a></div><div className="countryContainer" bis_skin_checked={1}><a to="/en/" target="_blank" className="global-site catTitle" rel="noopener noreferrer">Global Site</a></div></div></div></div></div></div>
                        <div className="extraHeaderOptions" bis_skin_checked={1}>
                            <div className="hamburger" bis_skin_checked={1}><span /></div>
                        </div>

                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header