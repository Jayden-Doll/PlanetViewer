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

export const NavLogo = styled.a`
  font-size: 1.5rem;
  color: #fff;

  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;

  padding: 1rem 0;

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
