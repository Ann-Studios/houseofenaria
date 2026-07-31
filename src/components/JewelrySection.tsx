import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ProductCard from './ProductCard';

const jewelry = [
  {
    name: 'Golden Pearl Necklace',
    nameFr: 'Collier Perles Dorées',
    subtitle: 'Beaded Necklace',
    subtitleFr: 'Collier Perlé',
    price: '35 000 XOF',
    image: '/products/jewelry-2.jpg',
  },
  {
    name: 'Amber & Gold Set',
    nameFr: 'Parure Ambre & Or',
    subtitle: 'Necklace Collection',
    subtitleFr: 'Collection Colliers',
    price: '55 000 XOF',
    image: '/products/jewelry-1.jpg',
  },
  {
    name: 'Rainbow Bracelet Stack',
    nameFr: 'Bracelets Arc-en-Ciel',
    subtitle: 'Beaded Bracelets',
    subtitleFr: 'Bracelets Perlés',
    price: '25 000 XOF',
    image: '/products/jewelry-3.jpg',
  },
];

const JewelrySection = () => {
  const { t, i18n } = useTranslation();
  const isFr = i18n.language.startsWith('fr');

  return (
    <section id="jewelry" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            {t('sections.jewelryEyebrow')}
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light">
            {t('sections.jewelryTitle')}
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto mt-6">
            {t('sections.jewelryDesc')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {jewelry.map((item, index) => (
            <ProductCard
              key={item.name}
              name={isFr ? item.nameFr : item.name}
              subtitle={isFr ? item.subtitleFr : item.subtitle}
              price={item.price}
              image={item.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JewelrySection;
