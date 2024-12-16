import { FC } from "react";
import ProjectCard, { ProjectCardProps } from "../components/projectCard";

const projects: ProjectCardProps[] = [
  {
    title: "ptcgpocket.net",
    description:
      "Full stack web application for querying information about the Pokémon TCG Pocket game",
    imageUrl: "/tcg.jpg",
    githubUrl: "https://github.com/alaricli/professorsresearchtcg.com",
    technologies: ["Next.js", "PostgreSQL", "Java", "Spring Boot"],
  },
  {
    title: "scentsaverco.vercel.app",
    description:
      "custom Shopify storefront for my side business built using on Shopify's Storefront API",
    imageUrl: "/scentsaverlogo.png",
    githubUrl: "https://github.com/alaricli/scentsaver.co",
    technologies: ["Next.js", "TypeScript", "GraphQL", "Tailwind CSS"],
  },
  {
    title: "recharged.icu",
    description: "work-in-progress fully custom e-commerce store",
    imageUrl: "/phone.jpg",
    githubUrl: "https://github.com/alaricli/recharged.icu",
    technologies: ["Remix", "PostgreSQL", "Java", "Spring Boot", "Stripe API"],
  },
  {
    title: "UBC Insight",
    description:
      "academic project developed for querying specific information on previous university courses and faculty buildings",
    imageUrl: "/ubc.jpg",
    githubUrl: "https://github.com/alaricli/insight",
    technologies: ["TypeScript", "Mocha", "React", "Express"],
  },
  {
    title: "Pokemon Showdown Contributions",
    description:
      "contributions I made to the Pokemon Showdown battle simulator open-source project",
    imageUrl: "/showdown.png",
    githubUrl: "https://github.com/alaricli/pokemon-showdown",
    technologies: ["TypeScript", "Mocha", "Chai"],
  },
];

const Projects: FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-semi-bold mb-6">Projects</h1>
      <div className="flex flex-col gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            githubUrl={project.githubUrl}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
