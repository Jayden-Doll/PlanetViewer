import styled from "styled-components";

export const SolarSystemOverlay = styled.svg`
  width: 100%;
  height: auto;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
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
`;
