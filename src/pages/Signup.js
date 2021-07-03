import React, { useState } from 'react';
import { TextField, Button, Checkbox } from '@material-ui/core';
import '../App.css'
import { SHA256 } from 'crypto-js';
import axios from 'axios';
import Keys from '../vars/emailkey';
import emailjs from 'emailjs-com';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom'; 

function Login() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checked, setChecked] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [registrationCode, setRegistrationCode] = useState("");
    const [inputRegistrationCode, setInputRegistrationCode] = useState("");
    const history = useHistory();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        if (inputRegistrationCode == registrationCode){
            setOpen(false);
            if (checked){
                localStorage.setItem("password", password);
                localStorage.setItem("name", userName);
            }
            const encryptedPassword = SHA256(password).toString();
            try{    
                const params = {username: userName, password: encryptedPassword, email: email}
                axios.post('http://localhost:8080/api/auth/register', {params})
                .then(function (response) {
                    if (response.data.errorDto) {
                        toast.error(response.data.errorDto.description);
                    } else {
                        toast.success("Sign up successful! You will be forwarded to the home page shortly.");
                        setTimeout(() => {
                            history.push("/");
                        }, 5000);
                    }
                })
                
            }catch(ex){
                toast.error("Cannot connect to the servers right now. Please try again later.");
            }   
        }
        else{
            toast.error("Code you just entered is wrong!");
        }
    };

    function signUpClick() {
        if (password.length < 8){
            toast.warn("Password should not be less than 8 characters!");
            return;
        }
        const code = makecode(5);
        setRegistrationCode(code);
        const variables = { to_name: userName, code: code, target: email };
        emailjs.send('corbacorba', Keys.TEMPLATE_ID, variables, Keys.USER_ID).then(res => { console.log("success") });
        handleClickOpen();
        
    }

    function makecode(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
    }

    return (
        <div class="container" style={{ marginTop: "30vh" }}>
            <div class="row">
                <b style={{ fontSize: "20px" }}>Sign up</b>
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
            <div class="row" style={{ paddingTop: "0.5em" }}><Checkbox checked={checked} onClick={() => {
                if (checked) {
                    setChecked(false);
                    localStorage.setItem("remember", "no");
                }
                else {
                    setChecked(true);
                    localStorage.setItem("remember", "yes");
                }
            }} color="primary" />Remember me</div>
            <div class="row" >
                By signing up, you agree to the <a href="/tos">Terms of Service</a> and  <a href="/tos">Privacy Policy</a>.
            </div>
            <div class="row" style={{ paddingTop: "1em" }}>
                <Button variant="contained" color="primary" onClick={signUpClick}>Sign up</Button>
            </div>
            <div class="row" style={{ paddingTop: "1em" }}>
                Have an account? <a href="/login">Log in!</a>
            </div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Authentication</DialogTitle>
                <div class="container">
                    <div class="row" style={{paddingLeft: "1.4em", paddingRight: "1.4em"}}>
                        Please enter the code we just sent you.
                    </div>
                    <div class="row" style={{paddingLeft: "1.4em", paddingRight: "1.4em", textAlign:"center"}}>
                        <TextField
                            inputProps={{
                                autocomplete: 'new-password',
                                form: {
                                    autocomplete: 'off',
                                },
                                maxLength: 5
                            }}
                            color="primary"
                            margin="dense"
                            id="name"
                            label="Code"
                            type="email"
                            onChange={(e) => {
                                setInputRegistrationCode(e.target.value);
                            }}

                        />
                    </div>


                </div>

                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
            <ToastContainer/>
        </div>
    );
}

export default Login;
