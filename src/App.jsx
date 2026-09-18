import { BrowserRouter, Routes, Route  } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Chatbot from "./components/chatbot/chatbot";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import Internships from "./pages/Internships/Internships";
import Education from "./pages/Education/Education";
import Contact from "./pages/Contact/Contact";
import Loader from "./components/Loader/Loader";
const App=()=> {

   const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("portfolioVisited");

    if (hasVisited) {
      setLoading(false);
    } else {
      const timer = setTimeout(() => {
        sessionStorage.setItem("portfolioVisited", "true");
        setLoading(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
       <Chatbot />
      <Footer/>
    </BrowserRouter>
  );
}

export default App;