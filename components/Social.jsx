import Link from "next/link";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiTableau, SiLeetcode } from "react-icons/si";
const socials = [
  { icon: <FaGithub />, path: "https://github.com/devmithun7" },
  { icon: <FaLinkedinIn />, path: "https://linkedin.com/in/dev-mithunisvar-premraj" },
  { icon: <SiTableau />, path: "https://public.tableau.com/app/profile/dev.mithunisvar/vizzes" },
  { icon: <SiLeetcode />, path: "https://leetcode.com/u/DevMithunisvar/" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
