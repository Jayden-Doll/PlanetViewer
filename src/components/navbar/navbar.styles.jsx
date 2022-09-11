import styled from "styled-components";

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
  ${({ planetAccent }) =>
    `border-bottom: 1px solid #${planetAccent} !important`};
  background-color: #1c1c1c;
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
