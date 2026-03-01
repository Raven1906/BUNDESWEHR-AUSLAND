import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Geschichte from "./pages/Geschichte";
import ProArgumente from "./pages/ProArgumente";
import ContraArgumente from "./pages/ContraArgumente";
import Ethik from "./pages/Ethik";
import Folgen from "./pages/Folgen";
import Fazit from "./pages/Fazit";
import Reflexion from "./pages/Reflexion";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/geschichte" element={<Geschichte />} />
          <Route path="/pro" element={<ProArgumente />} />
          <Route path="/contra" element={<ContraArgumente />} />
          <Route path="/ethik" element={<Ethik />} />
          <Route path="/folgen" element={<Folgen />} />
          <Route path="/fazit" element={<Fazit />} />
          <Route path="/reflexion" element={<Reflexion />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
