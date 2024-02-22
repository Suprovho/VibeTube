import React from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import { store, persistor1 } from "./utils/store/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Maincontainer from "./components/Maincontainer";
import WatchPage from "./components/WatchPage";
import { PersistGate } from "redux-persist/integration/react";
import SearchResults from "./components/SearchResults";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Body />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Maincontainer />,
      },

      {
        path: "Watch",
        element: <WatchPage />,
      },

      {
        path: "results",
        element: <SearchResults />,
      },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor1}>
      <RouterProvider router={AppRouter}>
          <div className="overflow-x-hidden">
            <RouterProvider router={AppRouter} />
          </div>
        </RouterProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
