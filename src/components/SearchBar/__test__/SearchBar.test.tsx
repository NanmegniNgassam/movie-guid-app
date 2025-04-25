import { fireEvent, render, screen } from "@testing-library/react"
import SearchBar from "..";

describe('SearchBar rendering', () => {
    it("Should render search input", () => {
        const movieName = "Wednesday";

        // useState hook simulation
        let search = movieName;
        const  setSearch = (searchValue: string) => {
            search = searchValue;
        }

        render(<SearchBar searchValue={search} setSearchValue={setSearch} />);

        const searchInput = screen.getByPlaceholderText(/Enter a movie name/i) as HTMLInputElement;
        fireEvent.change(searchInput, {target: {value: movieName}});

        expect(search).toBe(movieName);
    })

    it("Should render search button", () => {
        
    })
})