import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import MenuPage from "./newPages/menuPage.jsx"
import HomeMainPage from "./newPages/homemain.jsx"
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
const App = () => {
    const [cartItems, setCartItems] = useState({});
    const [totalQuantity, setTotalQuantity] = useState(0);

    const handleAddToCart = (product) => {
        const productId = product.id;
        const productQuantity = Number(product.quantity);

        setCartItems(prevItems => {
            const updatedItems = { ...prevItems };
            if (updatedItems[productId]) {
                updatedItems[productId] = {
                    ...updatedItems[productId],
                    quantity: updatedItems[productId].quantity + productQuantity
                };
            } else {
                updatedItems[productId] = {
                    ...product,
                    quantity: productQuantity
                };
            }
            return updatedItems;
        });

        setTotalQuantity(prevQuantity => prevQuantity + productQuantity);
    };

    return (
        <Router>
            <Header totalQuantity={totalQuantity} />
            <main>
                <Routes>
                    <Route path="/" element={<HomeMainPage />} />
                    <Route path="/menu" element={<MenuPage onAddToCart={handleAddToCart} totalQuantity={totalQuantity} />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;