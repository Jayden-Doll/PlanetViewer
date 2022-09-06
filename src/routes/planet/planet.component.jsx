import { useEffect, useState } from "react";
import { useParams } from "react-router";

import apiroute from "../../utils/planetdata.utils";

import { Wrapper, InfoContainer } from "./planet.styles";

const Planet = () => {
  let { planet } = useParams();

  const [currentPlanetData, setCurrentPlanetData] = useState("");

  const fetchPlanetData = async () => {
    try {
      const response = await fetch(apiroute);
      const data = await response.json();
      const singlePlanetData = data.data.planets[`${planet}`];
      setCurrentPlanetData(singlePlanetData);
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

  if (currentPlanetData) {
    return (
      <Wrapper>
        <InfoContainer>
          <p>{name}</p>
          <p>{type}</p>
          <p>{description}</p>
          <p>Average Temperature: {temperature}</p>
          <p>Day Length: {daylength}</p>
          <p>Orbital Period: {orbit}</p>
          <p>Number of Moons: {moons}</p>
          <p>Distance from the Sun: {distancefromsun}</p>
          <p>Fun Fact: {funfact}</p>
        </InfoContainer>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <p>Loading...</p>
      </Wrapper>
    );
  }
};

export default Planet;
