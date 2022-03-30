function SignIn() {
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <h1>Log Into GoChat</h1>
                    <form>
                        <div className="mb-3">
                            <input type="email" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp" placeholder={"Email address"}></input>
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" id="exampleInputPassword1"
                                   placeholder={"Password"}></input>
                        </div>
                        <div className="d-grid gap-2 col-12 mx-auto">
                            <button type="submit" className="btn btn-primary">Log In</button>
                        </div>
                        <div className="checkbox mb-3">
                            <label>
                                <input type={"checkbox"} value={"remember-me"}></input> Remember me
                            </label>
                        </div>
                    </form>
                    <div>
                        <a href="#" className="link-primary">
                            <label>Forgot account?</label>
                        </a>
                        <a href="SignUp" className="link-primary">
                            <label>Sign up for GoChat</label>
                        </a>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default SignIn;