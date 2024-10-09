import styled from "styled-components";
import { Colors } from "../../utils/style/Colors";

export const ModalWrapper = styled.div`
  width: 600px;
  max-width: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  background-color: ${Colors.container};
  padding: 50px 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (max-width: 600px) {
    padding: 30px 2.5%;
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export const LoaderMessage = styled.p`
  color: ${Colors.text};
  font-size: 1.2rem;
`;