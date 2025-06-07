import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Mohamed Benaich — Portfolio',
  description: 'Intro, Projects, Experience, Research Publications',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
