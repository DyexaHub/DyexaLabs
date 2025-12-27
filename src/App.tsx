import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import Home from "./pages/Home";
import { Services } from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Work from "./pages/Work";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import About from "./pages/About";
import { Resources } from "./pages/Resources";
import ResourceDetail from "./pages/ResourceDetail";
import Contact from "./pages/Contact";
import Terms from "./pages/legal/Terms";
import Privacy from "./pages/legal/Privacy";

import { LiveChat } from "./components/common/LiveChat";
import { AuthProvider } from "./components/auth/AuthContext";
import { Toaster } from "./components/ui/sonner";

/* ----------------------------------------
   Scroll to top on route change (gabungan logic)
---------------------------------------- */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <ScrollToTop />

        <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900 scroll-smooth">
          <Header />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route
                path="/services"
                element={<Services onBack={() => window.history.back()} />}
              />
              <Route path="/services/:id" element={<ServiceDetail />} />

              <Route path="/work" element={<Work />} />
              <Route path="/work/:id" element={<CaseStudyDetail />} />

              <Route path="/about" element={<About />} />

              <Route path="/resources" element={<Resources />} />
              <Route path="/resources/:id" element={<ResourceDetail />} />

              <Route path="/contact" element={<Contact />} />

              <Route path="/legal/terms" element={<Terms />} />
              <Route path="/legal/privacy" element={<Privacy />} />
            </Routes>
          </main>

          <Toaster />
          <Footer />
          <LiveChat />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
