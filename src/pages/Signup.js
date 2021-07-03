import React, { useState } from 'react';
import { TextField, Button, Checkbox } from '@material-ui/core';
import '../App.css'
import { SHA256 } from 'crypto-js';
import axios from 'axios';

function Login() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [checked, setChecked] = useState(false);

    function signUpClick(){
        if (checked){
            localStorage.setItem("password", password);
            localStorage.setItem("name", userName);
        }
        const encryptedPassword = SHA256(password).toString();
        const params = {username: userName, password: encryptedPassword, email: email}
        axios.post('http://localhost:8080/api/auth/register', {params})
        .then(function (response) {
            if (response.data.errorDto) {
                // toast.error(response.data.errorDto.description)
                console.log("signed up")
            } else {
                // toast.info("giriş başarılı")
                console.log("damn")
            }
        })
    }

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
                <Button variant="contained" color="primary" onClick={signUpClick}>Sign up</Button>
            </div>
            <div class="row" style={{ paddingTop: "1em" }}>
                Have an account? <a href="/login">Log in!</a>
            </div>  
        </div>
    );
}

export default Login;
