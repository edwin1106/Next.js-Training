import Link from 'next/link';
import { DUMMY_NEWS } from '../../../dummy-news';
import Image from 'next/image';

const NewsPage = () => {
  return (
    <>
      <h1>News Page</h1>
      <ul className="news-list">
        {DUMMY_NEWS.map((newsItem) => (
          <li key={newsItem.id}>
            <Link href={`/news/${newsItem.slug}`}>
              <Image
                alt={newsItem.title}
                src={`/images/news/${newsItem.image}`}
                width={100}
                height={100}
              ></Image>
              <span>{newsItem.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default NewsPage;
