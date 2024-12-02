import React from 'react'
import Header from '../components/Header'
import Demo from '../components/Navbar'


const Case2 = () => {
    return (
        <div>
            <Header /> <br />
            <section id="heros" className="heros1 h-75 section dark-background" data-aos="fade-right" data-aos-delay="100">
                <img src="/case2.png" alt="" className='h-75' />

                <div class="container text-center">
                    <div class="row justify-content-center">

                        <h2 className=' text-start'>Bar B Q Tonight

                            <br />
                            Case Study
                        </h2>

                    </div>
                </div>
            </section>
            <div className='container'>
                <p className='fs-4'>
                    Bar B.Q.Tonight, a premium Pakistani, Afghani restaurant in Pakistan and around the globe offering exquisite quality, taste and experience.
                    Bar B.Q. Tonight has been maintaining its legacy for more than 30 years. In 1988 Karachi, Pakistan, they started with serving authentic Pakistani dishes along with their signature Bar.B.Q dishes. It was established in recognition of the opportunity for a professional restaurant establishment that consistently offered high-quality products, 1st in class service and uncompromising hygiene.
                    Today, the brand’s global footprint comprises of 18 locations worldwide, but the core priorities remain intact to this day. There current reach spans from Southeast Asia through to the Middle East. The brand has opened outlets in Pakistan, UAE, Saudi-Arabia, Oman, Singapore and Malaysia and Dhaka.

                </p>
            </div> <br /> <br />
            {/* <img src="/case1.png" alt="" className='w-100' /> <br /> */}
            <div className='container'>
                <h3>Project Delivery: <span className='' style={{ color: "#7F3E98" }}>January 2018</span></h3> <br />
                <p className='fs-4'>Since 2018, we have been a trusted partner of Bar-B-Q Tonight, delivering customized solutions to support their growing business needs. Our collaboration focuses on streamlining operations, enhancing customer experiences, and driving efficiency in alignment with their commitment to exceptional service and quality.
                    <br />  <br />
                    From technology-driven innovations to tailored project execution, we have consistently delivered solutions that meet their unique challenges. Our team works closely with Bar-B-Q Tonight to ensure that every project aligns with their vision and operational goals, contributing to their continued success as a renowned brand in the hospitality industry.
                    <br />  <br />
                    Our dedication to precision, innovation, and excellence has solidified our partnership with Bar-B-Q Tonight, and we remain committed to driving impactful outcomes as their trusted project delivery partner.</p>

                <br /><br />
                <h3>Project Budget: <span className='' style={{ color: "#7F3E98" }}>$5000 - $30000</span></h3> <br />
                <p className='fs-4'>Since 2018, we have been a trusted partner of Bar-B-Q Tonight, delivering customized solutions to support their growing business needs. Our collaboration focuses on streamlining operations, enhancing customer experiences, and driving efficiency in alignment with their commitment to exceptional service and quality.
                    <br /><br />
                    From technology-driven innovations to tailored project execution, we have consistently delivered solutions that meet their unique challenges. Our team works closely with Bar-B-Q Tonight to ensure that every project aligns with their vision and operational goals, contributing to their continued success as a renowned brand in the hospitality industry.
                    <br /><br />
                    Our dedication to precision, innovation, and excellence has solidified our partnership with Bar-B-Q Tonight, and we remain committed to driving impactful outcomes as their trusted project delivery partner.</p>
            </div>
            <div className='' style={{ background: "#E8E8E8" }}>


                <div className='container'>

                    <h3>Problems at start: </h3> <br />
                    <p className='fs-4'>Bar B.Q. Tonight’s Operation Manager in Lahore had approached us with an urgent requirement of Internet connectivity, WiFi system and he wanted to capitalize on this WiFi by making it a marketing tool. Bar B.Q.Tonight wanted to market their brand on the WiFi and were looking for anyone to provide such solution. Alongwith this, they also wanted to gather users information by consent for future marketing purposes.


                        <br />  <br />

                        They also wanted their point of sale machines to be connected to the WiFi also they wanted their internal systems to be connected to the internet alongside structured cabling in the branch.

                        <br />
                        <br />

                        They also put up a challenge to us that if we somehow manage to impress them by providing these services, they’ll connect their head office with the branch thus having us onboard their head office as well.
                    </p><br /><br />
                    <h3 style={{ color: "#7F3E98" }}>Solutions and Technology Provided
                    </h3> <br />
                    <p className='fs-4 container'>For guest WiFi, we designed a splash page of their brand advertisement and deployed it on our access point in the Branch in Lahore.



                        <br /><br />
                        The cameras in that branch were not switched on to our network as they wanted every moment to captured live rather than having them offline for security monitoring.
                        <br />
                        <br />
                        A captive portal was also provided to them which captured the information of connected users by their discretion.
                        A cloud based controller was provided to manage all of the access points in that branch.

                        <br />
                        <br />

                        POS machines were synced on our network so they can be connected to the internet all the time.
                        All of the usage systems and tablets were connected on our network as there previous network was not upto the mark to sustain all the load.
                    </p>
                    <h3 >Result of our Success
                    </h3> <br />
                    <p className='fs-4 '>This success in the Lahore branch led us to having the contract of their Head Office and Head Branch in Karachi. We replaced all of their old and outdated access points with our enterprise access points. We also provided them with the similar technology of Guest WiFi as we had delivered in Lahore as they were so impressed with it. They saw endless opportunities of the data they captured by connected user discretion and they wanted to further elevate their brand through WiFi marketing.
<br /><br />
We also connected the Head office with remote branches in Lahore. A then newly opened branch in Emporium Mall Lahore was also onboarded on our network but with a different technique. Instead of providing bandwidth through fiber optic cable, we had deployed a wireless infrastructure dedicated for Bar B.Q.Tonight emporium Mall branch. POS machines, internal servers and cameras were onboarded while the campaign of Guest WiFi was managed by our in-house marketing team who made user the data was kept secured and the campaign was managed flawlessly delivering up to the customers demands.

                    </p>
                </div>
            </div>
            <Demo />
        </div>
    )
}

export default Case2