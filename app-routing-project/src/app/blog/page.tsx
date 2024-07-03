import Link from 'next/link';

const BlogPage = () => {
  return (
    <>
      <h1>Blog Page</h1>
      <ul>
        <li>
          <Link href={'/blog/blog-2'}>Navigate To Blog Post 1</Link>
        </li>
        <li>
          <Link href={'/blog/blog-1'}>Navigate To Blog Post 2</Link>
        </li>
      </ul>
    </>
  );
};
export default BlogPage;
