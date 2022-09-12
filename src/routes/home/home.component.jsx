import { useEffect, useContext, useState } from "react";
import { PlanetContext } from "../../contexts/planet.context";
import MobileMenu from "../../components/mobile-menu/mobile-menu.component";
import SolarSystemMap from "../../components/solar-system-map/solar-system-map.component";

import AnimatedPage from "../../components/animated-page/animatedpage.component";

import { SolarSystem, SolarSystemContainer, HomeWrapper } from "./home.styles";

const Home = () => {
  const [isMobile, setMobile] = useState(window.innerWidth < 650);

  const updateMedia = () => {
    setMobile(window.innerWidth < 650);
  };

  const { setPlanetAccent } = useContext(PlanetContext);

  useEffect(() => {
    setPlanetAccent("fff");

    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
    // eslint-disable-next-line
  }, []);

  return (
    <AnimatedPage>
      <HomeWrapper>
        {isMobile ? (
          <MobileMenu />
        ) : (
          <SolarSystemContainer>
            <SolarSystemMap />
            <SolarSystem />
          </SolarSystemContainer>
        )}
      </HomeWrapper>
    </AnimatedPage>
  );
};

export default Home;
