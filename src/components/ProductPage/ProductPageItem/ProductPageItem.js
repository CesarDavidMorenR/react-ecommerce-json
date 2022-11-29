import React, { useState, useEffect } from "react";
import { BsCartCheck, BsShare } from "react-icons/bs";
import { RiHeartAddFill } from "react-icons/ri";
import { useNavigate, useParams } from "react-router-dom";

const ProductPageItem = ({ manageFav, manageClick, manageShare }) => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProduct();
  }, [params]);

  const getProduct = async () => {
    try {
      const response = await fetch(
        `  http://localhost:4000/products/?slug=${params.title}`
      );
      if (response.ok) {
        let product = await response.json();
        if (product.length === 0) {
          navigate("/error");
        } else {
          product = product[0];
          setProduct(product);
        }
      } else {
        navigate("/error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div data-card={product.id} className="small-container single-product">
      <div className="row">
        <div className="product_img col-6">
          <img src={product.img} alt={product.title} width="100%" />
        </div>
        <div className="col-6">
          <h1>{product.title}</h1>
          <h4>{product.price}€</h4>
          <select>
            <option>Select Size</option>
            <option>46</option>
            <option>45</option>
            <option>44</option>
            <option>43</option>
            <option>42</option>
          </select>

          <h3>Product Details</h3>
          <br />
          <p className="product__description">{product.description}</p>
          <div className="card__shop">
            <button
              className="card__shop__share"
              onClick={() => manageShare(product)}
            >
              <BsShare />
            </button>
            <button
              fav-id={product.id}
              onClick={() => manageFav(product)}
              className="card__shop__fav"
            >
              <RiHeartAddFill />
            </button>
            <button
              data-id={product.id}
              className="card__shop__action"
              onClick={() => manageClick(product)}
            >
              <BsCartCheck />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPageItem;
