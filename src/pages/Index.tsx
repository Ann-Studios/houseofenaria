import Header from '@/components/Header';
import Hero from '@/components/Hero';
import JewelrySection from '@/components/JewelrySection';
import BagsSection from '@/components/BagsSection';
import StorySection from '@/components/StorySection';
import Footer from '@/components/Footer';
import DiscountBanner from '@/components/DiscountBanner';
import AtelierProductsSection from '@/components/AtelierProductsSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <DiscountBanner />
      <Header />
      <main>
        <Hero />
        <AtelierProductsSection />
        <JewelrySection />
        <BagsSection />
        <StorySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
