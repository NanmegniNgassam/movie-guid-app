export interface ISearchBarProps {
  /**
   * The movie name searched
   */
  searchValue: string,
  /**
   * UseState function to update the searched value
   */
  setSearchValue: (value:string) => void,
}