import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HowItWorks from "./pages/HowItWorks";
import Benefits from "./pages/Benefits";
import Pricing from "./pages/Pricing";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import GDPR from "./pages/GDPR";
import CookiePolicy from "./pages/CookiePolicy";
import NotFound from "./pages/NotFound";
import { ContactModalProvider, ContactModal } from "./components/ContactModal";
import { LanguageProvider } from "./components/LanguageSwitcher";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <LanguageProvider>
        <ContactModalProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/benefits" element={<Benefits />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
              <Route path="/gdpr" element={<GDPR />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <ContactModal />
          </BrowserRouter>
        </ContactModalProvider>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
