import React from 'react'

const Blogcard = () => {
    return (
        <>

            <div className="container1">
                <div className="card mt-3">
                    <div className="card-headers">
                        <img src="/blog1 (1).png" alt="rover" />
                    </div>
                    <div className="card-body">

                        <h4 className='text-start'>
                        Fault
                        Management

                        </h4>  <br />
                        <p className='text-start'>
                        Ensure optimal performance with real-time monitoring, proactive management, and quick issue resolution for network infrastructure.
                        </p>
                        {/* <div className="user">
                            <button className="service-btn" style={{ background: "#7F3E98" }}>Read More</button>
                        </div> */}
                    </div>
                </div>
                <br />
                <div className="card mt-3">
                    <div className="card-headers">
                        <img src="/blog1 (2).png" alt="rover" />
                    </div>
                    <div className="card-body">

                        <h4 className='text-start'>
                            Network Infrastructure Monitoring

                        </h4> <br />
                        <p className='text-start'>
                        Ensure optimal performance with real-time monitoring, proactive management, and quick issue resolution for network infrastructure.
                        </p>
                        {/* <div className="user">
                            <button className="service-btn" style={{ background: "#7F3E98" }}>Read More</button>
                        </div> */}
                    </div>
                </div><br />
                <div className="card mt-3">
                    <div className="card-headers">
                        <img src="/blog1 (3).png" alt="rover" />
                    </div>
                    <div className="card-body">

                        <h4 className='text-start'>
                        Configuration Management
                        </h4> <br />
                        <p className='text-start'>
                        Streamline network setup and maintenance with automated configuration management for consistent, efficient system performance.
                        </p>
                        {/* <div className="user">
                            <button className="service-btn" style={{ background: "#7F3E98" }}>Read More</button>
                        </div> */}
                    </div>
                </div>
            </div><br />
            <div className='container1'>
                <div className=" card">
                    <div className="card-headers">
                        <img src="/blog1 (4).png" alt="rover" />
                    </div>
                    <div className="card-body">

                        <h4 className='text-start'>
                        Security
                        Management
                        </h4> <br />
                        <p className='text-start'>
                        Protect your network with proactive security management, real-time threat detection, and comprehensive risk mitigation strategies.
                        </p>
                        {/* <div className="user">
                            <button className="service-btn" style={{ background: "#7F3E98" }}>Read More</button>
                        </div> */}
                    </div>
                </div> 
                <div className=" card mt-3"> 
                    <div className="card-headers">
                        <img src="/blog1 (5).png" alt="rover" />
                    </div>
                    <div className="card-body">

                        <h4 className='text-start'>
                        Performance Management
                        </h4> <br />
                        <p className='text-start'>
                        Optimize network performance with continuous monitoring, analysis, and proactive adjustments for seamless operations and reliability.
                        </p>
                        {/* <div className="user">
                            <button className="service-btn" style={{ background: "#7F3E98" }}>Read More</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blogcard