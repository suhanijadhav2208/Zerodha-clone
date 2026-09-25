import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

const GeneralContext = React.createContext({
    openBuyWindow: (uid) => {},
    closeBuyWindow: () => {},
    openSellWindow: (uid) => {},
    closeSellWindow: () => {},
});

export const GeneralContextProvider = (props) => {
    // BUY window
    const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
    const [selectedStockUID, setSelectedStockUID] = useState("");

    // SELL window
    const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
    const [selectedSellStockUID, setSelectedSellStockUID] = useState("");

    // Open BUY window
    const handleOpenBuyWindow = (uid) => {
        setIsBuyWindowOpen(true);
        setSelectedStockUID(uid);
    };

    // Close BUY window
    const handleCloseBuyWindow = () => {
        setIsBuyWindowOpen(false);
        setSelectedStockUID("");
    };

    // Open SELL window
    const handleOpenSellWindow = (uid) => {
        setIsSellWindowOpen(true);
        setSelectedSellStockUID(uid);
    };

    // Close SELL window
    const handleCloseSellWindow = () => {
        setIsSellWindowOpen(false);
        setSelectedSellStockUID("");
    };

    return (
        <GeneralContext.Provider
            value={{
                openBuyWindow: handleOpenBuyWindow,
                closeBuyWindow: handleCloseBuyWindow,
                openSellWindow: handleOpenSellWindow,
                closeSellWindow: handleCloseSellWindow,
            }}
        >
            {props.children}

            {isBuyWindowOpen && (
                <BuyActionWindow uid={selectedStockUID} />
            )}

            {isSellWindowOpen && (
                <SellActionWindow uid={selectedSellStockUID} />
            )}
        </GeneralContext.Provider>
    );
};

export default GeneralContext;
