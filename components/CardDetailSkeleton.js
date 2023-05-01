import React from "react";

export default function CardDetailSkeleton({ cards }) {
  return Array(cards)
    .fill(0)
    .map((item, i) => (
      <div className="bg-white w-full mb-2 animate-pulse py-14" key={i}>
        <div className="p-4"></div>
      </div>
    ));
}
