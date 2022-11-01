import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  min-height: 100vh;

  padding: 3.5rem 0;

  @media (max-width: 580px) {
    height: 12rem;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100%;

  padding: 1.1rem 0;
`;

export const InfoContainer = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  max-width: 48ch;
  height: auto;

  margin-right: 50%;

  text-align: left;

  z-index: 1;

  @media (max-width: 850px) {
    margin-right: 25%;
  }

  @media (max-width: 440px) {
    min-height: auto;

    margin-right: 0;
    padding: 0 5% 20% 5%;

    font-size: 1.3rem;
  }
`;

export const PlanetTitle = styled.h1`
  margin: 0;

  ${({ planetAccent }) => `color: #${planetAccent} !important`};

  font-size: 1.6rem;
  text-transform: uppercase;
  font-family: "Ubuntu";
  font-weight: bold;
`;

export const PlanetType = styled.p`
  margin-top: 0;
  margin-bottom: 0.5rem;
  padding-top: 0.35rem;

  font-size: 1.2rem;
`;

export const PlanetInfoType = styled.span`
  text-align: center;
  ${({ planetAccent }) => `color: #${planetAccent} !important`};

  font-size: 1.1rem;
`;

export const PlanetCopyText = styled.p`
  font-family: "Anek Telugu";
  font-size: 1.1rem;

  @media (max-width: 580px) {
    ${PlanetInfoType} {
      font-size: 1.1rem;
    }
  }
`;

export const SubInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  width: 100%;

  padding-right: 0.8rem;

  font-family: "Anek Telugu";
`;

export const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

export const PlanetInfoData = styled.p`
  ${({ planetAccent }) => `color: #${planetAccent} !important`};

  font-size: 1.2rem;
`;

export const BackButton = styled(Link)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 0.5rem;

  margin-top: 0.5rem;
  padding: 0.5rem 0.6rem;
  white-space: nowrap;

  background-color: #d4d4d4;
  color: #1c1c1c;
  border-radius: 0.1rem;
  border: none;

  font-family: "Ubuntu";
  font-weight: bold;
  font-size: 1rem;

  transition: 0.1s ease;

  :hover {
    cursor: pointer;

    background-color: #fff;
  }

  @media (max-width: 580px) {
    font-size: 1.1rem;
    padding: 0.7rem 0.8rem;
  }
`;

export const PlanetContainer = styled(motion.div)`
  height: 100%;
  width: 100%;

  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 0;
`;

export const SplinePlanet = styled(Spline)``;

export const PlanetImageMobile = styled.img`
  width: 70%;
  height: auto;

  position: absolute;
  bottom: 0;
  right: 0;

  @media (max-width: 440px) {
    width: 80%;
  }
  @media (max-width: 280px) {
    width: 100%;
  }
`;
