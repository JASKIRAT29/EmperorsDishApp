import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Reviews from "./pages/Reviews";
import Order from "./pages/Order";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/reviews" element={<Reviews />} />
                    <Route path="/order" element={<Order />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
