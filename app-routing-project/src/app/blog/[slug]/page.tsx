interface BlogPostProps {
  params: {
    slug: string;
  };
}
const BlogPostPage = ({ params }: BlogPostProps) => {
  console.log(params, 'props');
  return (
    <>
      <h1>Blog Post Page</h1>
      <h1>Blog Post {params.slug}</h1>
    </>
  );
};

export default BlogPostPage;
