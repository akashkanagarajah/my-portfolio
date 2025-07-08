import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Smart Resume Analyzer",
      description: "Analyzes uploaded resumes to extract and match skills against job descriptions using AI. Features include skill extraction, job matching, and detailed analytics.",
      stack: "React, Tailwind CSS, Node.js, OpenAI API, Netlify",
      github: "https://github.com/akashkanagarajah/resume-analyzer",
      demo: "https://resume-analyzer-akash.netlify.app"
    },
    {
      title: "AI Fitness Plan Generator",
      description: "Automates personalized fitness & meal plans using OpenAI and Make.com. Streamlines the process for fitness coaches to create custom plans for their clients.",
      stack: "Make.com, OpenAI API, Google Forms, Zapier",
      github: "#",
      demo: "#"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS. Features smooth navigation, project showcase, and contact form.",
      stack: "React, Tailwind CSS, Vite, JavaScript",
      github: "https://github.com/akashkanagarajah/my-portfolio",
      demo: "#"
    }
  ];

  return (
    <section className="min-h-screen py-20 px-6 bg-gray-50" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Projects</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Here are some of the projects I've worked on. Each one represents different skills and technologies I've learned.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}