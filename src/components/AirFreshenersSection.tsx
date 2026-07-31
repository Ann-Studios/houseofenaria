import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ProductCard from './ProductCard';

const airFresheners = [
  { name: 'Fresh Breeze', subtitle: 'Automatic Spray', price: '15 000 XOF', image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&q=80', notes: ['Ocean', 'Eucalyptus', 'Mint'] },
  { name: 'Lavender Dream', subtitle: 'Automatic Spray', price: '15 000 XOF', image: 'https://images.unsplash.com/photo-1595425959632-34f2822322ce?w=600&q=80', notes: ['Lavender', 'Chamomile', 'Cotton'] },
  { name: 'Citrus Burst', subtitle: 'Automatic Spray', price: '12 500 XOF', image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&q=80', notes: ['Lemon', 'Orange', 'Grapefruit'] },
  { name: 'Forest Pine', subtitle: 'Automatic Spray', price: '15 000 XOF', image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=600&q=80', notes: ['Pine', 'Cedar', 'Moss'] },
];

const AirFreshenersSection = () => {
  const { t } = useTranslation();
  return (
    <section id="air-fresheners" className="py-24 lg:py-32">
      <div className="container px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            {t('sections.airEyebrow')}
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light">
            {t('sections.airTitle')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {airFresheners.map((f, i) => (
            <ProductCard key={f.name} {...f} index={i} />
          ))}
        </div>

        <p className="mt-16 text-center font-body text-muted-foreground max-w-2xl mx-auto">
          {t('sections.airDesc')}
        </p>
      </div>
    </section>
  );
};

export default AirFreshenersSection;
