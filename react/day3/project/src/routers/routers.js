import { Route, Routes } from "react-router-dom";
// import Product from "../pages/product";
// import NotFound from "../pages/notFound";
// import RegeterForm from "../component/regester/regester";
// import Login from "../pages/login";
// import Detail from "../pages/productDetail";
// import SalesDetail from "../pages/salesdetais";
import React, { Suspense } from "react";
import Loader from "../component/loader/loader";
const Product = React.lazy(()=>import("../pages/product"));
const NotFound = React.lazy(()=>import("../pages/notFound"));
const RegeterForm = React.lazy(()=>import("../component/regester/regester"));
const Login = React.lazy(()=>import("../pages/login"));
const Detail = React.lazy(()=>import("../pages/productDetail"));
const SalesDetail = React.lazy(()=>import("../pages/salesdetais"))


export default function Routers(){
    return(
        <Suspense fallback={<Loader/>}>
        <Routes>
            <Route path="/" element={<Product/>}/>
            <Route path="/regester" element={<RegeterForm/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/product-detail/:id" element={<Detail/>}/>
            <Route path="/slaes-detail" element={<SalesDetail/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
        </Suspense>
    );
}