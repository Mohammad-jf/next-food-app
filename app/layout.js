import './globals.css';
import MainHeader from '@/components/main-header/MainHeader';

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
