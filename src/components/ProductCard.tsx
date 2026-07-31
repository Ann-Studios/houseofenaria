import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

interface ProductCardProps {
  name: string;
  subtitle: string;
  price: string;
  image: string;
  notes?: string[];
  index: number;
}

const ProductCard = ({ name, subtitle, price, image, notes, index }: ProductCardProps) => {
  const { t } = useTranslation();
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const priceString = price.replace(/\s/g, '').replace('XOF', '');
    const priceNumber = parseInt(priceString, 10);
    addToCart({
      id: `${name}-${subtitle}`.toLowerCase().replace(/\s/g, '-'),
      name,
      subtitle,
      price: priceNumber,
      image,
    });
    toast.success(`${name} — ${t('product.added')}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative aspect-[3/4] bg-gradient-to-b from-secondary to-muted rounded-sm overflow-hidden mb-6">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <Button
            onClick={handleAddToCart}
            className="w-full font-body text-xs tracking-widest uppercase bg-background/95 text-foreground hover:bg-background"
          >
            {t('product.addToCart')}
          </Button>
        </div>
      </div>
      <div className="text-center">
        <h3 className="font-display text-2xl mb-1">{name}</h3>
        <p className="font-body text-sm text-muted-foreground mb-2">{subtitle}</p>
        {notes && (
          <p className="font-body text-xs text-muted-foreground/70 mb-3">
            {notes.join(' · ')}
          </p>
        )}
        <p className="font-body text-sm tracking-wider">{price}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
