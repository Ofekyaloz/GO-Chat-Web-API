import './SignUp.css';

function SignUp() {
    return (
        <div className="App">
            <header className="App-header">
                <div className={"col-3"}>
                    <label>Sign up to GoChat</label>
                    <form className="row g-3 paddingUp">
                        <div className="col-md-6">
                            <input type="text" className="form-control" id="inputUsername4"
                                   placeholder={"Username"} required></input>
                        </div>
                        <div className="col-md-6">
                            <input type="text" className="form-control" id="inputNickname4"
                                   placeholder={"Nickname"} required></input>
                        </div>
                        <div className="col-md-12">
                            <input type="email" className="form-control" id="inputEmail4" placeholder={"Email"}
                                   required></input>
                        </div>
                        <div className="col-md-6">
                            <input type="password" className="form-control" id="inputPassword4"
                                   placeholder={"Password"} required></input>
                        </div>
                        <div className="col-md-6">
                            <input type="password" className="form-control" id="inputPasswordAgain"
                                   placeholder={"Password again"} required></input>
                        </div>
                        <div className="col-md-12 paddingUp">
                            <div className={"col-6"}>
                                <a href={"/"} className="link-primary col-6 leftSide">Sign in</a>
                            </div>
                            <div className={"col-6"}>
                                <button type="submit" className="btn btn-primary rightSide">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </header>
        </div>
    );
}

export default SignUp;