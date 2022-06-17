import "./Navbar.css"
import {Routes,Route} from "react-router"
// import { Electronics } from "../Electronics/Electronics"
import { Clothing } from "../Clothing/Clothing"
import { Link } from "react-router-dom"
import { Product } from "../Product/Product"
// import ShoppingCartTwoToneIcon from "@mui/material"

export const Nav = ()=>{
    
    // console.log(cartCount.length)
    return( 
        <div className="nav"> 
            <div className="logo_div"><Link to="/"><h1>Tendyz</h1></Link></div>
            
            <div className="navbar_div">
                
                
                <Link to="/products/category/electronics"><h3>Electronics ▼<img src="" alt="" /></h3></Link>
                <Link to="/Clothing"><h3>Clothing ▼</h3></Link>
                
                
            {/* <ShoppingCartTwoToneIcon/> */}
            <div className="login_signup">
            
            <Link to="/cart"><img className="cart_img" src="https://image.shutterstock.com/image-vector/trolley-cart-icon-vector-simple-600w-1718075830.jpg" alt="" /></Link>
            <Link to="/Signup"><h3>Signup</h3></Link>
            <Link to="/login"><h3>Login</h3></Link>
            
            </div>
            </div>
        </div>
    )
}