import React, { useContext } from "react";
import { useAuthContext } from "../../context/authContext";
import useFetch from "../Hooks/useFetch";
import useSearch from "../Hooks/useSearch";
import noResult from "../../assets/img/no-results.png";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { BsCartCheck, BsShare } from "react-icons/bs";
import { RiHeartAddFill } from "react-icons/ri";
import ProductCard from "../ProductCard/ProductCard";
import { searchContext } from "../../context/searchContext";
import "./Products.css";
import errorImg from "../../assets/img/error-404.png";

function Products(props) {
  const { products, error, loading } = useFetch();
  const { filter } = useSearch();
  const { isAuthenticated } = useAuthContext();
  const searchCall = useContext(searchContext);

  let renderedProducts;

  return (
    <>
      <div className="title__row">
        <h2 className="products__title">{props.title}</h2>
      </div>
      <div className="products__container">
        {loading ? (
          <Spinner className="spinner" animation="border" variant="primary" />
        ) : null}
        {error ? (
          <>
            <img className="error-img" src={errorImg} alt="error message" />
          </>
        ) : null}
        {
          (renderedProducts = products
            .filter((product) => {
              const match = product.title
                .toLowerCase()
                .includes(filter.toLowerCase());
              if (!filter) searchCall.setSearchCall(false);
              if (filter !== "") searchCall.setSearchCall(true);
              return match;
            })

            .map((product) => (
              <ProductCard key={product.id}>
                <div data-card={product.id} className="card">
                  <Link
                    to={
                      isAuthenticated
                        ? `/private/product/${product.slug}`
                        : `/product/${product.slug}`
                    }
                  >
                    <img src={product.img} alt={product.title} />
                    <h4 className="card__title">{product.title}</h4>{" "}
                    <section className="section__card__info">
                      <div>
                        <span className="card__description">
                          {product.category}
                        </span>
                        <span className="card__shop__price">
                          {product.price}€
                        </span>
                      </div>
                      <div className="card__shop">
                        <button
                          data-id={product.id}
                          className="card__shop__action"
                          onClick={() => props.manageClick(product)}
                        >
                          <BsCartCheck />
                        </button>
                        <button
                          onClick={() => props.manageShare(product)}
                          className="card__shop__share"
                        >
                          <BsShare />
                        </button>
                        <button
                          fav-id={product.id}
                          onClick={() => props.manageFav(product)}
                          className="card__shop__fav"
                        >
                          <RiHeartAddFill />
                        </button>
                      </div>
                    </section>
                  </Link>
                </div>
              </ProductCard>
            )))
        }
        
        {renderedProducts.length === 0 && filter !== "" ? (
          <div id="emptySearch" className="empty-alert">
            <img src={noResult} alt="No found sticker" />
            <h4>There is nothing with that keydword</h4>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Products;
