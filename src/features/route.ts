export interface ItemRoute {
  type?: "folder" | "asset";
  id: string;
}

export const getFolderId = (item?: ItemRoute) => {
  if (!item) return undefined;
  return item.type === "asset" ? item.id.slice(0, -1) : item.id;
};

export const isAsset = (item?: ItemRoute) => item?.type === "asset";
