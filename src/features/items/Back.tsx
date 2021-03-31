import React from "react";
import { useHistory, useRouteMatch } from "react-router";
import { Item } from "./itemsSlice";

const getFolderId = (item?: Item) => {
  if (!item) return undefined;
  return item.type === "ASSET" ? item.id.slice(0, -1) : item.id;
};

export const Back = () => {
  const history = useHistory<any>();

  let listRouteMatch = useRouteMatch<Item & { id?: string }>("/:type/:id/");

  const folderId = getFolderId(listRouteMatch?.params);
  const previousFolder = folderId?.slice(0, -1);
  const parentCss =
    "hover:bg-blue-300 p-4 border-4 m-1 rounded-xl" +
    (folderId ? " visible" : " invisible");
  return (
    <div
      className={parentCss}
      onClick={() => history.push("/folder/" + previousFolder ?? "")}
    >
      <div className="w-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
          />
        </svg>
      </div>
    </div>
  );
};
