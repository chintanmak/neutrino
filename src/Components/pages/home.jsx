import React, { Component } from 'react';
import '../scss/_home.scss'
import Navbar from '../sections/navbar';
import headerimg from '../assets/headerpic.jpg';
import header from '../assets/header.png'
import img1 from '../assets/1-1.jpg';
import img2 from '../assets/2-1.jpg';
import img3 from '../assets/3-1.jpg';
import img4 from '../assets/4-1.png';
import img5 from '../assets/5-1.png';
import img6 from '../assets/6.png';
import left from '../assets/left.svg';
import right from  '../assets/right.svg';
import svg1 from '../assets/1.svg';
import svg2 from '../assets/2.svg';
import svg3 from '../assets/3.svg';
import svg4 from '../assets/4.svg';
import logo from  '../assets/logo.png';


export default class Home extends Component {
  render() {
    return (
        <>
            <div className='header-container'>
              <img src={headerimg} />
        
              <div className='header-contain'>
                <p>DELIVERING<br />
                EXCELLENCE<br />
                WITH<br />
                INNOVATION<br />
                IN EVERY<br />
                STEP</p>
              </div>
              
              <div>
              
              </div>
            </div>  

            <div className='section1'>
              <div className='sectioncontent1'>
                  <h1>
                    Enabling<br />Digital Transformation
                  </h1>
                  <hr />
                  <p>
                    Establish businesses of the future, leveraging innovative and disruptive technologies to build a Digital Ecosystem.
                  </p>
              </div>
              <div className='sectionimg1'>
                <img src={img1} />
              </div>
            </div>     

            <div className='section1'>
             
              <div className='sectionimg1'>
                <img src={img2} />
              </div>
              <div className='sectioncontent1'>
                  <h1>
                    Robotic and Intelligent<br />Process Automation
                  </h1>
                  <hr />
                  <p>
                    As AI transforms enterprises and the future of our era workd, let us helo you transition into a new era of responsible human-machine collaboration.
                  </p>
              </div>
            </div>      

             <div className='section1'>
              <div className='sectioncontent1'>
                  <h1>
                    Business Process<br />Automation
                  </h1>
                  <hr />
                  <p>
                  Empowering businesses with Agility and Responsiveness - Optimize your business processes and redefine 'Future of work'. Let us help you build your Next gen Digital intelligent Automation Solutions .... Do more in less time.
                  </p>
              </div>
              <div className='sectionimg1'>
                <img src={img3} />
              </div>
            </div>     

             <div className='section1'>
            
              <div className='sectionimg1'>
                <img src={img4} />
              </div>
              <div className='sectioncontent1'>
                  <h1>
                    Healthcare & AI
                  </h1>
                  <hr />
                  <p>
                  transforming Healthcare via Next-Gen technologies - visual AI, Conversational AI, Virtual Health Assistants and more to Enhance Efficiency, Quality and Outcomes.
                  </p>
              </div>
            </div>          

            <div className='section1'>
              <div className='sectioncontent1'>
                  <h1>
                    Microsoft <br /> technologies
                  </h1>
                  <hr />
                  <p>
                  Deploy world-class enterprise solutions with Microsoft technologies.
                  </p>
              </div>
              <div className='sectionimg1'>
                <img src={img5} />
              </div>
            </div>  


            <div className='section2'>
              <div className='imgsection2'>
                <img src={img6} />
              </div>
              <div className='contentsection2'>
                <h1>Neutrino Tech Systems - The Pioneers in <br /> Full Stack IT Solutions Enabling Business <br /> Innovation and Agility</h1>
                <hr />
                <p>At a time when technology is thriving at lightning speed, your nimble business needs a one-stop destination for all your IT needs – to bring your ideas and aspirations into reality. That’s what we do at Neutrino Tech Systems.
                <br /><br />We are a global company offering world-class technology service offerings in Application Development, Robotic Process Automation, Performance Engineering and Functional Automation. We believe in finding the state-of-the-art solutions for your challenges, whatever technology it takes!</p>
                <button>Read More About us</button>
              </div>
            </div>    


             <div className='quotesection'>
<div className='svg'>
<img src={left} />
</div>
<div className='quotecontent'>
  <p>
  Did you know that ‘Neutrinos’ are sub-atomic particles born
from astrophysical events and travels at the speed of light…
Our associates are just like these dynamic Neutrinos<br />
– Lightening Fast and Lightweight
  </p>
  </div>
  <div className='svg'>
<img src={right} />
</div>
             </div>

              <div className='optionsection'>
                <div className='opt1'>
                  <div className='opt1img'>
                    <img src={svg1} />
                  </div>
                  <div className='opt1content'>
                    <p>AI Enabled Hyper Automation Intelligent Document Processing</p>
                  </div>
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-right" width="52" height="52" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <line x1="15" y1="16" x2="19" y2="12" />
                      <line x1="15" y1="8" x2="19" y2="12" />
                    </svg>
                  </button>
                </div>

                <div className='opt1'>
                  <div className='opt1img'>
                    <img src={svg2} />
                  </div>
                  <div className='opt1content'>
                    <p>AI Enabled Hyper Automation Intelligent Document Processing</p>
                  </div>
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-right" width="52" height="52" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <line x1="15" y1="16" x2="19" y2="12" />
                      <line x1="15" y1="8" x2="19" y2="12" />
                    </svg>
                  </button>
                </div>

                <div className='opt1'>
                  <div className='opt1img'>
                    <img src={svg3} />
                  </div>
                  <div className='opt1content'>
                    <p>AI Enabled Hyper Automation Intelligent Document Processing</p>
                  </div>
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-right" width="52" height="52" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <line x1="15" y1="16" x2="19" y2="12" />
                      <line x1="15" y1="8" x2="19" y2="12" />
                    </svg>
                  </button>
                </div>

                <div className='opt1'>
                  <div className='opt1img'>
                    <img src={svg4} />
                  </div>
                  <div className='opt1content'>
                    <p>AI Enabled Hyper Automation Intelligent Document Processing</p>
                  </div>
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-right" width="52" height="52" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <line x1="15" y1="16" x2="19" y2="12" />
                      <line x1="15" y1="8" x2="19" y2="12" />
                    </svg>
                  </button>
                </div>
              </div>


              <div className='section3'>
              <div className='contentsection3'>
              <h1>Why Neutrino?</h1>
              <hr />
              <p>
                We are a group of passionate and innovative people with expertise in emerhing technologies and its use in inndustries like Healthcare, Pharma, Retail, Finance, and Logistics. We offer novel solutions to simplify your business processes Enabling you to run your business smoothly.
              </p>
              <h2>Hear it from our Clients...</h2>
              </div>
              </div>




              <div className='footer-container'>
              <div className='footerstarthere'>

              <div className='footersection1'>
              <img src={logo} />
              <p>Neutrino is an industry-focused technology services and management consulting firm. Our global community of experienced technical consultants deliver quality services via a proven onshore/offshore delivery model.</p>
              </div>

              <div className='footersection2'>
                <h1>LINK</h1>
                <hr />
              <div className='footer2div'>
              <div>
                  <p>Home</p>
                  <p>About us</p>
                  <p>Services</p>
                </div>
                <div>
                  <p>solutions</p>
                  <p>Insights</p>
                  <p>Partners</p>
                </div>
              </div>

              </div>

              <div className='footersection3'>
                <h1>Connect</h1>
                <hr />
                <p>434 Ridgetop Bend, Cedar Park, TX - 78613, United States.</p>
                <p>209 Global Business hub, Near World trade Centre, Kharadi, Pune - 411014, India.</p>
                <p>info@neutrinotechsystems.com</p>
              </div>
              </div>
              </div>
        
        </>
        )
  }
}
