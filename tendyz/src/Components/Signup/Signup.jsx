import "./Signup.css";
import React from "react";
import {useState} from "react";
import { useNavigate } from "react-router";
import axios from "axios";

export const Signup = ()=>{

    const [user, setUser] =useState({name:"",email:"",password:"",});
    const navigate= useNavigate();
    const handleChange= (e) =>{
        const {id,value} = e.target;
        setUser({...user,[id]:value});
    }
    const [register,setRegister] = useState(false)
    if(register){
        navigate('/login')
    }
    const handleClick = (e) =>{
        e.preventDefault();
        alert("register successful");
        navigate("/login")
        console.log(user)
        setRegister(false);
        axios.post(`https://tendyz-data.herokuapp.com/register`,user).then((res)=>{
            console.log(res.data)
            alert("register successful");
            setRegister(true)
        }).catch((err)=>{
            console.log(err)
        })
    }
    return(
        <>
        <div className="signup_div">
            
            <div className="left">
                <img src="https://imgs.search.brave.com/YuRxNR8gOm_6JO5lzWc8q6UsJYNZ6ik5wo5Y59DpIlU/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC44/N0E1Q2dKNE91Q2VR/VkxNYzBvQ3BRSGFI/YSZwaWQ9QXBp" alt="" />
            </div>
    
        
        <div className="right">
            <form onSubmit={handleClick}>
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" onChange={handleChange} />
                    <br /> <br />
                    <label htmlFor="">Email Adress </label>
                    <input type="text" onChange={handleChange} />
                    <br /> <br />
                    <label htmlFor="">Password </label>
                    <input type="text"  onChange={handleChange}/>

                </div>
                <input type="submit"/>
            </form>
        </div>
        </div>
        </>
    )

    
}


