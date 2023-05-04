import React, { ReactElement, useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Loader from "@pages/Loader/Loader";
import Layout from "@components/Layout/Layout";
import Home from "@pages/Home/Home";
import { PathRouter } from "@constants/index";
import SingleCharacter from "@pages/SingleCharacter/SingleCharacter";
import Favorites from "@pages/Favorites/Favorites";

const RouterConfig = (): ReactElement => {
  const [isLoading, setLoading] = useState<boolean>(false);
  return (
    <>
      <React.Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path={PathRouter.Home}
            element={<Layout>{isLoading ? <Loader /> : <Outlet />}</Layout>}
          >
            <Route path={PathRouter.SingleChar} element={<SingleCharacter />} />
            <Route path={PathRouter.Favorites} element={<Favorites />} />
            <Route path={PathRouter.Home} element={<Home />} />
          </Route>
        </Routes>
      </React.Suspense>
    </>
  );
};

export default RouterConfig;
