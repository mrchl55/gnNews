import {createBrowserRouter} from "react-router-dom";
import RootLayout from "../pages/Root/Root";
import NotFound from "../pages/NotFound/NotFound";
import HomePage from "../pages/Home/Home";
import CountryNewsPage, {loader as newsLoader} from "../pages/CountryNews/CountryNews";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        errorElement: <NotFound/>,
        children: [
            {index: true, element: <HomePage/>},
            {path: '/country/:countryId', element: <CountryNewsPage/>, loader: newsLoader}
        ]

    },
]);

export default router