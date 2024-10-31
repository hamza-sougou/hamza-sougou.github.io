import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "./SocialMedias.css";

const SocialMedias = () => {
  return (
    <div className="fixed bottom-[50%] translate-y-[50%] left-3 hidden md:flex">
      <div className=" border border-orange-500 rounded-full flex flex-col justify-between gap-4 p-5">
        <LuGithub />
        <FaLinkedinIn />
        <FaInstagram />
      </div>
    </div>
  );
};

export default SocialMedias;
