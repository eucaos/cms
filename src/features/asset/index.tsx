import React from "react";
import { useSelector } from "react-redux";
import { useRouteMatch } from "react-router";
import { RootState } from "../../app/store";
import { getItem } from "../items/itemsSlice";
import { isAssetRoute, ItemRoute } from "../route";
export const Asset = () => {
  let listRouteMatch = useRouteMatch<ItemRoute>("/:type/:id/");

  const asset = useSelector((state: RootState) =>
    getItem(state, listRouteMatch?.params.id ?? "")
  );

  return isAssetRoute(listRouteMatch?.params) ? (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48"
            src={`https://picsum.photos/200?name=${asset?.name}`}
            alt={`${asset?.name}`}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {asset?.name}
          </div>
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            Finding customers for your new business
          </a>
          <p className="mt-2 text-gray-500">
            Getting a new business off the ground is a lot of hard work. Here
            are five ideas you can use to find your first customers.
          </p>
        </div>
      </div>
    </div>
  ) : null;
};
