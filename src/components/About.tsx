
import Section from './Section';

const About = () => {
  return (
    <Section id="about" title="About Me">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="animate-slide-up">
          <p className="text-portfolio-slate mb-4">
            Hello! My name is [Your Name] and I enjoy creating things that live on the internet.
            My interest in web development started back in [year] when I decided to try editing custom themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
          </p>
          <p className="text-portfolio-slate mb-4">
            Fast-forward to today, and I've had the privilege of working at [company/organization/etc]. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
          </p>
          <p className="text-portfolio-slate mb-4">
            I also recently [launched/participated in/built/etc] [project/course/etc] that [does what].
          </p>
          <p className="text-portfolio-slate">
            When I'm not at the computer, I'm usually [hobbies/interests].
          </p>
        </div>
        <div className="relative group mx-auto">
          <div className="w-64 h-64 sm:w-80 sm:h-80 bg-gray-300 rounded relative z-10 overflow-hidden">
            {/* Replace with your photo */}
            <div className="w-full h-full bg-portfolio-slate/20 flex items-center justify-center text-portfolio-teal">
              Your Photo
            </div>
          </div>
          <div className="absolute inset-0 border-2 border-portfolio-teal rounded translate-x-5 translate-y-5 z-0 group-hover:translate-x-4 group-hover:translate-y-4 transition-all duration-300"></div>
        </div>
      </div>
    </Section>
  );
};

export default About;
