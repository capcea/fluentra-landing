import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageSwitcher';

const Footer: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    ro: {
      copyright: "© 2024 Fluentra SRL. Toate drepturile rezervate.",
      privacy: "Politica de confidențialitate",
      terms: "Termeni și condiții",
      gdpr: "GDPR",
      cookies: "Politica de cookie-uri"
    },
    en: {
      copyright: "© 2024 Fluentra SRL. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
      gdpr: "GDPR",
      cookies: "Cookie Policy"
    }
  };

  const t = content[language];

  return (
    <footer className="bg-muted/30 border-t border-border/60 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            {t.copyright}
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link to="/privacy-policy" className="text-muted-foreground hover:text-foreground transition-colors">
              {t.privacy}
            </Link>
            <Link to="/terms-and-conditions" className="text-muted-foreground hover:text-foreground transition-colors">
              {t.terms}
            </Link>
            <Link to="/gdpr" className="text-muted-foreground hover:text-foreground transition-colors">
              {t.gdpr}
            </Link>
            <Link to="/cookie-policy" className="text-muted-foreground hover:text-foreground transition-colors">
              {t.cookies}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
