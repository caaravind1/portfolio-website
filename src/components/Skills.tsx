
import Section from './Section';
import { Check } from 'lucide-react';
import { useState } from 'react';

interface SkillCategory {
  title: string;
  skills: string[];
  icon?: string;
}

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  
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
            className={`bg-portfolio-navy p-6 rounded-lg shadow-lg transition-all duration-500 overflow-hidden ${
              activeCategory === index 
                ? 'transform -translate-y-2 shadow-[0_10px_30px_rgba(100,255,218,0.2)]' 
                : 'hover:-translate-y-1 hover:shadow-lg'
            }`}
            onMouseEnter={() => setActiveCategory(index)}
            onMouseLeave={() => setActiveCategory(null)}
          >
            <h3 className="text-xl font-bold mb-4 text-portfolio-teal">{category.title}</h3>
            <ul className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <li 
                  key={skillIndex} 
                  className={`flex items-center transition-all duration-300 ${
                    activeCategory === index ? 'transform translate-x-1' : ''
                  }`}
                  style={{ 
                    transitionDelay: `${skillIndex * 50}ms` 
                  }}
                >
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
