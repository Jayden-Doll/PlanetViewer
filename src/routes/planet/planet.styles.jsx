import styled from "styled-components";
import Spline from "@splinetool/react-spline";

export const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3.5rem 0;
`;

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25% 0;
`;

export const InfoContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  max-width: 41ch;
  text-align: left;
  height: auto;
  margin-right: 50%;
  z-index: 1;

  @media (max-width: 850px) {
    margin-right: 25%;
  }

  @media (max-width: 595px) {
    margin-right: 0;
  }
`;

export const PlanetContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 100%;
  z-index: 0;
`;

export const SplinePlanet = styled(Spline)``;

export const SubInfoContainer = styled.div`
  font-family: "Anek Telugu";
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding-right: 0.8rem;
`;

export const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const PlanetTitle = styled.h1`
  font-size: 1.6rem;
  text-transform: uppercase;
  font-family: "Ubuntu";
  font-weight: bold;
  margin-bottom: 0rem;
`;
export const PlanetType = styled.p`
  font-size: 1.2rem;
  margin-top: 0;
  margin-bottom: 0.5rem;
`;
export const PlanetCopyText = styled.p`
  font-family: "Anek Telugu";
`;
export const PlanetInfoType = styled.span`
  font-size: 1.1rem;
  text-align: center;
`;
export const PlanetInfoData = styled.p``;
