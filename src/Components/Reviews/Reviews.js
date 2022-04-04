import React from "react";
import useReview from "../hook/useReview";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews] = useReview();
  return (
    <div className="grid md:grid-cols-3 gap-4 bg-gray-200 mt-[-36px]">
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
};

export default Reviews;
