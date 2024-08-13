import Image from 'next/image';
import { DUMMY_NEWS } from '../../../../dummy-news';
import { notFound } from 'next/navigation';

interface NewsDetailProps {
  params: { slug: string };
}
const NewsDetailPage = ({ params }: NewsDetailProps) => {
  const { slug } = params;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === slug);
  if (!newsItem) notFound();
  return (
    <article className="news-article">
      <header>
        <Image
          alt={newsItem.title}
          src={`/images/news/${newsItem?.image}`}
          width={100}
          height={100}
        ></Image>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
};
export default NewsDetailPage;
