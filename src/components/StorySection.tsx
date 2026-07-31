import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const StorySection = () => {
  const { t } = useTranslation();
  return (
    <section id="story" className="py-24 lg:py-32">
      <div className="container px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-sm overflow-hidden">
              <img
                src="/products/jewelry-1.jpg"
                alt="Handcrafted"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-gold/30 rounded-sm -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              {t('story.eyebrow')}
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light mb-8">
              {t('story.title')} <span className="italic">Enaria</span>
            </h2>
            <div className="space-y-6 font-body text-muted-foreground leading-relaxed">
              <p>{t('story.p1')}</p>
              <p>{t('story.p2')}</p>
              <p>{t('story.p3')}</p>
            </div>
            <div className="mt-10 flex gap-12">
              <div>
                <p className="font-display text-4xl text-gold mb-2">50+</p>
                <p className="font-body text-sm text-muted-foreground uppercase tracking-wider">{t('story.stat1')}</p>
              </div>
              <div>
                <p className="font-display text-4xl text-gold mb-2">100%</p>
                <p className="font-body text-sm text-muted-foreground uppercase tracking-wider">{t('story.stat2')}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
