import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Reels from "@/components/Reels";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Reels />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default Index;
