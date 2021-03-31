import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useRouteMatch } from "react-router";
import { Cards } from "./Cards";
import { Item, loadItemsAsync, selectItems } from "./itemsSlice";

const getFolderId = (item?: Item) => {
  if (!item) return undefined;
  return item.type === "ASSET" ? item.id.slice(0, -1) : item.id;
};

export const Items = () => {
  const items = useSelector(selectItems);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadItemsAsync());
  }, []);

  const history = useHistory<any>();

  let listRouteMatch = useRouteMatch<Item & { id?: string }>("/:type/:id/");

  useEffect(() => {
    if (listRouteMatch) {
      dispatch(loadItemsAsync(getFolderId(listRouteMatch?.params)));
    } else dispatch(loadItemsAsync());
  }, [listRouteMatch?.params.id]);

  return (
    <>
      <Cards
        items={items}
        onSelected={(item) => {
          history.push((item.type ? "/asset" : "/folder") + "/" + item.id);
        }}
      />
    </>
  );
};
