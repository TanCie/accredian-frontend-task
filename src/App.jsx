import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ReferBenefits from "./components/ReferBenefits";
import Diagram from "./components/Diagram";
import Footer from "./components/Footer";
import Faq from "./components/Faq";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Diagram />
      <ReferBenefits />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
