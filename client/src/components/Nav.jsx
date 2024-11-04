import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import "./Nav.css";

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

  return (
    <>
      <div className="w-full h-[3rem] px-[2rem] py-[1rem] top-0 left-0 josefin ">
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
            {toggle ? (
              <button>
                <TfiClose onClick={closeMenu} className="text-3xl" />
              </button>
            ) : (
              <button>
                <CiMenuFries onClick={openMenu} className="text-3xl" />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className={`menu ${toggle ? "open" : ""}`}>
        <div className="flex h-full text-center justify-center items-center z-9999">
          <ul className="flex flex-col justify-between gap-4 text-[4rem] py-[3.4rem] josefin">
            <li>Accueil</li>
            <li>À Propos</li>
            <li>Compétences</li>
            <li>Expérience</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
