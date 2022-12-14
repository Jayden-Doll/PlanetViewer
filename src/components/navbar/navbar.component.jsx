import { useContext } from "react";
import { Link } from "react-router-dom";

import { PlanetContext } from "../../contexts/planet.context";

import { NavContainer, NavLogo, LinkContainer } from "./navbar.styles";

const Navbar = () => {
  const { planetAccent } = useContext(PlanetContext);

  return (
    <NavContainer planetAccent={planetAccent}>
      <LinkContainer as={Link} to="/">
        <NavLogo>PlanetViewer</NavLogo>
      </LinkContainer>
    </NavContainer>
  );
};

export default Navbar;
