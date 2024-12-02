
import './App.css';
import React, { Suspense, lazy, useState, useEffect } from 'react';
import Preloader from './components/Loader'; // Import Preloader component
import Landingpage from './pages/Landingpage';
import { Routes, Route } from "react-router-dom";
import Businesssolution from './pages/Businesssolution';
import Cybersecurity from './pages/Cybersecurity';
import Consulting from './pages/Consulting';
import NetworkInfrastructure from './pages/NetworkInfrastructure';
import NetworkDesign from './pages/NetworkDesign';
import StaffArugment from './pages/StaffArugment';
import CaseStudies from './pages/CaseStudies';
import NetworkAudit from './pages/NetworkAudit';
import Healthcare from './pages/Healthcare';
import Cloud from './pages/Cloud';
import Aboutus from './pages/Aboutus';
import Engineer from './pages/Engineer';
import Education from './pages/Education';
import ReactGA from "react-ga"
import Head from './components/Head';
import Media from './pages/Media';
import Wiprosupport from './components/Wiprosupport';
import Cloudmigration from './pages/Cloudmigration';
import { useLocation } from "react-router-dom"
import ScrollToTop from './pages/ScrollToTop';
import Blog from './pages/Blog';
import Blogpage from './pages/Blogpage';
import Datacenter from './pages/Datacenter';
import Esports from './pages/Esports';
import Wifi from './pages/Wifi';
import Technologies from './pages/Technologies';
import Futureofnetwork from './pages/Futureofnetwork';
import Softwareindustry from './pages/Softwareindustry';
import Contactform from './components/Contactform';
import Hotel from './pages/Hotel';
import Professionalservices from './Professionalservices';
import Industry from './pages/Industry';
import Networkservices from './Networkservices';
import Insight from './pages/Insight';
import Career from './pages/Career';
import ApplyPage from './pages/Applynow';
import Culturebook from './pages/Culturebook';
import Contactus from './components/Contactus';
import Featureinsight from './pages/Featureinsight';
import Award from './pages/Awards';
import Leadership from './pages/Leadership';
import Softwareinner from './pages/Softwareinner';
import Digital from './pages/Digital';
import Disclimer from './pages/Disclimer';
import Event from './pages/Event';
import Technologytrend from './pages/Technologytrend';
import Case1 from './pages/Case1';
import Case2 from './pages/Case2';
import Case3 from './pages/Case3';
import Case4 from './pages/Case4';
import Case5 from './pages/Case5';
import Case6 from './pages/Case6';
import Case7 from './pages/Case7';
import Procrement from './pages/Procrement';



const Track = "G-1FRHQJ0P67"
ReactGA.initialize(Track)
function App() {
    const location = useLocation();

    useEffect(() => {
        ReactGA.pageview(location.pathname + location.search);
    }, [location]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate a loading delay to show the preloader
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000); // Preloader will be displayed for 3 seconds
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="App">
            {/* {isLoading ? (
                <Preloader />
            ) : ( */}
            {/* <Suspense fallback={<Preloader />}> */}
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Landingpage />} />
                    <Route path="/business" element={<Businesssolution />} />
                    <Route path="/cyber-security" element={<Cybersecurity />} />
                    <Route path="/consulting" element={<Consulting />} />
                    <Route path="/NetworkInfrastructureDeployment" element={<NetworkInfrastructure />} />
                    <Route path="/NetworkDesign" element={<NetworkDesign />} />
                    <Route path="/staffargument" element={<StaffArugment />} />
                    <Route path="/case-studies" element={<CaseStudies />} />
                    <Route path="/network-audit" element={<NetworkAudit />} />
                    <Route path="/cloud" element={<Cloud />} />
                    <Route path="/Pharmaceutical" element={<Healthcare />} />
                    <Route path="/about-us" element={<Aboutus />} />
                    <Route path="/engineer" element={<Engineer />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/media" element={<Media />} />
                    <Route path='/cloud-migration' element={<Cloudmigration />} />
                    <Route path='/blogs' element={<Blogpage />} />
                    <Route path='/datacenter' element={<Datacenter />} />
                    <Route path='/e-sports' element={<Esports />} />
                    <Route path='/wifi' element={<Wifi />} />
                    <Route path='/technology' element={<Technologies />} />
                    <Route path='/futureoftechnology' element={<Futureofnetwork />} /> 
                    <Route path='/software' element={<Softwareindustry />} /> 
                    <Route path='/contactform' element={<Contactform  />} /> 
                    <Route path='/hotelandresort' element={<Hotel  />} /> 
                    <Route path='/Professional-Services' element={<Professionalservices  />} /> 
                    <Route path='/factories-industrial' element={<Industry  />} /> 
                    <Route path='/manage-network' element={<Networkservices   />} /> 
                    <Route path='/blog' element={<Blog   />} /> 
                    <Route path='/career' element={<Career   />} /> 
                    <Route path='/culturebook' element={<Culturebook   />} /> 
                    <Route path='/featureinsight' element={<Featureinsight   />} /> 
                    <Route path="/apply/:jobId" element={<ApplyPage />} />
                    <Route path="/insight-report" element={<Insight />} />
                    <Route path="/awardandrecognition" element={<Award />} />
                    <Route path='/contact' element={<Contactus   />} /> 
                    <Route path='/leadership' element={<Leadership   />} /> 
                    <Route path='/softwareinner' element={<Softwareinner   />} /> 
                    <Route path='/digital' element={<Digital   />} /> 
                    <Route path='/DISCLAIMER' element={<Disclimer   />} /> 
                    <Route path='/event' element={<Event  />} /> 
                    <Route path='/ary' element={<Case1  />} /> 
                    <Route path='/bbq' element={<Case2  />} /> 
                    <Route path='/cc' element={<Case4  />} /> 
                    <Route path='/dreamworld' element={<Case5  />} /> 
                    <Route path='/familychoice' element={<Case6  />} /> 
                    <Route path='/freefire' element={<Case7  />} /> 
                    <Route path='/britishcouncil' element={<Case3  />} /> 
                  
                    <Route path='/Procurement' element={<Procrement  />} /> 
                    <Route path='/technologiestrend' element={<Technologytrend  />} /> 
                </Routes>
            {/* </Suspense> */}
            {/* )}   */}
        </div>
    );
}

export default App;
