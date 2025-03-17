
import Section from './Section';
import { Check } from 'lucide-react';

interface SkillCategory {
  title: string;
  skills: string[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Technical Skills",
      skills: [
        "HTML", 
        "CSS", 
        "JavaScript", 
        "PHP", 
        "MySQL", 
        "Python",
        "C",
        "C++",
        "Java",
        "Linux"
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        "Team Leadership", 
        "Communication", 
        "Security System", 
        "Critical Problem Solving", 
        "Problem-Solving", 
        "Creativity",
        "Time Management",
        "Eye for Detail"
      ]
    },
    {
      title: "Certifications",
      skills: [
        "Full Stack Development", 
        "Play it Safe: Manage Security Risks (Google)", 
        "Foundation of Cybersecurity (Google)", 
        "Data Analysis with Python (IBM)", 
        "Data Science using Python (IBM)",
        "Connect and Protect: Networks and Network Security (Google)"
      ]
    },
    {
      title: "Languages",
      skills: [
        "Malayalam - Proficient", 
        "English - Proficient", 
        "Hindi - Proficient", 
        "Tamil - Conversational"
      ]
    }
  ];

  return (
    <Section id="skills" title="Skills" className="bg-portfolio-navy/30">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <div 
            key={index} 
            className="bg-portfolio-navy p-6 rounded-lg shadow-lg hover:translate-y-[-5px] transition-transform duration-300"
          >
            <h3 className="text-xl font-bold mb-4 text-portfolio-teal">{category.title}</h3>
            <ul className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="flex items-center">
                  <Check size={16} className="text-portfolio-teal mr-2" />
                  <span className="text-portfolio-slate">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
