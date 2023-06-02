import React from "react";

const CardSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((item, i) => (
      <div
        className="flex w-full bg-white py-16 animate-pulse rounded"
        key={i}
      ></div>
    ));
};

export default CardSkeleton;
