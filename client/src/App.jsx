import Footer from "./components/footer/Footer";
import Nav from "./components/Nav";
import SocialMedias from "./components/social-medias/SocialMedias";
import About from "./sections/About/About";
import Contact from "./sections/Contact/Contact";
import Header from "./sections/Header/Header";
import Portfolio from "./sections/portfolio/Portfolio";
import Skills from "./sections/Skills/Skills";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <ToastContainer />
      <body className="bg-[#F7F0E5] dark:bg-[#141414] dark:text-white transition-all">
        <Nav />
        <SocialMedias />
        <Header />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
      </body>
    </>
  );
};

export default App;
