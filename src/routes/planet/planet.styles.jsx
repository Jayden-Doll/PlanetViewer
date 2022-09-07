import styled from "styled-components";
import Spline from "@splinetool/react-spline";

export const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: calc(100vh - 7rem);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3.5rem 0;
`;

export const InfoContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  max-width: 42ch;
  text-align: left;
  left: 15%;
`;

export const PlanetContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const SplinePlanet = styled(Spline)`
  width: 100%;
`;

export const SubInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding-right: 0.7rem;
`;

export const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
