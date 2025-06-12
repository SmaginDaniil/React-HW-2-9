import React, { useState, useEffect, useCallback } from "react";
import Menu from "../menu/menu.jsx";
import ProductCard from "../productCard/productCard.jsx";
import "./main.css";
import Tooltip from "../tooltip/tooltip.jsx";
import Button from "../button/button.jsx";

const VISIBLE_ITEMS = 6;

function Main({ onAddToCart }) {
    const [menuItems, setMenuItems] = useState([]);
    const [visibleCount, setVisibleCount] = useState(VISIBLE_ITEMS);
    const [selectedCategory, setSelectedCategory] = useState("Dessert");

    useEffect(() => {
        async function fetchMenu() {
            try {
                const res = await fetch("https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals");
                const data = await res.json();
                setMenuItems(data);
            } catch (err) {
                console.error("Failed to fetch menu:", err);
            }
        }
        fetchMenu();
    }, []);

    const handleSeeMore = useCallback(() => {
        setVisibleCount(count => count + VISIBLE_ITEMS);
    }, []);

    const handleCategoryClick = useCallback((category) => {
        setSelectedCategory(category);
        setVisibleCount(VISIBLE_ITEMS);
    }, []);

    const filteredItems = menuItems.filter(item => item.category === selectedCategory);
    const visibleItems = filteredItems.slice(0, visibleCount);
    const showSeeMore = visibleCount < filteredItems.length;

    return (
        <main className="main">
            <h1 className="main__title">Browse our menu</h1>
            <div className="main__subtitle common_font">
                Use our menu to place an order online, or{" "}
                <Tooltip text="Call us: +37067683921">
                    <span className="highlight">phone</span>
                </Tooltip>{" "}
                our store <br /> to place a pickup order. Fast and fresh food.
            </div>

            <Menu onCategoryClick={handleCategoryClick} selectedCategory={selectedCategory} />

            <section className="main_menu">
                {visibleItems.map(item => (
                    <ProductCard
                        key={item.id}
                        productId={item.id}
                        index={item.id}
                        title={item.meal}
                        price={item.price}
                        description={item.instructions}
                        image={item.img}
                        onAdd={onAddToCart}
                    />
                ))}
            </section>

            {showSeeMore && (
                <Button type="btn__primary" onClick={handleSeeMore}>
                    See more
                </Button>
            )}
        </main>
    );
}

export default React.memo(Main);