import { useState } from "react";
import React from "react";
import axios from "axios";

const SignUp = ()=>{
    const [name,setName] = useState("");
    const [email,setEmai] = useState("");
    const [password,setPassword] = useState("");
    const getData= async ()=>{
        console.log(name,email,password);
        const result = await fetch('http://localhost:5000/register',{
            method:'POST',
            body:JSON.stringify({ name, email , password}),
            headers:{
                'Content-Type':'application/json'
            },
        });
        let data = await result.json();
        console.log(data);
    }
    return(
        <div className="div-register">
            <fieldset>
            <legend >Register Page</legend>
            <h1>Register</h1>
            <label className="labelRegister">Enter Your Name:</label>
            <input type="text" className="inputBox" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your Name"/>
            <label className="labelRegister">Enter your E-mail:</label>
            <input type="Email" className="inputBox" value={email} onChange={(e)=>setEmai(e.target.value)} placeholder="Enter your Mail" />
            <label className="labelRegister">Enter Password:</label>
            <input type="Password" className="inputBox" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" />
            <button onClick={getData} className="register">SignUp</button>
            
            </fieldset>
        </div>
    )
}
export default SignUp;