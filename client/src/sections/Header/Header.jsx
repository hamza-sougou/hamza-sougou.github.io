import "./Header.css";
import CV from "../../assets/CV.pdf";
import GridWave from "../../components/GridWave";

const Header = () => {
  return (
    <div className="relative w-full h-[100vh] overflow-hidden" id="header">
      <div className="absolute left-[50%] top-[50%] translate-y-[-50%] opacity-[0.4]">
        <GridWave />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row h-full pointer-events-none">
        <div className="flex-1 flex justify-center items-center">
          <div className="flex flex-col josefin items-center z-2">
            <h1 className="text-[5rem] md:text-[8rem]">SOUGOU</h1>
            <h2 className="text-[4rem] md:text-[6rem] -mt-[2.5rem] md:-mt-[3.5rem]">
              Hamza
            </h2>
            <hr className="w-1/2 my-4" />
            <h3 className="text-[1.5rem] ">Développeur Full-stack</h3>
            <div className="flex mt-[1rem]">
              <a href={CV} target="_blank" className="pointer-events-auto">
                <div id="button_h" className="ac_btn btn">
                  <h2 className="text-xl my-[0.2rem] mx-[1rem] z-3">Mon CV</h2>
                  <div className="ring one"></div>
                  <div className="ring two"></div>
                  <div className="ring three"></div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
