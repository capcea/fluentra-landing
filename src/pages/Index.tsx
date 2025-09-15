import { LanguageProvider, LanguageSwitcher } from '@/components/LanguageSwitcher';
import { FluentraLanding } from '@/components/FluentraLanding';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="relative">
        <LanguageSwitcher />
        <FluentraLanding />
      </div>
    </LanguageProvider>
  );
};

export default Index;
