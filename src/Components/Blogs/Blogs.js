import React from "react";

const Blogs = () => {
  return (
    <article className="grid md:grid-cols-2 gap-5">
      <div className="p-4 border-2 m-4 text-justify shadow-xl">
        <h1 className="text-blue-700  font-bold p-4 ">Context Api</h1>
        <p>
          Context provides a way to pass data through the component tree without
          having to pass props down manually at every level. Context API allows
          one to share states across the entire app (or part of it) lightly and
          with ease.The React Context API is a way for a React app to
          effectively produce global variables that can be passed around. This
          is the alternative to "prop drilling" . It returns a consumer and a
          provider. The provider is a component that as its name suggests
          provides the state to its children. It will hold the "store" and be
          the parent of all the components that might need that store. Consumer
          as it so happens is a component that consumes and uses the state
        </p>
      </div>
      <div className="p-4 border-2 m-4 text-justify shadow-xl">
        <h5 className="text-blue-700  font-bold p-4 ">Semantic Elemement</h5>
        <p>
          HTML was originally created as a markup language to describe documents
          on the early internet. Semantic HTML or semantic markup is HTML that
          introduces meaning to the web page rather than just presentation.
        </p>
        <p>
          Semantic tags make it clear to the browser what the meaning of a page
          and its content is. That clarity is also communicated with search
          engines, ensuring that the right pages are delivered for the right
          queries.
        </p>
        <p>
          The semantic elements added in HTML5 are:
          <li>header</li>
          <li>footer</li>
          <li>Section</li>
          <li>article</li>
          <li>aside</li>
          etc
        </p>
      </div>
      <div className="p-4 border-2 m-4 text-justify shadow-xl">
        <h5 className="text-blue-700  font-bold p-4 ">
          Block-level Elements and Inline Elements
        </h5>
        <p>
          Each HTML element has a default display value, depending on what type
          of element it is. There are two display values: block and inline.
        </p>
        <div>
          <h6>Block-level Elements</h6>
          <p>
            A block-level element always starts on a new line. The browsers
            automatically add a margin before and after the element. A
            block-level element always takes up the full width available.Two
            commonly used block elements are: p and div
          </p>
          <h6>Inline Elements</h6>
          <p>
            An inline element does not start on a new line. An inline element
            only takes up as much width as necessary. This is a span element
            inside a paragrap
          </p>
        </div>
      </div>
    </article>
  );
};

export default Blogs;
