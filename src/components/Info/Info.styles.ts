import styled from "styled-components";
import { BsInfoSquareFill } from "react-icons/bs";
import { Colors } from "../../utils/style/Colors";

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  .label {
    font-size: 1.2rem;
    color: ${Colors.text};
  }
`;

export const StyledIcon = styled(BsInfoSquareFill)`
  color: ${Colors.primary};
  background-color: ${Colors.text};
  display: block;
  font-size: 3rem;
  overflow: hidden;
  border-radius: 7px;
  border: 1px solid  ${Colors.primary};
`;