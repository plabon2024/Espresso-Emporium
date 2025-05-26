import React from "react";
import { Link } from "react-router";

const AddCoffee = () => {
  const handleAddCoffee = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const coffeeData = Object.fromEntries(formData.entries());

   fetch('http://localhost:3000/addcoffee',{
    method:'POST',
    headers:{
      'content-type':'application/json'
    },body:JSON.stringify(coffeeData)
   }).then(res=>res.json())
   .then(data=>{console.log(data)})

  }
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
                Add New Coffee
              </h1>
              <p className="text-base w-4/5 mx-auto">
                It is a long established fact that a reader will be distraceted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
            <form onSubmit={handleAddCoffee} className="text-left">
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
                    placeholder="Enter coffee name"
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
                    placeholder="Enter coffee chef"
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
                    placeholder="Enter coffee supplier"
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
                    placeholder="Enter coffee taste"
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
                    placeholder="Enter coffee category"
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
                    type="number"
                    name="price"
                    placeholder="Enter coffee price"
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
                    placeholder="Enter photo URL"
                    className="w-full bg-white shadow-primary shadow focus:outline-primary rounded px-4 py-2"
                  />
                </div>

                <button
                  type="submit"
                  className="rancho-regular text-xl btn btn-primary md:col-span-2 text-black border  rounded p-5"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCoffee;
