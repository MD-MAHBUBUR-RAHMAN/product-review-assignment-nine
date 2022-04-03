import { Link } from "react-router-dom";
import useReview from "../hook/useReview";
import Review from "../Review/Review";

const Home = () => {
  const [reviews] = useReview();
  return (
    <div>
      <h1 className="font-bold text-xl text-cyan-600 ">Haelend's Ballad</h1>
      <p className="text-sky-700">By Ian V. Conrey</p>
      <div className="grid grid-cols-2 my-10">
        <div>
          <h2 className="font-bold text-xl text-cyan-600 ">
            Best book for modern Situation
          </h2>
          <p>
            Hælend's Ballad is a tale about what happens when men and women from
            two colliding cultures realize they may not be on the right side.
            Heroes are villains. The persecuted are oppressors. And when rumors
            begin to spread that the world is dying, the darkness of their own
            hearts betrays them
          </p>
        </div>
        <img src={require("../../books.jpg1.png")} alt="" />
      </div>
      <div className="mt-10">
        <h1 className="font-bold text-xl text-cyan-600 ">Customers Review</h1>
        <div className="grid md:grid-cols-3 gap-4">
          {reviews.slice(0, 3).map((review) => (
            <Review key={review.id} review={review} />
          ))}
        </div>
        <Link to="/reviews" className="text-sky-700 font-bold my-8">
          SEE ALL REVIEW
        </Link>
      </div>
    </div>
  );
};

export default Home;
