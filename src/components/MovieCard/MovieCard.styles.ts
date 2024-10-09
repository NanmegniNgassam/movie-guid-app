import styled from "styled-components";
import { IoStarSharp } from "react-icons/io5";
import { Colors } from "../../utils/style/Colors";


export const MainContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 20px;
  h2 {
    color: ${Colors.text};
    text-align: center;
    font-size: 1.8rem;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    h2 {
      font-size: 1.4rem;
    }
  }
`;
export const PosterImage = styled.img`
  max-width: 100%;
  @media screen and (max-width: 600px) {
    max-width: 9rem;
    margin: 0 auto;
  }
`;

export const StyledRating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  p {
    font-size: 1rem;
    color: ${Colors.text} ;
  }
`;

export const StyledStar = styled(IoStarSharp)`
  display: block;
  color: ${Colors.primary} ;
  font-size: 1.4rem;
`;

export const MetaData = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  p {
    font-size: 1rem;
    color: ${Colors.special} ;
  }
`;
export const CategoriesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: start;
  span {
    display: block;
    border: 2px solid ${Colors.special};
    border-radius: 3px;
    font-size: .7rem;
    color: ${Colors.text};
    padding: 5px 20px;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${Colors.text} ;
  .title {
    font-size: 1.3rem;
    font-weight: 600;
  }
  p {
    text-indent: 2rem;
    font-size: 1rem;
  }
  @media screen and (max-width: 600px) {
    p {
      font-size: .9rem;
    }
  }
`;