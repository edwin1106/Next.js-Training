import Link from 'next/link';
import classes from './page.module.css';
import ImageSlideshow from '@/components/imageSlideshow/imageSlideshow';

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>NextLevel Food for NextLevel Foodies</h1>
            <p>Taste & share food from all over the world.</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            pariatur voluptatibus. Sed, tenetur repellat praesentium labore
            facere ea eveniet? Itaque, aut. Itaque amet maxime fuga officia
            nihil numquam voluptas quam?
          </p>
        </section>
      </main>
    </>
  );
}
