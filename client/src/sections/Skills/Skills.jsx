import React, { useEffect, useState, useRef } from "react";
import { FaCheck } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";

const SkillCriteria = ({ skill }) => {
  const criteria = [
    { label: "Très Faible", met: skill.level === 1 },
    { label: "Faible", met: skill.level === 2 },
    { label: "Moyen", met: skill.level === 3 },
    { label: "Bon", met: skill.level === 4 },
    { label: "Très Bon", met: skill.level === 5 },
  ];

  return (
    <div className="mt-2 space-y-1">
      {criteria.map((c) => (
        <div key={c.label} className="flex items-center text-xs">
          {c.met ? (
            <div className="flex w-[2rem] h-[1rem] justify-center items-center">
              <FaCheck className="flex size-3 text-green-500 mr-2" />
            </div>
          ) : (
            <div className="flex w-[2rem] justify-center items-center">
              <GrFormClose className="flex size-4 text-gray-500 mr-2" />
            </div>
          )}
          <span
            className={
              c.met ? "text-md text-green-500" : "text-md text-gray-500"
            }
          >
            {c.label}
          </span>
        </div>
      ))}
    </div>
  );
};

const SkillStrengthMeter = ({ skill, isVisible }) => {
  const [animated, setAnimated] = useState(false);
  const levelColors = [
    "bg-red-500", // Très faible
    "bg-red-300", // Faible
    "bg-[#FFF700]", // Moyen
    "bg-[#ffbb00]", // Bon
    "bg-[#ffa600]", // Très bon
  ];

  const getStrengthText = (level) => {
    const labels = ["Très Faible", "Faible", "Moyen", "Bon", "Très Bon"];
    return labels[level - 1];
  };

  useEffect(() => {
    if (isVisible) {
      setAnimated(true);
    }
  }, [isVisible]);

  // Déterminez la couleur à utiliser en fonction du niveau
  const maxLevelColor = levelColors[skill.level - 1];

  return (
    <div className="mt-[2rem]">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm ">{skill.name}</span>
        <span className="text-sm">{getStrengthText(skill.level)}</span>
      </div>

      <div className="flex space-x-1">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className={`h-1 w-1/5 rounded-full transition-colors duration-300 
              ${
                animated
                  ? index < skill.level
                    ? maxLevelColor
                    : "bg-gray-600"
                  : "opacity-0"
              }`}
            style={{
              transitionDelay: `${index * 250}ms`, // Délai pour chaque segment
            }}
          />
        ))}
      </div>
    </div>
  );
};

const SkillsDisplay = ({ skills, isVisible }) => {
  return (
    <div className="w-full">
      {skills.map((skill, index) => (
        <SkillStrengthMeter key={index} skill={skill} isVisible={isVisible} />
      ))}
    </div>
  );
};

const App = () => {
  const skillsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (skillsRef.current) {
      const rect = skillsRef.current.getBoundingClientRect();
      setIsVisible(rect.top <= window.innerHeight && rect.bottom >= 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const jsSkills = [
    { name: "JavaScript", level: 4 },
    { name: "React.js", level: 4 },
    { name: "Node.js", level: 5 },
  ];

  const javaSkills = [
    { name: "Java", level: 4 },
    { name: "Spring", level: 4 },
    { name: "Hibernate", level: 3 },
  ];

  const cssSkills = [
    { name: "Tailwind CSS", level: 5 },
    { name: "Bootstrap", level: 4 },
    { name: "Bulma CSS", level: 3 },
  ];

  const otherSkills = [
    { name: "Mongo DB", level: 5 },
    { name: "MySQL", level: 4 },
    { name: "Git", level: 4 },
  ];

  return (
    <div className="w-full h-[100vh] px-[1rem] md:px-[10rem] md:pt-[2rem] josefin ">
      <div className="h-full w-full">
        <div className="text-center">
          <h1 className="text-[3rem] md:text-[5rem]" id="skills">
            Mes Compétences
          </h1>
          <hr className="mb-5 w-4/5 md:w-[100%]" />
        </div>
        <div
          className="flex flex-row justify-between gap-[3rem]"
          ref={skillsRef}
        >
          <div className="flex-1 flex flex-col">
            <div className="flex">
              <h2 className="text-2xl">JavaScript</h2>
            </div>
            <div className="flex w-full">
              <SkillsDisplay skills={jsSkills} isVisible={isVisible} />
            </div>
          </div>
          <div className="flex-1 flex flex-col">
            <div className="flex">
              <h2 className="text-2xl">Java</h2>
            </div>
            <div className="flex w-full">
              <SkillsDisplay skills={javaSkills} isVisible={isVisible} />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between gap-[3rem] mt-[5rem]">
          <div className="flex-1 flex flex-col">
            <div className="flex">
              <h2 className="text-2xl">CSS</h2>
            </div>
            <div className="flex w-full">
              <SkillsDisplay skills={cssSkills} isVisible={isVisible} />
            </div>
          </div>
          <div className="flex-1 flex flex-col">
            <div className="flex">
              <h2 className="text-2xl">Autres</h2>
            </div>
            <div className="flex w-full">
              <SkillsDisplay skills={otherSkills} isVisible={isVisible} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
