import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;

  min-width: 100%;
  height: 3.5rem;

  position: absolute;
  bottom: 0;
  z-index: 2;

  background-color: #141414;
  border-top: 0.5px solid #fff;
  ${({ planetAccent }) =>
    `border-top: 0.5px solid #${planetAccent} !important`};

  transition: 0.3s ease;
  transition-delay: 0.2s;

  @media (max-width: 580px) {
    height: 6rem;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const Line = styled.div`
  height: 0.5px;
  width: 1rem;

  margin: 0rem 0.4rem;

  background-color: #787878;
`;

export const SocialMediaIcon = styled(FontAwesomeIcon)`
  padding: 0.4rem;

  font-size: 1.2rem;

  color: #bababa;

  transition: 0.2s ease;

  :hover {
    cursor: pointer;
    color: #fff;
  }

  @media (max-width: 580px) {
    font-size: 2rem;
  }
`;

export const IconLink = styled.a``;

export const CopyrightText = styled.small`
  margin: 0 0.2rem;

  ${({ planetAccent }) => `color: #${planetAccent} !important`};

  transition: 0.3s ease;
  transition-delay: 0.2s;

  @media (max-width: 580px) {
    margin: 0 0.5rem;

    font-size: 1.5rem;
  }
`;
