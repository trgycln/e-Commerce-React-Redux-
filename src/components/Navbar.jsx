import React, { useEffect, useState } from "react";
import { BsLightbulb, BsBasketFill, BsMoonStarsFill } from "react-icons/bs";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const [bgColor, setBgColor] = useState(false);
  const dispatch = useDispatch()

  useEffect(()=>{
	const root = document.getElementById("root")
	if(bgColor){
		root.style.backgroundColor="black"
		root.style.color="gray"
	} else {
		root.style.backgroundColor="white"
		root.style.color="black"
	}

  },[bgColor])

  return (
    <div className="flex items-center justify-between h-28 px-2">
      <div className="text-2xl font-bold tracking-wider">LOGO</div>
      <div className="flex items-center space-x-4">
        <input
          className="border rounded-lg p-1 outline-none"
          type="text"
          placeholder="Search"
        />
        <div onClick={() => setBgColor(!bgColor)}>
          {bgColor ? (
            <BsLightbulb className="cursor-pointer" />
          ) : (
            <BsMoonStarsFill className="cursor-pointer" />
          )}
        </div>
        <div onClick={()=>dispatch({type:"DRAWER", payload:true})} className="relative">
          <BsBasketFill className="cursor-pointer" />
          <span className="absolute -top-4 right-0 px-1 bg-red-600 text-white rounded-full text-sm">
            3
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
