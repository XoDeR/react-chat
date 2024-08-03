import { lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Auth = lazy(() => import("@pages/AuthPage"));
const HomePage = lazy(() => import("@pages/HomePage"));
const ChatPage = lazy(() => import("@pages/ChatPage"));

const AppRouter = () => {
  return <>App router</>;
};

export default AppRouter;
