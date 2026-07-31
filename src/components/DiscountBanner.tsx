import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useCart } from '@/contexts/CartContext';

const DiscountBanner = () => {
  const { t } = useTranslation();
  const { isNewUser } = useCart();
  const [isVisible, setIsVisible] = useState(true);

  if (!isNewUser || !isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className="bg-gold text-primary overflow-hidden"
      >
        <div className="container px-6 lg:px-12 py-2.5 flex items-center justify-center gap-2 relative">
          <Sparkles className="w-4 h-4 shrink-0" />
          <p className="font-body text-xs md:text-sm tracking-wide text-center">
            <span className="font-semibold">{t('banner.welcome')}</span> {t('banner.text')} <span className="font-semibold">{t('banner.percent')}</span> {t('banner.rest')}
          </p>
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-4 p-1 hover:bg-primary/10 rounded-full transition-colors"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DiscountBanner;
