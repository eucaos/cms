import React from "react";
import { useRouteMatch } from "react-router";
import { Asset } from "../asset";
import { Back } from "../items/Back";
import { Items } from "../items/Items";
import { isAssetRoute, ItemRoute } from "../route";

export const Layout = () => {
  let listRouteMatch = useRouteMatch<ItemRoute>("/:type/:id/");
  return (
    <div className="App text-center">
      <div className="flex flex-col h-screen justify-between">
        <header className="p-4 text-center">
          <h3>Header</h3>
        </header>
        <main className="p-4 flex-1">
          <Back />
          <div
            className={`p-4 border-4 my-1 rounded-xl grid w-full ${
              isAssetRoute(listRouteMatch?.params) ? "sm:grid-cols-2" : ""
            }`}
          >
            <div
              className={
                isAssetRoute(listRouteMatch?.params)
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
        </main>
        <footer className="p-4 text-center">
          <h3>Footer</h3>
        </footer>
      </div>
    </div>
  );
};
