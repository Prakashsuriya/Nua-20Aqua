import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Products from "./pages/Products";
import Distribution from "./pages/Distribution";
import Franchise from "@/pages/Franchise";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import Disclaimer from "@/pages/Disclaimer";
import IceCube from "@/pages/IceCube";
import NotFound from "@/pages/NotFound";
import { ScrollToAnchor } from "./components/ScrollToAnchor";
import { WhatsAppWidget } from "./components/WhatsAppWidget";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToAnchor />
        <WhatsAppWidget />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<Team />} />
          <Route path="/products" element={<Products />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/distribution" element={<Distribution />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/ice-cube" element={<IceCube />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
