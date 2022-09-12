import styled from "styled-components";
import Spline from "@splinetool/react-spline";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3.5rem 0;
`;

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
`;

export const InfoContainer = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  max-width: 48ch;
  text-align: left;
  height: auto;
  margin-right: 50%;
  z-index: 1;

  @media (max-width: 850px) {
    margin-right: 25%;
  }

  @media (max-width: 440px) {
    padding: 0 5% 20% 5%;
    min-height: auto;
    margin-right: 0;
    font-size: 1.3rem;
  }
`;

export const PlanetContainer = styled(motion.div)`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 100%;
  z-index: 0;
`;

export const SplinePlanet = styled(Spline)``;

export const PlanetImageMobile = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 70%;
  height: auto;

  @media (max-width: 440px) {
    width: 80%;
  }
  @media (max-width: 280px) {
    width: 100%;
  }
`;

export const MobileTitle = styled.h1`
  padding-top: 5rem;
`;

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
  margin: 0;
  ${({ planetAccent }) => `color: #${planetAccent} !important`};
`;

export const PlanetType = styled.p`
  font-size: 1.2rem;
  margin-top: 0;
  margin-bottom: 0.5rem;
`;

export const PlanetInfoType = styled.span`
  font-size: 1.1rem;
  text-align: center;
  ${({ planetAccent }) => `color: #${planetAccent} !important`};
`;

export const PlanetCopyText = styled.p`
  font-family: "Anek Telugu";
  font-size: 1.1rem;

  @media (max-width: 480px) {
    ${PlanetInfoType} {
      font-size: 1.4rem;
    }
  }
`;

export const PlanetInfoData = styled.p`
  font-size: 1.2rem;
  ${({ planetAccent }) => `color: #${planetAccent} !important`};
`;

export const BackButton = styled(Link)`
  font-family: "Ubuntu";
  font-weight: bold;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem 0.6rem;
  font-size: 1rem;
  gap: 0.5rem;
  border-radius: 0.4rem;
  border: none;
  background-color: #d4d4d4;
  color: #1c1c1c;
  transition: 0.1s ease;
  cursor: pointer;
  margin-top: 0.5rem;
  white-space: nowrap;

  :hover {
    background-color: #fff;
  }
`;
