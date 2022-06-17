import React, { useEffect, useState } from "react";
import axios from "axios";
import "./clothing.css";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { addProduct } from "../../Redux/Action";
import { Buttons } from "./FilterSortButtons";


export const Clothing = ()=>{
        const allProducts = useSelector((state)=> state.allProd.product);
        const [data,setData] = useState([])
        // const[filterPrice,setFilterPrice] = useState("ASC")
       
        const dispatch = useDispatch();
        const dataProducts = async ()=>{
       const response = await 
       axios.get("https://tendyz-data.herokuapp.com/product")
       .catch((err) =>{

           console.log("error",err);
       });
    //    console.log("res",response)
       dispatch(addProduct(response.data))
   }

   const handleChangeSort = (key, value = 1) => {
    if (value === 1) {
      allProducts.sort((a, b) => a[key] - b[key])
      setData([...data]);
      // console.log("data,",allProducts)
      // dispatch(addProduct(data))
    }
    else {
      allProducts.sort((a, b) => b[key] - a[key])
      setData([...data]);
      // console.log("data,",data)
      // dispatch(addProduct(data))
    }
  }
   
    useEffect(()=>{
            dataProducts();  
    },[]);
    
    const priceArr =JSON.parse(localStorage.getItem("sortedArrbyPrice"))||[];

   
    
    const finalProducts = allProducts.map((ele)=>{
        priceArr.push(ele);
        // console.log(ele)
        return(
            <div >
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
    })

    return(
        <>
        <Link to={`/clothing`}><button >All</button></Link>
        <Link to={`/products/category/men's clothing`}><button >Mens</button></Link>
        <Link to={`/products/category/women's clothing`}><button >Womens</button></Link>
        <Link to={`/products/category/jewelery`}><button >Jewelery</button></Link>

        <div>

            Price<button onClick={() => {
            handleChangeSort("price")
          }}>Low - High</button>

            Price <button onClick={() => {
          handleChangeSort("price",-1)
        }}>High - Low</button>
        
        </div>
        
        
    
        <div className="allProducts">
          
        {finalProducts}
        </div>    
           
           
        
        </>
    )






}
