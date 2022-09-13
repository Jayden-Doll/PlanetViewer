import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  min-width: 100%;
  height: 3rem;

  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;

  background-color: #141414;
  border-bottom: 1px solid #fff;
  ${({ planetAccent }) =>
    `border-bottom: 1px solid #${planetAccent} !important`};

  transition: 0.3s ease;
  transition-delay: 0.2s;

  @media (max-width: 580px) {
    height: 6rem;
    justify-content: center;
  }
`;

export const LinkContainer = styled.div`
  width: auto;
  height: auto;

  padding: 1rem 1.5rem;
`;

export const NavLogo = styled.p`
  margin: 0 auto;

  font-size: 1.4rem;
  color: #fff;

  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;

  :hover {
    cursor: pointer;
  }

  @media (max-width: 580px) {
    font-size: 2rem;
  }
`;
