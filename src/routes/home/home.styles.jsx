import styled from "styled-components";

import { ReactComponent as SolarSystemDiagram } from "../../assets/solar-system.svg";

export const Title = styled.h1`
  font-family: "Ubuntu", "Anek Telugu";
`;

export const SolarSystem = styled(SolarSystemDiagram)`
  width: 90vw;
  height: 90vh;

  #ring-mercury {
    animation: orbit 30s linear infinite;
    transform-origin: center;
    transform-box: fill-box;
  }

  #ring-venus {
    animation: orbit 70s linear infinite;
    transform-origin: center;
    transform-box: fill-box;
  }

  #ring-earth {
    animation: orbit 110s linear infinite;
    transform-origin: center;
    transform-box: fill-box;
  }

  #ring-mars {
    animation: orbit 150s linear infinite;
    transform-origin: center;
    transform-box: fill-box;
  }

  #ring-jupiter {
    animation: orbit 190s linear infinite;
    transform-origin: center;
    transform-box: fill-box;
  }

  #ring-saturn {
    animation: orbit 230s linear infinite;
    transform-origin: center;
    transform-box: fill-box;
  }

  #ring-uranus {
    animation: orbit 270s linear infinite;
    transform-origin: center;
    transform-box: fill-box;
  }

  #ring-neptune {
    animation: orbit 310s linear infinite;
    transform-origin: center;
    transform-box: fill-box;
  }

  #ring-pluto {
    animation: orbit 350s linear infinite;
    transform-origin: center;
    transform-box: fill-box;
  }

  @keyframes orbit {
    from {
      transform: rotateZ(360deg);
    }
    to {
      transform: rotateZ(0deg);
    }
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
