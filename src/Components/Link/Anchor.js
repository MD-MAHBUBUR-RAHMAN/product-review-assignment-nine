import React from "react";
import CustomLink from "../Customlink/CustomLink";

const Anchor = (props) => {
  const { name, link } = props.route;
  return (
    <div className="mr-10">
      <CustomLink to={link}>{name}</CustomLink>
      {/* <li className="mr-12">
        <a href={link}>{name}</a>
      </li> */}
    </div>
  );
};

export default Anchor;
