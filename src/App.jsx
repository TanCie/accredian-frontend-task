import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ReferBenefits from "./components/ReferBenefits";
import Diagram from "./components/Diagram";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Diagram />
      <ReferBenefits />
      <Faq />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;

// refer form included in referButton
