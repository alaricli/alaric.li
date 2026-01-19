import { Metadata } from 'next';

interface PageProps {
  params: { slug: string };
}

export const metadata: Metadata = {
  title: 'Blog Post',
};

export default function Page({ params }: PageProps) {
  return (
    <div>
      <h1>Blog Post: {params.slug}</h1>
      {/* Add your blog post content here */}
    </div>
  );
}