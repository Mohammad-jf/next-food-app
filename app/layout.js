import './globals.css';
import MainHeader from '@/components/MainHeader';

export const metadata = {
  title: 'Food App',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader/>
        {children}
      </body>
    </html>
  );
}
