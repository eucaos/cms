import React from "react";
import { useRouteMatch } from "react-router";
import { Asset } from "../asset";
import { Back } from "../items/Back";
import { Items } from "../items/Items";

export const Layout = () => {
  let listRouteMatch = useRouteMatch<{
    type: string;
    id: string;
  }>("/:type/:id/");
  return (
    <div className="App">
      <Back />
      <div
        className={`grid sm:divide-x sm:divide-blue-300 ${
          listRouteMatch?.params.type === "asset" ? "sm:grid-cols-2" : ""
        }`}
      >
        <div
          className={
            listRouteMatch?.params.type === "asset"
              ? "hidden sm:block"
              : "" + " p-5"
          }
        >
          <Items />
        </div>
        <div className="p-5">
          <Asset />
        </div>
      </div>
    </div>
  );
};
