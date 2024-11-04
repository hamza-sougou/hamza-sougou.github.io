import { useState } from "react";
import "./About.css";
import { MdOutlineArrowDropUp, MdOutlineArrowDropDown } from "react-icons/md";

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full h-[100vh] px-[1rem] md:px-[10rem]  md:pt-[2rem] josefin">
      <div className="h-full w-full">
        <div className="text-center">
          <h1 className="text-[3rem md:text-[5rem]">À Propos de moi</h1>
          <hr className="mb-5 w-4/5 md:w-[100%]" />
        </div>
        <div className="one flex w-full items-center justify-center">
          <div className="accordion flex flex-col w-full lg:w-2/3">
            {/* Item 1 */}
            <div className="accordion-item">
              <div
                className="accordion-title flex justify-between items-center p-4 cursor-pointer border-b"
                onClick={() => toggleAccordion(0)}
              >
                <h2 className="text-lg">Qui suis-je ?</h2>
                {activeIndex === 0 ? (
                  <MdOutlineArrowDropUp className="text-3xl rotate-[180deg] text-orange" />
                ) : (
                  <MdOutlineArrowDropUp className=" text-3xl text-orange" />
                )}
              </div>
              <div
                className={`accordion-content p-4 transition-all duration-300 ease-in-out ${
                  activeIndex === 0
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p>Ceci est le contenu de l'item 1.</p>
                <img src="image1.jpg" alt="Description de l'image 1" />
              </div>
            </div>

            {/* Item 2 */}
            <div className="accordion-item">
              <div
                className="accordion-title flex justify-between items-center p-4 cursor-pointer border-b"
                onClick={() => toggleAccordion(1)}
              >
                <h2 className="text-lg">Item 2</h2>
                {activeIndex === 1 ? (
                  <MdOutlineArrowDropUp className="text-3xl rotate-[180deg] text-orange" />
                ) : (
                  <MdOutlineArrowDropUp className=" text-3xl text-orange" />
                )}
              </div>
              <div
                className={`accordion-content p-4 transition-all duration-300 ease-in-out ${
                  activeIndex === 1
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p>Ceci est le contenu de l'item 2.</p>
                <video controls>
                  <source src="video.mp4" type="video/mp4" />
                  Votre navigateur ne prend pas en charge la lecture de vidéos.
                </video>
              </div>
            </div>

            {/* Item 3 */}
            <div className="accordion-item">
              <div
                className="accordion-title flex justify-between items-center p-4 cursor-pointer border-b"
                onClick={() => toggleAccordion(2)}
              >
                <h2 className="text-lg">Item 3</h2>
                {activeIndex === 2 ? (
                  <MdOutlineArrowDropUp className="text-3xl rotate-[180deg] text-orange" />
                ) : (
                  <MdOutlineArrowDropUp className=" text-3xl text-orange" />
                )}
              </div>
              <div
                className={`accordion-content p-4 transition-all duration-300 ease-in-out ${
                  activeIndex === 2
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p>Ceci est le contenu de l'item 3.</p>
                <ul>
                  <li>Élément de liste 1</li>
                  <li>Élément de liste 2</li>
                  <li>Élément de liste 3</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
