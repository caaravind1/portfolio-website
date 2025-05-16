
import Section from './Section';
import { ExternalLink, Github, FolderOpen } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  liveLink?: string;
  featured: boolean;
  image?: string;
}

interface Screenshot {
  title: string;
  image: string;
}

const Projects = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string>("Online Clothing Store");
  
  const projects: Project[] = [
    {
      title: "Online Clothing Store",
      description: "Streamlined e-commerce platform for online clothing store operations. Features include inventory management, user authentication, and shopping cart functionality.",
      technologies: ["HTML", "CSS", "PHP", "MySQL"],
      githubLink: "#",
      liveLink: "#",
      featured: true,
      image: "/lovable-uploads/ee342438-02c9-4448-851e-f0e27992321d.png"
    },
    {
      title: "movWe:Connecting Cinema",
      description: "A cinema management application allowing theaters to manage shows, customers to book tickets, and administrators to oversee operations. Features include movie management, seat allocation, and booking system.",
      technologies: ["React", "TypeScript", "Node.js", "MySQL"],
      githubLink: "#",
      featured: true,
      image: "/lovable-uploads/d75ac794-69ca-45a0-bae2-c549b7ab507b.png"
    },
    {
      title: "Data Analysis Tool",
      description: "Tool for analyzing and visualizing data sets, developed using skills acquired from IBM's Data Analysis with Python certification.",
      technologies: ["Python", "Pandas", "Matplotlib", "Jupyter"],
      githubLink: "#",
      featured: false
    },
    {
      title: "Cybersecurity Risk Assessment",
      description: "Application to evaluate and manage security risks in computer systems, based on Google's 'Play it Safe' certification principles.",
      technologies: ["JavaScript", "HTML5", "CSS3", "Security APIs"],
      githubLink: "#",
      liveLink: "#",
      featured: false
    },
    {
      title: "Full Stack Portfolio",
      description: "Personal portfolio website showcasing skills and projects, with responsive design and modern web technologies.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      githubLink: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const projectScreenshots: Record<string, Screenshot[]> = {
    "Online Clothing Store": [
      {
        title: "Store Homepage",
        image: "/lovable-uploads/ee342438-02c9-4448-851e-f0e27992321d.png"
      },
      {
        title: "Customer Login",
        image: "/lovable-uploads/365277a4-ccce-4d40-9855-8ad2ce7c512e.png"
      },
      {
        title: "Admin Dashboard",
        image: "/lovable-uploads/ccde1f61-9616-4002-a0a2-c9164246b8ef.png"
      },
      {
        title: "Product Management",
        image: "/lovable-uploads/5033e763-dae7-44f5-8b92-fb69f677e10e.png"
      }
    ],
    "movWe:Connecting Cinema": [
      {
        title: "Home Page",
        image: "/lovable-uploads/d75ac794-69ca-45a0-bae2-c549b7ab507b.png"
      },
      {
        title: "Manage Movies",
        image: "/lovable-uploads/d17357b3-d1cf-44d1-bf42-0590ecae82a6.png"
      },
      {
        title: "Manage Seat Types",
        image: "/lovable-uploads/5798945c-092f-437e-8ded-8c872afc943a.png"
      },
      {
        title: "Admin Dashboard",
        image: "/lovable-uploads/ba9e3499-9156-41cf-bf8b-dfc4295c3f13.png"
      }
    ]
  };

  const handleOpenScreenshotDialog = (projectTitle: string) => {
    setSelectedProject(projectTitle);
    setDialogOpen(true);
  };

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
                {project.image ? (
                  <div 
                    className="rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => handleOpenScreenshotDialog(project.title)}
                  >
                    <AspectRatio ratio={16/9}>
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover"
                      />
                    </AspectRatio>
                  </div>
                ) : (
                  <div className="bg-gray-500 h-64 rounded-lg flex items-center justify-center">
                    <span className="text-white">Project Screenshot</span>
                  </div>
                )}
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

      {/* Project Screenshots Sections */}
      {Object.keys(projectScreenshots).map(projectName => (
        <div key={projectName} className="mb-20">
          <h3 className="text-xl font-bold mb-8 text-portfolio-light">{projectName} Screenshots</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectScreenshots[projectName].map((screenshot, index) => (
              <div 
                key={index} 
                className="bg-portfolio-navy p-4 rounded-lg shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => handleOpenScreenshotDialog(projectName)}
              >
                <h4 className="text-portfolio-light text-lg mb-3">{screenshot.title}</h4>
                <AspectRatio ratio={16/9} className="overflow-hidden rounded-md">
                  <img 
                    src={screenshot.image} 
                    alt={screenshot.title} 
                    className="w-full h-full object-cover" 
                  />
                </AspectRatio>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Screenshots Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden bg-portfolio-navy border-portfolio-navy">
          <div className="p-6">
            <h2 className="text-xl font-bold text-portfolio-light mb-4">{selectedProject} Screenshots</h2>
            <Carousel className="w-full">
              <CarouselContent>
                {projectScreenshots[selectedProject]?.map((screenshot, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <div className="overflow-hidden rounded-lg">
                        <AspectRatio ratio={16/9}>
                          <img
                            src={screenshot.image}
                            alt={screenshot.title}
                            className="w-full h-full object-contain bg-portfolio-dark/50"
                          />
                        </AspectRatio>
                      </div>
                      <h4 className="text-portfolio-light text-center mt-2">{screenshot.title}</h4>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex items-center justify-center mt-4">
                <CarouselPrevious className="static transform-none mx-2" />
                <CarouselNext className="static transform-none mx-2" />
              </div>
            </Carousel>
          </div>
        </DialogContent>
      </Dialog>

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
