import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import ProductCard from './ProductCard';
import {
  atelierApiUrl,
  formatXof,
  getAtelierImageUrl,
  getAtelierProducts,
} from '@/lib/atelier-api';

const AtelierProductsSection = () => {
  const { i18n } = useTranslation();
  const isFr = i18n.language.startsWith('fr');
  const { data: products = [], isLoading } = useQuery({
    queryKey: ['atelier-public-products'],
    queryFn: getAtelierProducts,
    enabled: Boolean(atelierApiUrl),
    staleTime: 60_000,
    refetchInterval: 60_000,
    retry: 1,
  });
  const visibleProducts = products.filter((product) => {
    const category = product.category
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
    return !['parfum', 'perfume', 'diffuseur', 'diffuser', 'desodorisant', 'air-freshener', 'air freshener']
      .some((hiddenCategory) => category.includes(hiddenCategory));
  });

  if (!atelierApiUrl || (!isLoading && visibleProducts.length === 0)) return null;

  return (
    <section id="atelier-creations" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4">
            {isFr ? 'NOUVEAUTÉS' : 'NEW ARRIVALS'}
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light">
            {isFr ? "Les créations de l’atelier" : 'Creations from the atelier'}
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto mt-6">
            {isFr
              ? 'Des pièces façonnées à la main et publiées directement depuis notre atelier.'
              : 'Handcrafted pieces published directly from our atelier.'}
          </p>
        </motion.div>

        {isLoading ? (
          <p className="text-center font-body text-muted-foreground">
            {isFr ? 'Chargement des créations…' : 'Loading creations…'}
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
            {visibleProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                name={product.name}
                subtitle={product.short_description || product.category}
                price={formatXof(product.sale_price ?? product.price)}
                image={getAtelierImageUrl(product.main_image || product.images?.[0]?.path)}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AtelierProductsSection;
