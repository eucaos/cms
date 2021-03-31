import React from "react";
import { useRouteMatch } from "react-router";
import { Asset } from "../asset";
import { Back } from "../items/Back";
import { Items } from "../items/Items";
import { Item } from "../items/itemsSlice";

export const Layout = () => {
  let listRouteMatch = useRouteMatch<Item>("/:type/:id/");
  return (
    <div className="App">
      <Back />
      <div
        className={`p-4 border-4 m-1 rounded-xl grid sm:divide-x sm:divide-blue-300 ${
          listRouteMatch?.params.type === "ASSET" ? "sm:grid-cols-2" : ""
        }`}
      >
        <div
          className={
            listRouteMatch?.params.type === "ASSET"
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
