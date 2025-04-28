
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import CourierCTA from "@/components/CourierCTA";
import Testimonials from "@/components/Testimonials";
import AppPreview from "@/components/AppPreview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <HowItWorks />
        <AppPreview />
        <CourierCTA />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
