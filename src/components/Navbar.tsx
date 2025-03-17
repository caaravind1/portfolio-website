
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleResumeClick = () => {
    toast({
      title: "Resume",
      description: "Resume download feature coming soon! Check back later.",
    });
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-portfolio-navy/90 shadow-md backdrop-blur-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a 
            href="#hero" 
            className="text-portfolio-teal font-bold text-2xl"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
          >
            Portfolio
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="nav-link" onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}>About</a>
            <a href="#skills" className="nav-link" onClick={(e) => {
              e.preventDefault();
              scrollToSection('skills');
            }}>Skills</a>
            <a href="#experience" className="nav-link" onClick={(e) => {
              e.preventDefault();
              scrollToSection('experience');
            }}>Experience</a>
            <a href="#projects" className="nav-link" onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }}>Projects</a>
            <a href="#contact" className="nav-link" onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}>Contact</a>
            <Button 
              variant="outline" 
              className="border-portfolio-teal text-portfolio-teal hover:bg-portfolio-teal/10"
              onClick={handleResumeClick}
            >
              Resume
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-portfolio-teal"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 bg-portfolio-navy/95 z-50 flex flex-col justify-center items-center transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <button 
          className="absolute top-6 right-6 text-portfolio-teal"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
        <nav className="flex flex-col items-center space-y-8 text-lg">
          <a href="#about" className="nav-link" onClick={(e) => {
            e.preventDefault();
            scrollToSection('about');
          }}>About</a>
          <a href="#skills" className="nav-link" onClick={(e) => {
            e.preventDefault();
            scrollToSection('skills');
          }}>Skills</a>
          <a href="#experience" className="nav-link" onClick={(e) => {
            e.preventDefault();
            scrollToSection('experience');
          }}>Experience</a>
          <a href="#projects" className="nav-link" onClick={(e) => {
            e.preventDefault();
            scrollToSection('projects');
          }}>Projects</a>
          <a href="#contact" className="nav-link" onClick={(e) => {
            e.preventDefault();
            scrollToSection('contact');
          }}>Contact</a>
          <Button 
            variant="outline" 
            className="border-portfolio-teal text-portfolio-teal hover:bg-portfolio-teal/10 mt-6"
            onClick={handleResumeClick}
          >
            Resume
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
