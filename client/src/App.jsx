import Nav from "./components/Nav";
import SocialMedias from "./components/social-medias/SocialMedias";
import About from "./sections/About/About";
import Header from "./sections/Header/Header";
import Skills from "./sections/Skills/Skills";

About;

const App = () => {
  return (
    <>
      <Nav />
      <SocialMedias />
      <Header />
      <About />
      <Skills />
    </>
  );
};

export default App;
