import styled from "styled-components";

import { ReactComponent as Loader } from "../../assets/loading-icon.svg";

export const LoadingSVG = styled(Loader)`
  @keyframes spin {
    from {
      transform: rotateZ(0deg);
    }
    to {
      transform: rotateZ(360deg);
    }
  }

  #outer-circle {
    transform-origin: center;
    transform-box: fill-box;
    animation: spin 1s linear infinite;
  }
  #inner-circle {
    transform-origin: center;
    transform-box: fill-box;
    animation: spin 1.5s linear infinite;
  }

  @-moz-document url-prefix() {
    #outer-circle {
      transform-origin: center;
      transform-box: view-box;
      animation: spin 1s linear infinite;
    }
    #inner-circle {
      transform-origin: center;
      transform-box: border-box;
      animation: spin 1.5s linear infinite;
    }
  }
`;
