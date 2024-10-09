import styled from "styled-components";
import { Colors } from "../../utils/style/Colors";

export const SearchWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  column-gap: 20px;
  font-size: 1rem;
  @media screen and (max-width: 350px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    row-gap: 15px;
  }
`;
export const SearchInput = styled.input`
  border-radius: 5px;
  background-color: transparent;
  outline: none;
  border: 1px solid ${Colors.special};
  color: ${Colors.text};
  padding: .4rem .7rem;
  font-size: 1rem;
`;
export const SearchButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: ${Colors.primary};
  text-align: center;
  font-size: 1rem;
  @media screen and (max-width: 350px) {
    width: 33%;
    margin: 0 auto;
  }
`;