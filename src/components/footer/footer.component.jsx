import { Link } from "react-router-dom";

import {
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import {
  FooterContainer,
  FooterContent,
  SocialMediaIcon,
  IconLink,
  CopyrightText,
} from "./footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <IconLink
          href="https://github.com/Jayden-Doll"
          target="_blank"
          rel="noreferer noopener"
        >
          <SocialMediaIcon icon={faGithub} />
        </IconLink>
        <IconLink
          href="https://www.linkedin.com/in/jayden-doll/"
          target="_blank"
          rel="noreferer noopener"
        >
          <SocialMediaIcon icon={faLinkedin} />
        </IconLink>
        <CopyrightText> ©2022 Jayden Doll </CopyrightText>
        <IconLink
          href="https://twitter.com/Jayden_Doll"
          target="_blank"
          rel="noreferer noopener"
        >
          <SocialMediaIcon icon={faTwitter} />
        </IconLink>
        <IconLink
          href="https://www.instagram.com/jaydoll_codes/"
          target="_blank"
          rel="noreferer noopener"
        >
          <SocialMediaIcon icon={faInstagram} />
        </IconLink>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
