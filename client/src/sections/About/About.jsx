import "./About.css";

const About = () => {
  return (
    <div className="w-full h-[100vh] px-[1rem] md:px-[10rem] md:pt-[2rem] josefin">
      <div className="h-full w-full">
        <div className="text-center">
          <h1 className="text-[3rem] md:text-[5rem]" id="about">
            À Propos de moi
          </h1>
          <hr className="mb-5 w-4/5 md:w-[100%]" />
        </div>
      </div>
    </div>
  );
};

export default About;
