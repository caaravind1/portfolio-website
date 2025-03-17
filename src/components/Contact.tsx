
import Section from './Section';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <Section id="contact" title="Get In Touch">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-portfolio-slate mb-8">
          I'm currently studying and looking for opportunities to grow as a Full Stack Developer. 
          Whether you have a question, a project idea, or just want to say hi, 
          I'll do my best to get back to you!
        </p>
        <Button 
          className="btn-primary text-lg mb-12"
          onClick={() => window.location.href = 'mailto:aravindajith1010@gmail.com'}
        >
          Say Hello
        </Button>

        <div className="flex justify-center gap-6">
          <a href="mailto:aravindajith1010@gmail.com" className="text-portfolio-slate hover:text-portfolio-teal transition-colors" aria-label="Email">
            <Mail size={24} />
          </a>
          <a href="https://github.com/caaravind1" className="text-portfolio-slate hover:text-portfolio-teal transition-colors" aria-label="GitHub">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/caaravind" className="text-portfolio-slate hover:text-portfolio-teal transition-colors" aria-label="LinkedIn">
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
