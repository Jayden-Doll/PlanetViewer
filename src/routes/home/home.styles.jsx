import styled from "styled-components";

import { ReactComponent as SolarSystemDiagram } from "../../assets/solar-system.svg";

export const SolarSystem = styled(SolarSystemDiagram)`
  width: 100%;
  height: 95%;

  #ring-mercury {
    animation: orbit 50s linear infinite;
    transform-origin: center;
    transform-box: fill-box;
  }

  #ring-venus {
    animation: orbit 90s linear infinite;
    transform-origin: center;
    transform-box: fill-box;
  }

  #ring-earth {
    animation: orbit 130s linear infinite;
    transform-origin: center;
    transform-box: fill-box;
  }

  #ring-mars {
    animation: orbit 170s linear infinite;
    transform-origin: center;
    transform-box: fill-box;
  }

  #ring-jupiter {
    animation: orbit 210s linear infinite;
    transform-origin: center;
    transform-box: fill-box;
  }

  #ring-saturn {
    animation: orbit 250s linear infinite;
    transform-origin: center;
    transform-box: fill-box;
  }

  #ring-uranus {
    animation: orbit 290s linear infinite;
    transform-origin: center;
    transform-box: fill-box;
  }

  #ring-neptune {
    animation: orbit 330s linear infinite;
    transform-origin: center;
    transform-box: fill-box;
  }

  #ring-pluto {
    animation: orbit 370s linear infinite;
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

  @-moz-document url-prefix() {
    #ring-mercury {
      transform-box: view-box;
    }

    #ring-venus {
      transform-box: view-box;
    }

    #ring-earth {
      transform-box: view-box;
    }

    #ring-mars {
      transform-box: view-box;
    }

    #ring-jupiter {
      transform-box: view-box;
    }

    #ring-saturn {
      transform-box: view-box;
    }

    #ring-uranus {
      transform-box: view-box;
    }

    #ring-neptune {
      transform-box: view-box;
    }

    #ring-pluto {
      transform-box: view-box;
    }
  }
`;

export const HomeWrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 7rem);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3.5rem 0;

  @media (max-width: 580px) {
    height: auto;
    padding: 3.5rem 0;
  }
`;

export const SolarSystemContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
