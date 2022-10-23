import { IconButton, Link } from "@chakra-ui/react";
import { ReactElement } from "react";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsGithub,
  BsWhatsapp,
} from "react-icons/bs";
import { RiGitlabFill } from "react-icons/ri";

interface OptionsType {
  name: string;
  icon: ReactElement;
  link?: string;
  progress?: number;
}

export const SocialLinks = () => {
  const redesSociais: Array<OptionsType> = [
    {
      name: "instagram",
      link: "https://www.instagram.com/raphaelctn/",
      icon: <BsInstagram />,
    },
    {
      name: "facebook",
      link: "https://www.facebook.com/raphacaetano37",
      icon: <BsFacebook />,
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/raphael-caetano-39aa8519a/",
      icon: <BsLinkedin />,
    },
    {
      name: "whatsapp",
      link: "https://api.whatsapp.com/send?phone=5514997190887",
      icon: <BsWhatsapp />,
    },
    {
      name: "Gitlab",
      link: "https://gitlab.com/raphactn",
      icon: <RiGitlabFill />,
    },
    { name: "github", link: "https://github.com/raphactn", icon: <BsGithub /> },
  ];

  return (
    <>
      {redesSociais.map((item, i) => (
        <Link key={i} href={item.link} target="_blank">
          <IconButton icon={item.icon} fontSize="25px" aria-label={item.name} />
        </Link>
      ))}
    </>
  );
};
