import { useLanguage } from '@/components/LanguageSwitcher';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const content = {
  ro: {
    title: "GDPR - Protecția datelor personale",
    lastUpdated: "Ultima actualizare: 1 ianuarie 2024",
    sections: [
      {
        title: "1. Informații despre operatorul de date",
        content: "Fluentra SRL, cu sediul în România, este operatorul de date personale conform Regulamentului General privind Protecția Datelor (GDPR). Contact: gdpr@fluentra.ro, telefon: +40 123 456 789."
      },
      {
        title: "2. Baza legală pentru procesarea datelor",
        content: "Procesăm datele dumneavoastră personale pe baza: execuției contractului de servicii, consimțământului dumneavoastră, interesului legitim pentru îmbunătățirea serviciilor, și obligațiilor legale impuse de legislația română."
      },
      {
        title: "3. Categorii de date personale",
        content: "Procesăm următoarele categorii de date: date de identificare (nume, prenume, CNP), date de contact (adresă, telefon, email), date de utilizare (comenzi, facturi, rapoarte), date tehnice (IP, cookies, device info), și date de comunicare (mesaje, suport tehnic)."
      },
      {
        title: "4. Scopurile procesării",
        content: "Datele sunt procesate pentru: furnizarea serviciilor de distribuție, procesarea comenzilor și facturilor, comunicarea cu clienții, îmbunătățirea serviciilor, respectarea obligațiilor fiscale și contabile, și protejarea drepturilor noastre."
      },
      {
        title: "5. Perioada de păstrare",
        content: "Datele sunt păstrate: pentru durata contractului plus 3 ani (date contractuale), 10 ani (date fiscale și contabile), până la retragerea consimțământului (date de marketing), și conform cerințelor legale specifice fiecărei categorii de date."
      },
      {
        title: "6. Drepturile dumneavoastră",
        content: "Conform GDPR, aveți dreptul la: accesul la datele personale, rectificarea datelor inexacte, ștergerea datelor (\"dreptul de a fi uitat\"), restricționarea procesării, portabilitatea datelor, opoziția față de procesare, și retragerea consimțământului."
      },
      {
        title: "7. Transferul datelor",
        content: "Datele pot fi transferate către terțe părți doar în următoarele cazuri: furnizori de servicii cloud (cu garanții de protecție), autorități competente (la cerere legală), și parteneri de business (cu consimțământul dumneavoastră)."
      },
      {
        title: "8. Securitatea datelor",
        content: "Implementăm măsuri de securitate: criptarea datelor în tranzit și la rest, controlul accesului strict, monitorizarea securității 24/7, backup-uri regulate, și formarea personalului privind protecția datelor."
      },
      {
        title: "9. Contact pentru GDPR",
        content: "Pentru exercitarea drepturilor sau întrebări despre protecția datelor: email: gdpr@fluentra.ro, telefon: +40 123 456 789, adresă: Fluentra SRL, str. Exemplu nr. 1, București, România."
      }
    ]
  },
  en: {
    title: "GDPR - Personal Data Protection",
    lastUpdated: "Last updated: January 1, 2024",
    sections: [
      {
        title: "1. Data Controller Information",
        content: "Fluentra SRL, based in Romania, is the personal data controller under the General Data Protection Regulation (GDPR). Contact: gdpr@fluentra.com, phone: +40 123 456 789."
      },
      {
        title: "2. Legal Basis for Data Processing",
        content: "We process your personal data based on: execution of the service contract, your consent, legitimate interest in improving services, and legal obligations imposed by Romanian legislation."
      },
      {
        title: "3. Categories of Personal Data",
        content: "We process the following categories of data: identification data (name, surname, ID number), contact data (address, phone, email), usage data (orders, invoices, reports), technical data (IP, cookies, device info), and communication data (messages, technical support)."
      },
      {
        title: "4. Processing Purposes",
        content: "Data is processed for: providing distribution services, processing orders and invoices, communicating with customers, improving services, complying with fiscal and accounting obligations, and protecting our rights."
      },
      {
        title: "5. Data Retention Period",
        content: "Data is retained: for the duration of the contract plus 3 years (contractual data), 10 years (fiscal and accounting data), until consent withdrawal (marketing data), and according to specific legal requirements for each data category."
      },
      {
        title: "6. Your Rights",
        content: "Under GDPR, you have the right to: access personal data, rectify inaccurate data, delete data (\"right to be forgotten\"), restrict processing, data portability, object to processing, and withdraw consent."
      },
      {
        title: "7. Data Transfer",
        content: "Data may be transferred to third parties only in the following cases: cloud service providers (with protection guarantees), competent authorities (upon legal request), and business partners (with your consent)."
      },
      {
        title: "8. Data Security",
        content: "We implement security measures: data encryption in transit and at rest, strict access control, 24/7 security monitoring, regular backups, and staff training on data protection."
      },
      {
        title: "9. GDPR Contact",
        content: "To exercise rights or ask questions about data protection: email: gdpr@fluentra.com, phone: +40 123 456 789, address: Fluentra SRL, Example St. No. 1, Bucharest, Romania."
      }
    ]
  }
};

const GDPRContent = () => {
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

const GDPR = () => {
  return <GDPRContent />;
};

export default GDPR;
