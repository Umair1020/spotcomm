import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Modal from '../components/Modal';
import Demo from '../components/Navbar';


const ApplyPage = ({ bannerImage }) => {
    const { state } = useLocation();
    const job = state?.job;

    useEffect(() => {
        if (!job) {
            console.error("Job information not provided!");
        }
    }, [job]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div>
            <Header />

            <section className="heros1 section dark-background">
                <img src={job?.bannerImage} alt={job?.title || "Job Banner"} />
                <div className="container" bis_skin_checked={1}>
                    <div className="breadcrumbs" bis_skin_checked={1}>
                        <ul className="breadcrumbs_list">
                            <li>
                                {" "}

                                {" "}
                                <span className='text-light'>Home</span>{" "}

                            </li>
                            <li>
                                {" "}

                                <span className='text-light'>Careers</span>{" "}

                            </li>
                            <li className="breadcrumbs-item breadcrumbs-current">
                                <span className='text-light'>{job.title}</span>
                            </li>
                        </ul>
                    </div>
                    <div className="row" bis_skin_checked={1}>
                        <div className="col-lg-9" bis_skin_checked={1}>
                            <h1 className="section-title text-light">{job.title}</h1>
                            <div className="section-text" bis_skin_checked={1}>

                                <p className='text-light'>
                                    {job.shortDescription}
                                </p>

                            </div>
                            <div className="career-info" bis_skin_checked={1}>
                                <p className="career-info-item career-info-item-location">Remote</p>
                                <p className="career-info-item career-info-item-time">Full-time</p>
                            </div>

                        </div>
                    </div>

                </div>
                {/* <div className="container text-center">
                    <h2>CAREERS</h2>
                    <h3>{job.title}</h3>
                    <p>{job.shortDescription}</p>
                </div> */}
            </section>
            <section className="section section-white container">
                <div className="container" bis_skin_checked={1}>
                    <div className="row text-content" bis_skin_checked={1}>
                        <div
                            className="order-md-2 col-12 col-md-10 col-lg-9"
                            bis_skin_checked={1}
                        >
                            <p>
                                We are currently looking for a <strong>{job.title}</strong> for
                                our international projects.&nbsp;
                            </p>
                            <h2 className="wp-block-heading h4" id="h-what-we-need-in-this-role">
                                <strong>What we need in this role:</strong>&nbsp;
                            </h2>
                            <ul>
                                {job.responsibilities.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                            <h2
                                className="wp-block-heading h4"
                                id="h-it-will-be-a-plus-to-have-experience-in"
                            >
                                Responsibilities:&nbsp;&nbsp;
                            </h2>

                            <ul>
                                {job.responsibilities.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>

                            <p>So, just send us your resume and let’s get acquainted!&nbsp;</p>
                            <h2 className="wp-block-heading h4" id="h-important">
                                <strong>Important</strong>
                            </h2>
                            <p>
                                Spotcomm Global and its representatives never assign tasks or make hires
                                without a preliminary face-to-face or video-call interview. Please do
                                not reveal personal information during unsolicited phone calls and
                                texts. If you have any additional questions, please contact us via
                                e-mail: <a href="mailto:career@spotcommglobal.com">career@spotcommglobal.com</a>&nbsp;
                            </p>
                        </div>
                        <div className="order-md-1 col-12 col-md-2" bis_skin_checked={1}>
                            <div className="share" bis_skin_checked={1}>
                                {" "}
                                <span className="share-title">Share</span>{" "}


                                <a
                                    href="https://www.linkedin.com/company/spotcomm/posts/?feedView=all"
                                    className="share-link share-link-linkedin"
                                    title="LinkedIn"
                                    target='_blanke'
                                >
                                    {" "}
                                    <svg width={18} height={18}>
                                        {" "}
                                        <linearGradient
                                            x1="0%"
                                            y1="50%"
                                            x2="100%"
                                            y2="50%"
                                            id="shareGradient1"
                                        >
                                            {" "}
                                            <stop stopColor="#6B02FF" offset="0%" />{" "}
                                            <stop stopColor="#985BEF" offset="100%" />{" "}
                                        </linearGradient>{" "}
                                        <path
                                            fill="url(#shareGradient1)"
                                            d="m17.994196,17.978685l-3.99871,0l0,-6.742007c0,-1.058745 -1.189616,-1.937703 -2.249274,-1.937703c-1.059658,0 -1.749436,0.878958 -1.749436,1.937703l0,6.742007l-3.99871,0l0,-11.98579l3.99871,0l0,1.997632c0.659787,-1.068733 2.359239,-1.757916 3.498871,-1.757916c2.499194,0 4.498549,2.037584 4.498549,4.504659l0,7.241415m-13.995486,0l-3.99871,0l0,-11.98579l3.99871,0l0,11.98579m-1.999355,-17.978685a1.999355,1.997632 0 0 1 1.999355,1.997632a1.999355,1.997632 0 0 1 -1.999355,1.997632a1.999355,1.997632 0 0 1 -1.999355,-1.997632a1.999355,1.997632 0 0 1 1.999355,-1.997632z"
                                        />{" "}
                                    </svg>{" "}
                                </a>{" "}
                                <a
                                    href="https://www.facebook.com/SpotcommDA/"
                                    className="share-link share-link-facebook"
                                    title="Facebook"
                                    target='_blanke'
                                >
                                    {" "}
                                    <svg width={10} height={18}>
                                        {" "}
                                        <linearGradient
                                            x1="0%"
                                            y1="50%"
                                            x2="100%"
                                            y2="50%"
                                            id="shareGradient2"
                                        >
                                            {" "}
                                            <stop stopColor="#6B02FF" offset="0%" />{" "}
                                            <stop stopColor="#985BEF" offset="100%" />{" "}
                                        </linearGradient>{" "}
                                        <path
                                            fill="url(#shareGradient2)"
                                            d="m10.021265,0.000001l0,0l0,0l0,3.59965l-2.004253,0c-0.691467,0 -1.002126,0.728929 -1.002126,1.349869l0,2.249781l0,0l3.006379,0l0,3.59965l-3.006379,0l0,7.1993l-4.008506,0l0,-7.1993l-3.006379,0l0,-3.59965l3.006379,0l0,-3.59965a4.008506,3.59965 0 0 1 4.008506,-3.59965l3.006379,0z"
                                        />{" "}
                                    </svg>{" "}
                                </a>{" "}

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-sm consultation">
                <div className="container">
                    <h2>Didn't find the position you're interested in?</h2>
                    <br />
                    <button onClick={openModal} className="btn btn-dark" type="button"
                        data-href="#cv-popup"
                        data-toggle="modal"
                        data-target="#cv-popup"
                    >
                        Send Your CV
                    </button>
                </div>
            </section>
            <Demo />
            {/* Modal component */}
            <Modal isOpen={isModalOpen} onClose={closeModal} />

        </div>
    );
};

export default ApplyPage;
