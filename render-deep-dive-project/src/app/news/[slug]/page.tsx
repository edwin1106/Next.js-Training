import { DUMMY_NEWS } from '@/lib/dummy-news';
import Image from 'next/image';
import Link from 'next/link';
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
        <Link href={`/news/${newsItem.slug}/image`}>
          <Image
            alt={newsItem.title}
            src={`/images/news/${newsItem?.image}`}
            width={100}
            height={100}
          ></Image>
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
};
export default NewsDetailPage;
