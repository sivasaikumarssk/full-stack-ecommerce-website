import { Link } from "react-router-dom"
import { useSelector,useDispatch } from "react-redux";
import { addProduct } from "../../Redux/Action";
import { useState } from "react";
export const Buttons = () =>{
  const [data,setData] = useState([])
  const allProducts = useSelector((state)=> state.allProd.product);
// console.log("mine",data)
const dispatch = useDispatch();

const handleChangeSort = (key, value = 1) => {
    if (value === 1) {
      allProducts.sort((a, b) => a[key] - b[key])
      setData([...data]);
      console.log("data,",allProducts)
      // dispatch(addProduct(data))
    }
    else {
      allProducts.sort((a, b) => b[key] - a[key])
      setData([...data]);
      // console.log("data,",data)
      // dispatch(addProduct(data))
    }
  }


    return(
        <>
        <Link to={`/clothing`}><button >All</button></Link>
        <Link to={`/products/category/men's clothing`}><button >Mens</button></Link>
        <Link to={`/products/category/women's clothing`}><button >Womens</button></Link>
        <Link to={`/products/category/jewelery`}><button >Jewelery</button></Link>
        <Link to={`/products/category/electronics`}><button >Electronics</button></Link>
       

        <div>

            Price<button onClick={() => {
            handleChangeSort("price")
          }}>Low - High</button>

            Price <button onClick={() => {
          handleChangeSort("price",-1)
        }}>High - Low</button>
        
        </div>
        
        
        </>
    )
}