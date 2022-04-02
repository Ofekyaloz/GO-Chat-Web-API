import {useState} from "react";
import {useHistory, useNavigate} from "react-router-dom";
import './SignUp.css';

function SignIn({Login, error}) {
    const [details, setDetails] = useState({username: "", password: ""});
    let navigate = useNavigate();

    const submitHandler = e => {
        e.preventDefault();
        let isLoggedIn = Login(details);
        if (isLoggedIn)
            navigate("/Chats");
    }

    return (
        <div>
            <div className={"formContainer"}>
                <label>Sign in to GoChat</label>
                <form onSubmit={submitHandler} className="row g-3 paddingUp">
                    <div className="col-12">
                        <input type="username" className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp" placeholder={"Username"}
                               onChange={e => setDetails({...details, username: e.target.value})}
                               value={details.username}></input>
                    </div>
                    <div className="col-12">
                        <input type="password" className="form-control" id="exampleInputPassword1"
                               placeholder={"Password"}
                               onChange={e => setDetails({...details, password: e.target.value})}
                               value={details.password}></input>
                    </div>
                    <div className="checkbox">
                        <input type={"checkbox"} value={"remember-me"} id={"CheckRemember"}></input>
                        <label className={"littlePaddingFromLeft fontSize"} id={"Remember"}>Remember me</label>
                    </div>
                    <div className="d-grid gap-2 col-12 mx-auto">
                        <button type="submit" className="btn btn-primary">Log In</button>
                    </div>
                </form>
                <div className={"paddingUp col-md-12"}>
                    <a href="#" className="link-primary col-6 leftSide">
                        <label className={"fontSize"}>Forgot password?</label>
                    </a>
                    <a href="SignUp" className="link-primary col-6 rightSide">
                        <label className={"fontSize"}>Sign up for GoChat</label>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SignIn;