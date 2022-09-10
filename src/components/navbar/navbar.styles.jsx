import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NavContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  min-width: 100%;
  height: 3.5rem;
  border-bottom: 1px solid #fff;
  background-color: #1c1c1c;
  padding: 0 2rem;
  z-index: 2;
`;

export const LinkContainer = styled.div`
  width: auto;
  height: auto;
  padding: 1rem 1.5rem;
`;

export const NavLogo = styled.p`
  font-size: 1.5rem;
  color: #fff;
  margin: 0 auto;

  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;

  :hover {
    cursor: pointer;
  }
`;

export const SelectContainer = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 1rem;
  width: 10rem;

  :hover {
    cursor: pointer;
  }
`;

export const MenuArrowIcon = styled(FontAwesomeIcon)`
  padding: 1rem 0;
`;

export const SelectText = styled.p`
  font-size: 1.1rem;
  padding: 1rem 0;

  margin: 0;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
`;
