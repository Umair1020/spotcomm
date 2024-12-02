import React, { useState, useEffect } from 'react';
import './time.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useMediaQuery } from 'react-responsive';

const Timeline = () => {
  const [activeYear, setActiveYear] = useState('2015');

  // Content for each year from 2015 to 2024
  const yearContent = {
    '2015': {
      title: 'Idea inception',
      description: `Idea inception by
3 classmates (Hassam,
Soaman, Basit).`,
      imgSrc: '/2015.jpeg',
    },
    '2016': {
      title: 'Company registered',
      description: `Company registered.
Started as WiFi kiosk provider
but pivoted immediately.`,
      imgSrc: 'https://eplanetglobal.com/ep-90848/assets/img/about-us/timeline.webp',
    },
    '2017': {
      title: 'Managed Network',
      description: `First Managed Network
Service Client.`,
      imgSrc: '/2017.jpeg',
    },
    '2018': {
      title: 'Infrastructure',
      description: `Expanded infrastructure to
200+ Clinics & 26 cities of
Pakistan.`,
      imgSrc: 'https://eplanetglobal.com/ep-90848/assets/img/about-us/timeline.webp',
    },

    '2020': {
      title: 'Expanded',
      description: `Infrastructure expanded to
500+ wards, 34+ cities &
50+ event centers.`,
      imgSrc: '/2020.jpeg',
    },

    '2022': {
      title: 'E-sports industry',
      description: `Entered E-sports industry
starting with successful
Free-fire, Fifa & Valorant
E-sports events.`,
      imgSrc: '/2022.jpeg',
    },
    '2023': {
      title: 'Services globally',
      description: `Entered international market by
providing Managed Network
Services globally to clients in
US, etc.`,
      imgSrc: '/2023.jpeg',
    },
    '2024': {
      title: 'Future Tech',
      description: `Spotcomm became a
global entity starting
operations in
the international market.`,
      imgSrc: '/2024.jpeg',
    },
  };

  const yearKeys = Object.keys(yearContent);

  // Automatically transition between years
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveYear((prevYear) => {
        const currentIndex = yearKeys.indexOf(prevYear);
        const nextIndex = (currentIndex + 1) % yearKeys.length;
        return yearKeys[nextIndex];
      });
    }, 3000); // Change year every 3 seconds

    return () => clearInterval(interval);
  }, [yearKeys]);

  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop ? children : null;
  };

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ minWidth: 100, maxWidth: 991 });
    return isMobile ? children : null;
  };

  return (
    <section className="the-history">
      <Desktop>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className='text-center h2 fw-bold profh2'>Our History</h2> <br />
            </div>
          </div>
          <div className="timeline">
            <div className="">
              <div className="row">
                <div className="col-2">
                  <div className="slider-nav">
                    {/* Year Buttons */}
                    {yearKeys.map(year => (
                      <div key={year} onClick={() => setActiveYear(year)}>
                        <h5 className={activeYear === year ? 'text-dark slick-current ' : 'text-dark'}>
                          {year}
                        </h5>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-10">
                  <div className="slider-for">
                    <div className="year-content">
                      <div className="">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="text-cont">
                              <h2 className='fw-bold'>{activeYear}</h2>
                              <h4 className='fs-4'>{yearContent[activeYear].title}</h4>
                              <p className='w-75 p'>{yearContent[activeYear].description}</p>
                            </div>
                          </div>
                          <div className="col-lg-8 mx-4 ">
                            <img
                              src={yearContent[activeYear].imgSrc}
                              className=""
                              alt="Timeline"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Desktop>
      <Mobile>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className='text-center h2'>Our History</h2> <br />
            </div>
          </div>
          <div className="timeline">
            <div className="">
              <div className="row">
                <div className="col-2">
                  <div className="slider-nav">
                    {/* Year Buttons */}
                    {yearKeys.map(year => (
                      <div key={year} onClick={() => setActiveYear(year)}>
                        <h5 className={activeYear === year ? 'text-dark slick-current ' : 'text-dark'}>
                          {year}
                        </h5>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-10">
                  <div className="slider-for">
                    <div className="year-content">
                      <div className="">
                        <div className="row">
                          <div className="col-md-7 col-lg-6 col-xl-6">
                            <div className="text-cont">
                              <h2 className='fw-bold'>{activeYear}</h2>
                              <h4 className='fs-4'>{yearContent[activeYear].title}</h4>
                              <p className='w-75 p'>{yearContent[activeYear].description}</p>
                            </div>
                          </div>
                          <div className="col-md-5 col-lg-6 col-xl-6">
                            <div className="img-cont">
                              <img
                                width="783"
                                height="1097"
                                src={yearContent[activeYear].imgSrc}
                                className="img-fluid"
                                alt="Timeline"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Mobile>
    </section>
  );
};

export default Timeline;
