import React, { createContext, useContext, useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { Loader2 } from 'lucide-react';
import { useLanguage } from './LanguageSwitcher';

interface ContactModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ContactModalContext = createContext<ContactModalContextType | undefined>(undefined);

export const ContactModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ContactModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ContactModalContext.Provider>
  );
};

export const useContactModal = () => {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error('useContactModal must be used within a ContactModalProvider');
  }
  return context;
};

export const ContactModal: React.FC = () => {
  const { language } = useLanguage();
  const { isOpen, closeModal } = useContactModal();
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const content = {
    ro: {
      title: 'Contactează-ne',
      description: 'Completează formularul și revenim în cel mai scurt timp.',
      name: 'Nume',
      namePlaceholder: 'Numele tău',
      email: 'Email',
      message: 'Mesaj',
      messagePlaceholder: 'Cum te putem ajuta?',
      cancel: 'Anulează',
      send: 'Trimite',
      sending: 'Se trimite...',
      successTitle: 'Trimis',
      successDescription: 'Mesajul a fost trimis cu succes.',
      errorTitle: 'Nu s-a putut trimite',
      errorDescription: 'Se deschide clientul de email ca soluție de rezervă.'
    },
    en: {
      title: 'Contact Us',
      description: 'Fill out the form and we will get back to you shortly.',
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      message: 'Message',
      messagePlaceholder: 'How can we help?',
      cancel: 'Cancel',
      send: 'Send',
      sending: 'Sending...',
      successTitle: 'Sent',
      successDescription: 'Your message was sent successfully.',
      errorTitle: 'Could not send',
      errorDescription: 'Opening your email client as a fallback.'
    }
  };

  const t = content[language];
  const emailAddress = language === 'ro' ? 'contact@fluentra.ro' : 'contact@fluentra.com';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const subject = language === 'ro' ? `Mesaj de pe website - ${contactName || 'Vizitator'}` : `Website message - ${contactName || 'Visitor'}`;
    const mailtoBody = [
      `${language === 'ro' ? 'Nume' : 'Name'}: ${contactName || '-'}`,
      `${language === 'ro' ? 'Email' : 'Email'}: ${contactEmail || '-'}`,
      '',
      `${language === 'ro' ? 'Mesaj' : 'Message'}:`,
      `${contactMessage || '-'}`,
    ].join('\n');

    const attempt = async () => {
      setIsSubmitting(true);
      try {
        const res = await fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: contactName,
            email: contactEmail,
            message: contactMessage,
            to: emailAddress,
          }),
        });
        if (!res.ok) throw new Error('Request failed');
        toast({
          title: t.successTitle,
          description: t.successDescription,
        });
      } catch {
        toast({
          variant: 'destructive',
          title: t.errorTitle,
          description: t.errorDescription,
        });
        const mailto = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailtoBody)}`;
        window.location.href = mailto;
      } finally {
        setIsSubmitting(false);
        closeModal();
        setContactName('');
        setContactEmail('');
        setContactMessage('');
      }
    };
    attempt();
  };

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t.title}</DialogTitle>
          <DialogDescription>
            {t.description}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="contact-name">{t.name}</label>
            <Input 
              id="contact-name" 
              value={contactName} 
              onChange={(e) => setContactName(e.target.value)} 
              placeholder={t.namePlaceholder} 
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="contact-email">{t.email}</label>
            <Input 
              id="contact-email" 
              type="email" 
              value={contactEmail} 
              onChange={(e) => setContactEmail(e.target.value)} 
              placeholder="you@example.com" 
              required 
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="contact-message">{t.message}</label>
            <Textarea 
              id="contact-message" 
              value={contactMessage} 
              onChange={(e) => setContactMessage(e.target.value)} 
              placeholder={t.messagePlaceholder} 
              rows={5} 
            />
          </div>
          <DialogFooter>
            <Button type="button" variant="ghost" onClick={closeModal} disabled={isSubmitting}>
              {t.cancel}
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <span className="inline-flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  {t.sending}
                </span>
              ) : (
                <>{t.send}</>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
