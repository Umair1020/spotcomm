import React, { useState } from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import './Career.css';
import Demo from '../components/Navbar';

const Career = () => {
    const [selectedJob, setSelectedJob] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('All');

    const [bannerContent, setBannerContent] = useState({
        image: '/career.png'
    });
    const navigate = useNavigate();
    const jobs = [
        {
            id: 'RESIDENTENGINEER',
            title: 'RESIDENT ENGINEER',
            category: 'RESIDENTENGINEER',
            bannerImage: '/res.png',
            image: 'https://piesoft.us/wp-content/uploads/2022/08/ico-about-team-devops.png',
            description:
                'We are seeking a skilled IT Support Engineer to join our team. The ideal candidate will have a strong technical background and be able to provide fast and useful technical assistance and fluent in English communication.'
            ,
            responsibilities: [
                'Work on IT tickets, responding quickly and effectively, following up with clients to ensure successful resolution',
                'Troubleshoot and resolve IT technical issues Level1 & 2 remotely',
                'Ability to handle FE operations and queries on daily basis',
                'Provide customer service to our clients on phone calls and emails',
                'Ability to work under pressure and confident in decision making when needed',
                'Work in rotating shifts as per requirements of the company',
                'Work with escalation support teams to report problems in a timely manner',
                'Provide timely resolution of problems or escalations with a focus on quality and customer service.',
                'Document all activities performed including reporting to the customer via emails, and nature of problem or issue'
            ],
            qualifications: [
                'Minimum 2 years of experience in IT support',
                'Strong English communication skills, both written and verbal',
                'Proven experience as an IT technician or other customer support role',
                'Proficiency in Windows/Mac OS & writing emails in Outlook',
                'Ability to diagnose and resolve basic technical issues',
                'Excellent problem-solving and multitasking skills',
                'Excellent communication and interpersonal skills to build and develop strong relationships with international territories',
                'Customer-oriented attitude'
            ]
        },
        {
            id: 'CustomerSupport', // Changed ID to make it unique
            title: 'Customer Support Engineer',
            bannerImage: '/cus.png',
            category: 'CustomerSupport',
            image: 'https://piesoft.us/wp-content/uploads/2022/08/ico-about-team-php.png',
            description:
                'We are looking for an enthusiastic Sales Executive to join our team. The ideal candidate will have a passion for sales and a drive to meet or exceed targets.',
            responsibilities: [
                'Identify and pursue new sales leads',
                'Develop and maintain strong relationships with clients',
                'Meet sales goals and objectives set by the company',
                'Provide feedback to management regarding client needs and opportunities',
                'Prepare and deliver presentations to potential clients'
            ],
            qualifications: [
                'Minimum 2 years of experience in sales',
                'Strong communication and interpersonal skills',
                'Ability to work independently and as part of a team',
                'Experience with CRM software is a plus',
                'Proven track record of achieving sales targets'
            ]
        },
        {
            id: 'DeploymentExecutive', // Changed ID to make it unique
            title: 'Deployment Executive ',
            bannerImage: '/dep.png',
            category: 'DeploymentExecutive',
            image: 'https://piesoft.us/wp-content/uploads/2022/08/ico-about-team-php.png',
            description:
                'We are looking for an enthusiastic Sales Executive to join our team. The ideal candidate will have a passion for sales and a drive to meet or exceed targets.',
            responsibilities: [
                'Identify and pursue new sales leads',
                'Develop and maintain strong relationships with clients',
                'Meet sales goals and objectives set by the company',
                'Provide feedback to management regarding client needs and opportunities',
                'Prepare and deliver presentations to potential clients'
            ],
            qualifications: [
                'Minimum 2 years of experience in sales',
                'Strong communication and interpersonal skills',
                'Ability to work independently and as part of a team',
                'Experience with CRM software is a plus',
                'Proven track record of achieving sales targets'
            ]
        }
        // Add more job listings as needed
    ];


    const handleJobClick = (job) => {
        setSelectedJob(job);
        setBannerContent({
            title: job.title,
            description: job.description,
            image: job.bannerImage || '/default-banner.png'
        });
    };
    const handleApplyNow = () => {
        if (selectedJob) {
            navigate(`/apply/${selectedJob.id}`, { state: { job: selectedJob } });
        }
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const filteredJobs = selectedCategory === 'All'
        ? jobs
        : jobs.filter(job => job.category === selectedCategory);

    return (
        <div>
            <Header />
            <section className="heros1 section dark-background">
                <img src={bannerContent.image} alt={bannerContent.title} />

                <div className="container" bis_skin_checked={1}>
                    <div className="breadcrumbs" bis_skin_checked={1}>
                        <ul className="breadcrumbs_list">
                            <li>
                              
                              
                                    <span>Home</span>{" "}
                            
                            </li>
                            <li className="breadcrumbs-item breadcrumbs-current">
                                <span>Careers</span>
                            </li>
                        </ul>
                    </div>
                    <div className="row" bis_skin_checked={1}>
                        <div className="col-lg-9" bis_skin_checked={1}>
                            <h1 className="section-title text-light">Careers</h1>
                            <div className="section-text" bis_skin_checked={1}>

                                <p className='text-light'>
                                    Spotcomm is a team of highly inspired and committed Networking professionals
                                    and hardware solutions for 8 years. With our
                                    offices located in the United States, United Arab Emirates and Pakistan, we deliver a
                                    full spectrum of Networking solutions to start-ups
                                    and companies around the globe.
                                </p>

                            </div>
                        </div>
                    </div>

                </div>

                {/* <div className="container text-center">
                    <h2 className='profh2'>CAREERS</h2>
                </div> */}
            </section>
            <section className="section section-center section-white section-cards-border">
                <div className="container" bis_skin_checked={1}>
                    <h2 className="section-title">Our Values</h2>
                    <p className="section-text">
                        If you share the same values, then we share the same destination.
                    </p>
                    <div className="row cards-row" bis_skin_checked={1}>
                        <div className="col" bis_skin_checked={1}>
                            <div className="card card-border" bis_skin_checked={1}>
                                <h3 className="h4">Comfortable corporate culture</h3>
                                <p>
                                    We strive to build and maintain an informal but professional culture
                                    based on teamwork, regular feedback, and continuous learning. The
                                    values at the forefront of our company culture include a positive
                                    work environment, minimal bureaucracy, and freedom to choose
                                    technical approaches and solutions resulting from collective
                                    decision-making. We want you to feel comfortable with us and vice
                                    versa.
                                </p>
                            </div>
                        </div>
                        <div className="col" bis_skin_checked={1}>
                            <div className="card card-border" bis_skin_checked={1}>
                                <h3 className="h4">Unlimited growth</h3>
                                <p>
                                    As a company, we grow together with our employees. Our passion for
                                    innovation has been the driving force, keeping our team youthful,
                                    dynamic, and flexible. Our employees’ professional development and
                                    self-organization within the company (interest groups, team
                                    activities) are our priority, so feel free to offer your ideas,
                                    level up your skills, and have fun with teammates - we are with you!
                                </p>
                            </div>
                        </div>
                        <div className="col" bis_skin_checked={1}>
                            <div className="card card-border" bis_skin_checked={1}>
                                <h3 className="h4">Transparency</h3>
                                <p>
                                    The value of transparency in Spotcomm extends beyond the quality of
                                    the code. Transparency is about trust, integrity, and overall
                                    relations in and outside of work. We strive to create an open,
                                    transparent connection with management, colleagues, and customers.
                                    Honesty, clear communication, and cooperation go hand in hand with
                                    one another and with the client. And if you don't like something:
                                    say it, offer it, or change it!
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="section section-center section-white mt-5">
                <div className="container">
                    <h2 className="section-title">We Are Hiring Right Now</h2>
                    <p className="section-text">
                        Looking to be a part of our dynamic team? Check out our open positions and join us!
                    </p>
                    <div className="categories-wrapper">
                        <button
                            className={`btn btn-category ${selectedCategory === 'All' ? 'active' : ''}`}
                            onClick={() => handleCategoryChange('All')}
                        >
                            <span>All</span>
                        </button>
                        <button
                            className={`btn btn-category ${selectedCategory === 'CustomerSupport' ? 'active' : ''}`}
                            onClick={() => handleCategoryChange('CustomerSupport')}
                        >
                            <span>Customer Support Engineer</span>
                        </button>
                        <button
                            className={`btn btn-category ${selectedCategory === 'RESIDENTENGINEER' ? 'active' : ''}`}
                            onClick={() => handleCategoryChange('RESIDENTENGINEER')}
                        >
                            <span>RESIDENT ENGINEER</span>
                        </button>
                        <button
                            className={`btn btn-category ${selectedCategory === 'DeploymentExecutive' ? 'active' : ''}`}
                            onClick={() => handleCategoryChange('DeploymentExecutive')}
                        >
                            <span>Deployment Executive</span>
                        </button>
                    </div>
                    <div className="row cards-row">
                        {filteredJobs.map(job => (
                            <div key={job.id} className="col-lg category-item">
                                <div className="card profession-card" onClick={() => handleJobClick(job)}>
                                    <img src={job.image} alt={job.title} height={72} />
                                    <p className="h4 profession-card-title">{job.title}</p>
                                    <button onClick={handleApplyNow} className="apply-button">Apply Now</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="section section-center section-numbers mt-5">
                <div className="container" bis_skin_checked={1}>
                    <h2 className="section-title">Why Choose Spotcomm for Your Career</h2>
                    <div className="row cards-row cards-row-xxl" bis_skin_checked={1}>
                        <div className="col-12 col-sm-6 col-lg-3" bis_skin_checked={1}>
                            <p className="section-numbers-step">01</p>
                            <p>A competitive salary.</p>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3" bis_skin_checked={1}>
                            <p className="section-numbers-step">02</p>
                            <p>A flexible work schedule.</p>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3" bis_skin_checked={1}>
                            <p className="section-numbers-step">03</p>
                            <p>A cozy in-house work environment or a remote work option.</p>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3" bis_skin_checked={1}>
                            <p className="section-numbers-step">04</p>
                            <p>Financial support for education, a hobby, or your favorite sport.</p>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3" bis_skin_checked={1}>
                            <p className="section-numbers-step">05</p>
                            <p>English courses at the company’s expense.</p>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-3" bis_skin_checked={1}>
                            <p className="section-numbers-step">06</p>
                            <p>Top Life Events benefits for employees.</p>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3" bis_skin_checked={1}>
                            <p className="section-numbers-step">07</p>
                            <p>A variety of other great benefits!</p>
                        </div>
                    </div>
                </div>
            </section>

            <Demo />
        </div>
    );
};

export default Career;
