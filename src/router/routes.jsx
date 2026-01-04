import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import AllModels from "../Pages/AllModels/AllModels";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Registration";
import PrivateRoute from "./PrivateRoute";
import AddModel from "../Pages/AddModel/AddModel";
import ModelDetails from "../Pages/ModelDetails/ModelDetails";
import UpdateModel from "../Pages/UpdateModel/UpdateModel";
import MyModels from "../Pages/MyModels/MyModels";
import MyPurchase from "../Pages/MyPurchase/MyPurchase";
import ErrorPage from "../components/ErrorPage";
import PurchasedDetails from "../components/PurchasedDetails";
import Loader from "../components/Loader";
import DashboardLayout from "../layout/DashboardLayout";

import DashboardHome from "../Pages/Dashboard/DashboardHome";
import ContactPage from "../Pages/ContactPage";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    hydrateFallbackElement: <Loader />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('http://localhost:3000/latest-models')
      },
      {
        path: "/all-models",
        element: <AllModels />,
        loader: () => fetch('http://localhost:3000/models')
      },
      {
        path: "/contact",
        element: <ContactPage />
      },
      {
        path: "/model-details/:id",
        element: <ModelDetails />,
      },
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "add-model",
        element: <AddModel />,
      },
      {
        path: "my-models",
        element: <MyModels />,
      },
      {
        path: "my-downloads",
        element: <MyPurchase />,
      },
      {
        path: "my-downloads-details/:id",
        element: <PurchasedDetails />,
      },
      {
        path: "update-model/:id",
        element: <UpdateModel />,
      },
    ]
  }
]);
