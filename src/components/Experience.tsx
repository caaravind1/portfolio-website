
import { useState } from 'react';
import Section from './Section';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Job {
  company: string;
  title: string;
  period: string;
  description: string[];
}

const Experience = () => {
  const jobs: Job[] = [
    {
      company: "Company A",
      title: "Senior Software Engineer",
      period: "January 2021 - Present",
      description: [
        "Led the development of a new customer-facing application using React and TypeScript.",
        "Implemented CI/CD pipelines reducing deployment time by 30%.",
        "Mentored junior developers and conducted code reviews.",
        "Collaborated with the design team to implement responsive UI components."
      ]
    },
    {
      company: "Company B",
      title: "Web Developer",
      period: "June 2018 - December 2020",
      description: [
        "Developed and maintained multiple client websites using React and Node.js.",
        "Integrated third-party APIs and services.",
        "Improved website performance by 40% through code optimization.",
        "Participated in agile development processes."
      ]
    },
    {
      company: "Company C",
      title: "Frontend Developer Intern",
      period: "January 2018 - May 2018",
      description: [
        "Assisted in the development of responsive web applications.",
        "Implemented pixel-perfect designs from Figma mockups.",
        "Gained experience in version control with Git and GitHub.",
        "Participated in daily stand-up meetings and sprint planning sessions."
      ]
    }
  ];

  return (
    <Section id="experience" title="Work Experience">
      <div className="max-w-3xl mx-auto">
        <Tabs defaultValue={jobs[0].company.toLowerCase().replace(/\s+/g, '-')}>
          <TabsList className="grid grid-cols-3 mb-6">
            {jobs.map((job, index) => (
              <TabsTrigger 
                key={index} 
                value={job.company.toLowerCase().replace(/\s+/g, '-')}
                className="data-[state=active]:bg-portfolio-teal/10 data-[state=active]:text-portfolio-teal font-mono"
              >
                {job.company}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {jobs.map((job, index) => (
            <TabsContent 
              key={index} 
              value={job.company.toLowerCase().replace(/\s+/g, '-')}
              className="animate-fade-in"
            >
              <div className="mb-2">
                <h3 className="text-xl font-bold text-portfolio-light">
                  {job.title} <span className="text-portfolio-teal">@ {job.company}</span>
                </h3>
                <p className="text-sm text-portfolio-slate font-mono mb-4">{job.period}</p>
              </div>
              <ul className="space-y-2">
                {job.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="text-portfolio-teal mr-2">▹</span>
                    <span className="text-portfolio-slate">{item}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </Section>
  );
};

export default Experience;
