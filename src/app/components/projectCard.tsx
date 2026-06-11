import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
  url: string;
  technologies?: string[];
}

function getInitials(title: string) {
  return title
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
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
        <Avatar className="size-14 rounded-lg after:rounded-lg">
          <AvatarImage src={imageUrl} alt={`${title} logo`} />
          <AvatarFallback className="rounded-lg text-sm font-medium">
            {getInitials(title)}
          </AvatarFallback>
        </Avatar>
        <CardTitle className="flex-1 text-xl font-semibold tracking-tight">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-4 hover:underline"
          >
            {title}
          </a>
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
