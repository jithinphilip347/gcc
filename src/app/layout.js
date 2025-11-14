import TopNav from '@/components/nav/TopNav';
import '../assets/css/main.css'
import '../assets/css/style.css'
import Nav from '@/components/nav/Nav';
import Footer from '@/components/footer/Footer';
import { Toaster } from "react-hot-toast";

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
        <Toaster position="top-right" reverseOrder={false} />
        <Footer />
      </body>
    </html>
  );
}
