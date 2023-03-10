import React, { useContext } from "react";
import AppContest from "@context/AppContext";
import addToCartImage from "@icons/bt_add_to_cart.svg";
import "@styles/ProductItem.scss";

const ProductItem = ({product}) => {
  const { addToCart } = useContext(AppContest);

  const handleClick = item => {
    addToCart(item);
  };

  return (
    <div className="ProductItem">
      <img
        src={product.images[0]}
        alt={product.title}
      />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)} className="cursor" >
          <img src={addToCartImage} alt="" />
        </figure>
        {}
      </div>
    </div>
  );
};

export default ProductItem;
