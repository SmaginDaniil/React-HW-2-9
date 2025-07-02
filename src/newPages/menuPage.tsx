import {FC} from 'react';
import Main from '../components/main/main.tsx'
import {CartProduct} from "../interface/menuItem.ts";


interface MenuPageProps {
    onAddToCart: (item:CartProduct)=> void;
    totalQuantity: number;
}

const MenuPage:FC<MenuPageProps> = ({ onAddToCart, totalQuantity }) => {
    return (
        <main>
            <Main onAddToCart={onAddToCart} totalQuantity={totalQuantity} />
        </main>
    );
};

export default MenuPage;