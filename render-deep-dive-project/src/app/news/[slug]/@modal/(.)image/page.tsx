import { DUMMY_NEWS } from '@/lib/dummy-news';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface ImagePageProps {
  params: {
    slug: string;
  };
}
const InterceptedImagePage = ({ params }: ImagePageProps) => {
  const newsItemSlug = params.slug;
  const newsItem = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === newsItemSlug
  );

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <div className="modal-backdrop">
        <dialog className="modal" open>
          <div className="fullscreen-image">
            <Image
              width={740}
              height={800}
              src={`/images/news/${newsItem.image}`}
              alt={newsItem.title}
            ></Image>
          </div>
        </dialog>
      </div>
    </>
  );
};
export default InterceptedImagePage;
