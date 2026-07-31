import { Instagram, Facebook, Twitter } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import logo from '@/assets/logo.webp';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16 lg:py-20">
      <div className="container px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <img src={logo} alt="House of Enaria" className="h-10 w-auto mb-6 invert brightness-200" />
            <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4">{t('footer.explore')}</h4>
            <ul className="space-y-3 font-body text-sm text-primary-foreground/70">
              <li><a href="#jewelry" className="hover:text-primary-foreground transition-colors">{t('nav.jewelry')}</a></li>
              <li><a href="#bags" className="hover:text-primary-foreground transition-colors">{t('nav.bags')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4">{t('footer.support')}</h4>
            <ul className="space-y-3 font-body text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">{t('footer.contact')}</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">{t('footer.shipping')}</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">{t('footer.faq')}</a></li>
            </ul>
            <p className="font-body text-xs text-primary-foreground/50 mt-4">
              {t('footer.location')}
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4">{t('footer.stayConnected')}</h4>
            <p className="font-body text-sm text-primary-foreground/70 mb-4">
              {t('footer.newsletterDesc')}
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder={t('footer.emailPlaceholder')}
                className="flex-1 min-w-0 px-4 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-sm font-body text-sm placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/40"
              />
              <button type="submit" className="px-4 py-2 bg-primary-foreground text-primary font-body text-sm uppercase tracking-wider rounded-sm hover:bg-primary-foreground/90 transition-colors">
                {t('footer.join')}
              </button>
            </form>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} House of Enaria. {t('footer.rights')}
          </p>
          <div className="flex gap-6 font-body text-xs text-primary-foreground/50">
            <a href="#" className="hover:text-primary-foreground/70 transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-primary-foreground/70 transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
