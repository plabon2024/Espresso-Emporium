import React from "react";
import { Link, useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const { name, chef, price, taste, supplier, photo, category } =
    useLoaderData();
  return (
    <>
      <div className="flex flex-col justify-center items-center my-10">
        <div className="flex flex-col items-start gap-5  px-4">
          <Link to={"/"}>
            <button className=" cursor-pointer flex items-center gap-2 rancho-regular text-2xl">
              &larr; Back to home
            </button>
          </Link>

          {/* Card */}
          <div className="flex flex-col md:flex-row justify-between items-center shadow-sm bg-info rounded-xl md:px-10 p-5 py-8 w-full md:min-w-lg">
            <div>
              <img
                src={photo}
                alt=""
                className="min-h-56"
                
              />
            </div>

            <div className="flex flex-col justify-between items-start w-3/4 gap-2">
              <h1 className="rancho-regular text-4xl font-bold text-shadow-lg  text-shadow-black ">
                Niceties
              </h1>

              <div className="space-y-2">
                <h2 className="font-semibold text-base">
                  Name:
                  <span className="font-normal text-slate-700">{name}</span>
                </h2>
                <h2 className="font-semibold text-base">
                  Chef:
                  <span className="font-normal text-slate-700">{chef}</span>
                </h2>
                <h2 className="font-semibold text-base">
                  Price:
                  <span className="font-normal text-slate-700">{price}</span>
                </h2>
                <h2 className="font-semibold text-base">
                  Taste:
                  <span className="font-normal text-slate-700">{taste}</span>
                </h2>
                <h2 className="font-semibold text-base">
                  Supplier :
                  <span className="font-normal text-slate-700">{supplier}</span>
                </h2>
                <h2 className="font-semibold text-base">
                  Category:
                  <span className="font-normal text-slate-700">{category}</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoffeeDetails;
