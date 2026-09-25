import React, { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

 const handleBuyClick = async () => {
    try {
        const response = await axios.post(
            "http://localhost:3002/newOrder",
            {
                name: uid,
                qty: stockQuantity,
                price: stockPrice,
                mode: "BUY",
            },
            {
                withCredentials: true,
            }
        );

        console.log("ORDER SAVED:", response.data);
        alert("BUY order placed successfully!");

        GeneralContext.closeBuyWindow();
    } catch (error) {
        console.error("BUY ORDER ERROR:", error);
        alert("Failed to place BUY order");
    }
};
  const handleCancelClick = () => {
    GeneralContext.closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <button
    type="button"
    className="btn btn-blue"
    onClick={handleBuyClick}
>
    Buy
</button>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
