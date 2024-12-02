import React from 'react'
import Header from '../components/Header'
import Demo from '../components/Navbar'
const Disclimer = () => {
    return (
        <div>
            <Header />
            <section id="heros" class="heros1 section dark-background h-100" data-aos="fade-right" data-aos-delay="100">
                <img src="/dis.png" alt="" className='h-100' />
                <div class="container text-start">
                    <div class="row justify-content-start">
                        <div class="">
                            <h2 className='ms-auto '>
                                DISCLAIMER  </h2>
                        </div>
                    </div>
                </div>
            </section>
            <div className='container'>
                <section className="article-content">
                    <h2>The following terms and conditions will be deemed to have been accepted by the User on usage of the website www.spotcommglobal.com You are requested to read them carefully before you use the services of this site.</h2>
                    <ul>
                        <li>
                            <h3> General Information</h3>
                            <p>


                                The information provided on this website and through Spotcomm’s services is for general informational purposes only. While we strive to ensure the accuracy and reliability of the information, Spotcomm makes no representations or warranties of any kind, express or implied, regarding the completeness, accuracy, suitability, or availability of the website, its content, or the services offered. Any reliance you place on such information is strictly at your own risk.

                            </p>
                        </li>
                        <li>
                            <h3>Service Limitations
                            </h3>
                            <p>
                                Spotcomm provides managed network services, including but not limited to network monitoring, cybersecurity, and cloud management. However, no system is entirely immune to potential breaches or technical failures. Spotcomm is not liable for losses, damages, or interruptions caused by third-party services, hardware malfunctions, software vulnerabilities, or other factors beyond our control.
                            </p>
                        </li>
                        <li>
                            <h3>Third-Party Content and Links

                            </h3>
                            <p>
                                This website may contain links to third-party websites or resources. Spotcomm is not responsible for the content, policies, or practices of any third-party sites or services. The inclusion of any links does not necessarily imply a recommendation or endorsement of the views expressed within them.
                            </p>
                        </li>
                        <li>
                            <h3>No Warranty


                            </h3>
                            <p>
                                All services and content are provided "as is" without warranties of any kind, either express or implied. SpotComm disclaims all warranties, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.

                            </p>
                        </li>
                        <li>
                            <h3>Limitation of Liability
                            </h3>
                            <p>
                                To the fullest extent permitted by law, Spotcomm shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use of or inability to use our services or this website, even if SpotComm has been advised of the possibility of such damages.



                            </p>
                        </li>
                    </ul>

                    <h2>User Responsibility</h2>
                    <p>Users are responsible for maintaining the security of their systems, networks, and access credentials. SpotComm will not be liable for any loss or damage arising from user negligence or failure to comply with recommended security protocols.
                    </p>
                    <ul>
                        <li>
                            <h3>Changes to Services or Terms



                            </h3>
                            <p>
                                Spotcomm reserves the right to modify, suspend, or discontinue any part of its services or these terms at any time without prior notice. By continuing to use the services after such changes, you agree to the updated terms.
                            </p>
                        </li>
                        <li>
                            <h3>Governing Law</h3>
                            <p>

                                This disclaimer and any disputes arising out of or related to the use of Spotcomm’s services or website shall be governed by and construed in accordance with the laws of Pakistan.


                            </p>
                        </li>

                    </ul>


                </section>
            </div>
                <Demo />
        </div>
    )
}

export default Disclimer