import {
  CategoriesContainer,
  Category,
  MainContent,
  MetaContainer,
  MetaData,
  PosterImage,
  Rating,
  StyledStar,
  TextContent,
  Title,
} from "./MovieCard.styles";
import { IMovieCardProps } from "./MovieCard.types";

const MovieCard = (props: IMovieCardProps) => {
  return (
    <div>
      <MainContent>
        <PosterImage src={props.movie.bannerUrl} alt=""></PosterImage>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <Title>{props.movie.title}</Title>
          <Rating>
            <StyledStar /> <p>{props.movie.imdbAverage}</p>
          </Rating>
          <MetaContainer>
            <MetaData>{props.movie.producerCompany}</MetaData>
            <MetaData>{props.movie.releasedYear}</MetaData>
            <MetaData>{props.movie.duration}</MetaData>
          </MetaContainer>
          <CategoriesContainer>
            {props.movie.categories.map((category, index) => {
              return (
                <Category key={`${category}${index}`}>{category}</Category>
              );
            })}
          </CategoriesContainer>
        </div>
      </MainContent>
      <TextContent>
        <div>
          <span className="title">Plot :</span>
          <p>{props.movie.plot}</p>
        </div>
        <div>
          <span className="title">Casting :</span>
          <p>{props.movie.casting}</p>
        </div>
      </TextContent>
    </div>
  );
};

export default MovieCard;
