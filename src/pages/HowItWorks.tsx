import { Link } from 'react-router-dom';
import { useLanguage, LanguageProvider } from '@/components/LanguageSwitcher';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, FileText, Truck, ArrowRight, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { ContactModalProvider, ContactModal, useContactModal } from '@/components/ContactModal';

const content = {
  ro: {
    title: "Procesul Fluentra în 3 pași",
    subtitle: "Descoperă cum transformăm distribuția prin automatizare inteligentă",
    steps: [
      {
        number: "1",
        icon: ShoppingCart,
        title: "Comandă digitală",
        description: "Clienții plasează comenzi direct prin platforma ta digitală sau prin integrarea cu POS-ul existent. Comenzile sunt procesate automat și validate instant.",
        details: [
          "Integrare cu POS-uri populare",
          "Validare automată a comenzilor",
          "Notificări în timp real",
          "Istoric complet al comenzilor"
        ]
      },
      {
        number: "2", 
        icon: FileText,
        title: "Facturi + stocuri actualizate",
        description: "Sistemul generează automat facturile și actualizează stocurile în timp real. Nu mai există erori de inventar sau facturi duplicate.",
        details: [
          "Generare automată de facturi",
          "Actualizare stocuri în timp real",
          "Eliminarea erorilor umane",
          "Sincronizare cu contabilitatea"
        ]
      },
      {
        number: "3",
        icon: Truck,
        title: "Livrare rapidă & client fericit",
        description: "Comanda este pregătită automat pentru livrare, cu tracking complet și notificări pentru client. Satisfacția clienților crește semnificativ.",
        details: [
          "Pregătire automată pentru livrare",
          "Tracking complet al comenzilor",
          "Notificări automate pentru client",
          "Raportare performanță livrări"
        ]
      }
    ],
    cta: {
      title: "Vezi Fluentra în acțiune",
      subtitle: "Rezervă o demonstrație gratuită și descoperă cum poți transforma distribuția ta",
      button: "Rezervă demonstrație"
    },
    benefits: [
      "Reducere cu 60% a timpului de procesare",
      "Eliminarea erorilor de inventar",
      "Creștere cu 25% a satisfacției clienților",
      "Integrare în 24 de ore"
    ]
  },
  en: {
    title: "The Fluentra process in 3 steps",
    subtitle: "Discover how we transform distribution through intelligent automation",
    steps: [
      {
        number: "1",
        icon: ShoppingCart,
        title: "Digital order",
        description: "Customers place orders directly through your digital platform or through integration with existing POS. Orders are processed automatically and validated instantly.",
        details: [
          "Integration with popular POS systems",
          "Automatic order validation",
          "Real-time notifications",
          "Complete order history"
        ]
      },
      {
        number: "2",
        icon: FileText,
        title: "Invoices + updated inventory",
        description: "The system automatically generates invoices and updates inventory in real-time. No more inventory errors or duplicate invoices.",
        details: [
          "Automatic invoice generation",
          "Real-time inventory updates",
          "Elimination of human errors",
          "Accounting synchronization"
        ]
      },
      {
        number: "3",
        icon: Truck,
        title: "Fast delivery & happy customer",
        description: "The order is automatically prepared for delivery, with complete tracking and customer notifications. Customer satisfaction increases significantly.",
        details: [
          "Automatic delivery preparation",
          "Complete order tracking",
          "Automatic customer notifications",
          "Delivery performance reporting"
        ]
      }
    ],
    cta: {
      title: "See Fluentra in action",
      subtitle: "Book a free demo and discover how you can transform your distribution",
      button: "Book demo"
    },
    benefits: [
      "60% reduction in processing time",
      "Elimination of inventory errors",
      "25% increase in customer satisfaction",
      "Integration in 24 hours"
    ]
  }
};

const HowItWorksContent = () => {
  const { language } = useLanguage();
  const { openModal } = useContactModal();
  const t = content[language];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 tracking-tight">
            {t.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {t.steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="relative border-border hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-8">
                    {/* Step Number */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                      {step.number}
                    </div>
                    
                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all duration-300">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    
                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-foreground mb-4">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {step.description}
                      </p>
                      
                      {/* Details */}
                      <div className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center gap-2 text-sm text-foreground">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {t.steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <step.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
                  {index < t.steps.length - 1 && (
                    <ArrowRight className="w-6 h-6 text-muted-foreground hidden md:block absolute right-[-2rem] top-1/2 transform -translate-y-1/2" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              {language === 'ro' ? 'Rezultatele procesului' : 'Process results'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t.cta.title}
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            {t.cta.subtitle}
          </p>
          <button 
            onClick={openModal}
            className="inline-flex items-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors"
          >
            {t.cta.button}
          </button>
        </div>
      </section>

      {/* Back to Home */}
      <div className="py-8 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <Link to="/" className="text-primary hover:underline">
            {language === 'ro' ? '← Înapoi la pagina principală' : '← Back to homepage'}
          </Link>
        </div>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <LanguageProvider>
      <ContactModalProvider>
        <HowItWorksContent />
        <ContactModal language="ro" />
      </ContactModalProvider>
    </LanguageProvider>
  );
};

export default HowItWorks;
