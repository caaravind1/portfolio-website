import Section from './Section';
import { ExternalLink, Github, FolderOpen } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  liveLink?: string;
  featured: boolean;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Project One",
      description: "A web application for tracking fitness goals and workouts. Features include user authentication, progress charts, and custom workout plans.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      githubLink: "#",
      liveLink: "#",
      featured: true
    },
    {
      title: "Project Two",
      description: "E-commerce platform with product catalog, shopping cart, and payment processing. Implemented using modern web technologies.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
      githubLink: "#",
      liveLink: "#",
      featured: true
    },
    {
      title: "Project Three",
      description: "Real-time chat application with private and group messaging functionality. Includes user authentication and message history.",
      technologies: ["React", "Socket.io", "Firebase", "CSS Modules"],
      githubLink: "#",
      featured: false
    },
    {
      title: "Project Four",
      description: "Weather application that displays current conditions and forecasts based on user location or search. Uses third-party weather API.",
      technologies: ["JavaScript", "HTML5", "CSS3", "REST API"],
      githubLink: "#",
      liveLink: "#",
      featured: false
    },
    {
      title: "Project Five",
      description: "Task management application with features like task creation, due dates, priority levels, and task categories.",
      technologies: ["Vue.js", "Vuex", "Express", "PostgreSQL"],
      githubLink: "#",
      featured: false
    },
    {
      title: "Project Six",
      description: "Blog platform with content management system, user authentication, and commenting functionality.",
      technologies: ["React", "GraphQL", "Node.js", "MongoDB"],
      githubLink: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <Section id="projects" title="Projects" className="bg-portfolio-navy/30">
      {/* Featured Projects */}
      <div className="mb-20">
        <h3 className="text-xl font-bold mb-8 text-portfolio-light">Featured Projects</h3>
        <div className="space-y-20">
          {featuredProjects.map((project, index) => (
            <div 
              key={index}
              className={`grid md:grid-cols-12 gap-6 items-center ${
                index % 2 === 0 ? '' : 'md:flex-row-reverse'
              }`}
            >
              <div className={`md:col-span-7 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <div className="bg-gray-500 h-64 rounded-lg flex items-center justify-center">
                  <span className="text-white">Project Screenshot</span>
                </div>
              </div>
              <div className={`md:col-span-5 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <p className="text-portfolio-teal font-mono mb-1">Featured Project</p>
                <h3 className="text-2xl font-bold mb-4 text-portfolio-light">{project.title}</h3>
                <div className="bg-portfolio-navy p-6 rounded-lg shadow-lg mb-4">
                  <p className="text-portfolio-slate">{project.description}</p>
                </div>
                <ul className="flex flex-wrap mb-4 gap-3">
                  {project.technologies.map((tech, techIndex) => (
                    <li key={techIndex} className="text-portfolio-slate text-sm font-mono">
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4">
                  <a href={project.githubLink} className="text-portfolio-light hover:text-portfolio-teal transition-colors" aria-label="GitHub Repository">
                    <Github size={20} />
                  </a>
                  {project.liveLink && (
                    <a href={project.liveLink} className="text-portfolio-light hover:text-portfolio-teal transition-colors" aria-label="Live Demo">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Other Projects */}
      <div>
        <h3 className="text-xl font-bold mb-8 text-portfolio-light">Other Noteworthy Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <Card key={index} className="bg-portfolio-navy border-portfolio-navy hover:translate-y-[-5px] transition-transform duration-300">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start mb-2">
                  <FolderOpen className="text-portfolio-teal" size={28} />
                  <div className="flex gap-3">
                    <a href={project.githubLink} className="text-portfolio-light hover:text-portfolio-teal transition-colors" aria-label="GitHub Repository">
                      <Github size={18} />
                    </a>
                    {project.liveLink && (
                      <a href={project.liveLink} className="text-portfolio-light hover:text-portfolio-teal transition-colors" aria-label="Live Demo">
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <CardTitle className="text-portfolio-light text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-portfolio-slate">{project.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <ul className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, techIndex) => (
                    <li key={techIndex} className="text-portfolio-slate text-xs font-mono">
                      {tech}
                    </li>
                  ))}
                </ul>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
