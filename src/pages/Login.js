import React, { useState } from 'react';
import { TextField, Button, Checkbox } from '@material-ui/core';
import '../App.css'
import { SHA256 } from 'crypto-js';
import axios from 'axios';

function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const rememberMe = localStorage.getItem("remember");
    
    const [checked, setChecked] = useState(rememberMe == "yes"? true: false);
    let defaultName = "";
    let defaultPass = "";

    if (rememberMe){
        defaultName = localStorage.getItem("name");
        defaultPass = localStorage.getItem("password");
    }

    return (
        <div class="container" style={{ marginTop: "30vh" }}>
            <div class="row">
                <b style={{fontSize: "20px"}}>Log in</b>
            </div>
            <div class="row">
                <TextField
                    inputProps={{
                        autocomplete: 'new-password',
                        form: {
                            autocomplete: 'off',
                        },
                    }}
                    color="primary"
                    margin="dense"
                    id="name"
                    defaultValue={defaultName}
                    label="Username"
                    type="email"
                    onChange={(e) => {
                        setUserName(e.target.value);
                    }}
                    style={{ color: "blue" }}
                />
            </div>
            <div class="row">
                <TextField
                    inputProps={{
                        autocomplete: 'new-password',
                        form: {
                            autocomplete: 'off',
                        },
                    }}
                    color="primary"
                    margin="dense"
                    id="name"
                    defaultValue={defaultPass}
                    label="Password"
                    type="password"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}

                />
            </div>
            <div class="row"><Checkbox checked={checked} onClick={()=>{
                if (checked){
                    setChecked(false);
                    localStorage.setItem("remember", "no");
                }
                else{
                    setChecked(true);
                    localStorage.setItem("remember", "yes");
                }
                }} color="primary"/>Remember me</div>
            <div class="row" >
                <Button variant="contained" color="primary" onClick={()=>{
                    if (checked){
                        localStorage.setItem("password", password);
                        localStorage.setItem("name", userName);
                    }
                    const encryptedPassword = SHA256(password).toString();
                    const params = { userName: userName, password: password};
                        axios.post('http://localhost:8080/api/auth/login', params)
                        .then(function (response) {
                            console.log(response.data);
        
                        })
                }}>Log in</Button>
            </div>
            <div class="row" style={{ paddingTop: "0.5em" }}>
                Don't have an account? <a href="/signup">Sign up!</a>
            </div>
            <div class="row" style={{ paddingTop: "0.5em" }}>
                <a href="/forgotpassword">Forgot password?</a>
            </div>
            
            

        </div>
    );
}

export default Login;
