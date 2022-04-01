import {useState} from "react";
import {useHistory, useNavigate} from "react-router-dom";

function SignIn({Login, error}) {
    const [details, setDetails] = useState({username: "", password: ""});
    let navigate = useNavigate();

    const submitHandler = e => {
        e.preventDefault();
        let isLoggedIn = Login(details);
        if(isLoggedIn)
            navigate("/Chats");
    }

    return (
        <div className="App">
            <header className="App-header">
                <div className={"col-3 niceBorder"}>
                    <label>Sign in to GoChat</label>
                    <form onSubmit={submitHandler}>
                        <div className="mb-3 paddingUp">
                            <input type="username" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp" placeholder={"Username"}
                                   onChange={e => setDetails({...details, username: e.target.value})}
                                   value={details.username}></input>
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" id="exampleInputPassword1"
                                   placeholder={"Password"}
                                   onChange={e => setDetails({...details, password: e.target.value})}
                                   value={details.password}></input>
                        </div>
                        <div className="checkbox mb-3">
                            <input type={"checkbox"} value={"remember-me"}></input>
                            <label className={"littlePaddingFromLeft fontSize"}>Remember me</label>
                        </div>
                        <div className="d-grid gap-2 col-12 mx-auto">
                            <button type="submit" className="btn btn-primary">Log In</button>
                        </div>
                    </form>
                    <div className={"paddingUp col-12"}>
                        <a href="#" className="link-primary col-6 leftSide">
                            <label className={"fontSize"}>Forgot account?</label>
                        </a>
                        <a href="SignUp" className="link-primary col-6 rightSide">
                            <label className={"fontSize"}>Sign up for GoChat</label>
                        </a>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default SignIn;