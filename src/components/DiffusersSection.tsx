import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ProductCard from './ProductCard';

const diffusers = [
  { name: 'Serene Garden', subtitle: 'Reed Diffuser', price: '45 000 XOF', image: 'https://images.unsplash.com/photo-1602928321679-560bb453f190?w=600&q=80', notes: ['Green Tea', 'Bamboo', 'White Lily'] },
  { name: 'Cozy Fireside', subtitle: 'Reed Diffuser', price: '55 000 XOF', image: 'https://images.unsplash.com/photo-1608181831718-c9ffd0654383?w=600&q=80', notes: ['Cedarwood', 'Tobacco', 'Leather'] },
  { name: 'Mediterranean Breeze', subtitle: 'Reed Diffuser', price: '40 000 XOF', image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=600&q=80', notes: ['Citrus', 'Olive Leaf', 'Fig'] },
];

const DiffusersSection = () => {
  const { t } = useTranslation();
  return (
    <section id="diffusers" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            {t('sections.diffusersEyebrow')}
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light">
            {t('sections.diffusersTitle')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {diffusers.map((d, i) => (
            <ProductCard key={d.name} {...d} index={i} />
          ))}
        </div>

        <p className="mt-16 text-center font-body text-muted-foreground max-w-2xl mx-auto">
          {t('sections.diffusersDesc')}
        </p>
      </div>
    </section>
  );
};

export default DiffusersSection;
