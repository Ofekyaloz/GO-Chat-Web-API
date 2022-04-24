import React, {useState} from "react";
import {useHistory, useNavigate} from "react-router-dom";
import './SignUp.css';
import logo from "./Pictures/logo.png";
import {myMap} from "./App";

function SignIn({Login, error}) {
    const [details, setDetails] = useState({username: "", password: ""});
    let navigate = useNavigate();

    const submitHandler = e => {
        e.preventDefault();
        let isLoggedIn = Login(details);
        if (isLoggedIn)
            navigate("/Chats");
        else {
            console.log("aaaa");
            document.getElementById('errorInSignIn').style.display = 'block';
        }
    }

    return (
        <>
            <div className={"container"}>
                <div className={"forms-container"}>
                    <div className={"signin-signup"}>
                        <form onSubmit={submitHandler} className="g-3 paddingUp">
                            <h2 className={"title"}>Sign in to GoChat</h2>

                            <div id="errorInSignIn" className="errors alert alert-danger align-items-center" role="alert">
                                <div>
                                    <i className="bi bi-exclamation-circle m-2"/>
                                    Username or password wrong!
                                </div>
                            </div>

                            <div className="input-field">
                                <i className="bi bi-person-fill"></i>
                                <input type="text" className="form-control" placeholder={"Username"}
                                       onChange={e => setDetails({...details, username: e.target.value})}
                                       value={details.username} required></input>
                            </div>
                            <div className="input-field">
                                <i className="bi bi-lock-fill"></i>
                                <input type="password" className="form-control" placeholder={"Password"}
                                       onChange={e => setDetails({...details, password: e.target.value})}
                                       value={details.password} required></input>
                            </div>
                            <div className="checkbox">
                                <input type={"checkbox"} value={"remember-me"} id={"CheckRemember"}></input>
                                <label className={"littlePaddingFromLeft fontSize"} id={"Remember"}>Remember me</label>
                            </div>
                            <button type="submit" className="btn btn-forms">Log In</button>
                            <div className={"col-md-12"}>
                                <a href="#" className="link-primary col-6 leftSide fontSize">Forgot password?</a>
                                <a href="/SignUp" className="link-primary col-6 rightSide fontSize">Sign up for
                                    GoChat</a>
                            </div>
                            <p className={"social-text"}>Or sign in with social media</p>
                            <div className={"social-media"}>
                                <a href={"#"} className={"social-icon"}>
                                    <i className="bi bi-facebook"></i>
                                </a>
                                <a href={"#"} className={"social-icon"}>
                                    <i className="bi bi-twitter"></i>
                                </a>
                                <a href={"#"} className={"social-icon"}>
                                    <i className="bi bi-google"></i>
                                </a>
                                <a href={"#"} className={"social-icon"}>
                                    <i className="bi bi-linkedin"></i>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
                <img src={logo} id={"logo"}></img>
            </div>
        </>
    )

}

export default SignIn;