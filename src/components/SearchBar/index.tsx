import { useState } from "react";
import { SearchButton, SearchInput, SearchWrapper } from "./SearchBar.styles";
import { ISearchBarProps } from "./SearchBar.types";

const SearchBar = (props: ISearchBarProps) => {
  const [localSearchValue, setLocalSearchValue] = useState(props.searchValue);
  return (
    <SearchWrapper>
      <SearchInput
        type="text"
        id="search-value"
        value={localSearchValue}
        placeholder="Enter a movie name"
        onChange={(value) => {
          setLocalSearchValue(value.target.value);
        }}
        onKeyDown={(keyBoard) => {
          if (keyBoard.key === "Enter") {
            props.setSearchValue(localSearchValue);
          }
        }}
      />
      <SearchButton
        id="search-button"
        onClick={() => {
          props.setSearchValue(localSearchValue);
        }}
      >
        Search
      </SearchButton>
    </SearchWrapper>
  );
};

export default SearchBar;
