import { createBrowserRouter, redirect } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import DashboardPage from "../pages/Dashboard";
import AttendancePage from "../pages/Attendance";
import SchedulePage from "../pages/Schedule";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";

export const router = createBrowserRouter([
  {
    element: <Sidebar />,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
      {
        path: "/attendance",
        element: <AttendancePage />,
      },
      {
        path: "/schedule",
        element: <SchedulePage />,
      },
    ],
    loader: () => {
      if (!localStorage.getItem("accessToken")) {
        throw redirect("/login");
      }
      return null;
    },
  },
  {
    path: "/login",
    element: <LoginPage />,
    loader: () => {
      if (localStorage.getItem("accessToken")) {
        throw redirect("/");
      }
      return null;
    },
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);
