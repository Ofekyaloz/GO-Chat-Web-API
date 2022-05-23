import './SignUp.css';
import logo from "../Pictures/logo.png";
import React, {useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import defaultImage from "../Pictures/icon-user-default.png";
import $ from "jquery";

function SignUp({setNickname, setUsername, setPhoto, setToken}) {

    const [details, setDetails] = useState({
        username: "",
        password: "",
        nickname: "",
        email: "",
        image: "",
        passwordAgain: ""
    });

    const photo = useRef("")

    let navigate = useNavigate();

    const submitHandler = async e => {
        e.preventDefault();

        let errors = document.getElementsByClassName('errors');
        for (let i = 0; i < errors.length; i++) {
            errors[i].style.display = 'none';
        }

        if (details.password !== details.passwordAgain) {
            document.getElementById('errorPasswordAgain').style.display = 'block';
            return true;
        }

        if (!/(?=.{8,})/.test(details.password)) {
            document.getElementById('errorLength').style.display = 'block';
            return true;
        }

        if (!/(?=.*[0-9])/.test(details.password)) {
            document.getElementById('errorPasswordNumbers').style.display = 'block';
            return true;
        }

        if (!/(?=.*[A-Z])/.test(details.password)) {
            document.getElementById('errorPasswordUppercase').style.display = 'block';
            return true;
        }

        if (!/(?=.*[a-z])/.test(details.password)) {
            document.getElementById('errorPasswordLowercase').style.display = 'block';
            return true;
        }

        details.image = photo.current.value;
        if (details.image === "") {
            details.image = defaultImage;
        }

        $.ajax({
            url: 'https://localhost:7265/api/Users/Register',
            type: 'POST',
            contentType: "application/json",
            data: JSON.stringify({
                Username: details.username,
                Password: details.password,
                Email: details.email,
                Nickname: details.nickname,
                Photo: " ",
                Contacts: null
            }),
            success: function (data) {
                let tmp = data.split(" ");
                setToken(tmp[0])
                setNickname(tmp[1])
                setPhoto(tmp[2])
                setUsername({
                    username: details.username,
                    password: details.password
                });
                navigate("/Chats");
            },
            error: function () {
                document.getElementById('errorUsername').style.display = 'block';
            }
        })
    }

    return (
        <div className={"container"}>
            <div className={"forms-container"}>
                <div className={"signin-signup"}>
                    <form onSubmit={submitHandler} className="g-3 paddingUp">
                        <h2 className={"title"}>Sign up to GoChat</h2>
                        <div id="errorUsername" className="errors alert alert-danger align-items-center" role="alert">
                            <div>
                                <i className="bi bi-exclamation-circle m-2"/>
                                The username is already exist!
                            </div>
                        </div>
                        <div className={"two-inputs"}>
                            <div className="input-field half-row">
                                <i className="bi bi-person-fill"/>
                                <input type="text" className="form-control" placeholder={"Username"}
                                       onChange={e => setDetails({...details, username: e.target.value})}
                                       value={details.username} required/>
                            </div>
                            <div className="input-field half-row">
                                <i className="bi bi-house-fill"/>
                                <input type="text" className="form-control" placeholder={"Nickname"}
                                       onChange={e => setDetails({...details, nickname: e.target.value})}
                                       value={details.nickname} required/>
                            </div>
                        </div>
                        <div className="input-field">
                            <i className="bi bi-envelope-fill"/>
                            <input type="email" className="form-control" placeholder={"Email"}
                                   onChange={e => setDetails({...details, email: e.target.value})} value={details.email}
                                   ref={photo} required/>
                        </div>

                        <div id="errorLength" className="errors alert alert-danger align-items-center" role="alert">
                            <div>
                                <i className="bi bi-exclamation-circle m-2"/>
                                The password must be 8 characters or longer!
                            </div>
                        </div>
                        <div id="errorPasswordAgain" className="errors alert alert-danger align-items-center"
                             role="alert">
                            <div>
                                <i className="bi bi-exclamation-circle m-2"/>
                                The passwords are different!
                            </div>
                        </div>
                        <div id="errorPasswordNumbers" className="errors alert alert-danger align-items-center"
                             role="alert">
                            <div>
                                <i className="bi bi-exclamation-circle m-2"/>
                                The password must contain at least 1 numeric character!
                            </div>
                        </div>
                        <div id="errorPasswordUppercase" className="errors alert alert-danger align-items-center"
                             role="alert">
                            <div>
                                <i className="bi bi-exclamation-circle m-2"/>
                                The password must contain at least 1 uppercase character!
                            </div>
                        </div>
                        <div id="errorPasswordLowercase" className="errors alert alert-danger align-items-center"
                             role="alert">
                            <div>
                                <i className="bi bi-exclamation-circle m-2"/>
                                The password must contain at least 1 n lowercase character!
                            </div>
                        </div>

                        <div className={"two-inputs"}>
                            <div className="input-field half-row">
                                <i className="bi bi-lock-fill"/>
                                <input type="password" className="form-control" placeholder={"Password"}
                                       onChange={e => setDetails({...details, password: e.target.value})}
                                       value={details.password} required/>
                            </div>
                            <div className="input-field half-row">
                                <i className="bi bi-lock-fill"/>
                                <input type="password" className="form-control" placeholder={"Again"}
                                       onChange={e => setDetails({...details, passwordAgain: e.target.value})}
                                       value={details.passwordAgain} required/>
                            </div>
                        </div>
                        <div className="input-field">
                            <i className="bi bi-person-circle"/>
                            <input type={"file"} className={"form-control upload-box"}
                                   onChange={e => setDetails({...details, image: e.target.value})}
                            /></div>
                        <button type="submit" className="btn btn-forms">Sign up</button>
                        <a href={"/"} className="link-primary fontSize">One of us? Log in here</a>
                        <p className={"social-text"}>Or sign up with social media</p>
                        <div className={"social-media"}>
                            <a href={"#"} className={"social-icon"}>
                                <i className="bi bi-facebook"/>
                            </a>
                            <a href={"#"} className={"social-icon"}>
                                <i className="bi bi-twitter"/>
                            </a>
                            <a href={"#"} className={"social-icon"}>
                                <i className="bi bi-google"/>
                            </a>
                            <a href={"#"} className={"social-icon"}>
                                <i className="bi bi-linkedin"/>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
            <img src={logo} id={"logo"}/>
        </div>
    );
}

export default SignUp;