import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "../index.css";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

// ReactDOM.render(<AppLayout />, document.getElementById("root"));

ReactDOM.render(
  <RouterProvider router={appRouter} />,
  document.getElementById("root")
);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <RouterProvider router={appRouter} />
// );
