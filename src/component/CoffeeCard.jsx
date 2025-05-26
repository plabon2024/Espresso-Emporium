import React from "react";
import { FaEye } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";

const CoffeeCard = ({coffee}) => {
  const{name,chef,photo,price,_id}=coffee
  const handleDelete=(_id)=>{
    fetch(`http://localhost:3000/delete/${_id}`,{
      method:"DELETE"
    }).then(res=>res.json())
    .then(data=>{console.log(data)})
  }

  return (
    <>
      <div className="flex justify-between  bg-info items-center shadow-sm rounded-xl md:px-10 p-5 py-8 w-fit">
        <div>
          <img
            src={photo}
            alt="Movie"
            className="w-full object-contain"
          />
        </div>

        <div className="flex justify-between items-start w-3/4 gap-10">
          <div className="flex-col flex gap-2">
            <h2 className="font-semibold text-xl">
              Name:{" "}
              <span className="font-normal text-slate-700">{name}</span>
            </h2>
            <h2 className="font-semibold text-xl">
              Chef:{" "}
              <span className="font-normal text-slate-700">{chef}</span>
            </h2>
            <h2 className="font-semibold text-xl">
              Price:{" "}
              <span className="font-normal text-slate-700">{price} BDT</span>
            </h2>
          </div>

          <div className="flex flex-col gap-2">
            <Link to={`/coffee/${_id}`}>
              <button className="btn btn-primary text-xl text-white px-4 py-2 rounded-sm border-none active:scale-95 transition">
                <FaEye />
              </button>
            </Link>

            <Link to={`/updatecoffee/${_id}`}>
              <button className="btn btn-secondary text-xl text-white px-4 py-2 rounded-sm border-none active:scale-95 transition">
                <FaPencil />
              </button>
            </Link>

         
              <button onClick={()=>handleDelete(_id)} className="btn btn-warning text-xl text-white px-4 py-2 rounded-sm border-none active:scale-95 transition">
                <MdDelete />
              </button>
         
          </div>
        </div>
      </div>
    </>
  );
};

export default CoffeeCard;
