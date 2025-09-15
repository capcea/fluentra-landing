import React from 'react';
import { useLanguage } from './LanguageSwitcher';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  TrendingUp, 
  Clock, 
  Target, 
  BarChart3, 
  Zap, 
  Shield,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const content = {
  ro: {
    hero: {
      title: "Fluentra",
      subtitle: "Redefinim distribuția prin automatizare inteligentă",
      description: "Transformă procesele manuale în avantaje competitive. Automatizează comenzile, gestionează stocurile și crește eficiența operațională cu o singură platformă.",
      cta: "Începe Transformarea",
      contact: "Contactează-ne"
    },
    problem: {
      title: "Contextul Pieței",
      description: "Distribuitorii consumă resurse esențiale gestionând manual comenzile, răspunzând la numeroase emailuri și corectând erori recurente. Aceste procese ineficiente se traduc în timp pierdut, clienți nemulțumiți și oportunități de vânzare ratate."
    },
    benefits: {
      title: "Beneficii Majore",
      items: [
        {
          icon: TrendingUp,
          title: "Optimizare Costuri",
          description: "Reducere vizibilă a pierderilor prin eliminarea risipei și o mai bună planificare."
        },
        {
          icon: Target,
          title: "Focus pe Dezvoltare", 
          description: "Timp câștigat pentru echipele de vânzări și management, care pot investi în relații și extindere."
        },
        {
          icon: Zap,
          title: "Eficiență Operațională",
          description: "Reducere a timpului pierdut pe procese manuale. Automatizarea aduce un flux mai rapid și mai sigur."
        },
        {
          icon: BarChart3,
          title: "Creștere Vânzări",
          description: "Creștere a vânzărilor prin evitarea situațiilor de \"stoc epuizat\". Mai multe comenzi onorate complet."
        }
      ]
    },
    features: {
      title: "Funcționalități Esențiale",
      items: [
        "Sistem de alocare automată a stocurilor",
        "Gestionarea comenzilor în timp real",
        "Notificări automate pentru stocurile scăzute", 
        "Integrare directă cu POS-uri și sisteme de contabilitate",
        "Analiză predictivă pentru cererea viitoare",
        "Control centralizat într-un singur dashboard"
      ]
    },
    impact: {
      title: "Impact Final",
      description: "Pentru integrarea platformei, distribuitorii câștigă control total asupra comenzilor și stocurilor, reduc costurile și cresc satisfacția clienților.",
      stats: [
        { value: "40%", label: "Reducere timp pierdut" },
        { value: "30%", label: "Reducere costuri operare" }
      ]
    },
    closing: {
      title: "Mulțumim!",
      description: "Distribuția nu mai trebuie să fie definită de procese manuale, erori și pierderi de timp. Platforma noastră oferă claritate, viteză și control deplin asupra întregului flux operațional."
    },
    contact: {
      phone: "+123-456-7890",
      email: "contact@fluentra.ro",
      address: "123 Anywhere St., Any City, ST 12345",
      ready: "Suntem gata să te ajutăm"
    }
  },
  en: {
    hero: {
      title: "Fluentra", 
      subtitle: "Redefining distribution through intelligent automation",
      description: "Transform manual processes into competitive advantages. Automate orders, manage inventory, and increase operational efficiency with a single platform.",
      cta: "Start Transformation",
      contact: "Contact Us"
    },
    problem: {
      title: "Market Context",
      description: "Distributors consume essential resources by manually managing orders, responding to numerous emails, and correcting recurring errors. These inefficient processes translate into lost time, dissatisfied customers, and missed sales opportunities."
    },
    benefits: {
      title: "Major Benefits",
      items: [
        {
          icon: TrendingUp,
          title: "Cost Optimization",
          description: "Visible reduction of losses through waste elimination and better planning."
        },
        {
          icon: Target,
          title: "Focus on Growth",
          description: "Time gained for sales and management teams to invest in relationships and expansion."
        },
        {
          icon: Zap,
          title: "Operational Efficiency", 
          description: "Reduction of time lost on manual processes. Automation brings faster and safer flow."
        },
        {
          icon: BarChart3,
          title: "Sales Growth",
          description: "Sales increase by avoiding out of stock situations. More fully honored orders."
        }
      ]
    },
    features: {
      title: "Essential Features",
      items: [
        "Automatic stock allocation system",
        "Real-time order management",
        "Automatic notifications for low stock",
        "Direct integration with POS and accounting systems", 
        "Predictive analysis for future demand",
        "Centralized control in a single dashboard"
      ]
    },
    impact: {
      title: "Final Impact", 
      description: "Through platform integration, distributors gain total control over orders and inventory, reduce costs and increase customer satisfaction.",
      stats: [
        { value: "40%", label: "Reduction in lost time" },
        { value: "30%", label: "Reduction in operating costs" }
      ]
    },
    closing: {
      title: "Thank You!",
      description: "Distribution no longer needs to be defined by manual processes, errors and time losses. Our platform offers clarity, speed and full control over the entire operational flow."
    },
    contact: {
      phone: "+123-456-7890", 
      email: "contact@fluentra.com",
      address: "123 Anywhere St., Any City, ST 12345",
      ready: "We are ready to assist you"
    }
  }
};

export const FluentraLanding: React.FC = () => {
  const { language } = useLanguage();
  const t = content[language];

  const handleContactClick = () => {
    window.location.href = `mailto:${t.contact.email}`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${t.contact.phone}`;
  };

  const handleGetStarted = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-primary/10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%234F46E5%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold text-primary mb-6 tracking-tight">
            {t.hero.title}
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground/90 mb-8 max-w-4xl mx-auto">
            {t.hero.subtitle}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            {t.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleGetStarted}
              size="lg" 
              className="bg-gradient-to-r from-primary to-primary-dark hover:shadow-glow transition-all duration-300 transform hover:scale-105 text-lg px-8 py-6"
            >
              {t.hero.cta}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              onClick={handleContactClick}
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
            >
              {t.hero.contact}
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              {t.problem.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.problem.description}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
            {t.benefits.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.benefits.items.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="border-border hover:shadow-card transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
            {t.features.title}
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.features.items.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            {t.impact.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            {t.impact.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center max-w-2xl mx-auto">
            {t.impact.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing & Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-primary to-primary-dark text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            {t.closing.title}
          </h2>
          <p className="text-lg mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
            {t.closing.description}
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-6">{t.contact.ready}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Button
                onClick={handlePhoneClick}
                variant="secondary"
                className="bg-white/20 hover:bg-white/30 text-primary-foreground border-white/20"
              >
                <Phone className="w-4 h-4 mr-2" />
                {t.contact.phone}
              </Button>
              <Button
                onClick={handleContactClick}
                variant="secondary"
                className="bg-white/20 hover:bg-white/30 text-primary-foreground border-white/20"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email
              </Button>
              <div className="flex items-center justify-center text-sm opacity-80">
                <MapPin className="w-4 h-4 mr-2" />
                {t.contact.address}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};