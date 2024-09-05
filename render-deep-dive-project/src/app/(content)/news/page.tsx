import NewsList from '@/components/newsList';
import { DUMMY_NEWS } from '@/lib/dummy-news';

const NewsPage = () => {
  return (
    <>
      <h1>News Page</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
};
export default NewsPage;
