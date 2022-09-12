import { Link } from "react-router-dom";

import { planetIcons } from "../../utils/planetIcons.utils";

import {
  MenuItemsContainer,
  MenuItem,
  ItemContainer,
  Icon,
  ItemName,
} from "./mobile-menu-items.styles";

const MenuItems = () => {
  return (
    <MenuItemsContainer>
      <ItemContainer>
        <MenuItem as={Link} to="/planet/sun">
          <Icon src={planetIcons.sun} alt="sun" />
          <ItemName>The Sun</ItemName>
        </MenuItem>
      </ItemContainer>
      <ItemContainer>
        <MenuItem as={Link} to="/planet/mercury">
          <Icon src={planetIcons.mercury} alt="mercury" />
          <ItemName>Mercury</ItemName>
        </MenuItem>
      </ItemContainer>
      <ItemContainer>
        <MenuItem as={Link} to="/planet/venus">
          <Icon src={planetIcons.venus} alt="venus" />
          <ItemName>Venus</ItemName>
        </MenuItem>
      </ItemContainer>
      <ItemContainer>
        <MenuItem as={Link} to="/planet/earth">
          <Icon src={planetIcons.earth} alt="earth" />
          <ItemName>Earth</ItemName>
        </MenuItem>
      </ItemContainer>
      <ItemContainer>
        <MenuItem as={Link} to="/planet/moon">
          <Icon src={planetIcons.moon} alt="moon" />
          <ItemName>The Moon</ItemName>
        </MenuItem>
      </ItemContainer>
      <ItemContainer>
        <MenuItem as={Link} to="/planet/mars">
          <Icon src={planetIcons.mars} alt="mars" />
          <ItemName>Mars</ItemName>
        </MenuItem>
      </ItemContainer>
      <ItemContainer>
        <MenuItem as={Link} to="/planet/jupiter">
          <Icon src={planetIcons.jupiter} alt="jupiter" />
          <ItemName>Jupiter</ItemName>
        </MenuItem>
      </ItemContainer>
      <ItemContainer>
        <MenuItem as={Link} to="/planet/saturn">
          <Icon src={planetIcons.saturn} alt="saturn" />
          <ItemName>Saturn</ItemName>
        </MenuItem>
      </ItemContainer>
      <ItemContainer>
        <MenuItem as={Link} to="/planet/uranus">
          <Icon src={planetIcons.uranus} alt="uranus" />
          <ItemName>Uranus</ItemName>
        </MenuItem>
      </ItemContainer>
      <ItemContainer>
        <MenuItem as={Link} to="/planet/neptune">
          <Icon src={planetIcons.neptune} alt="neptune" />
          <ItemName>Neptune</ItemName>
        </MenuItem>
      </ItemContainer>
      <ItemContainer>
        <MenuItem as={Link} to="/planet/pluto">
          <Icon src={planetIcons.pluto} alt="pluto" />
          <ItemName>Pluto</ItemName>
        </MenuItem>
      </ItemContainer>
    </MenuItemsContainer>
  );
};

export default MenuItems;
