import {render, screen} from "@testing-library/react";
import Header from "./Header";
import {Provider} from "react-redux";
import store from "../../../store/store";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Provider store={store}><Header/></Provider>

    },
]);
test('renders popup', () => {
    render(<>
            <RouterProvider router={router}/>
        </>
    )

    const headerElement = screen.getByText('Popup', {exact: false})
    expect(headerElement).toBeInTheDocument()
})