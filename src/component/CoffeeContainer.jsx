import React, { useEffect, useState } from "react";
import { BsCup } from "react-icons/bs";
import CoffeeCard from "./CoffeeCard";
import { Link } from "react-router";

const CoffeeContainer = () => {
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_baseurl}/addcoffee`)
      .then((res) => res.json())
      .then((data) => {
        setCoffees(data);
      });
  }, []);

  return (
    <div className="bg-cover w-full bg-center bg-no-repeat bg-[url('/images/more/1.png')]">
      <div className="flex justify-center  text-center w-full my-10  ">
        <div className="space-y-4">
          <p className="text-base">
            &ndash; &ndash; Sip & Savor &ndash; &ndash;
          </p>
          <h1 className="rancho-regular text-6xl font-bold text-shadow-lg  text-shadow-black ">
            Our Popular Products
          </h1>
          <Link to={"/addcoffee"}>
            <button className="rancho-regular text-xl btn btn-primary border-none  rounded-md text-white flex items-center gap-1  mx-auto">
              Add Coffee <BsCup className="scale-110 text-black opacity-60" />
            </button>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center px-4 ">
        <div className="flex flex-wrap justify-center lg:justify-start gap-5 max-w-6xl">
   
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee._id} coffee={coffee} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoffeeContainer;
