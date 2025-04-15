import styled from "styled-components";
import { Colors } from "../../utils/style/Colors";

export const Wrapper = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  width: 100%;
  a {
    color: ${Colors.secondary};
    text-decoration: none;
    font-style: italic;
    display: flex;
    align-items: center;
    gap: 5px;
    display: inline-block;
    text-align: center;
    margin-inline-start: 3px;
  }
  @media screen and (max-width: 400px) {
    display: none;
  }
`;