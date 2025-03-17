
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center relative">
      <div className="absolute inset-0 bg-portfolio-navy/20 z-0"></div>
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="max-w-3xl animate-fade-in">
          <p className="text-portfolio-teal mb-4 font-mono">Hi, my name is</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-portfolio-light">
            Your Name
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-portfolio-slate">
            I build amazing digital experiences.
          </h2>
          <p className="text-portfolio-slate text-lg md:text-xl mb-8 max-w-2xl">
            I'm a software developer specializing in building exceptional digital experiences.
            Currently, I'm focused on creating accessible, human-centered products.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              className="btn-primary"
              onClick={scrollToAbout}
            >
              Learn more about me
            </Button>
            <Button variant="outline" className="border-portfolio-teal text-portfolio-teal hover:bg-portfolio-teal/10">
              View Resume
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToAbout} 
          className="text-portfolio-teal"
          aria-label="Scroll down"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
