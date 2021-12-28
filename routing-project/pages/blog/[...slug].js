import { useRouter } from "next/router";

const BlogPostsPage = () => {
  const router = useRouter();

  return (
    <div>
      <h1>{`The Blog posts with the router: ${router.query.slug}`}</h1>
    </div>
  );
};

export default BlogPostsPage;
