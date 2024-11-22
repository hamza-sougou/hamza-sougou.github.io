import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaNodeJs, FaWordpress } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss, SiVite } from "react-icons/si";
import Projet1 from "../../assets/projetExample.png";
import EntraluLogo from "../../assets/entralu-logo.jpg";
import "./Portfolio.css";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const technologies = [
    { techname: "JavaScript", logo: <IoLogoJavascript /> },
    { techname: "Node.js", logo: <FaNodeJs /> },
    { techname: "React.js", logo: <FaReact /> },
    { techname: "Express.js", logo: <SiExpress /> },
    { techname: "MongoDB", logo: <SiMongodb /> },
    { techname: "Tailwind.css", logo: <SiTailwindcss /> },
    { techname: "Vite.js", logo: <SiVite /> },
    { techname: "Wordpress", logo: <FaWordpress /> },
  ];

  const pcuBeTechnologies = technologies.filter((tech) =>
    ["Node.js", "Express.js", "MongoDB"].includes(tech.techname)
  );
  const pcuFeTechnologies = technologies.filter((tech) =>
    ["JavaScript", "React.js", "Tailwind.css", "Vite.js"].includes(
      tech.techname
    )
  );
  const entraluFeTechnologies = technologies.filter((tech) =>
    ["Wordpress"].includes(tech.techname)
  );
  const entraluBeTechnologies = technologies.filter((tech) =>
    [""].includes(tech.techname)
  );

  const EntraluLink = () => {
    return (
      <a
        href="https://www.entralu.sn/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-orange text-xl font-semibold underline"
      >
        Visiter le site web
      </a>
    );
  };
  const projects = [
    {
      id: 1,
      image: Projet1,
      name: "PC Universe",
      type: "e-commerce",
      description: "Api RESTful",
      BeTechs: pcuBeTechnologies,
      FeTechs: pcuFeTechnologies,
      video: "https://www.youtube.com/embed/Gn5qsb8z2iw?si=KmDMJLJKQ1ZhZXI8",
    },
    {
      id: 2,
      image: EntraluLogo,
      name: "Entralu",
      type: "Vitrine",
      description: <EntraluLink />,
      BeTechs: entraluBeTechnologies,
      FeTechs: entraluFeTechnologies,
      link: "https://www.entralu.sn/",
    },
    {
      id: 3,
      image: Projet1,
      name: "Système de gestion de tâches",
      type: "e-commerce",
      description: "Application CRUD de gestion de contact",
      BeTechs: pcuBeTechnologies,
      FeTechs: pcuFeTechnologies,
      video: "https://www.youtube.com/embed/k16XOLEmnvU?si=IMxi4GOXvfapZvIg",
    },
  ];

  return (
    <div
      className="w-full h-auto px-[1rem] md:px-[10rem] md:pt-[2rem] josefin"
      id="portfolio"
    >
      <div className="w-full h-full">
        <div className="text-center">
          <h1 className="text-[3rem] md:text-[5rem]">Projets</h1>
          <hr className="mb-5 w-4/5 md:w-[100%]" />
        </div>
        <div className="flex flex-col h-full">
          {projects.map((p) => (
            <div
              key={p.id}
              className="flex flex-col md:flex-row h-[40rem] md:h-[15rem] w-full mt-5 bg-[#cfcfcf] dark:bg-[#0d0d0d]"
            >
              <div className="w-full md:w-[40%] h-[40%] md:h-full">
                {p.link ? (
                  <a href={p.link} target="_blank" rel="noopener noreferrer">
                    <img
                      className="object-cover h-full w-full"
                      src={p.image}
                      alt={p.name}
                    />
                  </a>
                ) : (
                  <iframe
                    className="object-cover h-full w-full"
                    src={p.video}
                    title={p.name}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
              <div className="flex flex-col md:flex-row w-full md:w-[60%] h-[60%] md:h-full p-3">
                <div className="flex-1">
                  <h2 className="text-2xl text-orange font-semibold">
                    {p.name}
                  </h2>
                  <p className="text-lg">
                    <strong>Type : </strong> {p.type}
                  </p>
                  <p>{p.description}</p>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col">
                    <p className="text-orange text-lg">
                      <strong>Technologies</strong>
                    </p>
                    <p>
                      <i>côté serveur :</i>
                    </p>
                    <div className="flex space-x-4">
                      {p.BeTechs.map((tech) => (
                        <div
                          key={tech.techname}
                          className="flex flex-col items-center group"
                        >
                          <p className="text-2xl group-hover:text-orange transition-all">
                            {tech.logo}
                          </p>
                          <p className="group-hover:text-orange transition-all">
                            {tech.techname}
                          </p>
                        </div>
                      ))}
                    </div>
                    <p className="pt-5">
                      <i>côté client :</i>
                    </p>
                    <div className="flex space-x-4">
                      {p.FeTechs.map((tech) => (
                        <div
                          key={tech.techname}
                          className="flex flex-col items-center group"
                        >
                          <p className="text-2xl group-hover:text-orange transition-all">
                            {tech.logo}
                          </p>
                          <p className="group-hover:text-orange transition-all">
                            {tech.techname}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
