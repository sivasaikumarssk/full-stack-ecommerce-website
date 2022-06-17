import { useNavigate } from "react-router"
import React from "react";
import {useState} from "react";
import axios from "axios";
import "./Login.css"


export const Login = ()=>{
    const navigate = useNavigate();
    const [login,setLogin] = useState(false);
    if(login){
        navigate("/")
    }
    const [user,setUser] = useState({
        email:"",password:""
    });
    
    const handleChange = (e) =>{
        const {id,value} = e.target;
        setUser({
            ...user,[id]:value
        })
    }


    const handleClick = (e) =>{
        e.preventDefault();
        setLogin(false);
        alert("Login Sucessful");
        navigate("/")
        axios.post("https://tendyz-data.herokuapp.com/login",user).then((res) => {
            console.log("res",res);
            setUser(res.data.user);
            localStorage.setItem("user",JSON.stringify(res.data.user));
            setLogin(true)
            alert("Login Sucessful");
        }).catch((err) =>{
            console.log(err);
        })
    }
    return(
        <div className="login_div">
            <div className="left">
                <img src="https://imgs.search.brave.com/1Uj-Hf4D7WgvpaTv0m3hkl0w2ElPbgJ3ZV4ikrugRRc/rs:fit:736:225:1/g:ce/aHR0cHM6Ly90c2U0/LmV4cGxpY2l0LmJp/bmcubmV0L3RoP2lk/PU9JUC5ETUFzNm9h/VjEyeVR0dzNhRnNo/d2x3SGFFeCZwaWQ9/QXBp" alt="" />
            </div>
            <div className="right">
                <form action="" onSubmit={handleClick}>
                <label htmlFor="" >Email </label>
                <input type="email"   onChange={handleChange}/>

                <label htmlFor="">Password</label>
                <input type="password"  onChange={handleChange}  />
            
            
            
            
                <button onClick={handleClick}>Login</button>
                </form>
            </div>

        </div>
        
    )
    
}