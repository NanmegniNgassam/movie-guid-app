import { useEffect, useState } from "react";
import { Loader } from "../../utils/style/Atoms";
import MovieCard from "../MovieCard/MovieCard";
import SearchBar from "../SearchBar/SearchBar";
import { LoaderContainer, LoaderMessage, ModalWrapper } from "./Modal.styles";
import { IModalProps } from "./Modal.types";
import Info from "../Info/Info";
import { DEFAULT_MOVIE_TITLE } from "../../utils/constants";
import { IMovie } from "../../utils/types/IMovie";

const Modal = (props: IModalProps) => {
  const [searchValue, setSearchValue] = useState<string>(DEFAULT_MOVIE_TITLE);
  const [isDataLoading, setDataLoading] = useState<boolean>(false);
  const [movie, setMovie] = useState({} as IMovie);

  useEffect(() => {
    setDataLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=18d007be&t=${searchValue}`
        );
        const data = await response.json();
        if (data?.Response === "True") {
          const movie: IMovie = {
            title: data.Title,
            bannerUrl: data.Poster,
            imdbAverage: data.imdbRating,
            categories: data.Genre.split(","),
            duration: data.Runtime,
            plot: data.Plot,
            releasedYear: data.Year,
            producerCompany: data.Rated,
            casting: data.Actors,
          };
          setMovie(movie);
        } else {
          setMovie({} as IMovie);
        }
      } catch {
        setMovie({} as IMovie);
      } finally {
        setDataLoading(false);
      }
    };
    fetchData();
  }, [searchValue]);
  return (
    <ModalWrapper>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      {isDataLoading && (
        <LoaderContainer>
          <Loader />
          <LoaderMessage>
            Running the search for '{searchValue}' ...
          </LoaderMessage>
        </LoaderContainer>
      )}
      {!isDataLoading && (
        <div>
          {movie?.title ? <MovieCard movie={movie as IMovie} /> : <Info></Info>}
        </div>
      )}
    </ModalWrapper>
  );
};

export default Modal;
