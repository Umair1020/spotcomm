import React from 'react'
import Header from '../components/Header'

import Demo from '../components/Navbar'

const Culturebook = () => {
    return (
        <div className='' style={{ background: "#FFFFFF" }}>
            <Header />
            <section id="heros" class="heros1 section dark-background ">

                <img src="/culture1.png" alt="" />

                <div class="container text-center"  >
                    <div class="row justify-content-start">
                        <div class="col-lg-8">
                            <h2 className='  text-start profh2' >OUR <br /> <span style={{ color: "#fff" }}>CULTURE</span> </h2>
                           
                        </div>
                    </div>
                </div>

            </section>
            <img src='/culture.png' className=' culture  mx-auto d-flex'  />
            <Demo />
            {/* <section id="heros" class="heros1 section dark-background">

                <img src="/culture.jpg" alt="" />

                <div class="container text-center"  >
                    <div class="row justify-content-start">
                        <div class="col-lg-8">
                            <h2 className='  text-start profh2' >OUR <br /> <span style={{ color: "#7F3E98" }}>CULTURE</span> </h2>
                        </div>
                    </div>
                </div>

            </section>

            <div className='container'>
                <div className='row d-flex align-items-center bg-light'>
                    <div className='col'>
                        <img src='/culture1.png' className='w-100' />
                    </div>
                    <div className='col mt-5  '>
                        <h2>Why a culture book?</h2> <br />
                        <p> BECAUSE...</p><br />
                        <ul>
                            <li><i class="bi bi-check-circle"></i> <span>We want our readers to understand who we are and what makes     us unique.

                            </span></li><br />
                            <li><i class="bi bi-check-circle"></i> <span>One of our core values is transparency and explicitly showcasing our  culture is a must!</span></li><br />
                            <li><i class="bi bi-check-circle"></i> <span>
                                As a fast-growing company, we believe a strong culture will drive  our teams in delivering the best of themselves and reach new  milestones.</span></li><br />
                            <li><i class="bi bi-check-circle"></i> <span>
                                Our culture is precious and deserves to be highlighted in a dedicated  culture book!</span></li>
                        </ul>
                    </div>
                </div>
                <div className='row d-flex align-items-center'>
                    <div className='col mt-5 '>
                        <h2>Table of contents</h2> <br />

                        <ul>
                            <li className='mt-2'> <span>Why a culture book?...............................................................................3


                            </span></li>
                            <li className='mt-2'> <span>A word from our Founder and Acting CEO .......................................4</span></li>
                            <li className='mt-2'><span>
                                About N-SIDE ...................................5  </span></li>
                            <li className='mt-2'><span>
                            Experiencing N-SIDE culture ....................................................16 Beyond </span></li>
                            <li className='mt-2'><span>

                                work .........................................................................24 </span></li>
                        </ul>
                    </div>
                    <div className='col'>
                        <img src='/culture2.png' className='w-100' />
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Culturebook