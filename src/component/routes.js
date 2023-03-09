import React from "react";
import { Route,Routes,BrowserRouter } from "react-router-dom";
import Cart from "./cart";

const Rout = () => {
    return(<>
    <BrowserRouter>
    <Routes>
        <Route path = "/cart" element ={<Cart/>}></Route>
    </Routes>
    </BrowserRouter>

    </>)
}

export default Rout