import "./Header.css";

const Header = () => {
  return (
    <div className="w-full h-[100vh] " id="header">
      <div className="flex flex-col md:flex-row h-full">
        <div className="flex-1 flex justify-center items-center">
          <div className="flex flex-col josefin items-center">
            <h1 className="text-[5rem] md:text-[8rem] ">SOUGOU</h1>
            <h2 className="text-[4rem] md:text-[6rem] -mt-[2.5rem] md:-mt-[3.5rem]">
              Hamza
            </h2>
            <hr />
            <h3 className="text-[1.5rem]">Développeur Full-stack</h3>
            <div className="flex mt-[1rem]">
              <div id="button_h" className="ac_btn btn">
                <h2 className="text-xl my-[0.2rem] mx-[1rem] z-3 ">
                  Mon Portfolio
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

export default Header;
