import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;
  min-width: 100%;
  height: 3.5rem;
  right: 0;
  border-top: 0.5px solid #fff;
  background-color: #1c1c1c;
  z-index: 2;
`;

export const FooterContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  color: #bababa;
`;

export const SocialMediaIcon = styled(FontAwesomeIcon)`
  font-size: 1.2rem;
  padding: 0.4rem;
  transition: 0.2s ease;
  color: #bababa;
  :hover {
    cursor: pointer;
    color: #fff;
  }
`;

export const CopyrightText = styled.small`
  margin: 0 0.2rem;
`;

export const IconLink = styled.a``;

export const Line = styled.div`
  height: 0.5px;
  width: 1rem;
  margin: 0rem 0.4rem;
  background-color: #787878;
`;
