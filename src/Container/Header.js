import React from "react";
import "./Header.css";
const Header = () => {
  const style = {
    height: "600px",
    background:
      'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/12/20/16/freestocks-org-187367-unsplash-0.jpg?width=1200")',
    backgroundRepeat: "no-repeat",

    backgroundSize: "cover",
  };

  return (
    <div
      style={style}
      className=" d-flex justify-content-center align-items-center header-container"
    >
      <h1 className="fs-1 fst-italic text-white">
        REDUX <span className="text-warning">ECOMMERCE</span>
      </h1>
    </div>
  );
};

export default Header;
