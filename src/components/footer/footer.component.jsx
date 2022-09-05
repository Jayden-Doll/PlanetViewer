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
  CopyrightText,
} from "./footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <SocialMediaIcon icon={faGithub} />
        <SocialMediaIcon icon={faLinkedin} />
        <CopyrightText> ©2022 Jayden Doll </CopyrightText>
        <SocialMediaIcon icon={faTwitter} />
        <SocialMediaIcon icon={faInstagram} />
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
