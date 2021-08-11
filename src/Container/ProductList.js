import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../Redux/Action/Actiontypes";
import ProductComponent from "./ProductComponent";

import Footer from "./../Component/Footer/Footer";
const ProductList = () => {
  // redux state and dispatch hook start
  const product = useSelector((state) => state);
  console.log(product);
  const dispatch = useDispatch();
  // redux state and dispatch hook start end
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((req) => req.json())
      .then((data) => dispatch(setProducts(data)));
  }, []);
  const productDetails = product.allproduct.products;

  return (
    <div className="container">
      {productDetails.length == 0 ? (
        <div>Loading....</div>
      ) : (
        <div className="row">
          {productDetails?.map((data) => (
            <ProductComponent details={data}></ProductComponent>
          ))}
        </div>
      )}
      <Footer></Footer>
    </div>
  );
};

export default ProductList;
