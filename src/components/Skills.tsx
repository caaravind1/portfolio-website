
import Section from './Section';
import { Check } from 'lucide-react';

interface SkillCategory {
  title: string;
  skills: string[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend",
      skills: [
        "HTML & CSS", 
        "JavaScript (ES6+)", 
        "React", 
        "TypeScript", 
        "Next.js", 
        "Tailwind CSS"
      ]
    },
    {
      title: "Backend",
      skills: [
        "Node.js", 
        "Express", 
        "RESTful APIs", 
        "GraphQL", 
        "MongoDB", 
        "PostgreSQL"
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        "Git & GitHub", 
        "Docker", 
        "AWS", 
        "CI/CD", 
        "Jest", 
        "Figma"
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        "Problem Solving", 
        "Communication", 
        "Team Collaboration", 
        "Time Management", 
        "Adaptability", 
        "Creative Thinking"
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
