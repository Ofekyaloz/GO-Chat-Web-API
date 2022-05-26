import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import './SignUp.css';
import logo from "../Pictures/logo.png";
import $ from "jquery";

function SignIn({setNickname, setUsername, setPhoto, setToken}) {
    const [details, setDetails] = useState({username: "", password: ""});
    let navigate = useNavigate();

    const submitHandler = e => {
        e.preventDefault();

        $.ajax({
            url: 'https://localhost:7265/api/Users/Login',
            type: 'POST',
            contentType: "application/json",
            data: JSON.stringify({
                username: details.username,
                password: details.password
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
                document.getElementById('errorInSignIn').style.display = 'block';
            }
        })
    }

    return (
        <>
            <div className={"container"}>
                <div className={"forms-container"}>
                    <div className={"signin-signup"}>
                        <form onSubmit={submitHandler} className="g-3 paddingUp">
                            <h2 className={"title"}>Sign in to GoChat</h2>

                            <div id="errorInSignIn" className="errors alert alert-danger align-items-center"
                                 role="alert">
                                <div>
                                    <i className="bi bi-exclamation-circle m-2"/>
                                    Username or password wrong!
                                </div>
                            </div>

                            <div className="input-field">
                                <i className="bi bi-person-fill"/>
                                <input type="text" className="form-control" placeholder={"Username"}
                                       onChange={e => setDetails({...details, username: e.target.value})}
                                       value={details.username} required/>
                            </div>
                            <div className="input-field">
                                <i className="bi bi-lock-fill"/>
                                <input type="password" className="form-control" placeholder={"Password"}
                                       onChange={e => setDetails({...details, password: e.target.value})}
                                       value={details.password} autoComplete={"false"} required/>
                            </div>

                            <div className="checkbox">
                                <input type={"checkbox"} value={"remember-me"} id={"CheckRemember"}/>
                                <label className={"littlePaddingFromLeft fontSize"} id={"Remember"}>Remember me</label>
                            </div>
                            <button type="submit" className="btn btn-forms">Log In</button>
                            <div className={"col-md-12"}>
                                <a href="#" className="GeneralButtons btn btn-secondary col-6 leftSide fontSize"> Forgot password? </a>
                                <Link to={"/SignUp"} className="GeneralButtons btn btn-success col-6 rightSide fontSize"> Sign up </Link>
                            </div>
                            <a href="http://localhost:5178/" type="button" className="GeneralButtons btn btn-info">Enjoy
                                our chat? Let us know!</a>

                            <p className={"social-text"}>Or sign in with social media</p>
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
        </>
    )

}

export default SignIn;