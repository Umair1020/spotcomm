import React from 'react'
import "./testmonial.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Testmonial = () => {
    return (
        <>
            <div className="outerdiv ">
                <div className="px-6 lg:px-8 max-w-7xl mx-auto" id="design-innovation">
                    <div className="max-w-3xl lg:mb-24 mb-8">
                        <div className="lg:overflow-hidden" data-aos="fade-right" data-aos-delay="100">
                            <h2 className="font-bold text-white our-awards">
                                <span className='text-dark'>Our Testimonials</span>

                            </h2>
                        </div> <br />
                        <p className="text-secondary mb-12 lg:mb-24 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
                            Recognized globally for our industry-leading development expertise and innovative solutions. Creating innovative, user-friendly, and life-changing products is what we do!
                        </p>
                    </div>
                </div>
                <div className="innerdiv">

                <div class="div1 eachdiv aos-init aos-animate" data-aos="fade-right" data-aos-delay="100"><div class="userdetails"><div class="imgbox"><img src="/zeeshan.jpeg" alt="" /></div><div class="detbox"><p class="name">ARY DIGITAL NETWORK</p><p class="designation">Zeeshan Khan</p></div></div> <br /><div class="review"><p>“ Thanks to Spotcomm Global's, our media streaming services run smoothly and without glitches. The team is always available and easily accessible via phone calls and WhatsApp messages. Moreover, they're energetic and always ready to work, showing an excellent working culture.”</p></div></div>
                    {/* div2 */}
                    <div className="div2 eachdiv" data-aos="fade-right" data-aos-delay="100">
                        <div className="userdetails" >
                            <div className="imgbox">
                                <img
                                    src="/gora.jpeg"
                                    alt=""
                                />
                            </div>
                            <div className="detbox">
                                <p className="name">CYAN Wireless (USA)</p>
                                <p className="designation">William Glenn</p>
                            </div>
                        </div><br />
                        <div className="review">

                            <p>
                                “I have worked with this team for a while now on multiple different projects
                                related to my network
                                and infrastructure, each time they consistently go above and beyond my expectations and are
                                immediate when needed for urgent issues. Highly Recommended! ”
                            </p>
                        </div>
                    </div>
                    {/* div3 */}
                    <div className="div3 eachdiv" data-aos="fade-right" data-aos-delay="100">
                        <div className="userdetails" >
                            <div className="imgbox">
                                <img
                                    src="/tahaamin.jpeg"
                                    alt=""
                                />
                            </div>
                            <div className="detbox">
                                <p className="name dark">Next Generation Esports</p>
                                <p className="designation dark">Taha Amin</p>
                            </div>
                        </div> <br />
                        <div className="review dark">

                            <p>
                                “ Spotcomm Global’s top-notch managed network services played a pivotal role in
                                ensuring a seamless operation for us, resulting in zero downtime and lag during broadcasting events.
                                The team exhibited excellent project management delivering work on time and having efficient
                                communication. ”
                            </p>
                        </div>
                    </div>
                    {/* div4 */}
                    <div className="div4 eachdiv" data-aos="fade-right" data-aos-delay="100">
                        <div className="userdetails" >
                            <div className="imgbox">
                                <img
                                    src="/tahahasmi.jpeg"
                                    alt=""
                                />
                            </div>
                            <div className="detbox">
                                <p className="name dark">Inventocube LLC</p>
                                <p className="designation dark">Taha Hashmi</p>
                            </div>
                        </div><br />
                        <div className="review dark">

                            <p>
                                “ Thanks to Spotcomm Global, the client got a more proper Wi-Fi setup for their
                                growing business needs, allowing them to achieve amazing results. Moreover, the team provided
                                excellent advice and delivered items on time, showing impressive commitment, work ethic, and
                                knowledge. ”
                            </p>
                        </div>
                    </div>
                    {/* div5 */}
                    <div className="div5 eachdiv"  data-aos="fade-right" data-aos-delay="100"> 
                        <div className="userdetails">
                            <div className="imgbox">
                                <img
                                    src="/ajj.jpeg"
                                    alt=""
                                />
                            </div>
                            <div className="detbox">
                                <p className="name">
                                Mohsin Shehzad </p>
                                <p className="designation"> AJJ News
                                </p>
                            </div>
                        </div><br />
                        <div className="review">
                            
                            <p>
                                
                                “I have worked with them and have found them to be outstanding. Because of their
                                expertise in
                                this industry and their willingness to go above and beyond to meet deadlines.”
                            
                            </p>
                        </div>
                    </div>
                    <div className="div6 eachdiv"  data-aos="fade-right" data-aos-delay="100"> 
                        <div className="userdetails">
                            <div className="imgbox">
                                <img
                                    src="/asad.jpeg"
                                    alt=""
                                />
                            </div>
                            <div className="detbox">
                                <p className="name text-dark">
                                
                                Sheikh Asad Ali  </p>
                                <p className="designation text-dark">  Cooperative Computing (CIC)
                            
                                </p>
                            </div>
                        </div><br />
                        <div className="review">
                            
                            <p className='text-dark'>
                                
                              
                            “From project understanding to project execution, timely deliverables and delivering
                                as per commitment. All went 100/100. Highly recommended to any company with similar
                                project need.”
                            
                            
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Testmonial