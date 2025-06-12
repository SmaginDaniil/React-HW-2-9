import React, { useState, useEffect } from "react";
import Menu from "../menu/menu.jsx";
import ProductCard from "../productCard/productCard.jsx";
import "./main.css";
import Tooltip from "../tooltip/tooltip.jsx";
import Button from "../button/button.jsx";
import useFetch from "../../Hooks/useFetch.js";

const ITEMS_PER_PAGE = 6;

function Main({ onAddToCart }) {
    const [menuItems, setMenuItems] = useState([]);
    const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
    const [selectedCategory, setSelectedCategory] = useState("Dessert");

    useEffect(() => {
        let ignore = false;
        async function fetchMenu() {
            try {
                const res = await fetch("https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals");
                if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
                const data = await res.json();
                if (!ignore) setMenuItems(data);
            } catch (err) {
                console.error("Menu fetch error:", err);
            }
        }
        fetchMenu();
        return () => { ignore = true; };
    }, []);

    useFetch("https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals");

    const handleShowMore = () => setVisibleCount(count => count + ITEMS_PER_PAGE);

    const handleCategorySelect = (cat) => {
        setSelectedCategory(cat);
        setVisibleCount(ITEMS_PER_PAGE);
    };

    const categories = Array.from(new Set(menuItems.map(item => item.category)));
    const filtered = menuItems.filter(item => item.category === selectedCategory);
    const visible = filtered.slice(0, visibleCount);
    const canShowMore = visibleCount < filtered.length;

    return (
        <section className="main">
            <h2 className="main__title">Browse our menu</h2>
            <div className="main__subtitle common_font">
                Use our menu to place an order online, or{" "}
                <Tooltip text="Call us: +37067683921">
                    <span className="highlight">phone</span>
                </Tooltip>{" "}
                our store <br /> to place a pickup order. Fast and fresh food.
            </div>

            <Menu
                categories={categories}
                onCategorySelect={handleCategorySelect}
                selectedCategory={selectedCategory}
            />

            <div className="main_menu">
                {visible.map((el) => (
                    <ProductCard
                        key={el.id}
                        productId={el.id}
                        title={el.meal}
                        price={el.price}
                        description={el.instructions}
                        image={el.img}
                        onAdd={onAddToCart}
                    />
                ))}
            </div>

            {canShowMore && (
                <Button type="btn__primary" onClick={handleShowMore}>
                    See more
                </Button>
            )}
        </section>
    );
}

export default Main;