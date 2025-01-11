import Image from "next/image";
import { FC } from "react";

export interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  technologies: string[];
}

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  githubUrl,
  technologies,
}) => {
  return (
    <div className="bg-[#E6E8F0] text-[#333333] border border-gray-200 rounded-lg max-w-2xl shadow-md overflow mx-auto hover:scale-105 transition-transform duration-300">
      <div className="flex">
        <div className="w-1/4 p-1">
          <Image
            src={imageUrl}
            width={300}
            height={300}
            alt={description}
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        <div className="w-3/4">
          <a href={githubUrl}>
            <h3 className="text-xl font-semibold hover:underline pt-3 pb-0 pl-4 pr-2 text-center">
              {title}
            </h3>
          </a>
          <p className="pt-2 pb-3 pl-4 pr-2">{description}</p>
        </div>
      </div>

      <div className="pt-1 pb-2">
        <ul className="flex flex-wrap gap-2 justify-center">
          {technologies.map((technology, index) => (
            <li
              key={index}
              className="border rounded-lg pt-1 pb-1 pl-2 pr-2 bg-[#3B82F6] text-[#FFFFFF]"
            >
              {technology}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
