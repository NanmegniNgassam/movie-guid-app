import { cleanup, render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import Info from "../Info"

describe("Info widget", () => {
    afterAll(() => {
        cleanup()
    })

    it("Should render the 'not found' message", () => {
        render(<Info />);
        const notFoundElement = screen.getByText(/No movie matchs your search/i);

        expect(notFoundElement).toBeInTheDocument();
    });

    it("Should render the 'information' icon", () => {
        render(<Info />);
        const infoIconElement = screen.getByTestId("info-icon");

        expect(infoIconElement).toBeInTheDocument();        
    })
})