
import Section from './Section';
import { useState } from 'react';

const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Section id="about" title="About Me">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="animate-slide-up">
          <p className="text-portfolio-slate mb-4">
            Hello! I'm C A Aravind, a Bachelor's of Computer Application Graduate with a passion for 
            Full Stack Development. My journey in web development began with a curiosity for building 
            digital solutions that make a difference.
          </p>
          <p className="text-portfolio-slate mb-4">
            I'm skilled in HTML, PHP, MySQL, and CSS, with a strong foundation in web development, database
            management, and cybersecurity. I'm eager to adapt to new challenges, embrace emerging technologies,
            and contribute to impactful projects while continuously growing both technically and personally.
          </p>
          <p className="text-portfolio-slate mb-4">
            I graduated from SCMS School of Technology and Management Kochi, where I expanded my
            knowledge and skills in Computer Science with a GPA of 6.
          </p>
          <p className="text-portfolio-slate">
            Besides my technical pursuits, I've served as a Volunteer Secretary of the National Service Scheme (NSS)
            and have received recognition including the Rajyapuraskar Award from the Governor of India.
          </p>
        </div>
        <div 
          className="relative group mx-auto cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={`w-64 h-64 sm:w-80 sm:h-80 bg-gray-300 rounded relative z-10 overflow-hidden transition-all duration-500 ${isHovered ? 'shadow-[0_0_30px_rgba(100,255,218,0.4)]' : ''}`}>
            <img 
              src="/lovable-uploads/8f684ce8-90fd-498b-a871-691381aafd81.png" 
              alt="C A Aravind" 
              className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-105' : ''}`}
            />
          </div>
          <div className={`absolute inset-0 border-2 border-portfolio-teal rounded z-0 transition-all duration-500 ${isHovered ? 'translate-x-3 translate-y-3' : 'translate-x-5 translate-y-5'}`}></div>
        </div>
      </div>
    </Section>
  );
};

export default About;
