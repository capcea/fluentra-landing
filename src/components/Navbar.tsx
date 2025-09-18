import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage, LanguageSwitcher } from './LanguageSwitcher';

const Navbar: React.FC = () => {
  const { language } = useLanguage();

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded bg-primary/15 flex items-center justify-center text-primary font-bold group-hover:bg-primary/20 transition-colors">F</div>
          <span className="text-lg font-semibold tracking-tight group-hover:text-primary transition-colors">Fluentra</span>
        </Link>
        <div className="flex items-center gap-2 sm:gap-4">
          <Link to="/how-it-works" className="hidden sm:inline-flex text-sm text-foreground/80 hover:text-foreground transition-colors">
            {language === 'ro' ? 'Cum funcționează' : 'How it works'}
          </Link>
          <Link to="/benefits" className="hidden sm:inline-flex text-sm text-foreground/80 hover:text-foreground transition-colors">
            {language === 'ro' ? 'Beneficii' : 'Benefits'}
          </Link>
          <Link to="/pricing" className="hidden sm:inline-flex text-sm text-foreground/80 hover:text-foreground transition-colors">
            {language === 'ro' ? 'Planuri & Prețuri' : 'Plans & Pricing'}
          </Link>
          <LanguageSwitcher inline className="ml-2" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
