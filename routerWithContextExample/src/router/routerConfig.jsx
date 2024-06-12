import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import DisplayPage from "../pages/DisplayPage";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "home",
                element: <Home />
            }
        ],
        errorElement: <ErrorPage />
    },
    {
        path: "/display",
        element: <DisplayPage />,
        errorElement: <ErrorPage />
    }
])

export default router;