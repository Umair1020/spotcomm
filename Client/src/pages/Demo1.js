import React, { useRef, useCallback } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';

AOS.init();


const Demo1 = () => {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);
  const videoRef4 = useRef(null);

  const handleMouseEnter = useCallback((videoRef) => {
    const video = videoRef.current;
    if (video) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.error('Error playing video:', error);
        });
      }
    }
  }, []);

  const handleMouseLeave = useCallback((videoRef) => {
    const video = videoRef.current;
    if (video) {
      const pausePromise = video.pause();
      if (pausePromise !== undefined) {
        pausePromise.catch((error) => {
          console.error('Error pausing video:', error);
        });
      }
    }
  }, []);

  return (
    <div >
      <div className="white img-position-image-left-image-top" >
        <div className="layoutcontainer">
          <div className="withoutmargin">
            <div className="spacing">
              <div className="aem-Grid aem-Grid--12 aem-Grid--default--12">

                <div className="homepagetwocolumn aem-GridColumn aem-GridColumn--default--12">
                  <section id="col2layoutRow2">
                    <div className="col_2_layout true">
                      <div
                        className="col_2 animatecol_2 light playonhoverloop playonhover animate " data-aos="fade-right" data-aos-delay="100" 
                        style={{ height: '699px' }}
                        onMouseEnter={() => handleMouseEnter(videoRef3)}
                        onMouseLeave={() => handleMouseLeave(videoRef3)}
                      >
                        <div className="bg" style={{ backgroundImage: `url("/3.png")` }}>
                          <video
                            ref={videoRef3}
                            muted
                            preload="auto"
                            poster="/3.png"
                            loop
                          >
                            <source src="/1.mp4" type="video/mp4" />
                          </video>
                        </div>
                        <p className="title" style={{ color: '#fff', textAlign: 'center' }}>
                          Data Center Management Services
                        </p>
                        <p className="desc" style={{ color: '#fff', textAlign: 'center' }}>
                          Data Center Management Services ensures optimal performance for your critical infrastructure.
                        </p>
                 <div className="buttonContainer" style={{ justifyContent: 'center' }} bis_skin_checked="1"><Link to="/datacenter" target="_blank" className="button" style={{ backgroundColor: '', color: '' }}>Learn More</Link></div>
                      </div>
                      <div
                        className="col_2 animatecol_2 dark playonhoverloop playonhover bgLayerOn animate"  data-aos="fade-right" data-aos-delay="100"
                        style={{ height: '699px' }}
                        onMouseEnter={() => handleMouseEnter(videoRef4)}
                        onMouseLeave={() => handleMouseLeave(videoRef4)}
                      >
                        <div className="bg" style={{ backgroundImage: `url("/1.png")` }}>
                          <video
                            
                            ref={videoRef4}
                            muted
                            preload="auto"
                            poster="/1.png"
                            loop
                          >
                            <source src="/9.mp4" type="video/mp4" />
                          </video>
                        </div>
                        <p className="title" style={{ textAlign: 'center' }}>
                          Spotcomm Cloud Matrix
                        </p>
                        <p className="desc" style={{ textAlign: 'center' }}>
                          Spotcomm Cloud Matrix simplifies Clouds Solutions for your businesses.
                        </p>
                        <div className="buttonContainer" style={{ justifyContent: 'center' }} bis_skin_checked="1"><Link to="/cloud" target="_blank" className="button" style={{ backgroundColor: '', color: '' }}>Learn More</Link></div>
                      </div>
                    </div>
                  </section>
                  <section id="col2layoutRow2">
                    <div className="col_2_layout true ">
                      <div
                        className="col_2 animatecol_2 light playonhoverloop playonhover animate"  data-aos="fade-right" data-aos-delay="100"
                        style={{ height: '699px' }}
                        onMouseEnter={() => handleMouseEnter(videoRef1)}
                        onMouseLeave={() => handleMouseLeave(videoRef1)}
                      >
                        <div className="bg" style={{ backgroundImage: `url("/2.png")` }}>
                          <video
                            ref={videoRef1}

                            muted
                            preload="auto"
                            poster="/2.png"
                            loop
                          >
                            <source src="/6.mp4" type="video/mp4" />
                          </video>
                        </div>
                        <p className="title" style={{ color: '#fff', textAlign: 'center' }}>
                          Spotcomm Infrastructure
                          Management
                        </p>
                        <p className="desc" style={{ color: '#fff', textAlign: 'center' }}>
                          Unmatched Efficiency and  Reliability with Spotcomm Infrastructure Management.
                        </p>
                        <div className="buttonContainer" style={{ justifyContent: 'center' }} bis_skin_checked="1"><Link to="/NetworkInfrastructureDeployment" target="_blank" className="button" style={{ backgroundColor: '', color: '' }}>Learn More</Link></div>
                      </div>
                      <div
                        className="col_2 animatecol_2 dark playonhoverloop playonhover bgLayerOn animate"  data-aos="fade-right" data-aos-delay="100"
                        style={{ height: '699px' }}
                        onMouseEnter={() => handleMouseEnter(videoRef2)}
                        onMouseLeave={() => handleMouseLeave(videoRef2)}
                      >
                        <div className="bg" style={{ backgroundImage: `url("/4.png")` }}>
                          <video
                            ref={videoRef2}
                            muted
                            preload="auto"
                            poster="/4.png"
                            loop
                          >
                            <source src="/123.mp4" type="video/mp4" />
                          </video>
                        </div>
                        <p className="title" style={{ textAlign: 'center' }}>
                          Spotcomm Cipher
                          Guard
                        </p>
                        <p className="desc" style={{ textAlign: 'center' }}>
                          Advanced Cyber Security Solutions safeguarding you from Digital Threats.
                        </p>
                        <div className="buttonContainer" style={{ justifyContent: 'center' }} bis_skin_checked="1"><Link to="/cyber-security" target="_blank" className="button" style={{ backgroundColor: '', color: '' }}>Learn More</Link></div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo1;
