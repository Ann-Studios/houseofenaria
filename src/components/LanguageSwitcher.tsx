import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const current = i18n.language.startsWith('fr') ? 'fr' : 'en';

  const toggle = () => {
    i18n.changeLanguage(current === 'fr' ? 'en' : 'fr');
  };

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-1.5 px-3 py-2 rounded-full hover:bg-secondary transition-colors font-body text-xs tracking-widest uppercase"
      aria-label="Change language"
    >
      <Globe className="w-4 h-4" />
      <span>{current === 'fr' ? 'FR' : 'EN'}</span>
    </button>
  );
};

export default LanguageSwitcher;
