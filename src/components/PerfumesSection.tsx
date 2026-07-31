import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ProductCard from './ProductCard';

const perfumes = [
  {
    name: 'Mint Accords',
    subtitle: 'Eau de Parfum',
    price: '95 000 XOF',
    image: '/perfumes/mint-accords.jpg',
    notes: ['Fresh Mint', 'Green Tea', 'White Musk'],
  },
  {
    name: 'Lemon Accord',
    subtitle: 'Eau de Parfum',
    price: '85 000 XOF',
    image: '/perfumes/lemon-accord.jpg',
    notes: ['Sicilian Lemon', 'Verbena', 'Cedar'],
  },
  {
    name: 'Croissant Accord',
    subtitle: 'Eau de Parfum',
    price: '110 000 XOF',
    image: '/perfumes/croissant-accord.jpg',
    notes: ['Butter', 'Almond', 'Warm Vanilla'],
  },
  {
    name: 'Cookies & Cream',
    subtitle: 'Eau de Parfum',
    price: '95 000 XOF',
    image: '/perfumes/cookies-cream.jpg',
    notes: ['Dark Cocoa', 'Sweet Cream', 'Tonka'],
  },
  {
    name: 'Vanilla Accord',
    subtitle: 'Eau de Parfum',
    price: '90 000 XOF',
    image: '/perfumes/vanilla-accord.jpg',
    notes: ['Madagascar Vanilla', 'Caramel', 'Sandalwood'],
  },
  {
    name: 'Chocolate Accord',
    subtitle: 'Eau de Parfum',
    price: '100 000 XOF',
    image: '/perfumes/chocolate-accord.jpg',
    notes: ['Dark Chocolate', 'Coffee', 'Amber'],
  },
  {
    name: 'Strawberry Accord',
    subtitle: 'Eau de Parfum',
    price: '85 000 XOF',
    image: '/perfumes/strawberry-accord.jpg',
    notes: ['Fresh Strawberry', 'Pink Pepper', 'Musk'],
  },
];

const PerfumesSection = () => {
  const { t } = useTranslation();
  return (
    <section id="perfumes" className="py-24 lg:py-32">
      <div className="container px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            {t('sections.perfumesEyebrow')}
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light">
            {t('sections.perfumesTitle')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
          {perfumes.map((perfume, index) => (
            <ProductCard key={perfume.name} {...perfume} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerfumesSection;
