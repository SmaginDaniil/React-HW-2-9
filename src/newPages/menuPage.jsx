import React from "react";
import Main from "../components/main/main.jsx";

function MenuPage(props) {
    const { onAddToCart, totalQuantity } = props;
    return (
        <Main onAddToCart={onAddToCart} totalQuantity={totalQuantity} />
    );
}

export default MenuPage;