import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  removeselectedProduct,
  selectedProduct,
} from "../Redux/Action/Actiontypes";

import Footer from "../Component/Footer/Footer";

const ProductDetaile = () => {
  const product = useSelector((state) => state.product);

  const { productId } = useParams();
  const dispatch = useDispatch();
  const fetchProductId = () => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => dispatch(selectedProduct(data)));
  };
  useEffect(() => {
    if (productId && productId !== "") {
      fetchProductId();
    }

    dispatch(removeselectedProduct());
  }, [productId]);
  return (
    <div className="container mt-5 ">
      {Object.keys(product).length === 0 ? (
        <div>Loading.....</div>
      ) : (
        <div class="card mb-3 shadow">
          <div class="row g-0">
            <div class="col-md-6">
              <img
                src={product.image}
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-6 mt-5">
              <div class="card-body">
                <h5 class="card-title fw-bold">
                  {" "}
                  category : {product.category}
                </h5>
                <h5 class="card-title fw-bold"> title : {product.title}</h5>
                <br />
                <h5 class="card-title fw-bold"> price $ : {product.price}</h5>
                <p class="card-text " style={{ textAlign: "justify" }}>
                  <span class=" fw-bold"> description:</span>
                  {product.description}
                </p>
                <div class="d-grid gap-2">
                  <button class="btn btn-danger" type="button">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer></Footer>
    </div>
  );
};

export default ProductDetaile;
