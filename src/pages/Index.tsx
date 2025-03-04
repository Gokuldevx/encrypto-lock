import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import { Hero } from "../components/Hero";

const Index = () => {

  return (
    <div className="min-h-screen bg-#f4efca">
      <Navbar />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
