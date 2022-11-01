import { useEffect, useState } from "react";
import { useParams } from "react-router";

import apiroute from "../../utils/planetdata.utils";

import { Wrapper } from "./planet.styles";

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
        <p>{name}</p>
        <p>{type}</p>
        <p>{description}</p>
        <p>{temperature}</p>
        <p>{daylength}</p>
        <p>{orbit}</p>
        <p>{moons}</p>
        <p>{distancefromsun}</p>
        <p>{funfact}</p>
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
