import styled, { keyframes } from "styled-components";
import { Colors } from "./Colors";


const rotate = keyframes`
  from {
    transform: rotate(0deg);
  } 
  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  padding: 5%;
  border: .5rem solid ${Colors.text};
  border-bottom-color: ${Colors.primary};
  border-radius: 50%;
  animation: ${rotate} 1s infinite linear;
  height: 0;
  width: 0;
  margin: 0 auto;
`;

