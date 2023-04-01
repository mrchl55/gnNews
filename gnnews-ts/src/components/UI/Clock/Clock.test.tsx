import {render, screen} from "@testing-library/react";
import Clock from "./Clock";

test('renders time', () => {
    render(<Clock/>
    )
    const date: Date = new Date()
    const formattedDate: string = date.toLocaleTimeString();
    const clockElement = screen.getByText(formattedDate, {exact: false})
    expect(clockElement).toBeInTheDocument()
})