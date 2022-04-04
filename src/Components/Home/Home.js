import { Link } from "react-router-dom";
import useReview from "../hook/useReview";
import Review from "../Review/Review";

const Home = () => {
  const [reviews] = useReview();
  return (
    <div>
      <h1 className="font-bold text-xl text-cyan-600 ">Haelend's Ballad</h1>
      <p className="text-sky-700 mt-4">By Ian V. Conrey</p>
      <div className="grid grid-cols-2 my-10">
        <div className="my-auto">
          <h2 className="font-bold text-xl text-cyan-600 ">
            Best book for modern Situation
          </h2>
          <p className="p-8 leading-8 font-serif text-left indent-16">
            <span className="text-purple-500 font-mono">Hælend's Ballad</span>{" "}
            is a tale about what happens when men and women from two colliding
            cultures realize they may not be on the right side. Heroes are
            villains. The persecuted are oppressors. And when rumors begin to
            spread that the world is dying, the darkness of their own hearts
            betrays them
          </p>
        </div>
        <img className="" src={require("../../books.jpg1.png")} alt="" />
      </div>
      <div className="mt-10">
        <h1 className="font-bold text-xl text-cyan-600 ">Customers Review</h1>
        <div className="grid md:grid-cols-3 gap-4">
          {reviews.slice(0, 3).map((review) => (
            <Review key={review.id} review={review} />
          ))}
        </div>
        <button className="text-sky-700 font-bold bg-orange-400 my-8 py-2 px-4 rounded-lg">
          <Link to="/reviews">SEE ALL REVIEW</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
