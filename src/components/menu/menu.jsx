import React from 'react';
import './menu.css';
import Button from '../button/button.jsx';

function Menu({ categories, onCategorySelect, selectedCategory }) {
    return (
        <div className="main_to_choose_container">
            {categories.map((cat) => (
                <Button
                    key={cat}
                    type={selectedCategory === cat ? "btn__primary" : "btn__secondary"}
                    onClick={() => onCategorySelect(cat)}
                >
                    {cat}
                </Button>
            ))}
        </div>
    );
}

export default React.memo(Menu);