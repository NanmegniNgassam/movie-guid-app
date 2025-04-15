import styled from "styled-components";
import { Colors } from "../../utils/style/Colors";

export const TitleWrapper = styled.h1`
  color: ${Colors.text};
  font-size: 2.4rem;
  padding: 10px 20px;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;