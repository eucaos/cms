import React from "react";
import { Item } from "./itemsSlice";

export const Cards = ({
  items,
  onSelected,
}: {
  items: Item[];
  onSelected: (item: Item) => void;
}) => {
  return (
    <div>
      {items.map((item, index) => (
        <button
          key={index}
          className="hover:bg-blue-300 p-4 border-4 m-1 rounded-xl"
          onClick={() => onSelected(item)}
        >
          {item.type === "ASSET" ? (
            <span>ssssssssss{item.type}</span>
          ) : (
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
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
              />
            </svg>
          )}
          {item.name}
        </button>
      ))}
    </div>
  );
};
