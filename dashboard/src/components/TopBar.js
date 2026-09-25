import React from "react";
import Menu from "./Menu";

const TopBar = ({ user }) => {

    const handleLogout = async () => {
        try {
            await fetch("http://localhost:3002/auth/logout", {
                method: "POST",
                credentials: "include",
            });

            window.location.href = "http://localhost:3000/login";
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    return (
        <div className="topbar-container">

            <div className="indices-container">

                <div className="nifty">
                    <p className="index">NIFTY 50</p>
                    <p className="index-points">100.2</p>
                    <p className="percent"></p>
                </div>

                <div className="sensex">
                    <p className="index">SENSEX</p>
                    <p className="index-points">100.2</p>
                    <p className="percent"></p>
                </div>

                <div
                    style={{
                        marginLeft: "30px",
                        display: "flex",
                        alignItems: "center",
                        gap: "15px"
                    }}
                >
                    <span>
                        Welcome, {user?.name || "User"}
                    </span>

                    <button
                        onClick={handleLogout}
                        style={{
                            padding: "8px 15px",
                            border: "1px solid #387ed1",
                            borderRadius: "4px",
                            background: "#387ed1",
                            color: "white",
                            cursor: "pointer",
                            fontSize: "14px"
                        }}
                    >
                        Logout
                    </button>
                </div>

            </div>

            <Menu />

        </div>
    );
};

export default TopBar;