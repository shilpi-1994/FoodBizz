import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "../index.css";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const AppLayout = () => {
  const [userName, setUserName] = React.useState();

  React.useEffect(() => {
    const data = {
      name: "Arjun Dev",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const Grocery = lazy(() => import("./components/Grocery"));

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
        path: "/grocery",
        element: (
          <Suspense fallback={<div>Loading grocery store.....</div>}>
            <Grocery />
          </Suspense>
        ),
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
