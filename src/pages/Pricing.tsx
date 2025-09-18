import { Link } from 'react-router-dom';
import { useLanguage, LanguageProvider } from '@/components/LanguageSwitcher';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, X, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { ContactModalProvider, ContactModal, useContactModal } from '@/components/ContactModal';

const content = {
  ro: {
    title: "Planuri flexibile pentru orice afacere",
    subtitle: "Alege planul perfect pentru distribuția ta",
    plans: [
      {
        name: "Starter",
        price: "299",
        period: "lună",
        description: "Perfect pentru afaceri mici",
        features: [
          { name: "Până la 100 comenzi/lună", included: true },
          { name: "Gestionare stocuri de bază", included: true },
          { name: "Rapoarte simple", included: true },
          { name: "Suport email", included: true },
          { name: "Integrare POS", included: false },
          { name: "Automatizare avansată", included: false },
          { name: "API personalizat", included: false },
          { name: "Suport dedicat", included: false }
        ],
        cta: "Începe gratuit",
        popular: false
      },
      {
        name: "Professional",
        price: "599",
        period: "lună",
        description: "Ideal pentru afaceri în creștere",
        features: [
          { name: "Până la 500 comenzi/lună", included: true },
          { name: "Gestionare stocuri avansată", included: true },
          { name: "Rapoarte detaliate", included: true },
          { name: "Suport priorititar", included: true },
          { name: "Integrare POS", included: true },
          { name: "Automatizare avansată", included: true },
          { name: "API personalizat", included: false },
          { name: "Suport dedicat", included: false }
        ],
        cta: "Începe gratuit",
        popular: true
      },
      {
        name: "Enterprise",
        price: "Custom",
        period: "",
        description: "Pentru afaceri mari",
        features: [
          { name: "Comenzi nelimitate", included: true },
          { name: "Gestionare stocuri completă", included: true },
          { name: "Rapoarte personalizate", included: true },
          { name: "Suport dedicat 24/7", included: true },
          { name: "Integrare POS", included: true },
          { name: "Automatizare avansată", included: true },
          { name: "API personalizat", included: true },
          { name: "Suport dedicat", included: true }
        ],
        cta: "Solicită ofertă",
        popular: false
      }
    ],
    faq: {
      title: "Întrebări frecvente",
      questions: [
        {
          question: "Pot schimba planul oricând?",
          answer: "Da, poți upgrada sau downgrada planul oricând. Modificările se aplică în următoarea perioadă de facturare."
        },
        {
          question: "Există perioadă de probă gratuită?",
          answer: "Oferim 14 zile de probă gratuită pentru toate planurile. Nu este nevoie de card de credit pentru a începe."
        },
        {
          question: "Cum funcționează integrarea cu sistemul meu existent?",
          answer: "Echipa noastră tehnică te ajută cu integrarea gratuită. Suportăm majoritatea sistemelor POS și de contabilitate populare."
        },
        {
          question: "Ce se întâmplă cu datele mele dacă anulez?",
          answer: "Datele tale rămân accesibile timp de 30 de zile după anulare. Poți să le exportezi în orice moment."
        },
        {
          question: "Oferiți suport tehnic?",
          answer: "Da, oferim suport tehnic prin email pentru planurile Starter și Professional, și suport dedicat 24/7 pentru Enterprise."
        }
      ]
    }
  },
  en: {
    title: "Flexible plans for any business",
    subtitle: "Choose the perfect plan for your distribution",
    plans: [
      {
        name: "Starter",
        price: "299",
        period: "month",
        description: "Perfect for small businesses",
        features: [
          { name: "Up to 100 orders/month", included: true },
          { name: "Basic inventory management", included: true },
          { name: "Simple reports", included: true },
          { name: "Email support", included: true },
          { name: "POS integration", included: false },
          { name: "Advanced automation", included: false },
          { name: "Custom API", included: false },
          { name: "Dedicated support", included: false }
        ],
        cta: "Start free",
        popular: false
      },
      {
        name: "Professional",
        price: "599",
        period: "month",
        description: "Ideal for growing businesses",
        features: [
          { name: "Up to 500 orders/month", included: true },
          { name: "Advanced inventory management", included: true },
          { name: "Detailed reports", included: true },
          { name: "Priority support", included: true },
          { name: "POS integration", included: true },
          { name: "Advanced automation", included: true },
          { name: "Custom API", included: false },
          { name: "Dedicated support", included: false }
        ],
        cta: "Start free",
        popular: true
      },
      {
        name: "Enterprise",
        price: "Custom",
        period: "",
        description: "For large businesses",
        features: [
          { name: "Unlimited orders", included: true },
          { name: "Complete inventory management", included: true },
          { name: "Custom reports", included: true },
          { name: "24/7 dedicated support", included: true },
          { name: "POS integration", included: true },
          { name: "Advanced automation", included: true },
          { name: "Custom API", included: true },
          { name: "Dedicated support", included: true }
        ],
        cta: "Request quote",
        popular: false
      }
    ],
    faq: {
      title: "Frequently asked questions",
      questions: [
        {
          question: "Can I change my plan anytime?",
          answer: "Yes, you can upgrade or downgrade your plan anytime. Changes apply to the next billing period."
        },
        {
          question: "Is there a free trial?",
          answer: "We offer a 14-day free trial for all plans. No credit card required to get started."
        },
        {
          question: "How does integration with my existing system work?",
          answer: "Our technical team helps you with free integration. We support most popular POS and accounting systems."
        },
        {
          question: "What happens to my data if I cancel?",
          answer: "Your data remains accessible for 30 days after cancellation. You can export it at any time."
        },
        {
          question: "Do you offer technical support?",
          answer: "Yes, we offer technical support via email for Starter and Professional plans, and 24/7 dedicated support for Enterprise."
        }
      ]
    }
  }
};

const PricingContent = () => {
  const { language } = useLanguage();
  const { openModal } = useContactModal();
  const t = content[language];
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {t.plans.map((plan, index) => (
              <Card key={index} className={`relative border-2 transition-all duration-300 hover:shadow-lg ${
                plan.popular ? 'border-primary shadow-lg scale-105' : 'border-border hover:border-primary/50'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      {language === 'ro' ? 'Cel mai popular' : 'Most Popular'}
                    </span>
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground mb-4">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-primary">{plan.price}</span>
                      {plan.period && (
                        <span className="text-muted-foreground ml-2">/{plan.period}</span>
                      )}
                    </div>
                    <Button 
                      className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : 'bg-secondary hover:bg-secondary/90'}`}
                      size="lg"
                    >
                      {plan.cta}
                    </Button>
                  </div>
                  
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                        )}
                        <span className={`text-sm ${feature.included ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              {t.faq.title}
            </h2>
            <div className="space-y-4">
              {t.faq.questions.map((faq, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-0">
                    <button
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    >
                      <span className="font-medium text-foreground">{faq.question}</span>
                      {openFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === 'ro' ? 'Gata să începi?' : 'Ready to get started?'}
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            {language === 'ro' 
              ? 'Începe proba gratuită de 14 zile și descoperă cum Fluentra poate transforma distribuția ta.'
              : 'Start your 14-day free trial and discover how Fluentra can transform your distribution.'}
          </p>
          <button 
            onClick={openModal}
            className="inline-flex items-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors"
          >
            {language === 'ro' ? 'Începe gratuit' : 'Start Free Trial'}
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

const Pricing = () => {
  return (
    <LanguageProvider>
      <ContactModalProvider>
        <PricingContent />
        <ContactModal language="ro" />
      </ContactModalProvider>
    </LanguageProvider>
  );
};

export default Pricing;
