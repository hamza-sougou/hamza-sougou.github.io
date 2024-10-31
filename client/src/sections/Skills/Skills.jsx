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

const SkillStrengthMeter = ({ skill }) => {
  const getColor = (level) => {
    const colors = [
      "bg-red-500", // Très faible
      "bg-red-300", // Faible
      "bg-yellow-400", // Moyen
      "bg-green-500", // Bon
      "bg-green-800", // Très bon
    ];
    return colors[level - 1];
  };

  const getStrengthText = (level) => {
    const labels = ["Très Faible", "Faible", "Moyen", "Bon", "Très Bon"];
    return labels[level - 1];
  };

  return (
    <div className="mt-[2rem]">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm text-white">{skill.name}</span>
        <span className="text-sm text-white">
          {getStrengthText(skill.level)}
        </span>
      </div>

      <div className="flex space-x-1">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className={`h-1 w-1/5 rounded-full transition-colors duration-300
                ${index < skill.level ? getColor(skill.level) : "bg-gray-600"}
                `}
          />
        ))}
      </div>
    </div>
  );
};

const SkillsDisplay = ({ skills }) => {
  return (
    <div className="w-full">
      {skills.map((skill, index) => (
        <SkillStrengthMeter key={index} skill={skill} />
      ))}
    </div>
  );
};

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

const App = () => {
  return (
    <div className="w-full h-[100vh] px-[1rem] md:px-[10rem]  md:pt-[2rem] josefin">
      <div className="h-full w-full">
        <div className="text-center">
          <h1 className="text-[3rem] md:text-[5rem]">Mes Compétences</h1>
          <hr className="mb-5 w-4/5 md:w-[100%]" />
        </div>
        <div className="flex flex-col">
          <div className="flex">
            <h2 className="text-2xl">JavaScript</h2>
          </div>
          <div className="flex w-full">
            <SkillsDisplay skills={jsSkills} />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex">
            <h2 className="text-2xl pt-[4rem]">Java</h2>
          </div>
          <div className="flex w-full">
            <SkillsDisplay skills={javaSkills} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
