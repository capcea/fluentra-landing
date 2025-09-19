import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage, LanguageSwitcher } from './LanguageSwitcher';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const { language } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group" onClick={closeMobileMenu}>
          <div className="h-8 w-8 rounded bg-primary/15 flex items-center justify-center text-primary font-bold group-hover:bg-primary/20 transition-colors">F</div>
          <span className="text-lg font-semibold tracking-tight group-hover:text-primary transition-colors">Fluentra</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2 lg:gap-4">
          <Link to="/how-it-works" className="text-sm text-foreground/80 hover:text-foreground transition-colors">
            {language === 'ro' ? 'Cum funcționează' : 'How it works'}
          </Link>
          <Link to="/benefits" className="text-sm text-foreground/80 hover:text-foreground transition-colors">
            {language === 'ro' ? 'Beneficii' : 'Benefits'}
          </Link>
          <Link to="/pricing" className="text-sm text-foreground/80 hover:text-foreground transition-colors">
            {language === 'ro' ? 'Planuri & Prețuri' : 'Plans & Pricing'}
          </Link>
          <LanguageSwitcher inline className="ml-2" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher inline className="mr-2" />
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMobileMenu}
            className="p-2"
            aria-label={language === 'ro' ? 'Deschide meniul' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur border-t border-border/60">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <Link
              to="/how-it-works"
              className="block text-sm text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={closeMobileMenu}
            >
              {language === 'ro' ? 'Cum funcționează' : 'How it works'}
            </Link>
            <Link
              to="/benefits"
              className="block text-sm text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={closeMobileMenu}
            >
              {language === 'ro' ? 'Beneficii' : 'Benefits'}
            </Link>
            <Link
              to="/pricing"
              className="block text-sm text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={closeMobileMenu}
            >
              {language === 'ro' ? 'Planuri & Prețuri' : 'Plans & Pricing'}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
