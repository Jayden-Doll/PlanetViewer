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
          aria-label="github"
          href="https://github.com/Jayden-Doll"
          target="_blank"
          rel="noreferer noopener"
        >
          <SocialMediaIcon icon={faGithub} />
        </IconLink>
        <IconLink
          aria-label="linkedin"
          href="https://www.linkedin.com/in/jayden-doll/"
          target="_blank"
          rel="noreferer noopener"
        >
          <SocialMediaIcon icon={faLinkedin} />
        </IconLink>
        <CopyrightText> ©2022 Jayden Doll </CopyrightText>
        <IconLink
          aria-label="twitter"
          href="https://twitter.com/Jayden_Doll"
          target="_blank"
          rel="noreferer noopener"
        >
          <SocialMediaIcon icon={faTwitter} />
        </IconLink>
        <IconLink
          aria-label="instagram"
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
