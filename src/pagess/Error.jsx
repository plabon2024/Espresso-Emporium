import React from "react";
import { Link } from "react-router";

const Error = () => {
  return (
    <div>
      <Link to="/">
        <button className="flex justify-center mx-auto items-center gap-2 rancho-regular text-2xl  ">
          &larr; Back to home
        </button>
      </Link>
      <img className="mx-auto" src="/images/404/404.gif" alt="" />
    </div>
  );
};

export default Error;
