import React from "react";
import { useRouteMatch } from "react-router";
import { Asset } from "../asset";
import { Back } from "../items/Back";
import { Items } from "../items/Items";
import { isAsset, ItemRoute } from "../route";

export const Layout = () => {
  let listRouteMatch = useRouteMatch<ItemRoute>("/:type/:id/");
  return (
    <div className="App">
      <Back />
      <div
        className={`p-4 border-4 m-1 rounded-xl grid ${
          isAsset(listRouteMatch?.params) ? "sm:grid-cols-2" : ""
        }`}
      >
        <div
          className={
            isAsset(listRouteMatch?.params) ? "hidden sm:block" : "" + " p-5"
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
