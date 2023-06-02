"use client";
import CardDetailSkeleton from "../../../components/CardSkeleton";

export default function Loading() {
  return (
    <div className="container mx-auto lg:max-w-6xl py-5 px-4 mt-16 mb-20 min-h-screen">
      <div className="container mx-auto">
        <div className="w-full bg-white text-center p-10 text-3xl mb-3 rounded font-bold">
          <p>بِسْــــــــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ</p>
        </div>
        <div className="mt-3">
          <CardDetailSkeleton cards={10} />
        </div>
      </div>
    </div>
  );
}
