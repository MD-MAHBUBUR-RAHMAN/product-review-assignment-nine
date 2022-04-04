import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import Anchor from "../Link/Anchor";

const Header = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Reviews", link: "/reviews" },
    { id: 3, name: "Dashbord", link: "/dashbord" },
    { id: 4, name: "Blogs", link: "/blogs" },
    { id: 5, name: "About", link: "/About" },
  ];
  return (
    <div className="mb-8">
      <nav className="bg-slate-600">
        <div onClick={() => setOpen(!open)} className="w-6 h-6 md:hidden">
          {open ? <XIcon /> : <MenuIcon />}
        </div>
        <ul
          className={`md:flex justify-center text-white bg-slate-600 w-full md:static absolute duration-500 ease-in md:p-6 ${
            open ? "top-6" : "top-[-120px]"
          }`}
        >
          {routes.map((route) => (
            <Anchor route={route} key={route.id} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
