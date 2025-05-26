import React from "react";

const Banner = () => {
  return (
    <>
      <div className="flex  justify-center items-center bg-[url('/images/more/3.png')] bg-cover bg-center bg-no-repeat  min-h-[calc(100vh-200px)]">
        <div className="text-white lg:p-20 p-5 w-full md:w-7/12  md:ml-auto">
          <p className="text-3xl font-bold mb-4">
            Would you like a Cup of Delicious Coffee?
          </p>
          <p className="text-lg mb-6">
            It's coffee time – Sip & Savor – Relaxation in every sip! Get the
            nostalgia back!!<br></br> Your companion of every moment!!! Enjoy
            the beautiful moments and make them memorable.
          </p>
          <button className="btn btn-primary text-xl text-black px-4 py-2 rounded-sm border-[0.5px] hover:text-white hover:bg-transparent transition">
         <a href="#footer">Learn More</a>   
          </button>
        </div>
      </div>

      <div className="bg-neutral mx-auto flex justify-center  flex-wrap">
        {/* cards */}
        <div className="w-96 p-5">
          <div className="card-body">
            <img className="w-20" src="/images/icons/1.png" alt="" />
            <h2 className="card-title text-3xl">Awesome Aroma</h2>
            <p className="text-base raleway">
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
        </div>
        {/* cards  */}
        {/* cards */}
        <div className="w-96 p-5">
          <div className="card-body">
            <img className="w-20" src="/images/icons/1.png" alt="" />
            <h2 className="card-title text-3xl">High Quality</h2>
            <p className="text-base raleway">We served the coffee to you maintaining the best quality </p>
          </div>
        </div>
        {/* cards  */}
        {/* cards */}
        <div className=" w-96 p-5">
          <div className="card-body">
            <img className="w-20" src="/images/icons/3.png" alt="" />
            <h2 className="card-title text-3xl">Pure Grades</h2>
            <p className="text-base raleway">
              The coffee is made of the green coffee beans which you will love{" "}
            </p>
          </div>
        </div>
        {/* cards  */}
        {/* cards */}
        <div className="w-96 p-5">
          <div className="card-body">
            <img className="w-20" src="/images/icons/4.png" alt="" />
            <h2 className="card-title text-3xl">Proper Roasting</h2>
            <p className="text-base raleway">
              Your coffee is brewed by first roasting the green coffee beans{" "}
            </p>
          </div>
        </div>
        {/* cards  */}
      </div>
    </>
  );
};

export default Banner;
