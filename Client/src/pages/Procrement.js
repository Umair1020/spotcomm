import React from 'react'
import Header from '../components/Header'
import Demo from '../components/Navbar';

const Procrement = () => {
    const items = [
        {
            title: "Servers",
            image: "/pro (1).png",
            description: "The Avocent® DSView™ Solution provides the highest performance and agility, security, andenables automation, management, monitoringand control of all your devices like no other solution in the market.",
        },
        {
            title: "Desktop System",
            image: "/pro (2).png",
            description: "The Avocent ACS 800 and 8000 serial consoles securely manage in-band andout-of-band network devices",
        },
        {
            title: "Network Racks",
            image: "/pro (3).png",
            description: "The Cybex SC800 and SC900 secure switches provide users access to computers with various classification levels from a single desk",
        },
        {
            title: "Access Points",
            image: "/pro (4).png",
            description: "The Avocent LRA Console family gives access and control to multiple servers in a rack or row from one convenient location",
        },
        {
            title: "Printers",
            image: "/pro (5).png",
            description: "The Avocent MergePoint Unity digital KVM switches provide access and control of multiple servers from virtually any location",
        },
        {
            title: "Scanners",
            image: "/pro (6).png",
            description: "Wide resources for enterprise scanning.",
        },
        {
            title: "System Accessories",
            image: "/pro (7).png",
            description: "The Avocent LRA Console family gives access and control to multiple servers in arack or row from one convenient location",
        },
        {
            title: "Fiber Optics Cables",
            image: "/pro (8).png",
            description: "The Avocent MergePoint Unity digital KVM switches provide access and control of multiple servers from virtually any location",
        },
        {
            title: "LAN Cables",
            image: "/pro (9).png",
            description: "With Avocent HMX 5000/6000/8000 High Performance KVM and the Avocent Matrix system, users can access shared workstations from any number of desktops",
        },
    ];

    return (
        <div>
            <Header />
            <section id="heros" class="heros1 section dark-background">

                <img src="/pro.png" alt="" />

                <div class="container text-start">
                    <div class="row justify-content-start">
                        <div class="col-lg-12" data-aos="fade-right" data-aos-delay="200">
                            <h2 className='profh2'>Procurement Service</h2>
                        </div>
                    </div>
                </div>

            </section><br />
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-5 d-flex align-items-center fs-5'>
                        <p>Welcome to Spotcomm Managed Network Procurement Service – your all-in-one solution for acquiring, managing, and optimizing network resources. Our service is designed to streamline the procurement process for businesses, ensuring efficiency, transparency, and seamless integration with your operational needs.
                            With Spotcomm, you gain access to an intelligent platform that connects you to trusted suppliers, manages your procurement workflows, and ensures the highest standards of compliance and cost-effectiveness. Whether you're sourcing hardware, software, or network services, we’ve got you covered.</p>
                    </div> 
                    <div className='col-lg-6 ml-3'><br /><br />
                        <img src="/pro1.png" alt="" />
                    </div>
                </div>
            </div>
            <section className="procurement">
                <h2 className='h2'>
                    What we can <span className="highlight">procure</span> for you
                </h2>
                <div className="grid3 container">
                    {items.map((item, index) => (
                        <div key={index} className="grid-item3">
                            <h3>{item.title}</h3> <br />
                            <img src={item.image} alt={item.title} /> <br />
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            <Demo />
        </div>
    )
}

export default Procrement