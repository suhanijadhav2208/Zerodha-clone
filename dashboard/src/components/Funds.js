import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Funds = () => {
  const [funds, setFunds] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3002/funds", {
        withCredentials: true,
      })
      .then((res) => {
        setFunds(res.data);
      })
      .catch((error) => {
        console.error("FUNDS ERROR:", error);
      });
  }, []);

  return (
    <>
      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI </p>
        <button
          className="btn btn-green"
          onClick={async () => {
            const amount = prompt("Enter amount to add:");

            if (!amount || Number(amount) <= 0) {
              alert("Please enter a valid amount");
              return;
            }

            try {
              const response = await axios.post(
                "http://localhost:3002/addFunds",
                {
                  amount: Number(amount),
                },
                {
                  withCredentials: true,
                },
              );

              setFunds(response.data.funds);

              alert("Funds added successfully!");
            } catch (error) {
              console.error("ADD FUNDS ERROR:", error);
              alert("Failed to add funds");
            }
          }}
        >
          Add funds
        </button>
        <button
          className="btn btn-blue"
          onClick={async () => {
            const amount = prompt("Enter amount to withdraw:");

            if (!amount || Number(amount) <= 0) {
              alert("Please enter a valid amount");
              return;
            }

            try {
              const response = await axios.post(
                "http://localhost:3002/withdrawFunds",
                {
                  amount: Number(amount),
                },
                {
                  withCredentials: true,
                },
              );

              setFunds(response.data.funds);

              alert("Funds withdrawn successfully!");
            } catch (error) {
              console.error("WITHDRAW ERROR:", error);

              alert(error.response?.data || "Failed to withdraw funds");
            }
          }}
        >
          Withdraw
        </button>
      </div>

      <div className="row">
        <div className="col">
          <span>
            <p>Equity</p>
          </span>

          <div className="table">
            <div className="data">
              <p>Available margin</p>
              <p className="imp colored">
                {funds ? funds.availableCash.toFixed(2) : "0.00"}
              </p>
            </div>
            <div className="data">
              <p>Used margin</p>
              <p className="imp">
                {funds ? Number(funds.usedMargin || 0).toFixed(2) : "0.00"}
              </p>
            </div>
            <div className="data">
              <p>Available cash</p>
              <p className="imp">
                {funds ? funds.availableCash.toFixed(2) : "0.00"}
              </p>
            </div>
            <hr />
            <div className="data">
              <p>Opening Balance</p>
              <p>4,043.10</p>
            </div>
            <div className="data">
              <p>Opening Balance</p>
              <p>3736.40</p>
            </div>
            <div className="data">
              <p>Payin</p>
              <p>4064.00</p>
            </div>
            <div className="data">
              <p>SPAN</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Delivery margin</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Exposure</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Options premium</p>
              <p>0.00</p>
            </div>
            <hr />
            <div className="data">
              <p>Collateral (Liquid funds)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Collateral (Equity)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Total Collateral</p>
              <p>0.00</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="commodity">
            <p>You don't have a commodity account</p>
            <Link className="btn btn-blue">Open Account</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;
