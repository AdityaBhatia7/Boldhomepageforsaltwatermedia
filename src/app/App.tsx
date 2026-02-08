import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { TrustedBy } from "./components/TrustedBy";
import { LocalTrust } from "./components/LocalTrust";
import { CTAFooter } from "./components/CTAFooter";
import { Wave } from "./components/Wave";
import { Background } from "./components/Background";
import { useEffect } from "react";

export default function App() {
  // Clear dark mode on mount
  useEffect(() => {
    document.documentElement.classList.remove('dark');
    localStorage.removeItem('theme');
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative" style={{ overflowX: 'visible', overflowY: 'auto' }}>
      <Background />
      <Navigation />
      <Wave />
      <div className="relative z-10">
        <Hero />
        <Services />
        <Portfolio />
        <TrustedBy />
        <LocalTrust />
        <CTAFooter />
      </div>
    </div>
  );
}