import React, { useState } from "react";
import Header from "./components/header/header.jsx";
import Main from "./components/main/main.jsx";
import Footer from "./components/footer/footer.jsx";
import "./App.css";

function App() {
    const [cartItems, setCartItems] = useState({});
    const [totalQuantity, setTotalQuantity] = useState(0);

    const handleAddToCart = (product) => {
        const { productId, quantity } = product;
        const qty = Number(quantity);

        setCartItems(prev => {
            const items = { ...prev };
            if (items[productId]) {
                items[productId] = {
                    ...items[productId],
                    quantity: items[productId].quantity + qty
                };
            } else {
                items[productId] = { ...product, quantity: qty };
            }
            return items;
        });

        setTotalQuantity(q => q + qty);
    };

    return (
        <>
            <Header totalQuantity={totalQuantity} />
            <Main onAddToCart={handleAddToCart} />
            <Footer />
        </>
    );
}

export default App;