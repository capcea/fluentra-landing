import { useLanguage } from '@/components/LanguageSwitcher';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const content = {
  ro: {
    title: "Termeni și condiții",
    lastUpdated: "Ultima actualizare: 1 ianuarie 2024",
    sections: [
      {
        title: "1. Acceptarea termenilor",
        content: "Prin accesarea și utilizarea serviciilor Fluentra, vă angajați să respectați acești termeni și condiții. Dacă nu sunteți de acord cu oricare dintre termenii prezentați, vă rugăm să nu utilizați serviciile noastre."
      },
      {
        title: "2. Descrierea serviciilor",
        content: "Fluentra oferă o platformă de automatizare pentru distribuție care include: gestionarea comenzilor, gestionarea stocurilor, generarea facturilor, raportarea și analiza datelor. Serviciile sunt furnizate prin intermediul unei platforme software cloud."
      },
      {
        title: "3. Obligațiile utilizatorului",
        content: "Utilizatorul se angajează să: furnizeze informații corecte și actualizate, utilizeze serviciile în conformitate cu legea, să nu încerce să compromită securitatea platformei, să respecte drepturile de proprietate intelectuală, și să plătească tarifele convenite la timp."
      },
      {
        title: "4. Obligațiile Fluentra",
        content: "Fluentra se angajează să: furnizeze serviciile conform specificațiilor tehnice, să mențină confidențialitatea datelor utilizatorului, să ofere suport tehnic conform planului ales, să respecte termenii de disponibilitate specificați, și să protejeze datele utilizatorului."
      },
      {
        title: "5. Proprietatea intelectuală",
        content: "Toate drepturile de proprietate intelectuală asupra platformei Fluentra, inclusiv software-ul, design-ul, conținutul și marca, aparțin Fluentra SRL. Utilizatorul nu poate copia, modifica sau distribui platforma fără acordul scris al Fluentra."
      },
      {
        title: "6. Limitarea răspunderii",
        content: "Fluentra nu va fi răspunzătoare pentru daune indirecte, consecvențiale sau punitive rezultate din utilizarea serviciilor. Răspunderea totală a Fluentra este limitată la suma plătită de utilizator în ultimele 12 luni pentru servicii."
      },
      {
        title: "7. Rezilierea contractului",
        content: "Oricare dintre părți poate rezilia contractul cu o notificare prealabilă de 30 de zile. Fluentra poate rezilia imediat contractul în cazul încălcării termenilor de către utilizator. La reziliere, utilizatorul va avea acces la datele sale timp de 30 de zile."
      },
      {
        title: "8. Legea aplicabilă",
        content: "Acești termeni și condiții sunt guvernați de legea română. Orice dispută va fi soluționată de instanțele competente din România."
      }
    ]
  },
  en: {
    title: "Terms and Conditions",
    lastUpdated: "Last updated: January 1, 2024",
    sections: [
      {
        title: "1. Acceptance of Terms",
        content: "By accessing and using Fluentra services, you agree to be bound by these terms and conditions. If you do not agree with any of the terms presented, please do not use our services."
      },
      {
        title: "2. Service Description",
        content: "Fluentra provides a distribution automation platform that includes: order management, inventory management, invoice generation, reporting and data analysis. Services are provided through a cloud-based software platform."
      },
      {
        title: "3. User Obligations",
        content: "The user agrees to: provide accurate and up-to-date information, use services in accordance with the law, not attempt to compromise platform security, respect intellectual property rights, and pay agreed fees on time."
      },
      {
        title: "4. Fluentra Obligations",
        content: "Fluentra commits to: provide services according to technical specifications, maintain user data confidentiality, provide technical support according to the chosen plan, meet specified availability terms, and protect user data."
      },
      {
        title: "5. Intellectual Property",
        content: "All intellectual property rights to the Fluentra platform, including software, design, content and brand, belong to Fluentra SRL. The user may not copy, modify or distribute the platform without written consent from Fluentra."
      },
      {
        title: "6. Limitation of Liability",
        content: "Fluentra will not be liable for indirect, consequential or punitive damages resulting from the use of services. Fluentra's total liability is limited to the amount paid by the user in the last 12 months for services."
      },
      {
        title: "7. Contract Termination",
        content: "Either party may terminate the contract with 30 days prior notice. Fluentra may terminate immediately in case of breach of terms by the user. Upon termination, the user will have access to their data for 30 days."
      },
      {
        title: "8. Applicable Law",
        content: "These terms and conditions are governed by Romanian law. Any dispute will be resolved by the competent courts in Romania."
      }
    ]
  }
};

const TermsAndConditionsContent = () => {
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

const TermsAndConditions = () => {
  return <TermsAndConditionsContent />;
};

export default TermsAndConditions;
