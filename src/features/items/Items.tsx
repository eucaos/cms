import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useRouteMatch } from "react-router";
import { getFolderId, ItemRoute } from "../route";
import { Cards } from "./Cards";
import { loadItemsAsync, selectItems } from "./itemsSlice";

export const Items = () => {
  const items = useSelector(selectItems);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadItemsAsync());
  }, []);

  const history = useHistory<any>();

  let listRouteMatch = useRouteMatch<ItemRoute>("/:type/:id/");

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
          history.push(`/${item.type?.toLowerCase()}/${item.id}`);
        }}
      />
    </>
  );
};
