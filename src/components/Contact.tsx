
import Section from './Section';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin} from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Contact = () => {
  return (
    <Section id="contact" title="Get In Touch">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-portfolio-slate mb-8">
          I'm currently studying and looking for opportunities to grow as a Full Stack Developer. 
          Whether you have a question, a project idea, or just want to say hi, 
          I'll get back to you!
        </p>
        <Button 
          className="btn-primary text-lg mb-12 group transition-all duration-300 hover:bg-portfolio-teal hover:text-portfolio-navy"
          onClick={() => window.location.href = 'mailto:aravindajith1010@gmail.com'}
        >
          <span className="group-hover:translate-x-1 transition-transform duration-300">Say Hello</span>
        </Button>

        <div className="flex justify-center gap-8">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a 
                  href="mailto:aravindajith1010@gmail.com" 
                  className="text-portfolio-slate hover:text-portfolio-teal transition-colors transform hover:scale-110 transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail size={28} />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Email Me</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a 
                  href="https://github.com/caaravind1" 
                  className="text-portfolio-slate hover:text-portfolio-teal transition-colors transform hover:scale-110 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github size={28} />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>GitHub Profile</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a 
                  href="https://www.linkedin.com/in/caravind/" 
                  className="text-portfolio-slate hover:text-portfolio-teal transition-colors transform hover:scale-110 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={28} />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>LinkedIn Profile</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
