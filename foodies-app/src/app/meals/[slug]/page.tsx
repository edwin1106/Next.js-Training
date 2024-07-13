import Image from 'next/image';
import classes from './page.module.css';
import getMealBySlug from '@/services/getMealBySlug';

interface SlugMealPageProps {
  params: { slug: string };
}
const SlugMealPage = async ({ params }: SlugMealPageProps) => {
  const meal = await getMealBySlug({ slug: 'spicy-curry' });
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image fill />
        </div>
        <div className={classes.headerText}>
          <h1></h1>
          <p className={classes.creator}>
            by <a href={`mailto:${'email'}`}></a>
          </p>
          <p className={classes.summary}></p>
        </div>
      </header>
      <main></main>
    </>
  );
};
export default SlugMealPage;
