import TopNav from '@/components/nav/TopNav';
import '../assets/css/main.css'
import '../assets/css/style.css'
import Nav from '@/components/nav/Nav';
import Footer from '@/components/footer/Footer';

export const metadata = {
  title: "",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <TopNav />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
