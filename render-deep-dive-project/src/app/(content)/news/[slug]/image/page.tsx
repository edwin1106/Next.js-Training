import { DUMMY_NEWS } from '@/lib/dummy-news';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface ImagePageProps {
  params: {
    slug: string;
  };
}
const ImagePage = ({ params }: ImagePageProps) => {
  console.log(params.slug, 'params.slug');
  const newsItemSlug = params.slug;
  const newsItem = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === newsItemSlug
  );

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <Image
        width={1000}
        height={800}
        src={`/images/news/${newsItem.image}`}
        alt={newsItem.title}
      ></Image>
    </div>
  );
};
export default ImagePage;
