import React from "react";
import { Route, Routes } from "react-router-dom";
import DeployProduct1 from "../DeployProduct1";
import DeployProduct2 from "../DeployProduct2";
import DeployProduct3 from "../DeployProduct3";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<DeployProduct1 />} />

        <Route
          exact
          path={"/deployproduct/page1"}
          element={<DeployProduct1 />}
        />

        <Route
          exact
          path={"/deployproduct/page2"}
          element={<DeployProduct2 />}
        />
        <Route
          exact
          path={"/deployproduct/page3"}
          element={<DeployProduct3 />}
        />
      </Routes>
    </>
  );
};

export default Routers;
