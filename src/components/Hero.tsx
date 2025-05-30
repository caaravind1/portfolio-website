import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from 'react';

const Hero = () => {
  const { toast } = useToast();
  const [showResumeDialog, setShowResumeDialog] = useState(false);
  
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeClick = () => {
    setShowResumeDialog(true);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center relative">
      <div className="absolute inset-0 bg-portfolio-navy/20 z-0"></div>
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="max-w-3xl animate-fade-in">
          <p className="text-portfolio-teal mb-4 font-mono">Hi, my name is</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-portfolio-light">
            C A Aravind
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-portfolio-slate">
            Full Stack Developer, Data Analysis Enthusiast
          </h2>
          <p className="text-portfolio-slate text-lg md:text-xl mb-8 max-w-2xl">
            Dynamic and passionate Full Stack Developer with a strong foundation in web development, 
            database management, and cybersecurity. Bachelor's of Computer Application Graduate.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              className="btn-primary"
              onClick={scrollToAbout}
            >
              Learn more about me
            </Button>
            <Button 
              variant="outline" 
              className="border-portfolio-teal text-portfolio-teal hover:bg-portfolio-teal/10"
              onClick={handleResumeClick}
            >
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

      <Dialog open={showResumeDialog} onOpenChange={setShowResumeDialog}>
        <DialogContent className="max-w-3xl w-full bg-portfolio-navy border border-portfolio-teal">
          <DialogHeader>
            <DialogTitle className="text-portfolio-teal font-bold text-xl text-center">C A Aravind - Resume</DialogTitle>
          </DialogHeader>
          <div className="flex justify-center items-center p-2">
            <div className="bg-white w-full max-h-[70vh] overflow-auto rounded">
              <img 
                src="/lovable-uploads/39e31d1c-c192-453e-bbcf-627f738775b0.png" 
                className="w-full h-auto object-contain"
                alt="Resume"
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Hero;
