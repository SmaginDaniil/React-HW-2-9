import React, { useRef } from "react";
import "./productCard.css";
import Button from "../button/button.jsx";

function ProductCard({ productId, title, price, description, image, onAdd }) {
    const amountRef = useRef(1);

    const handleAdd = () => {
        onAdd({
            productId,
            title,
            price,
            description,
            image,
            quantity: amountRef.current.value,
        });
    };

    return (
        <div className="product_card">
            <img src={image} alt={title} className="prod_img" />
            <div className="price highlight">${Number(price).toFixed(2)}</div>
            <div className="product_info">
                <div className="title">{title}</div>
                <div className="description common_font">{description}</div>
                <div className="add_to_cart">
                    <input
                        type="number"
                        min={1}
                        defaultValue={1}
                        className="amount"
                        ref={amountRef}
                    />
                    <Button onClick={handleAdd}>
                        Add to cart
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;