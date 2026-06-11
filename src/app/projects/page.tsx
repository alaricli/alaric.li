import { FC } from "react";
import ProjectCard, { ProjectCardProps } from "../components/projectCard";

const projects: ProjectCardProps[] = [
  // {
  //   title: "ptcgpocket.net",
  //   description:
  //     "Full stack web application for querying information about the Pokémon TCG Pocket game",
  //   imageUrl: "/logo.png",
  //   githubUrl: "https://ptcgpocket.net",
  //   technologies: ["Next.js", "PostgreSQL", "Java", "Spring Boot"],
  // },
  // {
  //   title: "scentsaverco.vercel.app",
  //   description:
  //     "A custom Shopify storefront for my side business built using on Shopify's Storefront API",
  //   imageUrl: "/scentsaverlogo.png",
  //   githubUrl: "https://scentsaverco.vercel.app",
  //   technologies: ["Next.js", "TypeScript", "GraphQL", "Tailwind CSS"],
  // },
  {
    title: "recharged-shop.com",
    description: "work-in-progress fully custom e-commerce store",
    imageUrl: "/phone.jpg",
    url: "https://github.com/alaricli/recharged.icu",
  },
  {
    title: "Jenkins Build Log Analysis Pipeline",
    description: "Automated Jenkins log analysis pipeline to report build failures in natural language from raw console output logs",
    imageUrl: "/jenkins.jpg",
    url: "https://github.com/alaricli/recharged.icu",
  },
  // {
  //   title: "UBC Insight",
  //   description:
  //     "Academic project developed for querying specific information on previous university courses and faculty buildings",
  //   imageUrl: "/ubc.jpg",
  //   githubUrl: "https://github.com/alaricli/insight",
  //   technologies: ["TypeScript", "Mocha", "React", "Express"],
  // },
  {
    title: "Pokémon Showdown Contributions",
    description:
      "Contributions I made to the Pokémon Showdown battle simulator open-source project",
    imageUrl: "/showdown.png",
    url: "https://github.com/alaricli/pokemon-showdown",
  },
];

const Projects: FC = () => {
  return (
    <div className="container mx-auto w-full max-w-4xl px-6 py-12 md:py-20">
      <h1 className="text-center text-4xl font-bold tracking-tight">
        Projects
      </h1>
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
