import React, { useRef, useCallback } from 'react';
import "../App.css"
import { Link } from 'react-router-dom';
import Footer from './Footer';


const Demo = () => {

  return (

    <>
      <section
        id="topfooter"
        className="start-project bg-white relative w-full a z-50 flex items-center justify-center -top-[1px] "
        style={{ zIndex: 2 }} /* Add this */
      >
        <div className="pt-14 mx-auto text-center max-w-7xl px-6 md:py-24 pb-14 lg:px-8">
          <p className="text-black mb-2 capitalize-first-letter text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
            Pull the trigger!
          </p>
          <div className="overflow-hidden">
            <h2
              className="text-black font-extrabold leading-none text-[43px] lg:text-6xl xl:text-7xl 2xl:text-8xl lg:tracking-[-4px] tracking-[-2px]"
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, 0px)"
              }}
            >
              Let’s bring your Technological <br className="min-[580px]:block hidden" />  Vision to
              Life.
            </h2>
          </div>
          <div className="mt-5 flex items-center justify-center gap-x-4">
            <button className="header-module--buttonChange--18e23 bg-black text-white mt-2 items-center px-6 md:px-11 h-[40px] md:h-12 border-transparent rounded-full font-extrabold text-sm">
              <span className="pb-[3px] md:pb-1.5">Get Started</span>
              <span className="pb-[3px] md:pb-1.5">Get Started</span>
            </button>
          </div>
        </div>
      </section>

      <footer class="footer  bg-dark align-items-end">

        <div className="mx-auto max-w-7xl px-6 pt-10 lg:px-8  pb-4 md:pt-10 md:pb-10">
          <img
            src="/whitelogo.png"
            width={200}
            className=" block "
            alt="Spotcomm logo"
          /> <br /> <br />
          <div className="flex flex-wrap md:gap-y-0 gap-y-5">
            <div className="w-[50%] md:w-[21%]">
              <div>
                <p className=" font-medium leading-6 text-neutral-500 flex items-center text-xs lg:text-sm">
                  <img
                    src="/download.png"
                    className="pe-2"
                    alt="bulletpoint"
                  />
                  Company
                </p>
                <ul className="mt-2 md:mt-4 space-y-1 mb-6">
                  <li>
                    <Link className="hover:text-theme menu_links" to="/about-us/">
                      <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white menu_links leading-7 md:leading-12">
                        <span>About Us</span>
                      </p>
                    </Link>
                  </li>
                 
                  <li>
                    <Link className="hover:text-theme menu_links" to="/about/process/">
                      <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white menu_links leading-7 md:leading-12">
                        <span>Our Culture</span>
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-theme menu_links" to="/leadership/">
                      <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white menu_links leading-7 md:leading-12">
                        <span>Our Leadership</span>
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-theme menu_links" to="/contact/">
                      <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white menu_links leading-7 md:leading-12">
                        <span>Contact</span>
                      </p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-[50%] md:w-[22%] flex justify-center md:block">
              <div>
                <p className=" font-medium leading-6 text-neutral-500 flex items-center text-xs lg:text-sm">
                  <img
                    src="/download.png"
                    className="pe-2"
                    alt="bulletpoint"
                  />
                  Resources
                </p>
                <ul className="mt-2 md:mt-4 space-y-1 mb-6">
                  <li>
                    <Link className="hover:text-theme menu_links" to="/blog/">
                      <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white menu_links leading-7 md:leading-12">
                        <span>Blog</span>
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-theme menu_links" to="/event/">
                      <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white menu_links leading-7 md:leading-12">
                        <span>Events</span>
                      </p>
                    </Link>
                  </li>
                 
                  <li>
                    <Link className="hover:text-theme menu_links" to="/case-studies/">
                      <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white menu_links leading-7 md:leading-12">
                        <span>Case Studies</span>
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-theme menu_links" to="/work/">
                      <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white menu_links leading-7 md:leading-12">
                        <span>Podcast</span>
                      </p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-[50%] md:w-[32%]">
              <div>
                <p className=" font-medium leading-6 text-neutral-500 flex items-center text-xs lg:text-sm">
                  <img
                    src="/download.png"
                    className="pe-2"
                    alt="bulletpoint"
                  />
                  Services
                </p>
                <ul className="mt-2 md:mt-4 space-y-1 mb-6">
                  <li>
                    <Link
                      className="hover:text-theme menu_links"
                      to="/business"
                    >
                      <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white menu_links leading-7 md:leading-12">
                        <span>Business Solutions</span>
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-theme menu_links"
                      to="/cyber-security/"
                    >
                      <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white menu_links leading-7 md:leading-12">
                        <span>  Cyber Security Services</span>
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-theme menu_links"
                      to="/cloud/"
                    >
                      <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white menu_links leading-7 md:leading-12">
                        <span>Cloud Services</span>
                      </p>
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      className="hover:text-theme menu_links"
                      to="/artificial-intelligence/"
                    >
                      <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white menu_links leading-7 md:leading-12">
                        <span>   Surveillance Services</span>
                      </p>
                    </Link>
                  </li> */}

                  <li>
                    <Link
                      className="hover:text-theme menu_links"
                      to="/Procurement"
                    >
                      <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white menu_links leading-7 md:leading-12">
                        <span>  Procurment Services</span>
                      </p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-[50%] md:w-[21%] flex justify-center md:block">
              <div>
                <p className=" font-medium leading-6 text-neutral-500 flex items-center text-xs lg:text-sm">
                  <img
                    src="/download.png"
                    className="pe-2"
                    alt="bulletpoint"
                  />
                  Insights
                </p>
                <ul className="mt-2 md:mt-4 space-y-1 mb-6">
                  <li>
                    <Link className="hover:text-theme menu_links" to="/featureinsight">
                      <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white menu_links leading-7 md:leading-12">
                        <span>Industry Trends</span>
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-theme menu_links" to="#">
                      <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white menu_links leading-7 md:leading-12">
                        <span>Community Work</span>
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-theme menu_links" to="/career">
                      <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white menu_links leading-7 md:leading-12">
                        <span>Careers</span>
                      </p>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/culturebook"
                      download
                      className="hover:text-theme menu_links"
                    >
                      <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white menu_links leading-7 md:leading-12">
                        <span> Culture Book</span>
                      </p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-b border-white/10 my-12 md:my-12 md:py-12 py-10">

            <p className=" font-medium leading-6 text-neutral-500 flex items-center mb-3 md:mb-4 text-xs lg:text-sm">
              <img src="/download.png" className="pe-3" alt="bulletpoint" />
              Locations
            </p>
            <div className="footergrid md:grid-cols-4 sm:grid-cols-2 gap-x-16 gap-y-10 justify-start">
              <div className="flex items-start inner " >
                <img src="/statue-of-liberty.png" alt="Statue of Liberty" className=" h-20 mr-4" />
                <div className='w-100'>
                  <p className="text-white mb-1 font-medium text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                    United States
                  </p>
                  <p className="text-neutral-500 mb-3 font-medium leading-5 md:leading-6 text-xs xl:text-sm 2xl:text-base">
                    24 Greenway Plaza, <br /> Suite-1800, Houston
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start ">
                <img src="/burj-arab.png" alt="Statue of Liberty" className=" h-20 mr-4 " />
                <div>
                  <p className="text-white mb-1 font-medium text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                    United Arab Emirates
                  </p>
                  <p className="text-neutral-500 mb-3 font-medium leading-5 md:leading-6 text-xs xl:text-sm 2xl:text-base">
                    Reef Tower, Cluster O, JLT Dubai, <br /> United Arab Emirates
                  </p>
                </div>
              </div>


              <div className="flex items-start inner">
                <img src="/mazar-e-quaid.png" alt="Mazar-e-Quaid" className=" w-25 mr-4" />
                <div>
                  <p className="text-white mb-1 font-medium text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                    Pakistan
                  </p>
                  <p className="text-neutral-500 mb-3 font-medium leading-5 md:leading-6 text-xs xl:text-sm 2xl:text-base">
                    SF-10, 2ND FLOOR,
                    APWA Complex Kiyani Shaheed Road, Karachi, Sindh,
                    Pakistan
                  </p>
                </div>

              </div>
            </div>
          </div>

          <Footer />
        </div>
      </footer>



    </>

  );
};

export default Demo;
