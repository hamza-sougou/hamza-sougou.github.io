import "./About.css";
import Me from "../../assets/about.jpg";

const About = () => {
  return (
    <div className="w-full h-auto px-[1rem] md:px-[10rem] md:pt-[2rem] josefin">
      <div className="h-full w-full">
        <div className="text-center">
          <h1 className="text-[3rem] md:text-[5rem]" id="about">
            À Propos de moi
          </h1>
          <hr className="mb-5 w-4/5 md:w-[100%]" />
        </div>
        <div className="flex flex-col md:flex-row w-full">
          <div className="flex-1/2 flex h-[32rem]">
            <img
              src={Me}
              alt="Me"
              className="w-full md:w-[35vw] object-cover"
            />
          </div>
          <div className="flex-1 flex w-full p-5 bg-white dark:bg-black">
            <div className="flex flex-col">
              <p className="text-lg">
                Je m'appelle Hamza, un développeur fullstack vivant à Dakar.
                Passionné de code depuis 2019, je partage régulièrement mes
                projets personnels sur ma{" "}
                <a
                  href="https://github.com/hamza-sougou"
                  className="font-semibold text-orange hover:underline"
                >
                  page Github
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
