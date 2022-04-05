import './SignUp.css';
import logo from "./Pictures/logo.png";
import {myMap} from "./App";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function SignUp({Register}) {

    const [details, setDetails] = useState({
        username: "",
        password: "",
        nickname: "",
        email: "",
        image: "",
        passwordAgain: ""
    });
    let navigate = useNavigate();

    const submitHandler = e => {
        e.preventDefault();

        let isExist = Register(details);
        if (!isExist)
            navigate("/");
    }

    return (
        <div className={"formContainer row align-self-center"}>
            <div className={"col-6"}>
                <label>Sign up to GoChat</label>
                <form onSubmit={submitHandler} className="row g-3 paddingUp">
                    <div className="col-6">
                        <input type="text" className="form-control" id="inputUsername4"
                               placeholder={"Username"}
                               onChange={e => setDetails({...details, username: e.target.value})}
                               value={details.username} required></input>
                    </div>
                    <div className="col-6">
                        <input type="text" className="form-control" id="inputNickname4"
                               placeholder={"Nickname"}
                               onChange={e => setDetails({...details, nickname: e.target.value})}
                               value={details.nickname} required></input>
                    </div>
                    <div className="col-12">
                        <input type="email" className="form-control" id="inputEmail4" placeholder={"Email"}
                               onChange={e => setDetails({...details, email: e.target.value})}
                               value={details.email}
                               required></input>
                    </div>
                    <div className="col-6">
                        <input type="password" className="form-control" id="inputPassword4"
                               placeholder={"Password"}
                               onChange={e => setDetails({...details, password: e.target.value})}
                               value={details.password} required></input>
                    </div>
                    <div className="col-6">
                        <input type="password" className="form-control" id="inputPasswordAgain"
                               placeholder={"Password again"}
                               onChange={e => setDetails({...details, passwordAgain: e.target.value})}
                               value={details.passwordAgain} required></input>
                    </div>
                    <div><input type={"file"} className={"form-control"} id={"inputImage"}
                                onChange={e => setDetails({...details, image: e.target.value})}
                                value={details.image}></input></div>
                    <div className="col-12">
                        <div className={"col-6"}>
                            <a href={"/"} className="link-primary col-6 leftSide fontSize">Sign in</a>
                        </div>
                        <div className={"col-6 rightSide"}>
                            <button type="submit" className="btn btn-primary rightSide col-6">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className={"col-6"}>
                <img src={logo} id={"logo"}></img>
            </div>
        </div>
    );
}

export default SignUp;