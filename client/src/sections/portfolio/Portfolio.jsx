import { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Projet1 from "../../assets/projetExample.png";
import "./Portfolio.css";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      image: Projet1,
      name: "Jayma SN",
      description: "Description du projet 1",
    },
    {
      id: 2,
      image: Projet1,
      name: "Projet 2",
      description: "Description du projet 2",
    },
    {
      id: 3,
      image: Projet1,
      name: "Projet 3",
      description: "Description du projet 3",
    },
  ];

  // Ajoutez un projet cloné au début et à la fin pour créer l'effet de loop
  const extendedProjects = [
    projects[projects.length - 1], // Clonage du dernier projet
    ...projects,
    projects[0], // Clonage du premier projet
  ];

  const [currentIndex, setCurrentIndex] = useState(1); // Commencez sur la première vraie image
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handlePrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Gestion des transitions pour l'effet de loop
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);

        if (currentIndex === 0) {
          setCurrentIndex(projects.length); // Passe au dernier élément réel
        } else if (currentIndex === extendedProjects.length - 1) {
          setCurrentIndex(1); // Retourne au premier élément réel
        }
      }, 500); // Durée de la transition

      return () => clearTimeout(timer);
    }
  }, [currentIndex, isTransitioning, projects.length, extendedProjects.length]);

  return (
    <div className="w-full h-[100vh] px-[1rem] md:px-[10rem] md:pt-[2rem] josefin">
      <div className="w-full h-full">
        <div className="text-center">
          <h1 className="text-[3rem] md:text-[5rem]">Mes Projets</h1>
          <hr className="mb-5 w-4/5 md:w-[100%]" />
        </div>
        <div className="slider-container">
          <div
            className="slider"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: isTransitioning
                ? "transform 0.5s ease-in-out"
                : "none",
            }}
          >
            {extendedProjects.map((project, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex flex-col w-full items-center"
              >
                <img src={project.image} alt={project.name} className="flex" />
                <h2 className="text-[1.5rem] mt-3 text-center">
                  {project.name}
                </h2>
                <p className="text-center mt-1">{project.description}</p>
              </div>
            ))}
          </div>
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 bg-gray-800 rounded-full"
          >
            <IoIosArrowBack className="text-orange text-3xl" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 bg-gray-800 rounded-full"
          >
            <IoIosArrowForward className="text-orange text-3xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
