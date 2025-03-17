
import Section from './Section';

const About = () => {
  return (
    <Section id="about" title="About Me">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="animate-slide-up">
          <p className="text-portfolio-slate mb-4">
            Hello! I'm C A Aravind, a Computer Science and Applications student with a passion for 
            Full Stack Development. My journey in web development began with a curiosity for building 
            digital solutions that make a difference.
          </p>
          <p className="text-portfolio-slate mb-4">
            I'm skilled in HTML, PHP, MySQL, and CSS, with a strong foundation in web development, database
            management, and cybersecurity. I'm eager to adapt to new challenges, embrace emerging technologies,
            and contribute to impactful projects while continuously growing both technically and personally.
          </p>
          <p className="text-portfolio-slate mb-4">
            Currently, I'm studying at SCMS School of Technology and Management Kochi, where I'm expanding my
            knowledge and skills in Computer Science.
          </p>
          <p className="text-portfolio-slate">
            Besides my technical pursuits, I've served as a Volunteer Secretary of the National Service Scheme (NSS)
            and have received recognition including the Rajyapuraskar Award from the Governor of India.
          </p>
        </div>
        <div className="relative group mx-auto">
          <div className="w-64 h-64 sm:w-80 sm:h-80 bg-gray-300 rounded relative z-10 overflow-hidden">
            <img 
              src="/lovable-uploads/afad9125-9d3a-4790-978a-bfb5603bfe6e.png" 
              alt="C A Aravind" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 border-2 border-portfolio-teal rounded translate-x-5 translate-y-5 z-0 group-hover:translate-x-4 group-hover:translate-y-4 transition-all duration-300"></div>
        </div>
      </div>
    </Section>
  );
};

export default About;
