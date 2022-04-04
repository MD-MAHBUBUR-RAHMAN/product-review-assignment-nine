import React from "react";

const Review = (props) => {
  const { name, img, rating, about } = props.review;
  return (
    <div className="bg-slate-100 mt-8 mx-2 rounded-3xl shadow-2xl">
      <div className="p-4">
        <div className="flex items-center bg-sky-400 rounded">
          <img className="w-10 h-10 rounded-full" src={img} alt="" />
          <h2 className="ml-6">
            Name:
            <span className="text-purple-500 font-mono  font-bold">{name}</span>
          </h2>
        </div>
        <p className="p-6 indent-16 text-left">{about}</p>
        <p>
          <span className="text-red-500">Rating:</span>
          <span className="font-semibold text-yellow-500">{rating}</span>
        </p>
      </div>
    </div>
  );
};

export default Review;
