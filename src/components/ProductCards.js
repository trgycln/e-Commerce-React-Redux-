import React from "react";
import { BiLira} from "react-icons/bi"

const ProductCards = ({ product }) => {
	
  return (
    <div className="w-full md:w-1/4 lg:w-1/5 min-h-[350px] border rounded-lg m-3 flex flex-col items-center space-y-2 p-2 hover:border-blue-500">
      <img onClick={()=>{window.location=`/details/${product.id}`}} src={product.image} className="h-32 object-cover cursor-pointer" />
      <div className="font-bold text-center">{product?.title.substring(0,30)}</div>
      <div className="text-center opacity-70">
        {product?.description.substring(0, 45)} ...
      </div>
      <div className="font-bold text-lg tracking-wider flex justify-center items-center ">
        {product?.price} <BiLira className="inline-flex "/>
      </div>
      <div className="text-sm text-red-600">Rate : {product?.rating.rate}</div>
      <button className="w-full text-sm bg-indigo-600 text-white p-2 rounded-lg hover:opacity-70 duration-500">SEPETE EKLE</button>
    </div>
  );
};

export default ProductCards;


// useNavigate yerine window.location = "details/id" kıllanıldı.
