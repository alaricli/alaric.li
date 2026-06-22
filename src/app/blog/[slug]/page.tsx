import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { formatPostDate } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return { title: "Post Not Found" };
  }
  return {
    title: `${post.title} | Alaric Li`,
    description: post.description,
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto w-full max-w-3xl px-6 py-12 md:py-20">
      <Button asChild variant="ghost" className="-ml-2 mb-8">
        <Link href="/blog">
          <ArrowLeft />
          Back to Blogs
        </Link>
      </Button>

      <header>
        <p className="text-sm text-muted-foreground">
          <time dateTime={post.date}>{formatPostDate(post.date)}</time>
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
          {post.title}
        </h1>
        {post.description && (
          <p className="mt-3 text-lg text-muted-foreground">
            {post.description}
          </p>
        )}
        {post.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </header>

      <Separator className="my-8" />

      <article className="prose dark:prose-invert max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </article>
    </div>
  );
}
