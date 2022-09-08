import React from "react";
import { Link } from "react-router-dom";
const Nav = ()=>{
    return(
        <div className="home-nav">
            <ul className= "nav-ul">
                <li><Link to = "/">Home </Link></li>
                <li><Link to = "/news">News </Link></li>
                <li><Link to = "/contact">Contact </Link></li>
                <li><Link to = "/about">About </Link></li>
                <li><Link to = "/product">Product </Link></li>
                <li><Link to = "/add-product">Add Product </Link></li>
                <li><Link to = "/profile">Profile </Link></li>
                <li><Link to = "/logout">Logout </Link></li>
                <li><Link to = "/signup">SignUp </Link></li>
                
                
            </ul>
        </div>
    )
}
export default Nav;