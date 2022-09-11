import { useEffect, useContext } from "react";
import { PlanetContext } from "../../contexts/planet.context";
import SolarSystemMap from "../../components/solar-system-map/solar-system-map.component";

import AnimatedPage from "../../components/animatedpage.component";

import { SolarSystem, SolarSystemContainer, HomeWrapper } from "./home.styles";

const Home = () => {
  const { setPlanetAccent } = useContext(PlanetContext);

  useEffect(() => {
    setPlanetAccent("fff");
    // eslint-disable-next-line
  }, []);

  return (
    <AnimatedPage>
      <HomeWrapper>
        <SolarSystemContainer>
          <SolarSystemMap />
          <SolarSystem />
        </SolarSystemContainer>
      </HomeWrapper>
    </AnimatedPage>
  );
};

export default Home;
