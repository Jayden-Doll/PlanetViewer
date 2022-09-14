import { Link } from "react-router-dom";

import { planetIcons } from "../../utils/planetIcons.utils";

import {
  MenuItemsContainer,
  MenuItemLink,
  Wrapper,
  ContentContainer,
  Icon,
  ItemName,
  MenuItem,
} from "./mobile-menu-items.styles";

const MenuItems = () => {
  return (
    <MenuItemsContainer>
      <MenuItem>
        <MenuItemLink as={Link} to="/planet/sun">
          <Wrapper>
            <ContentContainer>
              <Icon src={planetIcons.sun} alt="sun" />
              <ItemName>The Sun</ItemName>
            </ContentContainer>
          </Wrapper>
        </MenuItemLink>
      </MenuItem>

      <MenuItem>
        <MenuItemLink as={Link} to="/planets/mercury">
          <Wrapper>
            <ContentContainer>
              <Icon src={planetIcons.mercury} alt="mercury" />
              <ItemName>Mercury</ItemName>
            </ContentContainer>
          </Wrapper>
        </MenuItemLink>
      </MenuItem>

      <MenuItem>
        <MenuItemLink as={Link} to="/planets/venus">
          <Wrapper>
            <ContentContainer>
              <Icon src={planetIcons.venus} alt="venus" />
              <ItemName>Venus</ItemName>
            </ContentContainer>
          </Wrapper>
        </MenuItemLink>
      </MenuItem>

      <MenuItem>
        <MenuItemLink as={Link} to="/planets/earth">
          <Wrapper>
            <ContentContainer>
              <Icon src={planetIcons.earth} alt="earth" />
              <ItemName>Earth</ItemName>
            </ContentContainer>
          </Wrapper>
        </MenuItemLink>
      </MenuItem>

      <MenuItem>
        <MenuItemLink as={Link} to="/planets/moon">
          <Wrapper>
            <ContentContainer>
              <Icon src={planetIcons.moon} alt="moon" />
              <ItemName>The Moon</ItemName>
            </ContentContainer>
          </Wrapper>
        </MenuItemLink>
      </MenuItem>

      <MenuItem>
        <MenuItemLink as={Link} to="/planets/mars">
          <Wrapper>
            <ContentContainer>
              <Icon src={planetIcons.mars} alt="mars" />
              <ItemName>Mars</ItemName>
            </ContentContainer>
          </Wrapper>
        </MenuItemLink>
      </MenuItem>

      <MenuItem>
        <MenuItemLink as={Link} to="/planets/jupiter">
          <Wrapper>
            <ContentContainer>
              <Icon src={planetIcons.jupiter} alt="jupiter" />
              <ItemName>Jupiter</ItemName>
            </ContentContainer>
          </Wrapper>
        </MenuItemLink>
      </MenuItem>

      <MenuItem>
        <MenuItemLink as={Link} to="/planets/saturn">
          <Wrapper>
            <ContentContainer>
              <Icon src={planetIcons.saturn} alt="saturn" />
              <ItemName>Saturn</ItemName>
            </ContentContainer>
          </Wrapper>
        </MenuItemLink>
      </MenuItem>

      <MenuItem>
        <MenuItemLink as={Link} to="/planets/uranus">
          <Wrapper>
            <ContentContainer>
              <Icon src={planetIcons.uranus} alt="uranus" />
              <ItemName>Uranus</ItemName>
            </ContentContainer>
          </Wrapper>
        </MenuItemLink>
      </MenuItem>

      <MenuItem>
        <MenuItemLink as={Link} to="/planets/neptune">
          <Wrapper>
            <ContentContainer>
              <Icon src={planetIcons.neptune} alt="neptune" />
              <ItemName>Neptune</ItemName>
            </ContentContainer>
          </Wrapper>
        </MenuItemLink>
      </MenuItem>

      <MenuItem>
        <MenuItemLink as={Link} to="/planets/pluto">
          <Wrapper>
            <ContentContainer>
              <Icon src={planetIcons.pluto} alt="pluto" />
              <ItemName>Pluto</ItemName>
            </ContentContainer>
          </Wrapper>
        </MenuItemLink>
      </MenuItem>
    </MenuItemsContainer>
  );
};

export default MenuItems;
