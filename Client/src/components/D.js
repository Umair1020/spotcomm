import React, { useState } from 'react';

const HeroSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        console.log("Opening modal"); // Debugging statement
        setIsModalOpen(true);
    };

    const closeModal = () => {
        console.log("Closing modal"); // Debugging statement
        setIsModalOpen(false);
    };

    return (
        <section id="heros" className="cyber3 section dark-background">
            <img src="/manage1.png" alt="" />

            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="yourtech">Our Analyst’s <br /> Perspective</h2>
                        <br />
                        <button className="service-btn" onClick={openModal} style={{ background: "#7F3E98" }}>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="modal" style={{ display: 'flex' }}>
                    <div className="modal-content" style={{ backgroundImage: 'url(/manage3.png)' }}>
                        <span className="close" onClick={closeModal}>&times;</span>
                        <div className="modal-body">

                            <h2>Our Analyst’s Perspective</h2>
                            <p className='w-100'>
                                The managed network services (MNS) market size is estimated to grow at a CAGR of 15.75% between 2022 and 2027. The market size is forecast to increase by USD 35.77 billion. The growth of the market depends on several factors, including the increased adoption of IoT solutions, the rising adoption of cloud computing services, and the increasing IT spending of companies. Managed network services are defined as the IT services provided by a third party to manage the infrastructure of enterprises and software and technical support required to operate an organization's network.

                                This managed network services market extensively covers market segmentation by end-user (Retail and e-commerce, IT and telecom, healthcare, and others), deployment (cloud and on-premise), and geography (North America, Europe, APAC, South America, and Middle East and Africa). It also includes an in-depth analysis of drivers, trends, and challenges. Furthermore, the report includes historic market data from 2017 to 2021.

                                Seamless integration with Spotcomm’s Managed Network Services involves a strategic blend of planning, technical execution, and continuous optimization. By aligning with Spotcomm’s expert team, businesses can ensure their network infrastructure is reliable, secure, and scalable—allowing them to focus on their core operations. With 24/7 monitoring, tailored solutions, and proactive maintenance, Spotcomm helps companies transform their networks from potential liabilities into strategic assets.

                            </p>
                        </div>
                    </div>
                </div>
            )}

        </section>
    );
};

export default HeroSection;
