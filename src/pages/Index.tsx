import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PerfumesSection from '@/components/PerfumesSection';
import DiffusersSection from '@/components/DiffusersSection';
import AirFreshenersSection from '@/components/AirFreshenersSection';
import JewelrySection from '@/components/JewelrySection';
import BagsSection from '@/components/BagsSection';
import StorySection from '@/components/StorySection';
import Footer from '@/components/Footer';
import DiscountBanner from '@/components/DiscountBanner';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <DiscountBanner />
      <Header />
      <main>
        <Hero />
        <PerfumesSection />
        <DiffusersSection />
        <AirFreshenersSection />
        <JewelrySection />
        <BagsSection />
        <StorySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
