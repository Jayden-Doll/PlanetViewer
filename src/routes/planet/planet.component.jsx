import { useEffect, useState } from "react";
import { useParams } from "react-router";

import apiroute from "../../utils/planetdata.utils";

import { Title, Subtitle } from "./planet.styles";

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

  const { name, type } = currentPlanetData;

  if (currentPlanetData) {
    return (
      <div>
        <Title>{name}</Title>
        <Subtitle>{type}</Subtitle>
      </div>
    );
  } else {
    return (
      <div>
        <Title>Loading...</Title>
      </div>
    );
  }
};

export default Planet;
