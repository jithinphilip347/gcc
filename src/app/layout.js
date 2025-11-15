import TopNav from '@/components/nav/TopNav';
import '../assets/css/main.css';
import '../assets/css/style.css';
import Nav from '@/components/nav/Nav';
import Footer from '@/components/footer/Footer';
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "GCC Academy – Leading Online Coaching for DHA, HAAD, MOH, SPLE & Prometric Exams",
  description:
    "GCC Academy, founded in 2021 in Kerala, India, provides expert online coaching for DHA, HAAD, MOH, OMAN, SPLE, and Prometric exams. We help aspiring healthcare professionals build strong careers through high-quality training and guidance.",
  icons: {
    icon: "/favicon.png", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TopNav />
        <Nav />
        {children}
        <Toaster position="top-right" reverseOrder={false} />
        <Footer />
      </body>
    </html>
  );
}
