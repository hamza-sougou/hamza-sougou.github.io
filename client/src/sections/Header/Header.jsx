import "./Header.css";
import Me from "../../assets/about.jpg";

const Header = () => {
  return (
    <div className="w-full h-[100vh]">
      <div className="flex flex-col md:flex-row h-full">
        <div className="flex-1 flex justify-center items-center">
          <div className="flex flex-col josefin">
            <h1 className="text-[6rem] ">Hamza</h1>
            <h2 className="text-[3rem] -mt-[2rem] ">SOUGOU</h2>
            <hr />
            <h3 className="text-[1.5rem]">Développeur Full-stack</h3>
            <div className="flex mt-[1rem]">
              <div id="button_h" className="ac_btn btn">
                <h2 className="text-xl my-[0.2rem] mx-[1rem]">Mon Portfolio</h2>
                <div className="ring one"></div>
                <div className="ring two"></div>
                <div className="ring three"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-end">
          <img
            src={Me}
            alt="Me"
            className="w-full object-cover overflow-hidden object-top"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
