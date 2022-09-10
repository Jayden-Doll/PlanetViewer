import { Link } from "react-router-dom";

import { NavContainer, NavLogo, LinkContainer } from "./navbar.styles";

const Navbar = () => {
  return (
    <NavContainer>
      <LinkContainer as={Link} to="/">
        <NavLogo>PlanetViewer</NavLogo>
      </LinkContainer>
    </NavContainer>
  );
};

export default Navbar;
