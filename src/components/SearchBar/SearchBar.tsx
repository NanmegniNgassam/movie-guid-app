import { useState } from "react";
import { SearchButton, SearchInput, SearchWrapper } from "./SearchBar.styles";
import { ISearchBarProps } from "./SearchBar.types";

const SearchBar = (props: ISearchBarProps) => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <SearchWrapper>
      <SearchInput
        type="text"
        id="search-value"
        value={searchValue}
        placeholder="Enter a movie name"
        onChange={(value) => {
          console.log("valeur mise à jour");
          setSearchValue(value.target.value);
        }}
        onKeyDown={(keyBoard) => {
          // TODO: Initialisation de la requête au même titre qu'au click sur search
          if (keyBoard.key === "Enter")
            console.log(
              "The request will be made with the value of : ",
              searchValue
            );
        }}
      />
      <SearchButton
        id="search-button"
        onClick={() =>
          console.log(
            "The request will be made with the value of : ",
            searchValue
          )
        }
      >
        Search
      </SearchButton>
    </SearchWrapper>
  );
};

export default SearchBar;
