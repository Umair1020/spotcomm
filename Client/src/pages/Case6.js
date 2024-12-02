import React from 'react'
import Header from '../components/Header'
import Demo from '../components/Navbar'


const Case6 = () => {
    return (
        <div>
            <Header /> <br />
            <section id="heros" className="heros1 h-75 section dark-background" data-aos="fade-right" data-aos-delay="100">
                <img src="/case5.png" alt="" className='h-75' />

                <div class="container text-center">
                    <div class="row justify-content-center">

                        <h2 className=' text-start'>Family Choice of New York (FCNY)


                            <br />
                            Case Study
                        </h2>

                    </div>
                </div>
            </section>
            <div className='container'>
                <p className='fs-4'>
                    Founded in 2005, Family Choice of New York is the leading medical practices and care management providing institution in New York and Connected areas. To provide care and support to those who are medically fragile or faced with a challenging illness or health condition, Family Choice team of dedicated medical and clinical professionals, practitioners and support staff partner aligns itself with community providers throughout Western New York to provide comprehensive clinical and care management programs to those who need us most.
                    There distinct programs are designed to provide care and support whenever the patients call at their home.  Their goal is to refocus healthcare resources to assure that individuals receive increased preventative and primary medical care and social services in the comfort of their own environment.  FCNY strive to maximize an individual’s quality of life, quality of care and health outcome
                </p>
            </div> <br /> <br />
            {/* <img src="/case1.png" alt="" className='w-100' /> <br /> */}
            <div className='container'>
                <h3>Project Delivery: <span className='' style={{ color: "#7F3E98" }}>July 2023 - September 2023</span></h3> <br />
                <p className='fs-4'>From July 2023 to September 2023, we partnered with Family Choice of New York (FCNY) to deliver a series of impactful projects aimed at enhancing their operations and supporting their commitment to providing quality services to the community. During this period, our focus was on developing solutions that aligned with FCNY’s goals, ensuring efficiency, scalability, and innovation.
                    <br /><br />
                    Through strategic planning and timely execution, we successfully completed projects that addressed FCNY’s unique challenges, streamlined their processes, and contributed to their mission of delivering exceptional care and services.
                    We are proud to have collaborated with FCNY during this critical time and remain dedicated to supporting their continued growth and success..</p>

                <br /><br />
                <h3>Project Budget: <span className='' style={{ color: "#7F3E98" }}>$10000 - $50000</span></h3> <br />
                <p className='fs-4'>Our collaboration with Family Choice of New York (FCNY) involved delivering high-quality solutions within a flexible budget range of $10,000 to $50,000. This range allowed us to tailor our approach to meet FCNY’s specific needs, ensuring cost efficiency while maintaining high standards of quality and service.
                    With this budget, we successfully executed projects that enhanced their operational capabilities, improved service delivery, and supported their commitment to providing exceptional care. Every investment was strategically allocated to maximize value and impact, helping FCNY achieve its objectives effectively.
                    We take pride in our partnership with FCNY and remain dedicated to delivering solutions that align with their vision for growth and success.</p>
            </div>
            <div className='' style={{ background: "#E8E8E8" }}>


                <div className='container'>

                    <h3>Problems Identified: </h3> <br />
                    <p className='fs-4'>Upon visit of the premises and on consultation with the clients IT team, we identified several problems related to Network side. First of all they wanted to switch to single brand of appliance of Firewall and access points so they asked us to shift and reconfigure there entire network from Sophos Firewall & Ubiquiti Access points to Cisco Firewall and Access Points.
                        <br /><br />
                        Secondly there California office was connected to Watch Guard, so they wanted us to switch that as well. They wanted a new wireless fabrication for their office access points and wanted printers, scanners and other equipment to be aligned on the network.
                        <br /><br />
                        New Manageable switches were also required as the existing ones were non-manageable. Active Directory server was also required to aligned with the access points and their existing servers were to be onboarded on the new Setup we were going to configure.
                    </p><br /><br />
                    <h3 style={{ color: "#7F3E98" }}>Solutions Provided and Technology Used
                    </h3> <br />
                    <ol className='fs-4 container'>

                        <li> We deployed MX-68 Appliance firewall in there server room for Security purpose and Highend Availability was also enabled for advance security as per clients demand.  This Resolved client’s requirement of effective cost cutting alongside advancement of technology.</li>
 <br /> <br />
                        <li> New manageable switches were involved and existing were removed. This made the entire network diagram more accessible and manageable.</li> <br /> <br />
                        <li>  New Cisco Meraki access points were installed and onboarded on the network strategically so the signals covered the main areas of WiFi usage.
                        </li> <br /> <br />
                        <li>
                            Active Directory server was synced on the network for VPN users which was a very important target that needed to be achieved during this network revamp operation. 2FA factor was also enabled for advance login security for FCNY users and Employees.

                        </li> <br /> <br />
                        <li>
                            Active Directory was also synced on the network for WiFi User management.
                        </li>
                        <li>
                            FCNY’s bandwidth was realigned with auto failure on the new MX68 firewall appliance.
                        </li> <br /> <br />
                        <li>

                            Site to Site VPN was configured for FCNY California office which was previously connected on Watch Guard. Site to Site VPN was configured with Azure for remote connectivity.
                        </li> <br /> <br />
                        <li>
                            All servers were onboarded and were made accessible on the network so that there applications can remain operational. At no point during this switching of appliances or onboarding of server, any of the servers went offline. Our Engineers made sure they had all the servers online and operational during revamp.
                        </li> <br /> <br />
                        <li>
                            Active Directory was also synced on the network for WiFi User management.
                        </li>









                    </ol>

                </div>
            </div>
            <Demo />
        </div>
    )
}

export default Case6