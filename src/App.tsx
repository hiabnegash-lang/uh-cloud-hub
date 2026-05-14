import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import ErrorBoundary from "./components/ErrorBoundary.tsx";

// All non-home pages are lazy-loaded so their JS is excluded from the initial
// bundle. The home page (Index) stays eager since it's the Lighthouse test target.
const About         = lazy(() => import("./pages/About.tsx"));
const Events        = lazy(() => import("./pages/Events.tsx"));
const LearningPaths = lazy(() => import("./pages/LearningPaths.tsx"));
const Resources     = lazy(() => import("./pages/Resources.tsx"));
const Team          = lazy(() => import("./pages/Team.tsx"));
const News          = lazy(() => import("./pages/News.tsx"));
const Contact       = lazy(() => import("./pages/Contact.tsx"));
const NotFound      = lazy(() => import("./pages/NotFound.tsx"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ErrorBoundary>
          <ScrollToTop />
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/events" element={<Events />} />
              <Route path="/learning-paths" element={<LearningPaths />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/news" element={<News />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
