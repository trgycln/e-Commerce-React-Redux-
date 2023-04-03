import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productsAction } from "../redux/actions/products";
import ProductCards  from "../components/ProductCards"

const Home = () => {
  const dispatch = useDispatch();
  const { productsState } = useSelector((state) => state);

  useEffect(() => {
    dispatch(productsAction());
  }, [dispatch]);

  console.log("Products", productsState.products);

  return <div className="flex flex-wrap justify-between">
    {
      productsState.products.map(product=>(
        <ProductCards key={product.id} product={product}/>
      ))
    }
  </div>;
};

export default Home;
