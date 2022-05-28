import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { SiFreelancer } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/mehdi-tahmasebi-27041992/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/mehdi-tahmasebi" target="_blank">
        <BsGithub />
      </a>
      <a href="https://www.freelancer.com/u/mehditahmasebi" target="_blank">
        <SiFreelancer />
      </a>
    </div>
  );
};

export default HeaderSocials;
