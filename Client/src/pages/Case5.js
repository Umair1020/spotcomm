import React from 'react'
import Header from '../components/Header'
import Demo from '../components/Navbar'


const Case5 = () => {
    return (
        <div>
            <Header /> <br />
            <section id="heros" className="heros1 h-75 section dark-background" data-aos="fade-right" data-aos-delay="100">
                <img src="/case6.png" alt="" className='h-75' />

                <div class="container text-center">
                    <div class="row justify-content-center">

                        <h2 className=' text-start'>Dreamworld Resort

                            <br />
                            Case Study
                        </h2>

                    </div>
                </div>
            </section>
            <div className='container'>
                <p className='fs-4'>
                    Spread over an area of 144 acres of land, it offers variety of facilities to its members and visitors. Dreamworld redefines comfort and relaxation with a blend of entertainment and amusement. Dreamworld Resort offers a wide range of facilities including Ice skating, Go-Karting, Lake Boating and others. It’s Artificial Sea and Crazy River Slide is one of a kind for its visitors and members.
                    <br /> <br />
                    Despite being spread on a 144 acres of land, Dreamworld resort and its management had faced fair share of challenges especially in terms of providing Internet in the Chalets and Community Center Area.
                </p>
            </div> <br /> <br />
            {/* <img src="/case1.png" alt="" className='w-100' /> <br /> */}
            <div className='container'>
                <h3>Project Delivery: <span className='' style={{ color: "#7F3E98" }}>December 2020-January 2021</span></h3> <br />
                <p className='fs-4'>From December 2020 to January 2021, we successfully partnered with Dreamworld Resort to deliver a tailored project designed to enhance their operations and guest experiences. This collaboration focused on providing innovative solutions that aligned with the resort's commitment to excellence and customer satisfaction.
                    Through meticulous planning and efficient execution, we delivered results that supported Dreamworld Resort in optimizing their processes and achieving their goals within the defined timeline. Our dedication to quality and precision ensured the seamless completion of the project, contributing to the resort's reputation as a premier destination.
                    We value the opportunity to have worked with Dreamworld Resort and remain committed to supporting their vision of delivering exceptional hospitality experiences.</p>

                <br /><br />
                <h3>Project Budget: <span className='' style={{ color: "#7F3E98" }}>$10000 - $50000</span></h3> <br />
                <p className='fs-4'>Our project with Dreamworld Resort was executed within a flexible budget range of $10,000 to $50,000. This range enabled us to deliver high-quality, customized solutions that addressed their unique needs while maintaining cost efficiency and optimal results.  <br /><br />
                    By leveraging this budget, we successfully implemented strategies and innovations that enhanced the resort's operational effectiveness and elevated the guest experience. Every investment was aligned with Dreamworld Resort's vision, ensuring measurable value and long-term impact.
                    We are proud to have delivered results-driven solutions that reflect our commitment to excellence and contributed to the continued success of Dreamworld Resort.</p>
            </div>
            <div className='' style={{ background: "#E8E8E8" }}>


                <div className='container'>

                    <h3>Problems Faced at Dreamworld: </h3> <br />
                    <p className='fs-4'>If you are going to stay at a resort over the weekend, you are simply going to have some access to the internet just to stay connected to the outside world. The management in the meeting had delivered us with a challenge to provide Internet in the Chalet area and other important zones where there was a need for internet. Members frequently complained at the unavailability of WiFi at their disposal.
                        <br /><br />
                        Our Technical head and feasibility team were stunned with the area that was going to be covered but certainly not shaken. During feasibility, nearly 45 rooms in the chalet area needed WiFi access as the existing network had speed, connectivity and range issues.
                        <br /><br />
                        Also there was no centralized WiFi management system at Dreamworld resort and the IT department had to manually fix or check the usage which itself was a hurdle. There was no centralized router for Policy making at these zones and no WiFi controller was available to sync all the access points that were deployed at the site. These access points were old and not upgraded thus not able to connect maximum users or contain the load during the rush hours at Dreamworld.

                    </p><br /><br />
                    <h3 style={{ color: "#7F3E98" }}>Solutions Provided and Technology Used
                    </h3> <br />
                    <p className='fs-4 container'>To tackle the issue of routing and QoS management, we deployed a Mikrotik Routerboard. Through this mikrotik, we created DHCP servers and managed all routing and switching issues through it.
                        <br /><br />
                        To provide WiFi to these 45 rooms in the Chalet area and community center area, we deployed 54 WiFi access points. These were enterprise grade Access Points that had unique specified channels in order to avoid any frequency clash. This smoothen the WiFi throw output throughout the resort and the covered zones.
                        <br /><br />
                        To manage these Access points, we deployed an in-house Server and installed a local controller for monitoring and controlling the access points. Through this, the IT department can locally manage all these access points and monitor there usage, heat map, RAM usage and the can check outages as well if any.
                        <br /><br />
                        A policy was also driven to manage all the usage of Members based on the zones they are in. Chalets was given a different usage pool so they do not face any speed or connectivity issues. Same was done for the VIPs as they are the prime members of the resort.
                        <br /><br />
                        Through our wireless network, the complaint ratio is now minimal. Members enjoy our guest WiFi at the chalet area with smooth connectivity and good speed. People have also praised the smooth WiFi network at the resort on different rating apps as well.
                    </p>

                </div>
            </div>
            <Demo />
        </div>
    )
}

export default Case5