import styled from "styled-components";

export const SolarSystemOverlay = styled.svg`
  width: 90vw;
  height: 90vh;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  z-index: 1;

  .orbit-map {
    stroke: transparent;
  }

  .planet {
    transition: stroke 0.1s ease;
    stroke: transparent;
    fill: transparent;
    rx: 100%;

    :hover {
      cursor: pointer;
      stroke: rgba(255, 255, 255, 0.8);
    }
  }

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
