import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";

const Dashboard = lazy(() => import("../pages/Dashboard"));
const ContentTasks = lazy(() => import("../pages/ContentTasks"));
const BackLinkManager = lazy(() => import("../pages/BackLinkManager"));
const NormalTasks = lazy(() => import("../pages/NormalTasks"));

import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <DashboardLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: "content-tasks",
                element: <ContentTasks />,
            },
            {
                path: "back-link-manager",
                element: <BackLinkManager />,
            },
            {
                path: "normal-tasks",
                element: <NormalTasks />,
            },
        ],
    },
]);