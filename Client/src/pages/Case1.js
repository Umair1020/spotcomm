import React from 'react'
import Header from '../components/Header'
import Demo from '../components/Navbar'

const Case1 = () => {
    return (
        <div>
            <Header /> <br />
            <section id="heros" className="heros1 h-75" data-aos="fade-right" data-aos-delay="100">
                <img src="/ary.png" alt="" className='h-75' />

                <div class="container text-center">
                    <div class="row justify-content-center">

                        <h2 className=' text-start'>ARY Digital Network <br />
                            Case Study
                        </h2>

                    </div>
                </div>
            </section> 
            <div  >
            <div className='container' >
                <p className='fs-4 text-dark' >
                    ARY digital network is a subsidiary of ARY group of companies which is based in Dubai and is telecasted worldwide.  Currently, the network consists of channels including ARY Digital (Asia-Middle East-UK/Europe-USA) (Entertainment), ARY News, ARY Musik (Music), ARY QTV(Religion), ARY Zauq (Food Channel), HBO, Nick, and many new ventures in the pipeline. Most of the networks in-house channels have their own specialized programming catering to Urdu speakers living in Pakistan and abroad.

                </p>
              
               
            </div> 
            </div> <br /> <br />
            {/* <img src="/case1.png" alt="" className='w-100' /> <br /> */}
            <div className='container'>
                <h3>Project Delivery: <span className='' style={{ color: "#7F3E98" }}>June 2016</span></h3> <br />
                <p className='fs-4'>Since 2016, we have proudly partnered with ARY News, delivering tailored solutions to meet their dynamic project needs. Our collaboration has been instrumental in ensuring the successful execution of high-impact projects, aligning with ARY News' commitment to excellence and innovation.
                    With a focus on precision and efficiency, we have supported ARY News in enhancing their operations, leveraging cutting-edge technologies, and delivering unparalleled audience experiences. Our expertise in project management, resource augmentation, and solution delivery has consistently exceeded expectations, contributing to their continued success in the competitive media landscape.
                    At the heart of this partnership lies a shared vision: to push boundaries, drive innovation, and deliver exceptional outcomes. We remain dedicated to supporting ARY News in achieving its strategic goals as we continue this impactful collaboration.</p> <br /> <br />
                    <h3>Project Budget: <span className='' style={{ color: "#7F3E98" }}>$10000- $30000</span></h3> <br />
                <p className='fs-4'>Our collaboration with ARY News has involved delivering high-quality projects within a well-defined budget range of $10,000 to $30,000. This budget flexibility allows us to craft tailored solutions that meet their unique operational and technological needs without compromising on quality or innovation.
                    By maintaining cost efficiency and transparency, we ensure that every dollar invested delivers maximum value. Our focus remains on delivering impactful results, leveraging cutting-edge tools, and aligning with ARY News' objectives to maintain their position as a leading media organization.
                    Whether it's implementing advanced systems, optimizing workflows, or delivering innovative solutions, our approach ensures seamless execution within the allocated budget, driving measurable outcomes and long-term success.</p>
            </div><br /> <br />
            <div className='' style={{ background: "#E8E8E8" }}>


                <div className='container'>

                    <h3>Problems at start: </h3> <br />
                    <p className='fs-4'>ARY Media group had faced a major issue with their streaming on youtube as their routes were not cleared. They required such optimized bandwidth through which they can stream live on Youtube and on their website.
                        <br />  <br />
                        They also needed an inequal ratio of dedicated connectivity as their primary demand was of a higher ratio of Upload speed rather than the downloading speed. Because ARY has to upload their shows, news coverage and other social media related tasks a lot online, they wanted an optimized route for bandwidth through they can upload flawlessly.

                        <br />
                        <br />
                        Apart from this, they also needed bandwidth with multiple redundancies and failover scenarios. Also they were in dire need of such a connectivity provider who can provide best support services as they had been let down by previous providers in this department as well.
                    </p><br /><br />
                    <h3>Solutions Provided
                    </h3> <br />
                    <p className='fs-4'>We provided an optimized bandwidth with redundant backup from 3 different PoPs. Considering ARY is a giant media group, out network and feasibility team could not compromise on the quality of service. Any downtime in connectivity would’ve led to harsh consequences for either as an SLA was signed for maximum uptime.
                        <br />
                        <br />
                        We deployed a Mikrotik Routerboard for internal policy making and there routes were fine tuned to optimal level so that the traffic can be routed at the best possible destined routes. Streaming issues were solved through this and now ARY streaming does not face any lag online.

                        <br />
                        <br />
                        We also provided Managed Network Services which included internal wiring in their office space as well as the access points deployment. Access points were deployed strategically so they may cover the entire office premises. Our team continuously monitors the link and our alert generation system helps us alert the customer in event of any changes or shifting from primary to secondary fiber due to any fiber cut.
                    </p>
                </div>
            </div>
            <Demo />
        </div>
    )
}

export default Case1