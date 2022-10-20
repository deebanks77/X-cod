import { useEffect } from "react";
import Feedback from "./components/feedback/Feedback";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Product from "./components/product/Product";
import RequestDemo from "./components/requestDemo/RequestDemo";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-[#EEF2FF] w-full min-h-[100%] relative overflow-hidden">
      <Navbar />
      <Hero />
      <Product />
      <Feedback />
      <RequestDemo />
      <Footer />
    </div>
  );
}

export default App;
