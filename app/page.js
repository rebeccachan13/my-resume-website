import Home from '../app/components/home';
import Navbar from '../app/components/navbar';
import Resume from '../app/components/resume';
import Contact from '../app/components/contact';
import Footer from '../app/components/footer';

export default function Page() {
  return (
    <div>
      <Navbar />
      <Home />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}
