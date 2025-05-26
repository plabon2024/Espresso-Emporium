import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";

const UpdateCoffee = () => {
  const { _id, name, chef, price, taste, supplier, photo, category } =
    useLoaderData();
  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedCoffee = Object.fromEntries(formData.entries());
    fetch(`http://localhost:3000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.modifiedCount) {
          console.log("upldated")
        }
      });
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center my-10 mx-auto bg-[url('/images/more/11.png')]">
        <div className="flex flex-col items-start gap-5">
          <Link to={"/"}>
            <button className=" cursor-pointer flex items-center gap-2 rancho-regular text-2xl  ">
              &larr; Back to home
            </button>
          </Link>
          <div className="bg-accent max-w-4xl px-24 py-10 rounded-md">
            <div className="space-y-4 text-center w-full">
              <h1 className="rancho-regular text-6xl font-bold text-shadow-lg  text-shadow-black ">
                Update Existing Coffee Details
              </h1>
              <p className="text-base w-4/5 mx-auto">
                It is a long established fact that a reader will be distraceted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here.
              </p>
            </div>
            <form onSubmit={handleUpdateCoffee} className="text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
                {/* input    */}
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block mb-2 font-medium text-gray-900"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="name"
                    name="name"
                    defaultValue={name}
                    className="w-full bg-white shadow-primary shadow focus:outline-primary rounded px-4 py-2"
                  />
                </div>
                {/* input    */}
                <div className="mb-6">
                  <label
                    htmlFor="chef"
                    className="block mb-2 font-medium text-gray-900"
                  >
                    Chef
                  </label>
                  <input
                    id="chef"
                    type="text"
                    name="chef"
                    defaultValue={chef}
                    className="w-full bg-white shadow-primary shadow focus:outline-primary rounded px-4 py-2"
                  />
                </div>
                {/* input    */}
                <div className="mb-6">
                  <label
                    htmlFor="supplier"
                    className="block mb-2 font-medium text-gray-900"
                  >
                    Supplier
                  </label>
                  <input
                    id="supplier"
                    type="text"
                    name="supplier"
                    defaultValue={supplier}
                    className="w-full bg-white shadow-primary shadow focus:outline-primary rounded px-4 py-2"
                  />
                </div>
                {/* input    */}
                <div className="mb-6">
                  <label
                    htmlFor="taste"
                    className="block mb-2 font-medium text-gray-900"
                  >
                    Taste
                  </label>
                  <input
                    id="taste"
                    type="text"
                    name="taste"
                    defaultValue={taste}
                    className="w-full bg-white shadow-primary shadow focus:outline-primary rounded px-4 py-2"
                  />
                </div>
                {/* input    */}
                <div className="mb-6">
                  <label
                    htmlFor="category"
                    className="block mb-2 font-medium text-gray-900"
                  >
                    Category
                  </label>
                  <input
                    id="category"
                    type="text"
                    name="category"
                    defaultValue={category}
                    className="w-full bg-white shadow-primary shadow focus:outline-primary rounded px-4 py-2"
                  />
                </div>
                {/* input    */}
                <div className="mb-6">
                  <label
                    htmlFor="price"
                    className="block mb-2 font-medium text-gray-900"
                  >
                    Price
                  </label>
                  <input
                    id="price"
                    type="text"
                    name="price"
                    defaultValue={price}
                    className="w-full bg-white shadow-primary shadow focus:outline-primary rounded px-4 py-2"
                  />
                </div>
                {/* input    */}
                <div className="mb-6 md:col-span-2">
                  <label
                    htmlFor="photo"
                    className="block mb-2 font-medium text-gray-900"
                  >
                    Photo
                  </label>
                  <input
                    id="photo"
                    type="text"
                    name="photo"
                    defaultValue={photo}
                    className="w-full bg-white shadow-primary shadow focus:outline-primary rounded px-4 py-2"
                  />
                </div>

                <button
                  type="submit"
                  className="rancho-regular text-xl btn btn-primary md:col-span-2 text-black border  rounded p-5"
                >
                  Update Coffee Details
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateCoffee;
