
import { useState } from 'react';
import Section from './Section';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
  description: string[];
}

const Experience = () => {
  const experienceCategories = [
    {
      category: "work",
      label: "Work",
      items: [
        {
          title: "Data Analyst Intern",
          organization: "Airtel",
          period: "2025 - Present",
          description: [
            "Working as a Data Analyst Intern at Airtel",
            "Analyzing telecommunications data to extract actionable insights",
            "Creating data visualizations and reports for stakeholders",
            "Contributing to data-driven decision making processes"
          ]
        }
      ]
    },
    {
      category: "education",
      label: "Education",
      items: [
        {
          title: "Bachelor of Computer Application",
          organization: "SCMS School of Technology and Management Kochi",
          period: "2022 - 2025",
          description: [
            "GPA: 6",
            "Graduated with Bachelor's degree in Computer Science and Applications",
            "Focused on various aspects of computer science including programming, web development, and database management"
          ]
        },
        {
          title: "Higher Secondary Education",
          organization: "Vidyadhiraja Vidya Bhavan Higher Secondary School Aluva",
          period: "2020 - 2022",
          description: [
            "Scored 92.5%",
            "Completed higher secondary education with excellent academic performance",
            "Built a strong foundation in science and mathematics"
          ]
        }
      ]
    },
    {
      category: "responsibilities",
      label: "Responsibilities",
      items: [
        {
          title: "Volunteer Secretary",
          organization: "National Service Scheme (NSS)",
          period: "2023",
          description: [
            "Coordinated volunteer activities and community service projects",
            "Participated in State level volunteer secretary training camp (2023)",
            "Participated in State level NSS camp 2023",
            "Gained leadership experience and managed team activities"
          ]
        },
        {
          title: "Project Lead",
          organization: "Online Clothing Store",
          period: "2023",
          description: [
            "Streamlined online clothing store operations",
            "Implemented technical solutions to improve business processes",
            "Gained practical experience in e-commerce development"
          ]
        }
      ]
    },
    {
      category: "achievements",
      label: "Achievements",
      items: [
        {
          title: "Rajyapuraskar Award",
          organization: "Governor of India",
          period: "2018",
          description: [
            "Received prestigious Rajyapuraskar Award from the Governor of India",
            "Recognition for exceptional contribution to Bharat Scout and Guides",
            "Demonstrated leadership and service to the community"
          ]
        }
      ]
    }
  ];

  return (
    <Section id="experience" title="Experience & Education">
      <div className="max-w-3xl mx-auto">
        <Tabs defaultValue="work">
          <TabsList className="grid grid-cols-4 mb-6 bg-portfolio-navy border border-portfolio-teal/30">
            {experienceCategories.map((expCategory, index) => (
              <TabsTrigger 
                key={index} 
                value={expCategory.category}
                className="data-[state=active]:bg-portfolio-teal/10 data-[state=active]:text-portfolio-teal text-portfolio-slate hover:text-portfolio-light font-mono"
              >
                {expCategory.label}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {experienceCategories.map((expCategory, index) => (
            <TabsContent 
              key={index} 
              value={expCategory.category}
              className="animate-fade-in"
            >
              <div className="space-y-12">
                {expCategory.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="mb-8">
                    <div className="mb-2">
                      <h3 className="text-xl font-bold text-portfolio-light">
                        {item.title} <span className="text-portfolio-teal">@ {item.organization}</span>
                      </h3>
                      <p className="text-sm text-portfolio-slate font-mono mb-4">{item.period}</p>
                    </div>
                    <ul className="space-y-2">
                      {item.description.map((desc, descIndex) => (
                        <li key={descIndex} className="flex items-start">
                          <span className="text-portfolio-teal mr-2">▹</span>
                          <span className="text-portfolio-slate">{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </Section>
  );
};

export default Experience;
