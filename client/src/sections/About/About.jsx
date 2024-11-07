import "./About.css";
import Me from "../../assets/about.jpg";
import { LuGithub } from "react-icons/lu";

const About = () => {
  return (
    <div className="w-full h-auto min-h-[100vh] mb-10 pb-[3rem] md:pb-0 px-[1rem] md:px-[10rem] md:pt-[2rem] josefin">
      <div className="h-full w-full">
        <div className="text-center">
          <h1 className="text-[3rem] md:text-[5rem]" id="about">
            À Propos de moi
          </h1>
          <hr className="mb-5 w-4/5 md:w-[100%]" />
        </div>
        <div className="flex flex-col lg:flex-row w-full h-[32rem] justify-center items-center">
          <div className="flex-1/2 flex h-[32rem]">
            <img
              src={Me}
              alt="Me"
              className="w-full md:w-[35vw] object-cover"
            />
          </div>
          <div className="flex-1 flex w-[90%] md:w-full p-5 md:h-[15rem] bg-[#cfcfcf] dark:bg-[#101010] shadow -mt-[3rem] md:mt-0  md:-ml-[3rem]">
            <div className="flex flex-col">
              <p className="text-lg">
                Je m'appelle Hamza, un développeur fullstack vivant à Dakar.
                Passionné de code depuis 2019, j'apprend de jour en jour de
                nouvelles technologies et partage régulièrement mes projets
                personnels sur ma{" "}
                <a
                  href="https://github.com/hamza-sougou"
                  target="blank"
                  className="font-semibold text-orange hover:underline transition-all"
                >
                  page Github
                </a>
                .
              </p>
              <div id="button_h" className="ac_btn btn w-[17rem] mt-7">
                <h2 className="text-xl my-[0.2rem]  mx-[1rem] z-3 flex flex-row justify-center items-center">
                  <LuGithub className="mr-5" /> Mon profil Github
                </h2>

                <div className="ring one"></div>
                <div className="ring two"></div>
                <div className="ring three"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
