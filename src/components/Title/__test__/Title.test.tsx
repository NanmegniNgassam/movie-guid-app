import { render, screen } from "@testing-library/react";
import Title from "..";

describe("Title", () => {
    it("Should render the given title", () => {
        const title = "Movie Guid App";
        
        render(<Title title={title} />)
        const titleElement = screen.getByRole("heading");

        expect(titleElement.textContent).toBe(title)
    })
})