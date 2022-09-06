import styled from "styled-components";

import { ReactComponent as Loader } from "../../assets/loading-icon.svg";

export const LoadingSVG = styled(Loader)`
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
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
`;
