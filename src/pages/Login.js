import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import '../App.css'

function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

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
                    label="Password"
                    type="password"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}

                />
            </div>
            <a href="/forgotpassword">Forgot password?</a>
            <div class="row" style={{ paddingTop: "1em" }}>
                <Button variant="contained" color="primary">Log in</Button>
            </div>

        </div>
    );
}

export default Login;
