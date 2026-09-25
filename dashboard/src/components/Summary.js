import React, { useEffect, useState } from "react";
import axios from "axios";

const Summary = () => {
    const [funds, setFunds] = useState(null);
    const [holdings, setHoldings] = useState([]);

    useEffect(() => {
        fetchSummaryData();
    }, []);

    const fetchSummaryData = async () => {
        try {
            // Get user's funds
            const fundsResponse = await axios.get(
                "http://localhost:3002/funds",
                {
                    withCredentials: true,
                }
            );

            // Get user's holdings
            const holdingsResponse = await axios.get(
                "http://localhost:3002/allHoldings",
                {
                    withCredentials: true,
                }
            );

            setFunds(fundsResponse.data);
            setHoldings(holdingsResponse.data);
        } catch (error) {
            console.error("SUMMARY ERROR:", error);
        }
    };

    // Calculate investment and current value from holdings
    const investment = holdings.reduce((total, holding) => {
        return total + (Number(holding.qty) || 0) * (Number(holding.avg) || 0);
    }, 0);

    const currentValue = holdings.reduce((total, holding) => {
        return total + (Number(holding.qty) || 0) * (Number(holding.price) || 0);
    }, 0);

    const profitLoss = currentValue - investment;

    const profitPercentage =
        investment > 0 ? (profitLoss / investment) * 100 : 0;

    const availableCash = funds
        ? Number(funds.availableCash) || 0
        : 0;

    const openingBalance = funds
        ? Number(funds.openingBalance) || 0
        : 0;

    return (
        <>
            <div className="username">
                <h6>Hi, User!</h6>
                <hr className="divider" />
            </div>

            {/* EQUITY SECTION */}
            <div className="section">
                <span>
                    <p>Equity</p>
                </span>

                <div className="data">
                    <div className="first">
                        <h3>
                            ₹{availableCash.toFixed(2)}
                        </h3>
                        <p>Margin available</p>
                    </div>

                    <hr />

                    <div className="second">
                        <p>
                            Margins used <span>₹{investment.toFixed(2)}</span>
                        </p>

                        <p>
                            Opening balance{" "}
                            <span>₹{openingBalance.toFixed(2)}</span>
                        </p>
                    </div>
                </div>

                <hr className="divider" />
            </div>

            {/* HOLDINGS SECTION */}
            <div className="section">
                <span>
                    <p>Holdings ({holdings.length})</p>
                </span>

                <div className="data">
                    <div className="first">
                        <h3 className="profit">
                            ₹{profitLoss.toFixed(2)}
                            <small>
                                {" "}
                                ({profitPercentage.toFixed(2)}%)
                            </small>
                        </h3>

                        <p>P&amp;L</p>
                    </div>

                    <hr />

                    <div className="second">
                        <p>
                            Current Value{" "}
                            <span>₹{currentValue.toFixed(2)}</span>
                        </p>

                        <p>
                            Investment{" "}
                            <span>₹{investment.toFixed(2)}</span>
                        </p>
                    </div>
                </div>

                <hr className="divider" />
            </div>
        </>
    );
};

export default Summary;
