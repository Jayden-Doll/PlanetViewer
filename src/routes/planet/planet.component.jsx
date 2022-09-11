import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import LoadingIcon from "../../components/loading-icon/loading-icon.component";

import { PlanetContext } from "../../contexts/planet.context";

import AnimatedPage from "../../components/animatedpage.component";

import apiRoute from "../../utils/planetData.utils";
import planetColor from "../../utils/planetAccent.utils";
import { planets } from "../../utils/splinePlanet.utils";

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
  BackButton,
} from "./planet.styles";

const Planet = () => {
  let { planet: PlanetName } = useParams();
  const { planetAccent, setPlanetAccent } = useContext(PlanetContext);

  const [loading, setLoading] = useState(false);
  const [currentPlanetData, setCurrentPlanetData] = useState("");

  const fetchPlanetData = async () => {
    try {
      const response = await fetch(apiRoute);
      const data = await response.json();
      const currentPlanetData = data.data.planets[`${PlanetName}`];
      setCurrentPlanetData(currentPlanetData);
      setLoading(true);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };
  useEffect(() => {
    fetchPlanetData();
    setPlanetAccent(planetColor[`${PlanetName}`]);
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
    <AnimatedPage>
      <Wrapper>
        <Container>
          {loading ? (
            <>
              <InfoContainer
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
              >
                <PlanetTitle planetAccent={planetAccent}>{name}</PlanetTitle>
                <PlanetType>{type}</PlanetType>
                <PlanetCopyText>{description}</PlanetCopyText>
                <SubInfoContainer>
                  <InfoItem>
                    <PlanetInfoType>Average Temperature</PlanetInfoType>
                    <PlanetInfoData planetAccent={planetAccent}>
                      {temperature}
                    </PlanetInfoData>
                  </InfoItem>
                  <InfoItem>
                    <PlanetInfoType>Day Length</PlanetInfoType>
                    <PlanetInfoData planetAccent={planetAccent}>
                      {daylength}
                    </PlanetInfoData>
                  </InfoItem>
                  <InfoItem>
                    <PlanetInfoType>Orbital Period</PlanetInfoType>
                    <PlanetInfoData planetAccent={planetAccent}>
                      {orbit}
                    </PlanetInfoData>
                  </InfoItem>
                  <InfoItem>
                    <PlanetInfoType>Number of Moons</PlanetInfoType>
                    <PlanetInfoData planetAccent={planetAccent}>
                      {moons}
                    </PlanetInfoData>
                  </InfoItem>
                  <InfoItem>
                    {PlanetName === "sun" ? (
                      <>
                        <PlanetInfoType>
                          Distance from Galaxy Center
                        </PlanetInfoType>
                        <PlanetInfoData planetAccent={planetAccent}>
                          {distancefromsun}
                        </PlanetInfoData>
                      </>
                    ) : (
                      <>
                        <PlanetInfoType>Distance from the Sun</PlanetInfoType>
                        <PlanetInfoData planetAccent={planetAccent}>
                          {distancefromsun}
                        </PlanetInfoData>
                      </>
                    )}
                  </InfoItem>
                </SubInfoContainer>
                <PlanetCopyText>
                  <PlanetInfoType planetAccent={planetAccent}>
                    Fun Fact:
                  </PlanetInfoType>{" "}
                  {funfact}
                </PlanetCopyText>
                <BackButton to="/">
                  <FontAwesomeIcon icon={faArrowLeft} />
                  Back To Home
                </BackButton>
              </InfoContainer>
              <FontAwesomeIcon />
              <PlanetContainer
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
              >
                <SplinePlanet scene={`${planets[PlanetName]}`} />
              </PlanetContainer>
            </>
          ) : (
            <LoadingIcon />
          )}
        </Container>
      </Wrapper>
    </AnimatedPage>
  );
};

export default Planet;
