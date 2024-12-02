import React from 'react'
import Header from '../components/Header'
import Demo from '../components/Navbar'


const Case4 = () => {
    return (
        <div>
            <Header /> <br />
            <section id="heros" className="heros1 h-75 section dark-background" data-aos="fade-right" data-aos-delay="100">
                <img src="/case4.png" alt="" className='h-75 w-100' />

                <div class="container text-center">
                    <div class="row justify-content-center">

                        <h2 className=' text-start'>Cooperative Computing



                            <br />
                            Case Study
                        </h2>

                    </div>
                </div>
            </section>
            <div className='container'>
                <p className='fs-4'>
                    Cooperative Computing is a business focused technology enablement company. CC creates demonstrable business value through the use of technology to develop and execute focused strategies to reduce operating costs and drive critical competitive advantage but in order to do so, they needed to eliminate Internal and external network challenges. These challenges were hindering their overall work efficiency and the internal users were facing network downtime.

                </p>
            </div> <br /> <br />
            {/* <img src="/case1.png" alt="" className='w-100' /> <br /> */}
            <div className='container'>
                <h3>Project Delivery: <span className='' style={{ color: "#7F3E98" }}>April 2022</span></h3> <br />
                <p className='fs-4'>Since April 2022, we have been a trusted partner of Cooperative Computing, delivering high-quality projects designed to align with their vision and drive their business objectives. Our collaboration focuses on providing innovative solutions, streamlining operations, and enhancing their technological capabilities.
                    Through a tailored approach, we have successfully executed projects that meet their specific requirements, ensuring precision, efficiency, and measurable outcomes. By leveraging our expertise, we continue to support Cooperative Computing in achieving operational excellence and fostering growth in a competitive landscape.
                    We are proud of this ongoing partnership and remain committed to delivering impactful solutions that contribute to Cooperative Computing's success and long-term goals.</p>

                <br /><br />
                <h3>Project Budget: <span className='' style={{ color: "#7F3E98" }}>$10000 - $50000</span></h3> <br />
                <p className='fs-4'>Our projects with Cooperative Computing are structured within a flexible budget range of $10,000 to $50,000. This range allows us to design and deliver customized solutions that address their specific business needs while maintaining a strong focus on quality and value.
                    By leveraging this budget, we have successfully implemented projects that enhance operational efficiency, optimize workflows, and drive innovation. Our transparent and strategic approach ensures that every investment contributes to Cooperative Computing's growth and success in achieving their objectives.
                    We take pride in delivering results-driven projects that align with their vision and support their journey toward sustained excellence in the technology and business solutions industry.</p>
            </div>
            <div className='' style={{ background: "#E8E8E8" }}>


                <div className='container'>

                    <h3>Problems Identified: </h3> <br />
                    <p className='fs-4'>Upon visit of the premises, our feasibility observed that there was No proper Network infrastructure at Cooperative Computing head office and remote site. There weren’t any network policies for internal users and they faced Wireless fabrication issues as well. Remote side was under renovation so they needed cabling and access point deployment from scratch at that site. Another Problem that they were facing was of Internet disconnection as there was No Failover Redundancy on Internet Bandwidth over single Network. Apart from this they needed to Inter connect a branch of their office to their Head Office. They also needed a network monitoring tool to they can monitor internet bandwidth and usage protocols themselves as well.

                    </p><br /><br />
                    <h3 style={{ color: "#7F3E98" }}>Solutions Provided and Technology Used
                    </h3> <br />
                    <p className='fs-4 container'>We deployed Mikrotik and proper switching at the premises to overcome the network infrastructure issue and to implement new network policies sufficient to cater the needs of the organization.
                        <br /><br />
                        We provided Separate QoS for each and every department so that each department in the organization can have its separate IP pool. We also provided bandwidth QoS to effectively manage overall bandwidth usage and lower the cost for extra bandwidth need. Through this network engineering, we helped Cooperative Computing overcome the issue of user complaints regarding limited, slow or no connectivity. We also applied access control policy so that any new user has to register on the network to get access to the internal network or internet.
                        <br /><br />
                        For Wireless Fabrication issue at Cooperative Computing, we offered a state of the art wireless infrastructure. This included Enterprise Grade Routers with Unique Static Channelization to overcome wireless fabrication issues and a collision between different wireless Channels. For Wireless management, we also provided a cloud based Centralized WiFi Management Controller.
                        <br /><br />
                        We provided Dedicated CIR Bandwidth with Triple redundancy over fiber optic cable through three different PoPs in their head office. This was done to avoid gateway changes to internet while accessing remote servers, software development process where dedicated public IP is necessary. In case of any failure in the primary fiber, the network automatically gets switched to redundant secondary fiber with the same public IP and gateway.
                        <br /><br />
                        Further to connect their branch office with their Head office, we provided a layer 2 connectivity on the same network.  This simplified the entire process as the entire organization network is centralized on their main network in the head office. Any changes that needs to be made in the remote site, will be done from their head office thus eliminating the cost of hiring extra network administrator for their remote office.
                        <br /><br />
                        For internal network monitoring, we deployed “The Dude” monitoring tool so that the onsite and offsite network administrator can efficiently monitor various parameters for each device connected to the network. This includes Health of the Device, Bandwidth Usage, Disk/RAM space and usage, outages and alert generation through email on every outage.
                    </p>

                </div>
            </div>
            <Demo />
        </div>
    )
}

export default Case4