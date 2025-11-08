import { useState } from "react";
import OpeningSequence from "@/components/OpeningSequence";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import History from "@/components/History";
import BounceCards from "@/components/BounceCards";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [showMain, setShowMain] = useState(false);

  return (
    <div className="min-h-screen">
      {!showMain && <OpeningSequence onComplete={() => setShowMain(true)} />}
      {showMain && (
        <>
          <Navigation />
          <Hero />
          <About />
          <History />
          <BounceCards />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Index;
