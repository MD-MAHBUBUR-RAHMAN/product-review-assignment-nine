import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="mb-8 bg-slate-600">
      <nav className="py-8">
        <Link className="mr-2 text-white" to="/">
          Home
        </Link>
        <Link className="mr-2 text-white" to="/reviews">
          Reviews
        </Link>
        <Link className="mr-2 text-white" to="/dashbord">
          Dashbord
        </Link>
        <Link className="mr-2 text-white" to="/blogs">
          Blogs
        </Link>
        <Link className=" text-white" to="/About">
          About
        </Link>
      </nav>
    </div>
  );
};

export default Header;
