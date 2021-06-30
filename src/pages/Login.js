import React, { useState } from 'react';
import { TextField, Button, Checkbox } from '@material-ui/core';
import '../App.css'

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
        <div class="container" style={{ marginTop: "35vh" }}>
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
