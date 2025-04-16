import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Credentials from ".."

describe('Credentials', () => {
    it("Should render the copyrights text", () =>  {
        render(<Credentials />);
        const copyrightsElement = screen.getByText(/@Copyrights October 2024 | All rights reserved to/i);

        expect(copyrightsElement).toBeInTheDocument();
    })

    it("Should render the website developer name and a link to its portfolio", () => {
        render(<Credentials />);
        const linkElement = screen.getByRole('link');

        expect(linkElement.textContent!.trim()).toBe("Gilles NGASSAM");
        expect(linkElement.getAttribute('href')).toBe("https://gilles-ngassam.pisoftlite.com/");
        expect(linkElement.getAttribute('target')).toBe("_blank");
    })
})