import {FC} from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import MenuPage from "./newPages/menuPage"
import HomeMainPage from "./newPages/homemain";
import LogoutPage from "./components/logOutPage/logOutPage"
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import LoginPage from "./components/loginPage/login";

import {useSelector} from "react-redux";
import {RootState} from "./shopCard/shop";


const App: FC = () => {

    const user = useSelector((state: RootState) => state.auth.user);

    return (
        <Router>
            <Header/>
            <main>
                <Routes>
                    <Route path="/" element={user ? <HomeMainPage/> : <Navigate to="/login"/>}/>
                    <Route path="/menu" element={user ? <MenuPage/> : <Navigate to="/login"/>}/>
                    <Route path="/login" element={!user ? <LoginPage/> : <Navigate to="/"/>}/>
                    <Route path="/logout" element={<LogoutPage/>}/>
                </Routes>
            </main>
            <Footer/>
        </Router>
    );
};

export default App;