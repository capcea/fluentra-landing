import { useLanguage } from '@/components/LanguageSwitcher';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const content = {
  ro: {
    title: "Politica de confidențialitate",
    lastUpdated: "Ultima actualizare: 1 ianuarie 2024",
    sections: [
      {
        title: "1. Informații generale",
        content: "Fluentra SRL (\"compania\", \"noi\", \"niște\") respectă confidențialitatea și protejează datele personale ale utilizatorilor serviciilor noastre. Această politică de confidențialitate descrie modul în care colectăm, utilizăm, stocăm și protejăm informațiile dumneavoastră personale."
      },
      {
        title: "2. Datele pe care le colectăm",
        content: "Colectăm următoarele tipuri de informații: date de identificare (nume, adresă de email, număr de telefon), date de utilizare (modul în care utilizați serviciile noastre), date tehnice (adresa IP, tipul de browser, sistemul de operare), și date de comunicare (mesajele trimise prin formularul de contact)."
      },
      {
        title: "3. Cum utilizăm datele",
        content: "Utilizăm datele dumneavoastră pentru: furnizarea și îmbunătățirea serviciilor noastre, comunicarea cu dumneavoastră, procesarea comenzilor și facturilor, respectarea obligațiilor legale, și protejarea drepturilor noastre și ale terților."
      },
      {
        title: "4. Partajarea datelor",
        content: "Nu vindem, nu închiriem și nu partajăm datele dumneavoastră personale cu terțe părți, cu excepția cazurilor în care este necesar pentru furnizarea serviciilor noastre sau când legea ne impune acest lucru."
      },
      {
        title: "5. Securitatea datelor",
        content: "Implementăm măsuri de securitate tehnice și organizaționale adecvate pentru a proteja datele dumneavoastră personale împotriva accesului neautorizat, modificării, divulgării sau distrugerii."
      },
      {
        title: "6. Drepturile dumneavoastră",
        content: "Aveți dreptul la: accesul la datele dumneavoastră personale, rectificarea datelor inexacte, ștergerea datelor, restricționarea procesării, portabilitatea datelor, și opoziția față de procesare. Pentru a exercita aceste drepturi, contactați-ne la privacy@fluentra.ro."
      },
      {
        title: "7. Contact",
        content: "Pentru întrebări despre această politică de confidențialitate, contactați-ne la: Fluentra SRL, email: privacy@fluentra.ro, telefon: +40 123 456 789."
      }
    ]
  },
  en: {
    title: "Privacy Policy",
    lastUpdated: "Last updated: January 1, 2024",
    sections: [
      {
        title: "1. General Information",
        content: "Fluentra SRL (\"company\", \"we\", \"us\") respects privacy and protects personal data of users of our services. This privacy policy describes how we collect, use, store and protect your personal information."
      },
      {
        title: "2. Data We Collect",
        content: "We collect the following types of information: identification data (name, email address, phone number), usage data (how you use our services), technical data (IP address, browser type, operating system), and communication data (messages sent through the contact form)."
      },
      {
        title: "3. How We Use Data",
        content: "We use your data to: provide and improve our services, communicate with you, process orders and invoices, comply with legal obligations, and protect our rights and those of third parties."
      },
      {
        title: "4. Data Sharing",
        content: "We do not sell, rent or share your personal data with third parties, except when necessary to provide our services or when the law requires us to do so."
      },
      {
        title: "5. Data Security",
        content: "We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, modification, disclosure or destruction."
      },
      {
        title: "6. Your Rights",
        content: "You have the right to: access your personal data, rectify inaccurate data, delete data, restrict processing, data portability, and object to processing. To exercise these rights, contact us at privacy@fluentra.com."
      },
      {
        title: "7. Contact",
        content: "For questions about this privacy policy, contact us at: Fluentra SRL, email: privacy@fluentra.com, phone: +40 123 456 789."
      }
    ]
  }
};

const PrivacyPolicyContent = () => {
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

const PrivacyPolicy = () => {
  return <PrivacyPolicyContent />;
};

export default PrivacyPolicy;
