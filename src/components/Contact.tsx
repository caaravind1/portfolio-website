
import Section from './Section';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <Section id="contact" title="Get In Touch">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-portfolio-slate mb-8">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
          I'll do my best to get back to you!
        </p>
        <Button 
          className="btn-primary text-lg mb-12"
          onClick={() => window.location.href = 'mailto:youremail@example.com'}
        >
          Say Hello
        </Button>

        <div className="flex justify-center gap-6">
          <a href="#" className="text-portfolio-slate hover:text-portfolio-teal transition-colors" aria-label="Email">
            <Mail size={24} />
          </a>
          <a href="#" className="text-portfolio-slate hover:text-portfolio-teal transition-colors" aria-label="GitHub">
            <Github size={24} />
          </a>
          <a href="#" className="text-portfolio-slate hover:text-portfolio-teal transition-colors" aria-label="LinkedIn">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-portfolio-slate hover:text-portfolio-teal transition-colors" aria-label="Twitter">
            <Twitter size={24} />
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
