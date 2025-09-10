import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import AboutSection from "./pages/About";
import PackagesSection from "./pages/Package";
import FixedDeparturesSection from "./pages/FixedDeparture";
import ContactSection from "./pages/Contact";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // On first load, check hash in URL
    if (window.location.hash) {
      const section = window.location.hash.replace("#", "");
      setActiveSection(section);
    }

    // Listen for hash changes (browser back/forward support)
    const handleHashChange = () => {
      const section = window.location.hash.replace("#", "");
      setActiveSection(section || "home");
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="App">
      <Navbar setActiveSection={setActiveSection} />

      {activeSection === "home" && <HomePage />}
      {activeSection === "about" && <AboutSection />}
      {activeSection === "packages" && <PackagesSection />}
      {activeSection === "fixed-departures" && <FixedDeparturesSection />}
      {activeSection === "contact" && <ContactSection />}
    </div>
  );
}

export default App;
