import Image from 'next/image';
import classes from './page.module.css';
import getMealBySlug from '@/services/getMealBySlug';
import { notFound } from 'next/navigation';

interface SlugMealPageProps {
  params: { slug: string };
}
const SlugMealPage = async ({ params }: SlugMealPageProps) => {
  const { data: meal } = await getMealBySlug({ slug: params.slug });

  if (!meal) notFound();

  const instructions = meal.instructions.replace(/\n/g, '<br />');

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: instructions
          }}
        ></p>
      </main>
    </>
  );
};
export default SlugMealPage;
