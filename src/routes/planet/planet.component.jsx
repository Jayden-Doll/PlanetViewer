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
  PlanetTitle,
  PlanetType,
  PlanetCopyText,
  PlanetInfoType,
  PlanetInfoData,
  Container,
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
      <Container>
        {loading ? (
          <>
            <InfoContainer>
              <PlanetTitle>{name}</PlanetTitle>
              <PlanetType>{type}</PlanetType>
              <PlanetCopyText>{description}</PlanetCopyText>
              <SubInfoContainer>
                <InfoItem>
                  <PlanetInfoType>Average Temperature</PlanetInfoType>
                  <PlanetInfoData>{temperature}</PlanetInfoData>
                </InfoItem>
                <InfoItem>
                  <PlanetInfoType>Day Length</PlanetInfoType>
                  <PlanetInfoData>{daylength}</PlanetInfoData>
                </InfoItem>
                <InfoItem>
                  <PlanetInfoType>Orbital Period</PlanetInfoType>
                  <PlanetInfoData>{orbit}</PlanetInfoData>
                </InfoItem>
                <InfoItem>
                  <PlanetInfoType>Number of Moons</PlanetInfoType>
                  <PlanetInfoData>{moons}</PlanetInfoData>
                </InfoItem>
                <InfoItem>
                  {planet === "sun" ? (
                    <>
                      <PlanetInfoType>
                        Distance from Galaxy Center
                      </PlanetInfoType>
                      <PlanetInfoData>{distancefromsun}</PlanetInfoData>
                    </>
                  ) : (
                    <>
                      <PlanetInfoType>Distance from the Sun</PlanetInfoType>
                      <PlanetInfoData>{distancefromsun}</PlanetInfoData>
                    </>
                  )}
                </InfoItem>
              </SubInfoContainer>
              <PlanetCopyText>
                <PlanetInfoType>Fun Fact:</PlanetInfoType> {funfact}
              </PlanetCopyText>
            </InfoContainer>
            <PlanetContainer>
              <SplinePlanet scene={`${planets[planet]}`} />
            </PlanetContainer>
          </>
        ) : (
          <LoadingIcon />
        )}
      </Container>
    </Wrapper>
  );
};

export default Planet;
