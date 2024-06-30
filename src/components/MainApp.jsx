import React, { useContext } from "react";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "./MainLayout";
import Members from "./Members";
import NotFound from "./NotFound";
import { MyContext } from "../context/Mycontext";
import Login from "./login";
import { Helmet } from "react-helmet";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Members />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
export default function MainApp() {
  const { logedIn } = useContext(MyContext);
  return (
    <>
      <Helmet>
        <title>WafferX</title>
        <meta
          name="description"
          content="A description of my amazing React app"
        />
      </Helmet>
      {logedIn ? <RouterProvider router={router} /> : <Login />}
    </>
  );
}
