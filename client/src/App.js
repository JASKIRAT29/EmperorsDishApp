import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Reviews from "./pages/Reviews";
import Order from "./pages/Order";

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
  });


function App() {
    return (
     <ApolloProvider client={client}>  
        <div id="root" className="App">
            <Router>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/reviews" element={<Reviews />} />
                    <Route path="/order" element={<Order />} />
                </Routes>
                <Footer />
            </Router>
        </div>
     </ApolloProvider>  
    );
}

export default App;
