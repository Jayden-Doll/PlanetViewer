import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

import {
  NavContainer,
  NavLogo,
  SelectContainer,
  MenuArrowIcon,
  SelectText,
} from "./navbar.styles";

const Navbar = () => {
  return (
    <NavContainer>
      <NavLogo href="/">PlanetViewer</NavLogo>
      <SelectContainer>
        <MenuArrowIcon icon={faCaretDown} />
        <SelectText>Select Planet</SelectText>
      </SelectContainer>
    </NavContainer>
  );
};

export default Navbar;
