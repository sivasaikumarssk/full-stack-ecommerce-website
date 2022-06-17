import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import "./clothing.css"
import { Link } from "react-router-dom";
import { Buttons } from "./FilterSortButtons";

export const Allproducts = ()=>{
    
   const [data,setData] = useState([])

const category = useParams();
// console.log(category)
const value = category.category;


const handleChangeSort = (key, value = 1) => {
    if (value === 1) {
        data.sort((a, b) => a[key] - b[key])
      setData([...data]);
      console.log("data,",allProducts)
      
    }
    else {
        data.sort((a, b) => b[key] - a[key])
      setData([...data]);
      
    }
  }


const dataProducts = async ()=>{
    const response = await axios.get(`https://fakestoreapi.com/products/category/${value}`).catch((err) =>{
        console.log("error",err);
    });
    setData(response.data);
}
 useEffect(()=>{
         dataProducts();  
 },[]);

    return(
        <>
        <div className="buttons_div">
          
        <Link to={`/clothing`}><button >All</button></Link>
        <Link to={`/products/category/men's clothing`}><button >Mens</button></Link>
        <Link to={`/products/category/women's clothing`}><button >Womens</button></Link>
        <Link to={`/products/category/jewelery`}><button >Jewelery</button></Link>
        
        </div>
       

        <div>

            Price<button onClick={() => {
            handleChangeSort("price")
          }}>Low - High</button>

            Price <button onClick={() => {
          handleChangeSort("price",-1)
        }}>High - Low</button>
        
        </div>
        <div className="allProducts">
            
    {data.map((ele)=>{
        // console.log("filteredcategory",ele)
        return(
            <div key={ele.id}>
            <Link to={`/products/${ele.id}`}>
           <div className="products" key={ele.id}>
                <div className="products_div" >
                <img src={ele.image} alt="" /> <br />
                <h5>{ele.title}</h5>
                <h3>Price : ${ele.price}</h3> <br />
                {/* {ele.description} */}
                

            </div>
           </div>
           </Link>
           </div>
        )
    })}
        </div>
        </>
    )
}




