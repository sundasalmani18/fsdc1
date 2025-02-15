
import Service from '../components/Services';
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import About from "../components/Aboutus";
import Menu2 from "../components/Menu2";
import Reservation from "../components/Reservation";
import Chefs from '../components/Chefs';
import Testimonials from '../components/Testimonails';
import Footer from '../components/Footer';




export default function HomePage() {
  return (
    <>
      <Navbar />
      <Banner />
      <Service />
      <About />
      <Menu2/>
      <Reservation />
      <Chefs />
      <Testimonials />
      <Footer />
    </>
  );
};

