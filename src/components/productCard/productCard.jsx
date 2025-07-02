import React, {useRef} from "react";
import "./productCard.css";
import Button from "../button/button.jsx";
import Input from "/src/components/input/input.jsx"


const ProductCard = ({ productId, title, price, description, image, onAdd }) => {
    const inputRef = useRef();

    return (
        <div className="product_card">
            <img src={image} alt="product" className="prod_img" />

            <div className="price highlight">${parseFloat(price).toFixed(2)}</div>

            <div className="product_info">
                <div className="title">{title}</div>
                <div className="description common_font">{description}</div>
                <div className="add_to_cart">
                    <Input
                        type="number"
                        defaultValue="1"
                        min="1"
                        size = "small"
                        ref={inputRef}
                    />
                    <Button
                        onClick={() =>
                            onAdd({
                                productId,
                                title,
                                price,
                                description,
                                image,
                                quantity: inputRef.current.value,
                            })
                        }
                    >
                        Add to cart
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;