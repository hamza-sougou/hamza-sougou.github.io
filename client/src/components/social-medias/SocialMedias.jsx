import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

const SocialMedias = () => {
  return (
    <div className="fixed  bottom-0 left-3 hidden md:flex w-[30px] justify-center ">
      <div className="flex flex-col justify-between gap-4 items-center">
        <a href="https://github.com/hamza-sougou/" target="_blank">
          <LuGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/hamza-sougou-9293621ba/"
          target="_blank"
        >
          <FaLinkedinIn />
        </a>
        <a href="https://www.instagram.com/hamza_sougou/" target="_blank">
          <FaInstagram />
        </a>
        <div className="h-[3rem] w-[1px] bg-[#141414] dark:bg-white"></div>
      </div>
    </div>
  );
};

export default SocialMedias;
