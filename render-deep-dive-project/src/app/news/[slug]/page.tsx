interface NewsDetailProps {
  params: { slug: string };
}
const NewsDetailPage = ({ params }: NewsDetailProps) => {
  const { slug } = params;
  return <h1>{`This is the new with Id: ${slug}`}</h1>;
};
export default NewsDetailPage;
