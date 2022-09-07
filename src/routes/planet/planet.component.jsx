import { useEffect, useState } from "react";
import { useParams } from "react-router";

import LoadingIcon from "../../components/loading-icon/loading-icon.component";

import apiroute from "../../utils/planetdata.utils";

import { planets } from "../../utils/splineplanet.utils";

import {
  Wrapper,
  InfoContainer,
  PlanetContainer,
  SplinePlanet,
  SubInfoContainer,
  InfoItem,
} from "./planet.styles";

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
    // eslint-disable-next-line
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
        <>
          <InfoContainer>
            <p>{name}</p>
            <p>{type}</p>
            <p>{description}</p>
            <SubInfoContainer>
              <InfoItem>
                <span>Average Temperature</span>
                <span>{temperature}</span>
              </InfoItem>
              <InfoItem>
                <span>Day Length</span>
                <span>{daylength}</span>
              </InfoItem>
              <InfoItem>
                <span>Orbital Period</span>
                <span>{orbit}</span>
              </InfoItem>
              <InfoItem>
                <span>Number of Moons</span>
                <span>{moons}</span>
              </InfoItem>
              <InfoItem>
                {planet === "sun" ? (
                  <>
                    <span>Distance from Galaxy Center</span>
                    <span>{distancefromsun}</span>
                  </>
                ) : (
                  <>
                    <span>Distance from the Sun</span>
                    <span>{distancefromsun}</span>
                  </>
                )}
              </InfoItem>
            </SubInfoContainer>
            <p>Fun Fact: {funfact}</p>
          </InfoContainer>
          <PlanetContainer>
            <SplinePlanet scene={`${planets[planet]}`} />
          </PlanetContainer>
        </>
      ) : (
        <LoadingIcon />
      )}
    </Wrapper>
  );
};

export default Planet;
