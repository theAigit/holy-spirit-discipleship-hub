
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import JoinClass from "./pages/JoinClass";
import Missions from "./pages/Missions";
import Groups from "./pages/Groups";
import Events from "./pages/Events";
import Library from "./pages/Library";
import Store from "./pages/Store";
import Partner from "./pages/Partner";
import StyleGuide from "./pages/StyleGuide";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/join" element={<JoinClass />} />
              <Route path="/missions" element={<Missions />} />
              <Route path="/groups" element={<Groups />} />
              <Route path="/events" element={<Events />} />
              <Route path="/library" element={<Library />} />
              <Route path="/store" element={<Store />} />
              <Route path="/partner" element={<Partner />} />
              <Route path="/style-guide" element={<StyleGuide />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
