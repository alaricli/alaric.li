import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  url?: string;
  technologies?: string[];
}


const ProjectCard = ({
  title,
  description,
  imageUrl,
  url,
  technologies,
}: ProjectCardProps) => {
  return (
    <Card className="group flex h-full flex-col justify-between overflow-hidden transition-all duration-300 hover:border-muted-foreground/30 hover:shadow-md [--card-spacing:--spacing(6)]">
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="relative size-14 shrink-0 overflow-hidden rounded-sm border border-border">
          <Image
            src={imageUrl}
            alt={`${title} logo`}
            fill
            className="object-contain"
          />
        </div>
        <CardTitle className="flex-1 text-xl font-semibold tracking-tight">
          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 hover:underline"
            >
              {title}
            </a>
          ) : (
            <span>{title}</span>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </CardContent>
      {technologies && technologies.length > 0 && (
        <CardFooter className="flex flex-wrap gap-1.5 border-t-0 bg-transparent pt-2">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="px-2 py-0.5 text-[11px] font-medium"
            >
              {tech}
            </Badge>
          ))}
        </CardFooter>
      )}
    </Card>
  );
};

export default ProjectCard;
