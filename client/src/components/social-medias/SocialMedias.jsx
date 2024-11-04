import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "./SocialMedias.css";

const SocialMedias = () => {
  return (
    <div className="fixed  bottom-0 left-3 hidden md:flex w-[30px] justify-center ">
      <div className="flex flex-col justify-between gap-4 items-center">
        <LuGithub />
        <FaLinkedinIn />
        <FaInstagram />
        <div className="bg-white h-[3rem] w-[1px]"></div>
      </div>
    </div>
  );
};

export default SocialMedias;
