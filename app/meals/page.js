import Link from 'next/link';
import classes from './page.module.css';
import MealsGrid from '@/components/meals/MealsGrid';

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious Meals, created{' '}
          <spam className={classes.highlight}>By you</spam>
        </h1>

        <p>
          Choose your favorite recipe and cook it your self. it is easy and fun
        </p>

        <p className={classes.cta}>
          <Link href='/meals/share'>Share Your Favorite Recipe</Link>
        </p>
      </header>

      <main className={classes.main}>
        <MealsGrid meals={[]} />
      </main>
    </>
  );
}
