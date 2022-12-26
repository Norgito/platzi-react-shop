import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//Containers & Components
import Layout from "@containers/Layout";
import Order from "@components/Order";
//Pages
import Checkout from "@pages/Checkout";
import CreateAccount from "@pages/CreateAccount"
import MyAccount from "@pages/MyAccount";
import NotFound from "@pages/NotFound";
import RecoveryPassword from "@pages/RecoveryPassword";
import NewPassword from "@pages/NewPassword";
import SendEmail from "@pages/SendEmail";
import Login from "@pages/Login";
import Home from "@pages/Home";
//Context
import useInitialState from "@hooks/useInitialState";
import AppContext from "@context/AppContext";
//Styles
import "@styles/Global.scss";


const App = () => {
  const initialState = useInitialState();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      },
      {
        path: "/signup",
        element: <CreateAccount />,
      },
      {
        path: "/account",
        element: <MyAccount />,
      },
      {
        path: "/new-password",
        element: <NewPassword />,
      },
      {
        path: "orders",
        element: <Order />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/recovery-password",
      element: <RecoveryPassword />,
      },
      {
        path: "/send-email",
        element: <SendEmail />,
      },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return (
    <AppContext.Provider value={initialState}>
    <React.StrictMode>
      <Layout>
          <RouterProvider router={router} />
      </Layout>
      </React.StrictMode>
      </AppContext.Provider>
  );
};

export default App;
