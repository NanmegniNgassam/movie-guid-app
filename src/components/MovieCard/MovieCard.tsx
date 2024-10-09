import {
  CategoriesContainer,
  MainContent,
  MetaData,
  PosterImage,
  StyledRating,
  StyledStar,
  TextContent,
} from "./MovieCard.styles";
import { IMovieCardProps } from "./MovieCard.types";

const MovieCard = (props: IMovieCardProps) => {
  return (
    <div>
      <MainContent>
        <PosterImage src={props.movie.bannerUrl} alt=""></PosterImage>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <h2>{props.movie.title}</h2>
          <StyledRating>
            <StyledStar /> <p>{props.movie.imdbAverage}</p>
          </StyledRating>
          <MetaData>
            <p>{props.movie.producerCompany}</p>
            <p>{props.movie.releasedYear}</p>
            <p>{props.movie.duration}</p>
          </MetaData>
          <CategoriesContainer>
            {props.movie.categories.map((category, index) => {
              return <span key={`${category}${index}`}>{category}</span>;
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
