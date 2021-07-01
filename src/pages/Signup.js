import React, { useState } from 'react';
import { TextField, Button, Checkbox } from '@material-ui/core';
import '../App.css'
import { SHA256 } from 'crypto-js';

function Login() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [checked, setChecked] = useState(false);

    return (
        <div class="container" style={{ marginTop: "30vh" }}>
            <div class="row">
                <b style={{fontSize: "20px"}}>Sign up</b>
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
                    label="E-mail"
                    type="email"
                    onChange={(e) => {
                        setEmail(e.target.value);
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
                    label="Password"
                    type="password"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}

                />
            </div>
            <div class="row" style={{paddingTop:"0.5em"}}><Checkbox checked={checked} onClick={()=>{
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
                By signing up, you agree to the <a href="/tos">Terms of Service</a> and  <a href="/tos">Privacy Policy</a>.
            </div>  
            <div class="row" style={{paddingTop: "1em"}}>
                <Button variant="contained" color="primary" onClick={()=>{
                    if (checked){
                        localStorage.setItem("password", password);
                        localStorage.setItem("name", userName);
                    }
                    const encryptedPassword = SHA256(password).toString();
  
                }}>Sign up</Button>
            </div>
            <div class="row" style={{ paddingTop: "1em" }}>
                Have an account? <a href="/signup">Log in!</a>
            </div>  
        </div>
    );
}

export default Login;
