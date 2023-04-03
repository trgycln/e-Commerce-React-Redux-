import React from "react";
import { FaRegWindowClose } from "react-icons/fa";
import { useDispatch } from "react-redux";

const Card = () => {
	const dispatch = useDispatch()
  return (
    <div className="fixed top-0 right-0 w-1/3 h-full bg-white border p-4">
      <div className="relative">
        <h1 className="text-center font-bold tracking-wider text-lg">
          SEPETİM :
        </h1>
        <FaRegWindowClose onClick={()=>{dispatch({type:"DRAWER", payload:false})}} className="fixed text-sm lg:text-base top-5 right-35 cursor-pointer" />
      </div>
      <hr />
      <p>title</p>
      <p>Description</p>
      <p>150 TL</p>
    </div>
  );
};

export default Card;
