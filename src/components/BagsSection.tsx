import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Upload, Sparkles } from 'lucide-react';

const bagShowcase = [
  { image: '/products/bag-1.jpg', alt: 'Cream & gold beaded handbag' },
  { image: '/products/bag-2.jpg', alt: 'Pearl beaded evening clutch' },
  { image: '/products/bag-3.jpg', alt: 'Colorful beaded tote' },
];

const BagsSection = () => {
  const { t } = useTranslation();
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', description: '', fileName: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.description) {
      toast.error('Please fill in required fields');
      return;
    }
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 1000));
    toast.success(t('bagsForm.success'));
    setForm({ name: '', email: '', phone: '', description: '', fileName: '' });
    setSubmitting(false);
  };

  return (
    <section id="bags" className="py-24 lg:py-32">
      <div className="container px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" />
            {t('sections.bagsEyebrow')}
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light">
            {t('sections.bagsTitle')}
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto mt-6">
            {t('sections.bagsDesc')}
          </p>
        </motion.div>

        {/* Showcase gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {bagShowcase.map((bag, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="aspect-[3/4] overflow-hidden rounded-sm bg-secondary"
            >
              <img
                src={bag.image}
                alt={bag.alt}
                loading="lazy"
                width={768}
                height={1024}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>

        {/* Custom order form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto bg-secondary/40 p-8 md:p-12 rounded-sm border border-border"
        >
          <h3 className="font-display text-3xl mb-2 text-center">{t('bagsForm.title')}</h3>
          <p className="font-body text-sm text-muted-foreground text-center mb-8">{t('bagsForm.desc')}</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="cname" className="font-body text-xs tracking-wider uppercase">{t('bagsForm.name')} *</Label>
                <Input id="cname" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cemail" className="font-body text-xs tracking-wider uppercase">{t('bagsForm.email')} *</Label>
                <Input id="cemail" type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="cphone" className="font-body text-xs tracking-wider uppercase">{t('bagsForm.phone')}</Label>
              <Input id="cphone" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cdesc" className="font-body text-xs tracking-wider uppercase">{t('bagsForm.description')} *</Label>
              <Textarea
                id="cdesc"
                rows={4}
                placeholder={t('bagsForm.descPlaceholder')}
                value={form.description}
                onChange={e => setForm({ ...form, description: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label className="font-body text-xs tracking-wider uppercase">{t('bagsForm.upload')}</Label>
              <label className="flex items-center gap-3 px-4 py-3 border border-dashed border-border rounded-sm cursor-pointer hover:border-gold transition-colors">
                <Upload className="w-4 h-4 text-muted-foreground" />
                <span className="font-body text-sm text-muted-foreground truncate">
                  {form.fileName || 'Choose image...'}
                </span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={e => setForm({ ...form, fileName: e.target.files?.[0]?.name || '' })}
                />
              </label>
            </div>
            <Button type="submit" disabled={submitting} className="w-full font-body text-xs tracking-widest uppercase py-6">
              {submitting ? t('bagsForm.submitting') : t('bagsForm.submit')}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default BagsSection;
