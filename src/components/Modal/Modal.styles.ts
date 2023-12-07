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
  padding: 50px min(2.5%, 20px);
`;