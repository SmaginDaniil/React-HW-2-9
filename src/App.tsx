import  {FC,useState,useEffect} from "react";
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import './App.css';
import MenuPage from "./newPages/menuPage";
import HomeMainPage from "./newPages/homemain"
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import LoginPage from "./components/loginPage/login";
import { auth } from "./components/firebase/firebase";
import { onAuthStateChanged ,User} from "firebase/auth";
import {CartProduct} from "./interface/menuItem";



type CartItems = {
    [productId: string]: CartProduct;
};

const App:FC = () => {
    const [cartItems, setCartItems] = useState<CartItems>({});
    const [totalQuantity, setTotalQuantity] = useState<number>(0);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);

    const handleAddToCart = (product: CartProduct) => {
        const productId = product.id;
        const productQuantity = product.quantity;

        setCartItems((prevItems) => {
            const updatedItems = { ...prevItems };

            if (updatedItems[productId]) {
                updatedItems[productId] = {
                    ...updatedItems[productId],
                    quantity: updatedItems[productId].quantity + productQuantity,
                };
            } else {
                updatedItems[productId] = {
                    id: productId,
                    meal: product.meal,
                    price: product.price,
                    quantity: productQuantity,
                    instructions: product.instructions,
                    img: product.img,
                };
            }
            return updatedItems;
        });

        setTotalQuantity((prevQuantity) => prevQuantity + productQuantity);
    };

    return (
        <Router>
            <Header totalQuantity={totalQuantity} />
            <main>
                <Routes>
                    <Route path="/" element={user ? <HomeMainPage /> : <Navigate to="/login" />} />
                    <Route
                        path="/menu"
                        element={
                            user ? (
                                <MenuPage onAddToCart={handleAddToCart} totalQuantity={totalQuantity} />
                            ) : (
                                <Navigate to="/login" />
                            )
                        }
                    />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;