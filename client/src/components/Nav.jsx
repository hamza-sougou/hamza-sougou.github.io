import { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./Nav.css";
import DarkMode from "./DarkMode/DarkMode";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const openMenu = () => {
    setToggle(true);
  };

  const closeMenu = () => {
    setToggle(false);
  };

  const unchangedText = "<";
  const unchangedText1 = "H";
  const unchangedText2 = "/>";

  const [text] = useTypewriter({
    words: ["amza", "."],
    loop: {},
    typeSpeed: 150,
    deleteSpeed: 70,
  });

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById("nav");
      if (window.scrollY > 0) {
        nav.classList.add("scroll-shadow");
      } else {
        nav.classList.remove("scroll-shadow");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className="w-full h-[3rem] px-[2rem] py-[1rem] bg-[#F7F0E5] dark:bg-[#141414] top-0 left-0 josefin scroll-shadow"
        id="nav"
      >
        <div className="flex w-full">
          <div className="flex-1">
            <div className="flex">
              <div className="h-full flex pt-[4px]">
                <h1 className="text-2xl">{unchangedText}</h1>
              </div>
              <h1 className="text-3xl">{unchangedText1}</h1>
              <span className="text-3xl text-orange">{text}</span>
              <div className="h-full flex pt-[8px]">
                <Cursor />
              </div>
              <div className="h-full flex pt-[4px]">
                <h1 className="text-2xl ml-3">{unchangedText2}</h1>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-end">
            <DarkMode />
            {toggle ? (
              <button>
                <TfiClose onClick={closeMenu} className="closebtn text-3xl" />
              </button>
            ) : (
              <button>
                <CiMenuFries onClick={openMenu} className="openbtn text-3xl" />
              </button>
            )}
          </div>
        </div>
      </div>

      <div
        className={`menu bg-[#F7F0E5] dark:bg-[#141414] ${
          toggle ? "open" : ""
        }`}
      >
        <div className="flex h-full text-center justify-center items-center ">
          <ul className="flex flex-col justify-between gap-4 text-[4rem] py-[3.4rem] josefin">
            <li>
              <div className="block group">
                <a
                  href="#header"
                  onClick={closeMenu}
                  className="group-hover:text-orange transition-all"
                >
                  Accueil
                </a>
                <p className="h-[1px] w-0 group-hover:w-full bg-orange transition-all"></p>
              </div>
            </li>
            <li>
              <div className="block group">
                <a
                  href="#about"
                  onClick={closeMenu}
                  className="group-hover:text-orange transition-all"
                >
                  À Propos
                </a>
                <p className="h-[1px] w-0 group-hover:w-full bg-orange transition-all"></p>
              </div>
            </li>
            <li>
              <div className="block group">
                <a
                  href="#skills"
                  onClick={closeMenu}
                  className="group-hover:text-orange transition-all"
                >
                  Compétences
                </a>
                <p className="h-[1px] w-0 group-hover:w-full bg-orange transition-all"></p>
              </div>
            </li>
            <li>
              <div className="block group">
                <a
                  href="#portfolio"
                  onClick={closeMenu}
                  className="group-hover:text-orange transition-all"
                >
                  Projets
                </a>
                <p className="h-[1px] w-0 group-hover:w-full bg-orange transition-all"></p>
              </div>
            </li>
            <li>
              <div className="block group">
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="group-hover:text-orange transition-all"
                >
                  Contact
                </a>
                <p className="h-[1px] w-0 group-hover:w-full bg-orange transition-all"></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
