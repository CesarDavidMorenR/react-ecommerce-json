import React from "react";
import { useAuthContext } from "../../../context/authContext";
import { Link } from 'react-router-dom'
import { TbHeartHandshake } from "react-icons/tb"
import { FaOpencart } from "react-icons/fa";


const IconsNavBar = (props) => {
  const { isAuthenticated } = useAuthContext();


  return (
    <>
      <Link
        className="nav-link fav-link"
        to={isAuthenticated ? "/private/favs" : "/favs"}
      >
        <TbHeartHandshake className="mainPage__favIcon" />
      </Link>
      <div id="cartIcon" className="cart__icon" onClick={props.openCart}>
        <FaOpencart />
        <span>({props.totalQuantity})</span>
      </div>
    </>
  );
};

export default IconsNavBar;
