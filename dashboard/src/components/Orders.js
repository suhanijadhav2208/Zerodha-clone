import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/allOrders", {
        withCredentials: true,
      })
      .then((res) => {
        setOrders(res.data);
      })
      .catch((error) => {
        console.error("ORDER ERROR:", error);
      });
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h2 style={{ marginBottom: "30px", fontWeight: "500" }}>
        Orders
      </h2>

      {orders.length === 0 ? (
        <div style={{ textAlign: "center", marginTop: "80px" }}>
          <p>You haven't placed any orders today</p>
        </div>
      ) : (
        <div
          style={{
            border: "1px solid #eee",
            borderRadius: "5px",
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr 1fr",
              padding: "15px 20px",
              background: "#fafafa",
              borderBottom: "1px solid #eee",
              fontWeight: "500",
            }}
          >
            <span>Stock</span>
            <span>Quantity</span>
            <span>Price</span>
            <span>Type</span>
          </div>

          {/* Orders */}
          {orders.map((order) => (
            <div
              key={order._id}
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr 1fr 1fr",
                padding: "18px 20px",
                borderBottom: "1px solid #eee",
                alignItems: "center",
              }}
            >
              <span style={{ fontWeight: "500" }}>
                {order.name}
              </span>

              <span>{order.qty}</span>

              <span>₹{order.price}</span>

              <span
                style={{
                  color: order.mode === "BUY" ? "#387ed1" : "#ff5722",
                  fontWeight: "500",
                }}
              >
                {order.mode}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;