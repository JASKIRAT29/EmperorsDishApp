import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Reviews from "./pages/Reviews";
import Order from "./pages/Order";
import Admin from "./pages/Admin";
import Login from "./pages/Login";

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
  });


function App() {
    return (
     <ApolloProvider client={client}>  
        <div className="App">
            <Router basename="/">
                <Nav />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/menu" element={<Menu />} />
                    <Route exact path="/reviews" element={<Reviews />} />
                    <Route exact path="/order" element={<Order />} />
                    <Route exact path="/admin" element={<Admin />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
                <Footer />
            </Router>
        </div>
     </ApolloProvider>  
    );
}

export default App;
