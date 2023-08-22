import "./App.css";
import Destination from "./components/Destination";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Point from "./components/Point";
import Services from "./components/Services";
import Subscribe from "./components/Subscribe";

function App() {
  return (
    <>
      {/* navbar */}
      <Navbar />

      {/* hero */}
      <Hero />

      {/* services */}
      <Services />

      {/* destination */}
      <Destination />

      {/* key feature */}
      <Features />

      {/* travel point */}
      <Point />

      {/* subscribe */}
      <Subscribe />

      {/* footer */}
      <Footer />
    </>
  );
}

export default App;
