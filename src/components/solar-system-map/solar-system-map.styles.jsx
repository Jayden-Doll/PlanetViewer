import styled from "styled-components";

export const SolarSystemOverlay = styled.svg`
  @keyframes orbit {
    from {
      transform: rotateZ(360deg);
    }
    to {
      transform: rotateZ(0deg);
    }
  }

  width: 100%;
  height: 95%;

  position: absolute;
  z-index: 1;

  .orbit-map {
    stroke: transparent;
  }

  .planet {
    stroke: transparent;
    fill: transparent;
    rx: 100%;

    transition: stroke 0.1s ease;

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
