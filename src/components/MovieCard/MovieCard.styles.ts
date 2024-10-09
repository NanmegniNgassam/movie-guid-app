import styled from "styled-components";
import { IoStarSharp } from "react-icons/io5";
import { Colors } from "../../utils/style/Colors";


export const MainContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 20px;
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
export const PosterImage = styled.img`
  max-width: 100%;
  @media screen and (max-width: 600px) {
    max-width: 9rem;
    margin: 0 auto;
  }
`;
export const Title = styled.h2`
  color: ${Colors.text};
  text-align: center;
  font-size: 1.8rem;
  @media screen and (max-width: 600px) {
    font-size: 1.4rem;
  }
`;

export const Rating = styled.div`
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

export const MetaContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
export const MetaData = styled.p`
  font-size: 1rem;
  color: ${Colors.special} ;
`;
export const CategoriesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: start;
`;

export const Category = styled.span`
  display: block;
  border: 2px solid ${Colors.special};
  border-radius: 3px;
  font-size: .7rem;
  color: ${Colors.text};
  padding: 5px 20px;
  cursor: pointer;
  transition: background-color 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover{
    background-color: ${Colors.special};
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