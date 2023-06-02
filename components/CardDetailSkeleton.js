import React from "react";

export default function CardDetailSkeleton({ cards }) {
  return Array(cards)
    .fill(0)
    .map((item, i) => (
      <div className="bg-white w-full mb-2 animate-pulse" key={i}>
        <div className="p-4 mb-4"></div>
      </div>
    ));
}
