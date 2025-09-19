import { useLanguage } from '@/components/LanguageSwitcher';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const content = {
  ro: {
    title: "Politica de cookie-uri",
    lastUpdated: "Ultima actualizare: 1 ianuarie 2024",
    sections: [
      {
        title: "1. Ce sunt cookie-urile",
        content: "Cookie-urile sunt fișiere text mici care sunt stocate pe dispozitivul dumneavoastră când vizitați un site web. Ele permit site-ului să-și amintească acțiunile și preferințele dumneavoastră pentru o perioadă de timp, astfel încât să nu trebuiască să le reintroduceți de fiecare dată când reveniți la site."
      },
      {
        title: "2. Tipuri de cookie-uri utilizate",
        content: "Utilizăm următoarele tipuri de cookie-uri: Cookie-uri strict necesare (pentru funcționarea de bază a site-ului), Cookie-uri de performanță (pentru analiza utilizării site-ului), Cookie-uri de funcționalitate (pentru a îmbunătăți experiența utilizatorului), și Cookie-uri de marketing (pentru publicitate țintită)."
      },
      {
        title: "3. Cookie-uri strict necesare",
        content: "Aceste cookie-uri sunt esențiale pentru funcționarea site-ului și nu pot fi dezactivate. Ele includ: cookie-uri de sesiune pentru navigarea site-ului, cookie-uri de securitate pentru protejarea datelor, și cookie-uri pentru preferințele de limbă și regiune."
      },
      {
        title: "4. Cookie-uri de performanță",
        content: "Aceste cookie-uri ne ajută să înțelegem cum vizitatorii interacționează cu site-ul nostru, colectând informații anonime. Folosim servicii precum Google Analytics pentru a analiza traficul și a îmbunătăți performanța site-ului."
      },
      {
        title: "5. Cookie-uri de funcționalitate",
        content: "Aceste cookie-uri permit site-ului să-și amintească alegerile pe care le faceți (cum ar fi numele de utilizator, limba sau regiunea) și să furnizeze funcții îmbunătățite și mai personale. Informațiile colectate de aceste cookie-uri pot fi anonimizate."
      },
      {
        title: "6. Cookie-uri de marketing",
        content: "Aceste cookie-uri sunt folosite pentru a afișa anunțuri relevante pentru dumneavoastră și interesele dumneavoastră. Ele sunt, de asemenea, folosite pentru a limita numărul de ori când vedeți un anunț și pentru a ajuta la măsurarea eficacității campaniilor publicitare."
      },
      {
        title: "7. Gestionarea cookie-urilor",
        content: "Puteți controla și/sau șterge cookie-urile după cum doriți. Puteți șterge toate cookie-urile care sunt deja pe computerul dumneavoastră și puteți configura majoritatea browserelor pentru a le împiedica să fie plasate. Dacă faceți acest lucru, este posibil să trebuiască să ajustați manual unele preferințe de fiecare dată când vizitați un site."
      },
      {
        title: "8. Cookie-uri terțe părți",
        content: "Site-ul nostru poate conține cookie-uri de la terțe părți, cum ar fi Google Analytics, Facebook, sau alte servicii de analiză. Aceste cookie-uri sunt supuse politicilor de confidențialitate ale respectivelor terțe părți și nu le controlăm direct."
      },
      {
        title: "9. Contact",
        content: "Pentru întrebări despre politica noastră de cookie-uri, contactați-ne la: email: privacy@fluentra.ro, telefon: +40 123 456 789."
      }
    ]
  },
  en: {
    title: "Cookie Policy",
    lastUpdated: "Last updated: January 1, 2024",
    sections: [
      {
        title: "1. What are cookies",
        content: "Cookies are small text files that are stored on your device when you visit a website. They allow the site to remember your actions and preferences for a period of time, so you don't have to re-enter them every time you return to the site."
      },
      {
        title: "2. Types of cookies we use",
        content: "We use the following types of cookies: Strictly necessary cookies (for basic site functionality), Performance cookies (for site usage analysis), Functionality cookies (to improve user experience), and Marketing cookies (for targeted advertising)."
      },
      {
        title: "3. Strictly necessary cookies",
        content: "These cookies are essential for the website to function and cannot be disabled. They include: session cookies for site navigation, security cookies for data protection, and cookies for language and region preferences."
      },
      {
        title: "4. Performance cookies",
        content: "These cookies help us understand how visitors interact with our website by collecting anonymous information. We use services like Google Analytics to analyze traffic and improve site performance."
      },
      {
        title: "5. Functionality cookies",
        content: "These cookies allow the website to remember choices you make (such as username, language or region) and provide enhanced, more personal features. Information collected by these cookies may be anonymized."
      },
      {
        title: "6. Marketing cookies",
        content: "These cookies are used to display advertisements relevant to you and your interests. They are also used to limit the number of times you see an advertisement and to help measure the effectiveness of advertising campaigns."
      },
      {
        title: "7. Managing cookies",
        content: "You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, you may need to manually adjust some preferences every time you visit a site."
      },
      {
        title: "8. Third-party cookies",
        content: "Our website may contain cookies from third parties, such as Google Analytics, Facebook, or other analytics services. These cookies are subject to the privacy policies of the respective third parties and we do not directly control them."
      },
      {
        title: "9. Contact",
        content: "For questions about our cookie policy, contact us at: email: privacy@fluentra.com, phone: +40 123 456 789."
      }
    ]
  }
};

const CookiePolicyContent = () => {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t.title}
          </h1>
          <p className="text-muted-foreground mb-12">
            {t.lastUpdated}
          </p>
          
          <div className="prose prose-lg max-w-none">
            {t.sections.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  {section.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 pt-8 border-t border-border">
            <Link to="/" className="text-primary hover:underline">
              {language === 'ro' ? '← Înapoi la pagina principală' : '← Back to homepage'}
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const CookiePolicy = () => {
  return <CookiePolicyContent />;
};

export default CookiePolicy;
