import { Link } from 'react-router-dom';
import { useLanguage } from '@/components/LanguageSwitcher';
import { useContactModal } from '@/components/ContactModal';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Clock, Target, BarChart3, Users, Shield } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const content = {
  ro: {
    title: "De ce să alegi Fluentra",
    subtitle: "Transformă distribuția prin automatizare inteligentă",
    benefits: [
      {
        icon: TrendingUp,
        title: "Optimizare Costuri",
        description: "Reducere vizibilă a pierderilor prin eliminarea risipei și o mai bună planificare.",
        example: "Retururi reduse cu 60% prin alocarea automată corectă a stocurilor",
        stat: "60%",
        statLabel: "Reducere retururi"
      },
      {
        icon: Clock,
        title: "Eficiență Operațională", 
        description: "Reducere a timpului pierdut pe procese manuale. Automatizarea aduce un flux mai rapid și mai sigur.",
        example: "Timp economisit: 4 ore/zi pentru gestionarea comenzilor",
        stat: "4h",
        statLabel: "Timp economisit/zi"
      },
      {
        icon: BarChart3,
        title: "Creștere Vânzări",
        description: "Creștere a vânzărilor prin evitarea situațiilor de \"stoc epuizat\". Mai multe comenzi onorate complet.",
        example: "Evitarea stocurilor epuizate crește vânzările cu 25%",
        stat: "25%",
        statLabel: "Creștere vânzări"
      },
      {
        icon: Users,
        title: "Satisfacție Clienți",
        description: "Livrări corecte și în timp, consolidând încrederea și loialitatea clienților.",
        example: "Livrări corecte în 98% din cazuri prin automatizare",
        stat: "98%",
        statLabel: "Livrări corecte"
      },
      {
        icon: Target,
        title: "Focus pe Dezvoltare",
        description: "Timp câștigat pentru echipele de vânzări și management, care pot investi în relații și extindere.",
        example: "Echipele se pot concentra pe dezvoltare în loc de procese manuale",
        stat: "80%",
        statLabel: "Timp pentru dezvoltare"
      },
      {
        icon: Shield,
        title: "Siguranță Operațională",
        description: "Eliminarea erorilor umane și dublărilor prin automatizare inteligentă.",
        example: "Zero erori în procesarea comenzilor prin automatizare",
        stat: "0%",
        statLabel: "Erori de procesare"
      }
    ]
  },
  en: {
    title: "Why Choose Fluentra",
    subtitle: "Transform distribution through intelligent automation",
    benefits: [
      {
        icon: TrendingUp,
        title: "Cost Optimization",
        description: "Visible reduction of losses through waste elimination and better planning.",
        example: "60% reduction in returns through correct automatic stock allocation",
        stat: "60%",
        statLabel: "Reduced returns"
      },
      {
        icon: Clock,
        title: "Operational Efficiency",
        description: "Reduction of time lost on manual processes. Automation brings faster and safer flow.",
        example: "Time saved: 4 hours/day for order management",
        stat: "4h",
        statLabel: "Time saved/day"
      },
      {
        icon: BarChart3,
        title: "Sales Growth",
        description: "Sales increase by avoiding out of stock situations. More fully honored orders.",
        example: "Avoiding stockouts increases sales by 25%",
        stat: "25%",
        statLabel: "Sales increase"
      },
      {
        icon: Users,
        title: "Customer Satisfaction",
        description: "Correct and timely deliveries, strengthening customer trust and loyalty.",
        example: "Correct deliveries in 98% of cases through automation",
        stat: "98%",
        statLabel: "Correct deliveries"
      },
      {
        icon: Target,
        title: "Focus on Growth",
        description: "Time gained for sales and management teams to invest in relationships and expansion.",
        example: "Teams can focus on development instead of manual processes",
        stat: "80%",
        statLabel: "Time for growth"
      },
      {
        icon: Shield,
        title: "Operational Safety",
        description: "Elimination of human errors and duplicates through intelligent automation.",
        example: "Zero errors in order processing through automation",
        stat: "0%",
        statLabel: "Processing errors"
      }
    ]
  }
};

const BenefitsContent = () => {
  const { language } = useLanguage();
  const { openModal } = useContactModal();
  const t = content[language];

  const handleContactClick = () => {
    openModal();
  };

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

      {/* Benefits Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="border-border hover:shadow-card transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all duration-300 flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-muted-foreground mb-3 leading-relaxed">
                          {benefit.description}
                        </p>
                        <div className="bg-muted/50 rounded-lg p-3 mb-3">
                          <p className="text-sm text-foreground font-medium">
                            {benefit.example}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-2xl font-bold text-primary">
                            {benefit.stat}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {benefit.statLabel}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === 'ro' ? 'Gata să începi transformarea?' : 'Ready to start your transformation?'}
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            {language === 'ro' 
              ? 'Contactează-ne pentru a descoperi cum Fluentra poate transforma distribuția ta.'
              : 'Contact us to discover how Fluentra can transform your distribution.'}
          </p>
          <button 
            onClick={handleContactClick}
            className="inline-flex items-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors"
          >
            {language === 'ro' ? 'Contactează-ne' : 'Contact Us'}
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
      <Footer />
    </div>
  );
};

const Benefits = () => {
  return <BenefitsContent />;
};

export default Benefits;




