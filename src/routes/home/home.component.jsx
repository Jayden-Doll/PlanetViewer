import { useEffect, useContext } from "react";
import { PlanetContext } from "../../contexts/planet.context";
import SolarSystemMap from "../../components/solar-system-map/solar-system-map.component";

import { SolarSystem, SolarSystemContainer, HomeWrapper } from "./home.styles";

const Home = () => {
  const { setPlanetAccent } = useContext(PlanetContext);

  useEffect(() => {
    setPlanetAccent("fff");
  }, []);

  return (
    <HomeWrapper>
      <SolarSystemContainer>
        <SolarSystemMap />
        <SolarSystem />
      </SolarSystemContainer>
    </HomeWrapper>
  );
};

export default Home;
