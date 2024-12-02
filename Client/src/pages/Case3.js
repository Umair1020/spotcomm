import React from 'react'
import Header from '../components/Header'
import Demo from '../components/Navbar'


const Case3 = () => {
    return (
        <div>
            <Header /> <br />
            <section id="heros" className="heros1 h-75 section dark-background" data-aos="fade-right" data-aos-delay="100">
                <img src="/case3.png" alt="" className='h-75' />

                <div class="container text-center">
                    <div class="row justify-content-center">

                        <h2 className=' text-start'>British Council



                            <br />
                            Case Study
                        </h2>

                    </div>
                </div>
            </section>
            <div className='container'>
                <p className='fs-4'>
                    Founded in 1934 in London, England, British Council supports peace and prosperity by building connections, understanding and trust between people in the UK and countries worldwide. British Council uniquely combine the UK’s deep expertise in arts and culture, education and the English language, their global presence and relationships in over 100 countries, their unparalleled access to young people and influencers and the creative sparkle.
                    <br /><br />
                    British Council works directly with individuals to help them gain the skills, confidence and connections to transform their lives and shape a better world in partnership with the UK. They support them to build networks and explore creative ideas, to learn English, to get a high-quality education and to gain internationally recognized qualifications.

                </p>
            </div> <br /> <br />
            {/* <img src="/case1.png" alt="" className='w-100' /> <br /> */}
            <div className='container'>
                <h3>Project Delivery: <span className='' style={{ color: "#7F3E98" }}>March 2023</span></h3> <br />
                <p className='fs-4'>Since March 2023, we have been proudly delivering tailored solutions to support the British Council's mission of fostering education, cultural exchange, and global collaboration. Our partnership focuses on ensuring seamless project execution that aligns with their strategic objectives and commitment to excellence. <br /><br />
                    Through innovative approaches and meticulous attention to detail, we have successfully delivered projects that enhance operational efficiency and drive impactful outcomes. Whether addressing organizational needs or supporting their broader initiatives, our solutions are designed to meet their unique requirements and uphold their high standards.
                    We value our collaboration with the British Council and remain committed to delivering exceptional results that contribute to their ongoing success and positive global impact.</p>

                <br /><br />
                <h3>Project Budget: <span className='' style={{ color: "#7F3E98" }}>$5000 - $30000</span></h3> <br />
                <p className='fs-4'>Our collaboration with the British Council involves executing projects within a well-defined budget range of $5,000 to $30,000. This flexible range enables us to craft tailored solutions that align with their organizational goals while maintaining cost-effectiveness and exceptional quality. <br /> <br />
                    Through strategic planning and efficient resource utilization, we have successfully delivered projects that enhance operations, support educational initiatives, and drive impactful outcomes. Our transparent and results-driven approach ensures every dollar invested contributes to meaningful and measurable progress.
                    We take pride in being a trusted partner of the British Council, consistently delivering projects that align with their vision and uphold their commitment to fostering education, culture, and international collaboration.</p>
            </div>
            <div className='' style={{ background: "#E8E8E8" }}>


                <div className='container'>

                    <h3>Solution Required by British Council Management </h3> <br />
                    <p className='fs-4'>British Council were looking for a provider who can cater them in multiple domains. They wanted an optimized internet bandwidth alongside proper solution of catering the attendees through High Speed and glitch free WiFi Solution. They also wanted bandwidth optimization alongside bandwidth policy making for their streaming service, for their event based systems and a solution for their stream and system monitoring during the 3-4 days of the event that’s held every year. They wanted us to make sure that every peripheral is glitch free because yearly British Council events are attended by Industry’s top personalities, media figures and foreign officials who are a key member of this prestigious organization.
                    </p><br /><br />
                    <h3 style={{ color: "#7F3E98" }}>Solutions Provided and Technology Used
                    </h3> <br />
                    <p className='fs-4 container'>Due to our wide spread country wise infrastructure, we were successfully able to provide Bandwidth for British Council events with redundant backups something which our competitors were unable to provide.
<br /><br />
                        Our Redundant fiber network was so smooth that the transition switch from one fiber to another in case of a fiber cut is within a second thus resolving the issue of Network downtime or any drop frame during streaming of a live event which the management were worried about earlier.
                        <br /><br />
                        To improve the network quality, we used Traffic engineering technique as we optimized all the routes through which the streaming was being streamed live on different platforms. Those optimize routes were extremely dedicated for the exact servers or destination where the stream was being directed to, hence no distraction in the routing department.
                        <br /><br />
                        Our Network team had designed a network plan keeping in mind the dense environment of the location, for which our first priority was to channelize the frequencies so they may not clash with other frequencies that were being omitted from external devices. This enables easy and smooth WiFi connectivity for users at the event location and British Council’s vendor partners.
                        <br /><br />
                        Through wireless engineering, our network team had optimized our WiFi channels after which the connected concerned partnering departments and made sure they did not face any ping or latency issues. They got optimal speed and Pings that matched the international standard required during live streaming.
                        <br /><br />
                        To further smoothen the entire monitoring of this network setup, we deployed an on-spot network monitoring and support team, whose sole responsibility was to keep check and balance of the network and closely monitor the pings & latencies during the live event.
                        <br /><br />
                        We managed Quality of service of their onsite event systems and make sure they perform at optimum level to deliver a glitch free event for the client.
                    </p>

                </div>
            </div>
            <Demo />
        </div>
    )
}

export default Case3