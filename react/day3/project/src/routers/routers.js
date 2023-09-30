import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Product from "../pages/product";
export default function Routers(){
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/product" element={<Product/>} />
        </Routes>
    );

}