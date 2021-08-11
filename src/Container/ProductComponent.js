import React from "react";
import { Link } from "react-router-dom";

const ProductComponent = ({ details }) => {
  console.log(details);
  return (
    <div className="col-12 col-md-4 d-flex justify-content-center">
      <div class="card shadow mt-5" style={{ width: "18rem" }}>
        <img
          src={details.image}
          style={{ height: "250px" }}
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{details.title}</h5>
          <p class="card-text fw-bold  text-info"> Price $: {details.price}</p>
          <div className="text-center">
            <Link
              to={`/product/${details.id}`}
              class="btn btn-primary text-center"
            >
              More Information
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
