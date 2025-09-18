import { LanguageProvider } from '@/components/LanguageSwitcher';
import { FluentraLanding } from '@/components/FluentraLanding';
import Navbar from '@/components/Navbar';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="relative">
        <Navbar />
        <FluentraLanding />
      </div>
    </LanguageProvider>
  );
};

export default Index;
