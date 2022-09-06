import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;
  min-width: 100%;
  height: 3.5rem;
  border-top: 0.5px solid #fff;
  background-color: #1c1c1c;
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