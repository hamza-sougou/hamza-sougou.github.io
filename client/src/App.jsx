import Footer from "./components/footer/Footer";
import Nav from "./components/Nav";
import SocialMedias from "./components/social-medias/SocialMedias";
import About from "./sections/About/About";
import Contact from "./sections/Contact/Contact";
import Header from "./sections/Header/Header";
import Portfolio from "./sections/portfolio/Portfolio";
import Skills from "./sections/Skills/Skills";

const App = () => {
  return (
    <html>
      <body className="dark">
        <Nav />
        <SocialMedias />
        <Header />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
      </body>
    </html>
  );
};

export default App;
