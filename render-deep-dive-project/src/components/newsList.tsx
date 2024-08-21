import Image from 'next/image';
import Link from 'next/link';

export type New = {
  id: string;
  slug: string;
  title: string;
  image: string;
  date: string;
  content: string;
};

interface NewsListProps {
  news: New[];
}

const NewsList = ({ news }: NewsListProps) => {
  return (
    <ul className="news-list">
      {news.map((newsItem) => (
        <li key={newsItem.id}>
          <Link href={`/news/${newsItem.slug}`}>
            <Image
              alt={newsItem.title}
              src={`/images/news/${newsItem.image}`}
              width={300}
              height={300}
            ></Image>
            <span>{newsItem.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default NewsList;
