import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { productsActionDetails } from "../redux/actions/products";
import { AiTwotoneStar } from "react-icons/ai"
import { CgMathMinus, CgMathPlus} from "react-icons/cg"
import { BiLira} from "react-icons/bi"

const Details = () => {
  const [count, setCount]=useState(0)
  const dispatch = useDispatch();
  const params = useParams();
  const { productState, productsState } = useSelector((state) => state);

  useEffect(() => {
    dispatch(productsActionDetails(params.id));
  }, [dispatch]);

  const decreament =()=>{
    if(count>0){
      setCount(count-1)
    }
    
  }

  const increament =(stock)=>{
    if(count<=stock){
      setCount(count+1)
    }
  }
  
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col md:flex-row justify-center items-center p-5 space-y-5 w-full min-h-[350px] border shadow-2xl">
        <img className="w-1/2" src={productState.product.image} />
        <div className="flex flex-col justify-start items-center px-5 space-y-5">
          <h1 className="text-center font-bold text-lg mt-3">
            {productState.product.title}
          </h1>
          <h2 className="font-bold text-[1.5rem] text-red-600 underline">
            Ürün Detayı
          </h2>
          <p>{productState.product.description}</p>
          <p className="font-bold text-3xl tracking-widest whitespace-nowrap flex items-center">
            {productState.product.price} <BiLira className="inline-flex "/>
          </p>
          <div className="relative">
            <p className="absolute top-6 left-6 text-sm text-red-600 font-bold">
              {productState.product?.rating?.rate}
            </p>
            <AiTwotoneStar size={70} className="text-yellow-500" />
          </div>
          <p className="font-bold text-xxsm ">Stok Miktarı :
           {productState.product?.rating?.count}    
            <span>  adet</span></p>
        <div className="flex space-x-3 justify-center">
          <CgMathMinus onClick={()=>decreament()} className="cursor-pointer border rounded-full" size={30}/>
          <span className="text-2xl font-bold">{count}</span>
          <CgMathPlus onClick={()=>increament(productState.product?.rating?.count)} className="cursor-pointer border rounded-full" size={30}/>
        </div>
        <div className="w-full">
          <button className="w-full bg-indigo-600 text-white py-2 rounded-lg text-xl hover:opacity-70">Sepete Ekle</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
