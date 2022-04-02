import './SignUp.css';
import logo from "./Pictures/logo.png";

function SignUp() {
    return (
        <div>
            <div className={"formContainer"}>
                <label>Sign up to GoChat</label>
                <form className="row g-3 paddingUp">
                    <div className="col-6">
                        <input type="text" className="form-control" id="inputUsername4"
                               placeholder={"Username"} required></input>
                    </div>
                    <div className="col-6">
                        <input type="text" className="form-control" id="inputNickname4"
                               placeholder={"Nickname"} required></input>
                    </div>
                    <div className="col-12">
                        <input type="email" className="form-control" id="inputEmail4" placeholder={"Email"}
                               required></input>
                    </div>
                    <div className="col-6">
                        <input type="password" className="form-control" id="inputPassword4"
                               placeholder={"Password"} required></input>
                    </div>
                    <div className="col-6">
                        <input type="password" className="form-control" idf="inputPasswordAgain"
                               placeholder={"Password again"} required></input>
                    </div>
                    <div className="col-12 paddingUp">
                        <div className={"col-6"}>
                            <a href={"/"} className="link-primary col-6 leftSide fontSize">Sign in</a>
                        </div>
                        <div className={"col-6 rightSide"}>
                            <button type="submit" className="btn btn-primary rightSide col-6">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;