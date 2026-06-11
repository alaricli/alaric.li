import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getAllPosts } from "@/lib/blog";
import { formatPostDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog | Alaric Li",
  description: "Blog posts by Alaric Li",
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="container mx-auto w-full max-w-4xl px-6 py-12 md:py-20">
      <h1 className="text-center text-4xl font-bold tracking-tight">Blog</h1>
      {posts.length === 0 ? (
        <p className="mt-10 text-center text-muted-foreground">
          Blog Coming Soon
        </p>
      ) : (
        <div className="mt-10 flex flex-col items-center gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="w-full max-w-2xl"
            >
              <Card className="overflow-hidden transition-shadow hover:shadow-md">
                {post.coverImage && (
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <CardHeader>
                  <p className="text-xs text-muted-foreground">
                    <time dateTime={post.date}>
                      {formatPostDate(post.date)}
                    </time>
                  </p>
                  <CardTitle className="text-lg">{post.title}</CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                </CardHeader>
                {post.tags.length > 0 && (
                  <CardContent>
                    <div className="flex flex-wrap gap-1.5">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                )}
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
