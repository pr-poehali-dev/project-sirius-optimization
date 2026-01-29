import {
  InteractiveBackground,
  Header,
  HeroSection,
  LicenseSection,
  AboutSection,
  Footer,
} from "@/components/landing";

const Index = () => {
  return (
    <div className="min-h-screen text-white relative bg-black">
      <InteractiveBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <LicenseSection />
          <AboutSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;