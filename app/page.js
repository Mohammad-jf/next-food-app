import Link from 'next/link';
import classes from './page.module.css';
import ImageSlideshow from '@/components/images/image-slideshow';
export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>

        <div>
          <div className={classes.hero}>
            <h1>Next Food App</h1>
            <p>Taste and Share Food From All Over The World</p>
          </div>
          <div className={classes.cta}>
            <Link href='/community'>join the community</Link>
            <Link href='/meals'>Explore Melas</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            Food App is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            Food App is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why Food App?</h2>
          <p>
            Food App is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            Food App is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
