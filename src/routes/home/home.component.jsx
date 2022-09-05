import SolarSystemMap from "../../components/solar-system-map/solar-system-map.component";

import { Title, SolarSystem, Container } from "./home.styles";

const Home = () => {
  return (
    <div>
      <Title>PlanetViewer</Title>
      <Container>
        <SolarSystemMap />
        <SolarSystem />
      </Container>
    </div>
  );
};

export default Home;
