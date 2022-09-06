import { useEffect, useState } from "react";
import { useParams } from "react-router";

import LoadingIcon from "../../components/loading-icon/loading-icon.component";

import apiroute from "../../utils/planetdata.utils";

import { Wrapper, InfoContainer } from "./planet.styles";

const Planet = () => {
  let { planet } = useParams();

  const [loading, setLoading] = useState(false);
  const [currentPlanetData, setCurrentPlanetData] = useState("");

  const fetchPlanetData = async () => {
    try {
      const response = await fetch(apiroute);
      const data = await response.json();
      const currentPlanetData = data.data.planets[`${planet}`];
      setCurrentPlanetData(currentPlanetData);
      setLoading(true);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  useEffect(() => {
    fetchPlanetData();
  }, []);

  const {
    name,
    type,
    description,
    temperature,
    daylength,
    orbit,
    moons,
    distancefromsun,
    funfact,
  } = currentPlanetData;

  return (
    <Wrapper>
      {loading ? (
        <InfoContainer>
          <p>{name}</p>
          <p>{type}</p>
          <p>{description}</p>
          <p>Average Temperature: {temperature}</p>
          <p>Day Length: {daylength}</p>
          <p>Orbital Period: {orbit}</p>
          <p>Number of Moons: {moons}</p>
          {planet === "sun" ? (
            <p>Distance from Galaxy Center: {distancefromsun}</p>
          ) : (
            <p>Distance from the Sun: {distancefromsun}</p>
          )}
          <p>Fun Fact: {funfact}</p>
        </InfoContainer>
      ) : (
        <LoadingIcon />
      )}
    </Wrapper>
  );
};

export default Planet;
