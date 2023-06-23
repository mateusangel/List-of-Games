import styled, { keyframes } from "styled-components";

const Lod = keyframes`

from {
    transform: rotate(0deg);
 
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoaderStyld = styled.img`
  max-width: max-content;
  height: 5rem;
  font-size: 64rem;
  object-fit: cover;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 40%;
  left: 45%;
  transform: translate(-50%, -50%);
  animation-name: ${Lod};
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;
