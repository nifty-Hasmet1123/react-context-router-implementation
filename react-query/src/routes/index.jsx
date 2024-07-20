import App from "../pages/App";
import TraditionalFetching from "../pages/TraditionalFetching";
import ErrorBoundary from "../pages/ErrorBoundary";
import RQPageWrapper from "../pages/RQPageWrapper";
import { createBrowserRouter, Navigate } from "react-router-dom";

export default class BaseRouter {
    _appRoute() {
        return {
            path: "/",
            element: <App />,
            errorElement: <ErrorBoundary />
        };
    }

    _homeRoute() {
        return {
            path: "/home",
            element: <App />,
            errorElement: <ErrorBoundary />
        };
    }

    _traditionalPage() {
        return {
            path: "/traditional",
            element: <TraditionalFetching />,
            errorElement: <ErrorBoundary />
        }
    }

    _reactQueryPage() {
        return {
            path: "/react-query",
            element: <RQPageWrapper />,
            errorElement: <ErrorBoundary />
        }
    }

    router() {
        return createBrowserRouter([
            this._appRoute(),
            this._homeRoute(),
            this._traditionalPage(),
            this._reactQueryPage(),
        ]);
    }
}