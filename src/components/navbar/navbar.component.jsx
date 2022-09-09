import { Link } from "react-router-dom";

import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

import {
  NavContainer,
  NavLogo,
  SelectContainer,
  MenuArrowIcon,
  SelectText,
  LinkContainer,
} from "./navbar.styles";

const Navbar = () => {
  return (
    <NavContainer>
      <LinkContainer as={Link} to="/">
        <NavLogo>PlanetViewer</NavLogo>
      </LinkContainer>
      <SelectContainer>
        <MenuArrowIcon icon={faCaretDown} />
        <SelectText>Select Planet</SelectText>
      </SelectContainer>
    </NavContainer>
  );
};

export default Navbar;
