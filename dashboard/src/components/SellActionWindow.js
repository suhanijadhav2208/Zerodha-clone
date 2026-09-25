import React, { useState , useContext} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const SellActionWindow = ({ uid }) => {
    const generalContext=useContext(GeneralContext);
    const [stockQuantity, setStockQuantity] = useState(1);
    const [stockPrice, setStockPrice] = useState(0.0);

    const handleSellClick = async () => {
        try {
            const response = await axios.post(
                "http://localhost:3002/newOrder",
                {
                    name: uid,
                    qty: Number(stockQuantity),
                    price: Number(stockPrice),
                    mode: "SELL",
                },
                {
                    withCredentials: true,
                }
            );

            console.log("SELL ORDER SAVED:", response.data);
            alert("SELL order placed successfully!");

            GeneralContext.closeSellWindow();
        } catch (error) {
            console.error("SELL ORDER ERROR:", error);
            alert("Failed to place SELL order");
        }
    };

    const handleCancelClick = () => {
        generalContext.closeSellWindow();
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
                            onChange={(e) =>
                                setStockQuantity(e.target.value)
                            }
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
                            onChange={(e) =>
                                setStockPrice(e.target.value)
                            }
                            value={stockPrice}
                        />
                    </fieldset>
                </div>
            </div>

            <div className="buttons">
                <span>Margin required ₹140.65</span>

                <div>
                    <button
                        className="btn btn-blue"
                        type="button"
                        onClick={handleSellClick}
                    >
                        Sell
                    </button>

                    <Link
                        to=""
                        className="btn btn-grey"
                        onClick={handleCancelClick}
                    >
                        Cancel
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SellActionWindow;